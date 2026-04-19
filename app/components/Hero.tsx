export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 px-6">
      {/* Background glow orbs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(124,58,237,0.25) 0%, rgba(59,130,246,0.1) 50%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-60 -left-40 w-[400px] h-[400px] rounded-full animate-pulse-glow"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(52,211,153,0.12) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-40 -right-40 w-[400px] h-[400px] rounded-full animate-pulse-glow"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(96,165,250,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-sm text-violet-300 mb-8">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-violet-400" />
          Now in early access — multi-agent coordination for production
        </div>

        {/* Headline */}
        <h1 className="animate-fade-up-delay-1 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight mb-6">
          Orchestrate your{" "}
          <span className="gradient-text">AI agents</span>
          {" "}at scale
        </h1>

        {/* Subheadline */}
        <p className="animate-fade-up-delay-2 max-w-2xl mx-auto text-lg sm:text-xl text-gray-400 leading-relaxed mb-10">
          Murmur gives every agent in your stack a shared topology, live state,
          and a coordination log — so your AI systems behave like a team, not a
          mess of scripts.
        </p>

        {/* CTAs */}
        <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            id="get-started"
            href="#"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold text-base transition-all shadow-lg shadow-violet-600/30 hover:shadow-violet-500/40"
          >
            Start for free
          </a>
          <a
            href="#how-it-works"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl border border-[var(--border)] text-gray-300 hover:text-white hover:border-gray-500 font-semibold text-base transition-all"
          >
            See how it works →
          </a>
        </div>

        {/* Social proof */}
        <p className="animate-fade-up-delay-3 mt-10 text-sm text-gray-600">
          Trusted by engineering teams building the next generation of AI products
        </p>
      </div>

      {/* Hero visual — topology diagram */}
      <div className="relative max-w-5xl mx-auto mt-20 animate-fade-up-delay-3">
        <div
          className="rounded-2xl border border-[var(--border)] bg-[var(--muted)] p-1 shadow-2xl"
          style={{ boxShadow: "0 30px 80px rgba(124,58,237,0.2)" }}
        >
          <div className="rounded-xl bg-[#0d0e22] p-8 font-mono text-sm overflow-hidden">
            {/* Terminal header */}
            <div className="flex items-center gap-2 mb-6">
              <span className="h-3 w-3 rounded-full bg-red-500/70" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
              <span className="h-3 w-3 rounded-full bg-green-500/70" />
              <span className="ml-3 text-xs text-gray-500">murmur — topology.json</span>
            </div>

            {/* Fake topology JSON */}
            <pre className="text-left leading-relaxed overflow-x-auto text-gray-300">
{`{
  `}<span className="text-violet-400">&quot;topology&quot;</span>{`: {
    `}<span className="text-violet-400">&quot;agents&quot;</span>{`: [
      {
        `}<span className="text-violet-400">&quot;id&quot;</span>{`: `}<span className="text-green-400">&quot;planner&quot;</span>{`,
        `}<span className="text-violet-400">&quot;status&quot;</span>{`: `}<span className="text-emerald-400">&quot;active&quot;</span>{`,
        `}<span className="text-violet-400">&quot;downstream&quot;</span>{`: [`}<span className="text-green-400">&quot;executor&quot;</span>{`, `}<span className="text-green-400">&quot;reviewer&quot;</span>{`]
      },
      {
        `}<span className="text-violet-400">&quot;id&quot;</span>{`: `}<span className="text-green-400">&quot;executor&quot;</span>{`,
        `}<span className="text-violet-400">&quot;status&quot;</span>{`: `}<span className="text-emerald-400">&quot;running&quot;</span>{`,
        `}<span className="text-violet-400">&quot;last_event&quot;</span>{`: `}<span className="text-blue-400">&quot;task.completed&quot;</span>{`
      },
      {
        `}<span className="text-violet-400">&quot;id&quot;</span>{`: `}<span className="text-green-400">&quot;reviewer&quot;</span>{`,
        `}<span className="text-violet-400">&quot;status&quot;</span>{`: `}<span className="text-yellow-400">&quot;waiting&quot;</span>{`,
        `}<span className="text-violet-400">&quot;queue_depth&quot;</span>{`: `}<span className="text-orange-400">3</span>{`
      }
    ],
    `}<span className="text-violet-400">&quot;global_state&quot;</span>{`: `}<span className="text-green-400">&quot;healthy&quot;</span>{`
  }
}`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
