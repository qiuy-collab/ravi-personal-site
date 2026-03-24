import Link from "next/link";

const pillars = [
  {
    title: "Product strategy that sells",
    body: "Ravi sharpens positioning, reframes offers, and turns vague momentum into a narrative people immediately understand."
  },
  {
    title: "Growth systems with leverage",
    body: "He designs traffic, conversion, and content loops that make personal brands and offers feel alive instead of static."
  },
  {
    title: "AI deployment that actually ships",
    body: "From remote guidance to operational workflows, Ravi turns AI from a buzzword into a system people can run every day."
  }
];

const timeline = [
  {
    year: "2019",
    title: "Built a cross-disciplinary foundation",
    subtitle: "From technical learning to systems thinking",
    body: "Ravi built his early base by combining technical curiosity, product awareness, and practical execution habits — the kind of foundation that later made him unusually effective across strategy, delivery, and teaching.",
    side: "left",
    accent: "Education",
    visual: "Campus learning, systems thinking, independent practice",
    meta: ["Academic foundation", "Technical self-training", "Execution discipline"]
  },
  {
    year: "2021",
    title: "Started designing for growth, not just output",
    subtitle: "Turning pages, products, and positioning into conversion assets",
    body: "What changed here was leverage: Ravi moved beyond making things look complete and started making them perform. Positioning, landing pages, funnel logic, and communication strategy became part of the build itself.",
    side: "right",
    accent: "Growth",
    visual: "Messaging systems, landing pages, funnel architecture",
    meta: ["Offer design", "Narrative strategy", "Conversion awareness"]
  },
  {
    year: "2023",
    title: "Operationalized AI for remote delivery",
    subtitle: "Tooling, async guidance, and real-world implementation support",
    body: "Ravi began turning AI into an execution layer for remote teaching, deployment support, and team coordination — not as demos, but as repeatable systems people could actually use under real constraints.",
    side: "left",
    accent: "AI Systems",
    visual: "AI workflows, async support, deployment orchestration",
    meta: ["Remote-first support", "Workflow automation", "Practical AI operations"]
  },
  {
    year: "2024",
    title: "Turned private capability into public proof",
    subtitle: "Shipping visible projects, demos, and systemized workflows",
    body: "Instead of keeping execution hidden behind conversations, Ravi started publishing proof: GitHub projects, automation demos, deploy pipelines, and personal brand assets that make competence visible to strangers.",
    side: "right",
    accent: "Proof",
    visual: "GitHub projects, CI/CD, public-facing assets",
    meta: ["Visible shipping", "Portfolio proof", "Infrastructure fluency"]
  },
  {
    year: "Now",
    title: "Building momentum for clients, classmates, and teams",
    subtitle: "Strategy, implementation, and guidance inside one profile",
    body: "Today Ravi operates as a high-agency builder across product, growth, AI, and remote delivery — helping people turn scattered ambition into systems, visibility, and usable momentum.",
    side: "left",
    accent: "Current",
    visual: "Consulting, guidance, implementation, personal brand momentum",
    meta: ["Product + Growth + AI", "Remote execution", "High-trust operator"]
  }
] as const;

const proofCards = [
  {
    title: "High-trust personal brand architecture",
    body: "Positioning, narrative flow, and page systems that help cold traffic understand value faster.",
    href: "https://github.com/qiuy-collab/ravi-personal-site"
  },
  {
    title: "GitHub workflow + CI/CD execution",
    body: "A verified workflow covering local build, PR creation, CI, and Pages deployment.",
    href: "https://github.com/qiuy-collab/openclaw-demo-pr-flow"
  },
  {
    title: "Remote guidance and deployment support",
    body: "A working style built around async collaboration, toolchain setup, and practical implementation coaching.",
    href: "/contact"
  }
];

const offers = [
  "AI workflow design for teaching, client delivery, and remote operations",
  "Product and growth guidance for websites, offers, and conversion paths",
  "Hands-on implementation support when ideas need to become something real"
];

