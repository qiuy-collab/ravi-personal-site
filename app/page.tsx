import Link from "next/link";

const highlights = [
  "Product + Growth + AI operator",
  "Remote deployment, teaching, and guidance",
  "Personal brand systems, workflow design, and hands-on execution"
];

const quickFacts = [
  { label: "Location", value: "APAC / Remote" },
  { label: "Focus", value: "Product, Growth, AI" },
  { label: "Mode", value: "Build + Guide + Ship" },
  { label: "Availability", value: "Open to collaboration" }
];

const profileSections = [
  {
    id: "about",
    title: "About",
    intro:
      "Ravi (丘宇) works at the intersection of product strategy, growth systems, AI workflow design, and remote execution. He helps people turn loose ambition into visible systems, stronger positioning, and work that actually ships.",
    points: [
      "Combines product thinking with growth logic and AI operations",
      "Comfortable moving between strategy, implementation, and teaching",
      "Builds pages, workflows, and delivery systems designed to earn trust quickly"
    ]
  },
  {
    id: "journey",
    title: "Journey",
    intro:
      "The path is less about a single job title and more about building compounding capability: technical execution, product judgment, growth communication, and AI-enabled delivery.",
    points: [
      "Started from technical learning and independent experimentation",
      "Expanded into product positioning, offer design, and conversion thinking",
      "Now focused on remote guidance, deployment support, and AI-backed operations"
    ]
  },
  {
    id: "projects",
    title: "Selected Projects",
    intro:
      "This website is structured like a living profile: public proof, shipped demos, and systems that show how Ravi thinks and executes.",
    points: [
      "Personal website and brand system on GitHub Pages",
      "Verified local dev → PR → CI/CD workflow demo",
      "More projects, case studies, and public proof can be added as the profile grows"
    ]
  },
  {
    id: "experience",
    title: "What Ravi Brings",
    intro:
      "The strength here is not just design or code in isolation. It is the ability to connect messaging, systems, tooling, and delivery into one usable flow.",
    points: [
      "Product strategy translated into shippable structure",
      "Growth language translated into conversion-ready pages",
      "AI tools translated into workflows teams can actually operate"
    ]
  }
];

const timeline = [
  {
    period: "2019 — Foundation",
    title: "Technical curiosity became systems thinking",
    body:
      "Ravi built an early base through technical learning, independent practice, and structured self-training. This stage created the discipline that later made cross-functional work possible.",
    details: ["Academic foundation", "Independent building", "Execution discipline"]
  },
  {
    period: "2021 — Product & Growth",
    title: "Output evolved into positioning and conversion",
    body:
      "The focus shifted from merely producing pages or assets to making them land. Narrative framing, funnel logic, and offer clarity became part of the work itself.",
    details: ["Positioning", "Landing pages", "Narrative strategy"]
  },
  {
    period: "2023 — AI & Remote Delivery",
    title: "AI became an operational layer",
    body:
      "Ravi started turning AI into a daily execution layer for support, deployment, async coordination, and guided implementation — not as hype, but as practical infrastructure.",
    details: ["Workflow automation", "Remote support", "Operational AI"]
  },
  {
    period: "2024 — Public Proof",
    title: "Private capability turned into visible assets",
    body:
      "Projects, workflows, and demos began moving into public view: GitHub repositories, deploy pipelines, and personal assets that make competence legible to strangers.",
    details: ["GitHub projects", "CI/CD", "Public-facing proof"]
  }
];

const links = [
  {
    title: "Personal website repository",
    href: "https://github.com/qiuy-collab/ravi-personal-site",
    meta: "Website / GitHub Pages"
  },
  {
    title: "Workflow demo repository",
    href: "https://github.com/qiuy-collab/openclaw-demo-pr-flow",
    meta: "PR / CI / CD demo"
  },
  {
    title: "Contact Ravi",
    href: "/contact",
    meta: "Collaboration / Guidance"
  }
];

export default function HomePage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-5 py-10 sm:px-6 sm:py-14 lg:px-8">
      <section className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <aside className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-panel lg:sticky lg:top-24 lg:h-fit">
          <div className="flex items-center gap-4">
            <div className="flex size-20 items-center justify-center rounded-full border border-white/10 bg-white/5 text-2xl font-semibold text-white">
              R
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-white">Ravi · 丘宇</h1>
              <p className="mt-1 text-sm text-slate-300">Product · Growth · AI · Remote Guidance</p>
            </div>
          </div>

          <p className="mt-6 text-pretty leading-7 text-slate-300">
            A modern personal profile for clients, classmates, collaborators, and future teams — built to show direction,
            capability, and real execution.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {highlights.map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8 grid gap-3 text-sm">
            {quickFacts.map((fact) => (
              <div key={fact.label} className="flex items-center justify-between rounded-2xl border border-white/10 bg-ink/50 px-4 py-3">
                <span className="text-slate-400">{fact.label}</span>
                <span className="font-medium text-white">{fact.value}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-accent px-5 py-3 text-center text-sm font-medium text-slate-950 transition-transform duration-200 hover:-translate-y-0.5"
            >
              Contact Ravi
            </Link>
            <Link
              href="#selected-links"
              className="rounded-full border border-white/15 px-5 py-3 text-center text-sm font-medium text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-white/5"
            >
              View proof links
            </Link>
          </div>
        </aside>

        <div className="space-y-8">
          <section className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Intro</p>
            <h2 className="mt-4 text-balance text-4xl font-semibold text-white sm:text-5xl">
              Building credibility with structure, clarity, and shipped systems.
            </h2>
            <p className="mt-6 max-w-3xl text-pretty text-lg leading-8 text-slate-300">
              Instead of a flashy landing page, this version is designed like a stronger public profile: a cleaner story,
              visible proof, and a more complete view of how Ravi works across product, growth, AI, and remote delivery.
            </p>
          </section>

          {profileSections.map((section) => (
            <section key={section.id} id={section.id} className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
              <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-400">{section.title}</p>
                </div>
                <div>
                  <p className="text-pretty text-lg leading-8 text-slate-300">{section.intro}</p>
                  <ul className="mt-6 space-y-3">
                    {section.points.map((point) => (
                      <li key={point} className="flex gap-3 rounded-2xl border border-white/10 bg-ink/50 p-4 text-slate-300">
                        <span className="mt-2 size-2 rounded-full bg-accent" />
                        <span className="leading-7">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          ))}

          <section className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Timeline</p>
              </div>
              <div className="space-y-6">
                {timeline.map((item) => (
                  <article key={item.period} className="rounded-[1.5rem] border border-white/10 bg-ink/50 p-6">
                    <p className="text-sm text-accent">{item.period}</p>
                    <h3 className="mt-2 text-2xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-4 text-pretty leading-7 text-slate-300">{item.body}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.details.map((detail) => (
                        <span key={detail} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                          {detail}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="selected-links" className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Selected links</p>
              </div>
              <div className="space-y-4">
                {links.map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    className="group flex items-center justify-between gap-4 rounded-[1.5rem] border border-white/10 bg-ink/50 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40"
                  >
                    <div>
                      <p className="text-lg font-medium text-white">{link.title}</p>
                      <p className="mt-1 text-sm text-slate-400">{link.meta}</p>
                    </div>
                    <span className="text-sm text-accent transition-transform duration-200 group-hover:translate-x-1">Open →</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
