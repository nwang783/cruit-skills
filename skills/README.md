# Cruit Skills

Canonical skill source lives here. Do not duplicate skill files under `apps/web/` or
`company/`.

Install with the skills CLI:

```sh
npx skills@latest add nwang783/cruit-skills
npx skills@latest add nwang783/cruit-skills@cruit-candidate
npx skills@latest add nwang783/cruit-skills@cruit-company
```

GitHub Actions syncs this folder to `nwang783/cruit-skills` on main-branch changes.

Candidate scripts:

- `cruit-candidate/scripts/scrub-transcript.mjs` redacts local transcript excerpts before
  evidence-packet submission.

Use `--full-depth` when installing; nested skill assets power transcript scrubbing and
evidence submission.

TODO: add a larger redaction fixture suite covering real Claude Code, Codex, Cursor, and
Paxel-like transcript shapes before broad candidate rollout.
