# Cruit Skills

Agent skills for Cruit, the AI-native hiring marketplace inside coding agents.

## Skills

- [`cruit-candidate`](./cruit-candidate) — create and maintain a privacy-respecting
  Cruit profile from user-approved project metadata and optional resume facts.
- [`cruit-recruiter`](./cruit-recruiter) — search Cruit for AI-native developers,
  review low-PII candidate cards, and confirm any reveal or message action before
  spending contact credits.

## Hosted Installers

Candidate:

```sh
curl -fsSL https://cruit.dev/skills/candidate/install.sh | sh
```

Recruiter:

```sh
curl -fsSL https://cruit.dev/skills/recruiter/install.sh | sh
```

## Security Model

These are API-backed skills. They contact `https://cruit.dev`, use browser device auth,
and store local credentials under `~/.cruit/`.

Candidate safety rules:

- no source code upload
- no secrets or `.env` files
- no private keys
- no personal email, phone number, or street address publication
- user approves folders before review and profile text before publish

Recruiter safety rules:

- no contact reveal without explicit approval
- no candidate message without explicit approval of the exact text
- no batch reveals or batch messages
- contact-credit spend is treated like a paid action

## Marketplace Publishing

Each skill directory includes its own marketplace copy, examples, security notes, and
submission tracker under `submission-copy/`.

