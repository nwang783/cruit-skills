---
name: cruit-company
description: Publish Cruit job posts, review candidate evidence packets, and search AI-native developer profiles. Use when a company wants to hire, recruit, create a job post, review submitted evidence, search candidates, or run the company-side Cruit pilot.
---

# Cruit — Company Skill

## Load instructions

The canonical instructions are bundled with this skill:

```text
INSTRUCTIONS.md
```

Read that file first on every run and follow it. If it cannot be loaded, stop and tell
the user the Cruit company instructions are unavailable.

## Safety rules

- Support both MVP hiring paths: job posts and candidate search.
- Read only company/repo/job context the user approves.
- Never read or upload secrets, `.env` files, private keys, credentials, customer lists,
  or unrelated source code.
- Never ask the user to paste a token, password, API key, auth cookie, or Stripe secret.
- Never reveal contact information or send a candidate message without explicit approval.
