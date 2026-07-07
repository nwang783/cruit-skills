# Cruit Skills

Canonical skill source lives here. Do not duplicate skill files under `apps/web/` or
`company/`.

Install with the skills CLI:

```sh
npx skills@latest add nwang783/cruit-skills --skill cruit-candidate --global --agent AGENT_ID --yes
npx skills@latest add nwang783/cruit-skills --skill cruit-company --global --agent AGENT_ID --yes
```

Replace `AGENT_ID` with the Skills CLI id for the agent running the install.

GitHub Actions syncs this folder to `nwang783/cruit-skills` on main-branch changes.

Candidate scripts:

- `cruit-candidate/scripts/scrub-transcript.mjs` redacts local transcript excerpts before
  evidence-packet submission.

TODO: add a larger redaction fixture suite covering real Claude Code, Codex, Cursor, and
Paxel-like transcript shapes before broad candidate rollout.
