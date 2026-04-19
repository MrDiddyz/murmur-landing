const packages = [
  {
    name: "apps/web",
    tag: "Next.js · Vercel",
    desc: "The Murmur dashboard and public API. Deployed on Vercel with edge functions for low-latency agent event streaming.",
    color: "border-violet-500/40 bg-violet-500/5",
    tagColor: "bg-violet-500/20 text-violet-300",
  },
  {
    name: "packages/core",
    tag: "Shared library",
    desc: "Canonical types, Zod schemas, and utility functions shared across all agents and the web app. Single source of truth.",
    color: "border-blue-500/40 bg-blue-500/5",
    tagColor: "bg-blue-500/20 text-blue-300",
  },
  {
    name: "packages/agents",
    tag: "Agent configs",
    desc: "Agent prompt templates, configuration files, and runtime adapters. Swap models or providers without touching your topology.",
    color: "border-emerald-500/40 bg-emerald-500/5",
    tagColor: "bg-emerald-500/20 text-emerald-300",
  },
  {
    name: "system/",
    tag: "Runtime state",
    desc: "topology.json, global_state.json, and coordination_log.json. The runtime source of truth for every agent in your system.",
    color: "border-orange-500/40 bg-orange-500/5",
    tagColor: "bg-orange-500/20 text-orange-300",
  },
  {
    name: "modules/",
    tag: "Feature modules",
    desc: "Composable modules that group related agents and state. Scale your system horizontally by adding new modules without touching existing ones.",
    color: "border-pink-500/40 bg-pink-500/5",
    tagColor: "bg-pink-500/20 text-pink-300",
  },
  {
    name: ".github/workflows/",
    tag: "CI/CD",
    desc: "ci.yml and topology-check.yml validate your agent graph, run type checks, and block bad deploys automatically.",
    color: "border-cyan-500/40 bg-cyan-500/5",
    tagColor: "bg-cyan-500/20 text-cyan-300",
  },
];

export default function Architecture() {
  return (
    <section id="architecture" className="py-24 px-6 border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold text-violet-400 uppercase tracking-widest mb-3">
            Architecture
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            A monorepo built for agent scale
          </h2>
          <p className="text-gray-400 text-lg">
            Murmur is a structured monorepo — every piece has a clear
            responsibility, and all the pieces fit together.
          </p>
        </div>

        {/* Package grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`card-hover rounded-2xl border p-6 ${pkg.color}`}
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <code className="text-white font-mono font-semibold text-sm">
                  {pkg.name}
                </code>
                <span className={`shrink-0 text-xs px-2.5 py-1 rounded-full font-medium ${pkg.tagColor}`}>
                  {pkg.tag}
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">{pkg.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
