#!/usr/bin/env node
import { readFile } from "node:fs/promises";
import assert from "node:assert/strict";

export function scrubSensitiveText(text) {
  return String(text)
    .replace(/-----BEGIN [A-Z ]*PRIVATE KEY-----[\s\S]*?-----END [A-Z ]*PRIVATE KEY-----/g, "[redacted private key]")
    .replace(/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/gi, "[redacted email]")
    .replace(/\b(?:\+?1[-.\s]?)?(?:\(?\d{3}\)?[-.\s]?)\d{3}[-.\s]?\d{4}\b/g, "[redacted phone]")
    .replace(/https?:\/\/[^\s)>\]]+/gi, "[redacted url]")
    .replace(/\bAKIA[0-9A-Z]{16}\b/g, "[redacted aws key]")
    .replace(/\b(?:sk-[A-Za-z0-9_-]{8,}|(?:sk|pk|rk|ghp|gho|ghu|github_pat)_[A-Za-z0-9_=-]{8,})\b/g, "[redacted token]")
    .replace(
      /\b([A-Z0-9_]*(?:API[_-]?KEY|TOKEN|PASSWORD|SECRET|AUTHORIZATION))\s*[:=]\s*['"]?[^'"\s]+/gi,
      "$1=[redacted]",
    )
    .replace(
      /(^|[^A-Za-z0-9_./+=-])(?=[A-Za-z0-9_./+=-]{32,}(?:$|[^A-Za-z0-9_./+=-]))(?=[A-Za-z0-9_./+=-]*[A-Za-z])(?=[A-Za-z0-9_./+=-]*\d)([A-Za-z0-9_./+=-]{32,})/g,
      "$1[redacted long token]",
    );
}

async function readStdin() {
  let text = "";
  process.stdin.setEncoding("utf8");
  for await (const chunk of process.stdin) text += chunk;
  return text;
}

function selfTest() {
  const scrubbed = scrubSensitiveText([
    "maya@example.com",
    "+1 (415) 555-1212",
    "https://internal.example.com/path?token=secret",
    "OPENAI_API_KEY=sk-test-secret",
    "AWS_ACCESS_KEY_ID=AKIA1234567890ABCDEF",
    "password: hunter2",
    "-----BEGIN PRIVATE KEY-----\nsecret\n-----END PRIVATE KEY-----",
    "opaque=abc1234567890def1234567890ghi123456",
  ].join("\n"));
  for (const leaked of ["maya@example.com", "555-1212", "internal.example.com", "sk-test-secret", "hunter2", "abc1234567890def"]) {
    assert(!scrubbed.includes(leaked), `leaked ${leaked}`);
  }
  assert(scrubbed.includes("[redacted long token]"));
}

if (process.argv.includes("--self-test")) {
  selfTest();
  console.log("scrub-transcript self-test passed");
} else {
  const files = process.argv.slice(2);
  const text = files.length
    ? (await Promise.all(files.map((file) => readFile(file, "utf8")))).join("\n")
    : await readStdin();
  process.stdout.write(scrubSensitiveText(text));
}
