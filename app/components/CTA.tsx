export default function CTA() {
  return (
    <section className="py-24 px-6 border-t border-[var(--border)]">
      <div className="max-w-4xl mx-auto">
        <div
          className="relative overflow-hidden rounded-3xl p-12 text-center"
          style={{
            background:
              "linear-gradient(135deg, rgba(124,58,237,0.2) 0%, rgba(59,130,246,0.15) 50%, rgba(52,211,153,0.1) 100%)",
            border: "1px solid rgba(124,58,237,0.3)",
            boxShadow: "0 40px 80px rgba(124,58,237,0.15)",
          }}
        >
          {/* Glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 50% 0%, rgba(124,58,237,0.3) 0%, transparent 60%)",
            }}
          />

          <div className="relative">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
              Ready to coordinate your agents?
            </h2>
            <p className="text-gray-300 text-lg mb-10 max-w-xl mx-auto">
              Get started with Murmur for free. No credit card required. Deploy
              your first multi-agent system in under 10 minutes.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold text-base transition-all shadow-lg shadow-violet-600/30 hover:shadow-violet-500/40"
              >
                Get started for free
              </a>
              <a
                href="#"
                className="w-full sm:w-auto px-8 py-4 rounded-xl border border-white/20 text-white hover:border-white/40 font-semibold text-base transition-all"
              >
                Read the docs
              </a>
            </div>

            <p className="mt-8 text-sm text-gray-500">
              Open source core · Free tier available · Deploys to Vercel
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
