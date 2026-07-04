# Cruit Skills

Canonical skill source lives here. Do not duplicate skill files under `apps/web/` or
`company/`.

Install with the skills CLI:

```sh
npx --yes skills add nwang783/cruit --skill cruit-candidate --full-depth -g --copy -y
npx --yes skills add nwang783/cruit --skill cruit-company --full-depth -g --copy -y
```

Candidate scripts:

- `cruit-candidate/scripts/scrub-transcript.mjs` redacts local transcript excerpts before
  evidence-packet submission.

Use `--full-depth` when installing; nested skill assets power transcript scrubbing and
evidence submission.

TODO: add a larger redaction fixture suite covering real Claude Code, Codex, Cursor, and
Paxel-like transcript shapes before broad candidate rollout.
