# Cruit Skills

Agent skills for Cruit, the AI-native hiring marketplace inside coding agents.

Install all skills:

```sh
npx skills@latest add nwang783/cruit-skills
```

Install one skill:

```sh
npx skills@latest add nwang783/cruit-skills@cruit-candidate
npx skills@latest add nwang783/cruit-skills@cruit-company
```

## Skills

- [`cruit-candidate`](./skills/cruit-candidate) — create and maintain a Cruit
  candidate profile and submit evidence packets.
- [`cruit-company`](./skills/cruit-company) — publish evidence requests, review
  evidence packets, and search AI-native developer profiles.

## Source

The canonical files live in `nwang783/cruit` under `skills/`. GitHub Actions syncs
that folder into this repo on every main-branch skill change.
