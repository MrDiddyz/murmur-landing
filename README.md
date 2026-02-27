murmur-core/
  apps/
    web/                  # Next.js (Vercel)
  packages/
    core/                 # shared types, utils, schemas
    agents/               # agent prompts + configs
  system/
    topology.json
    global_state.json
    coordination_log.json
  modules/
    module_A/
      module.yaml
      state.json
    module_B/
      module.yaml
      state.json
  .github/
    workflows/
      ci.yml
      topology-check.yml
  docs/
    decision-log.ndjson
    prompts/
  scripts/
  README.md