export default function HomePage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-28 px-5 py-10 sm:px-6 sm:py-14 lg:px-8">
      <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-panel sm:p-10 lg:p-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-[-10%] w-[40%] bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.24),transparent_62%)]"
        />
        <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
              Product × Growth × AI × Remote Guidance
            </span>
            <h1 className="mt-6 max-w-4xl text-balance text-5xl font-semibold leading-tight sm:text-6xl lg:text-7xl">
              Ravi turns static presence into living momentum.
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-slate-300 sm:text-xl">
              Personal websites, offers, AI systems, and growth narratives that don&apos;t just look premium — they create
              flow, conversation, trust, and action.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#timeline"
                className="rounded-full bg-accent px-6 py-3 text-center text-base font-medium text-slate-950 transition-transform duration-200 hover:-translate-y-0.5"
              >
                Scroll the story
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-white/15 px-6 py-3 text-center text-base font-medium text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-white/5"
              >
                Start a conversation
              </Link>
            </div>
          </div>
          <div className="relative rounded-[2rem] border border-white/10 bg-panel/80 p-6 backdrop-blur">
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(56,189,248,0.09),transparent_45%)]" />
            <div className="relative space-y-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-sm text-slate-400">Current mode</p>
                  <p className="mt-1 text-lg font-medium text-white">Designing systems with motion</p>
                </div>
                <span className="rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-sm text-emerald-300">
                  Active
                </span>
              </div>
              <div className="space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Flow layer</p>
                  <p className="mt-2 text-base text-slate-200">
                    Narrative sequencing, progressive reveal, and scroll-led proof.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Best-fit work</p>
                  <p className="mt-2 text-base text-slate-200">
                    Brand positioning, AI operations, deployment support, and growth-oriented page systems.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-2 text-sm">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-slate-400">Timezone</p>
                    <p className="mt-1 font-medium text-white">APAC / Global</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-slate-400">Working style</p>
                    <p className="mt-1 font-medium text-white">Remote-first</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {pillars.map((item) => (
          <article
            key={item.title}
            className="group rounded-[1.5rem] border border-white/10 bg-panel/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-panel"
          >
            <div className="mb-4 h-px w-16 bg-gradient-to-r from-accent to-transparent transition-all duration-300 group-hover:w-24" />
            <p className="text-lg font-medium text-white">{item.title}</p>
            <p className="mt-3 text-pretty leading-7 text-slate-300">{item.body}</p>
          </article>
        ))}
      </section>

      <section id="timeline" className="relative scroll-mt-24">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Proof timeline</p>
          <h2 className="mt-3 text-balance text-4xl font-semibold text-white sm:text-5xl">
            A profile designed as a moving story, not a static resume.
          </h2>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-slate-300">
            Instead of dumping random cards, this version turns Ravi&apos;s proof into a vertical narrative: time, context,
            public work, and momentum layered together as you scroll.
          </p>
        </div>

        <div className="relative mt-14">
          <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-accent/80 via-white/10 to-transparent md:left-1/2 md:-translate-x-1/2" />
          <div className="space-y-10">
            {timeline.map((item, index) => (
              <div key={`${item.year}-${item.title}`} className="relative grid gap-6 md:grid-cols-2 md:gap-10">
                <div className={item.side === "left" ? "md:pr-10" : "md:order-2 md:pl-10"}>
                  <article className="group rounded-[1.75rem] border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-white/[0.07]">
                    <div className="flex items-center gap-3 text-sm text-slate-400">
                      <span className="rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-accent">
                        {item.year}
                      </span>
                      <span>{item.accent}</span>
                    </div>
                    <h3 className="mt-4 text-2xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-base text-slate-300">{item.subtitle}</p>
                    <p className="mt-4 text-pretty leading-7 text-slate-300">{item.body}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.meta.map((meta) => (
                        <span
                          key={meta}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
                        >
                          {meta}
                        </span>
                      ))}
                    </div>
                  </article>
                </div>

                <div className={item.side === "left" ? "md:pl-10" : "md:order-1 md:pr-10"}>
                  <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-panel/80 p-6 shadow-panel">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.16),transparent_55%)]" />
                    <div className="relative">
                      <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Scene {index + 1}</p>
                      <div className="mt-5 rounded-[1.25rem] border border-white/10 bg-ink/80 p-5">
                        <div className="mb-4 flex items-center gap-2">
                          <span className="size-2 rounded-full bg-rose-400" />
                          <span className="size-2 rounded-full bg-amber-300" />
                          <span className="size-2 rounded-full bg-emerald-400" />
                        </div>
                        <p className="text-sm text-slate-400">Visual anchor</p>
                        <p className="mt-2 text-lg font-medium text-white">{item.visual}</p>
                        <p className="mt-4 text-pretty leading-7 text-slate-300">
                          This panel acts like a sticky visual memory: a project snapshot, event photo, campus moment,
                          conference attendance, or GitHub proof block in the next content round.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <span className="absolute left-5 top-10 z-10 size-3 -translate-x-1/2 rounded-full border border-accent/40 bg-accent shadow-[0_0_0_6px_rgba(56,189,248,0.08)] md:left-1/2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-8 rounded-[2rem] border border-white/10 bg-white/5 p-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Live proof</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold text-white sm:text-4xl">
            Not just claims — visible links, systems, and shipped work.
          </h2>
        </div>
        <div className="grid gap-4">
          {proofCards.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group rounded-2xl border border-white/10 bg-ink/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-ink/80"
            >
              <p className="text-lg font-medium text-white">{item.title}</p>
              <p className="mt-3 text-pretty leading-7 text-slate-300">{item.body}</p>
              <p className="mt-4 text-sm text-accent transition-transform duration-300 group-hover:translate-x-1">
                Open proof →
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Services</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold text-white sm:text-4xl">
            Built for credibility, conversion, and narrative flow.
          </h2>
        </div>
        <div className="space-y-4">
          {offers.map((item, index) => (
            <div
              key={item}
              className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40"
            >
              <span className="mt-1 flex size-8 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-sm text-accent">
                0{index + 1}
              </span>
              <p className="text-pretty leading-7 text-slate-300">{item}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
