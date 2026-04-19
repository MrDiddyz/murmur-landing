const steps = [
  {
    step: "01",
    title: "Define your topology",
    description:
      "Describe your agents, their roles, and how they connect in a single topology.json. Murmur validates it on every deploy.",
    code: `// topology.json
{
  "agents": [
    { "id": "planner", "downstream": ["executor"] },
    { "id": "executor", "downstream": ["reviewer"] },
    { "id": "reviewer", "downstream": [] }
  ]
}`,
  },
  {
    step: "02",
    title: "Connect your agents",
    description:
      "Each agent imports typed schemas from the shared core package. Murmur injects state and routes events automatically.",
    code: `// packages/agents/planner.ts
import { createAgent } from "@murmur/core";
import { PlannerInput, PlannerOutput } from "./schemas";

export const planner = createAgent<PlannerInput, PlannerOutput>({
  id: "planner",
  run: async (input, ctx) => {
    const plan = await generatePlan(input.goal);
    await ctx.emit("plan.ready", { plan });
    return { plan };
  },
});`,
  },
  {
    step: "03",
    title: "Ship and observe",
    description:
      "Deploy to Vercel. Every event is recorded in the coordination log. Monitor agent health, replay failures, and ship with confidence.",
    code: `// coordination_log.ndjson
{"ts":"2026-04-19T04:00:01Z","agent":"planner","event":"plan.ready","latency_ms":231}
{"ts":"2026-04-19T04:00:01Z","agent":"executor","event":"task.started","task_id":"t-001"}
{"ts":"2026-04-19T04:00:03Z","agent":"executor","event":"task.completed","ok":true}
{"ts":"2026-04-19T04:00:03Z","agent":"reviewer","event":"review.queued","queue_depth":1}`,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold text-violet-400 uppercase tracking-widest mb-3">
            How it works
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            From zero to coordinated agents in three steps
          </h2>
          <p className="text-gray-400 text-lg">
            No complex orchestration frameworks. Just a clean, opinionated
            approach that scales from prototype to production.
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-col gap-16">
          {steps.map((s, i) => (
            <div
              key={s.step}
              className={`flex flex-col ${
                i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
              } items-center gap-10`}
            >
              {/* Text */}
              <div className="flex-1 max-w-lg">
                <div className="text-5xl font-black text-gray-800 mb-4 font-mono">
                  {s.step}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{s.title}</h3>
                <p className="text-gray-400 leading-relaxed">{s.description}</p>
              </div>

              {/* Code block */}
              <div className="flex-1 w-full">
                <div className="rounded-2xl border border-[var(--border)] bg-[#0d0e22] overflow-hidden">
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--border)]">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
                  </div>
                  <pre className="p-5 text-xs sm:text-sm text-gray-300 font-mono leading-relaxed overflow-x-auto whitespace-pre">
                    {s.code}
                  </pre>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
