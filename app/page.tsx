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
        {/* 左侧边栏 - 个人信息卡片 */}
        <aside className="rounded-[2rem] border border-violet-100/50 bg-white/80 p-6 shadow-panel backdrop-blur-lg lg:sticky lg:top-24 lg:h-fit">
          <div className="flex items-center gap-4">
            <div className="flex size-20 items-center justify-center rounded-full border border-violet-200 bg-gradient-to-br from-violet-100 to-blue-100 text-2xl font-semibold text-accent shadow-sm">
              R
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-text-primary">Ravi · 丘宇</h1>
              <p className="mt-1 text-sm text-text-secondary">Product · Growth · AI · Remote Guidance</p>
            </div>
          </div>

          <p className="mt-6 text-pretty leading-7 text-text-secondary">
            A modern personal profile for clients, classmates, collaborators, and future teams — built to show direction,
            capability, and real execution.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {highlights.map((item) => (
              <span key={item} className="tag rounded-full px-3 py-1 text-xs text-text-secondary">
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8 grid gap-3 text-sm">
            {quickFacts.map((fact) => (
              <div key={fact.label} className="flex items-center justify-between rounded-2xl border border-violet-100/50 bg-gradient-to-r from-violet-50/50 to-blue-50/50 px-4 py-3">
                <span className="text-text-muted">{fact.label}</span>
                <span className="font-medium text-text-primary">{fact.value}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-gradient-to-r from-violet-500 to-blue-500 px-5 py-3 text-center text-sm font-medium text-white shadow-md shadow-violet-200/50 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-violet-300/50"
            >
              Contact Ravi
            </Link>
            <Link
              href="#selected-links"
              className="rounded-full border border-violet-200 bg-white px-5 py-3 text-center text-sm font-medium text-text-primary transition-all duration-200 hover:-translate-y-0.5 hover:border-violet-300 hover:bg-violet-50"
            >
              View proof links
            </Link>
          </div>
        </aside>

        {/* 右侧主内容区 */}
        <div className="space-y-8">
          {/* Intro 部分 */}
          <section className="rounded-[2rem] border border-violet-100/50 bg-white/80 p-8 shadow-panel backdrop-blur-lg">
            <p className="text-sm uppercase tracking-[0.3em] text-accent">Intro</p>
            <h2 className="mt-4 text-balance text-4xl font-semibold text-text-primary sm:text-5xl">
              Building credibility with structure, clarity, and shipped systems.
            </h2>
            <p className="mt-6 max-w-3xl text-pretty text-lg leading-8 text-text-secondary">
              Instead of a flashy landing page, this version is designed like a stronger public profile: a cleaner story,
              visible proof, and a more complete view of how Ravi works across product, growth, AI, and remote delivery.
            </p>
          </section>

          {/* 个人简介各部分 */}
          {profileSections.map((section) => (
            <section key={section.id} id={section.id} className="hover-lift rounded-[2rem] border border-violet-100/50 bg-white/80 p-8 shadow-panel backdrop-blur-lg">
              <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-accent">{section.title}</p>
                </div>
                <div>
                  <p className="text-pretty text-lg leading-8 text-text-secondary">{section.intro}</p>
                  <ul className="mt-6 space-y-3">
                    {section.points.map((point) => (
                      <li key={point} className="flex gap-3 rounded-2xl border border-violet-100/50 bg-gradient-to-r from-violet-50/50 to-transparent p-4 text-text-secondary">
                        <span className="mt-2 size-2 shrink-0 rounded-full bg-gradient-to-br from-violet-400 to-blue-400" />
                        <span className="leading-7">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          ))}

          {/* Timeline 部分 */}
          <section className="rounded-[2rem] border border-violet-100/50 bg-white/80 p-8 shadow-panel backdrop-blur-lg">
            <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-accent">Timeline</p>
              </div>
              <div className="space-y-6">
                {timeline.map((item) => (
                  <article key={item.period} className="hover-lift rounded-[1.5rem] border border-violet-100/50 bg-gradient-to-br from-violet-50/30 to-blue-50/30 p-6 shadow-card">
                    <p className="text-sm font-medium text-accent">{item.period}</p>
                    <h3 className="mt-2 text-2xl font-semibold text-text-primary">{item.title}</h3>
                    <p className="mt-4 text-pretty leading-7 text-text-secondary">{item.body}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.details.map((detail) => (
                        <span key={detail} className="tag rounded-full px-3 py-1 text-xs text-text-secondary">
                          {detail}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Selected links 部分 */}
          <section id="selected-links" className="rounded-[2rem] border border-violet-100/50 bg-white/80 p-8 shadow-panel backdrop-blur-lg">
            <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-accent">Selected links</p>
              </div>
              <div className="space-y-4">
                {links.map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    className="hover-lift group flex items-center justify-between gap-4 rounded-[1.5rem] border border-violet-100/50 bg-gradient-to-r from-violet-50/50 to-transparent p-5 shadow-card hover:border-violet-200"
                  >
                    <div>
                      <p className="text-lg font-medium text-text-primary">{link.title}</p>
                      <p className="mt-1 text-sm text-text-muted">{link.meta}</p>
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
