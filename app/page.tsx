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
    <div className="mx-auto max-w-5xl px-6 py-12">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row gap-8 items-start">
        {/* 左侧头像和基本信息 */}
        <aside className="w-full md:w-80 shrink-0">
          <div className="rounded-3xl bg-card border border-line p-8 shadow-card">
            {/* 头像 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-accent to-accent2 flex items-center justify-center text-white font-bold text-4xl shadow-lg">
                R
              </div>
              <h1 className="mt-5 text-2xl font-bold text-text">Ravi</h1>
              <p className="text-muted text-sm mt-1">丘宇</p>
              <p className="text-muted text-sm mt-3">Product · Growth · AI</p>
            </div>

            {/* 标签 */}
            <div className="mt-6 flex flex-wrap gap-2 justify-center">
              {highlights.map((item) => (
                <span key={item} className="rounded-full bg-bg px-3 py-1.5 text-xs text-muted border border-line">
                  {item}
                </span>
              ))}
            </div>

            {/* 快速信息 */}
            <div className="mt-6 space-y-3">
              {quickFacts.map((fact) => (
                <div key={fact.label} className="flex items-center justify-between text-sm py-2 border-b border-line last:border-0">
                  <span className="text-muted">{fact.label}</span>
                  <span className="font-medium text-text">{fact.value}</span>
                </div>
              ))}
            </div>

            {/* 按钮 */}
            <div className="mt-6 space-y-3">
              <Link
                href="/contact"
                className="block w-full rounded-xl bg-gradient-to-r from-accent to-accent2 px-5 py-3 text-center text-sm font-medium text-white shadow-md hover:shadow-lg transition-all"
              >
                Contact Ravi
              </Link>
              <Link
                href="#selected-links"
                className="block w-full rounded-xl border border-line bg-bg px-5 py-3 text-center text-sm font-medium text-text hover:border-accent transition-colors"
              >
                View Projects
              </Link>
            </div>
          </div>
        </aside>

        {/* 右侧主要内容 */}
        <div className="flex-1 space-y-6">
          {/* 简介 */}
          <section className="rounded-3xl bg-card border border-line p-8 shadow-card">
            <h2 className="text-3xl font-bold text-text leading-tight">
              Building credibility with structure, clarity, and shipped systems.
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              A modern personal profile for clients, classmates, collaborators, and future teams — built to show direction,
              capability, and real execution.
            </p>
          </section>

          {/* 各部分内容 */}
          {profileSections.map((section) => (
            <section key={section.id} id={section.id} className="rounded-3xl bg-card border border-line p-8 shadow-card">
              <h3 className="text-sm font-semibold text-accent uppercase tracking-wider">{section.title}</h3>
              <p className="mt-3 text-muted leading-relaxed">{section.intro}</p>
              <ul className="mt-5 space-y-3">
                {section.points.map((point) => (
                  <li key={point} className="flex gap-3 items-start">
                    <span className="mt-2 w-2 h-2 rounded-full bg-accent shrink-0" />
                    <span className="text-text leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}

          {/* 时间线 */}
          <section className="rounded-3xl bg-card border border-line p-8 shadow-card">
            <h3 className="text-sm font-semibold text-accent uppercase tracking-wider">Timeline</h3>
            <div className="mt-5 space-y-5">
              {timeline.map((item) => (
                <article key={item.period} className="relative pl-6 border-l-2 border-line hover:border-accent transition-colors">
                  <span className="absolute -left-2 top-1 w-4 h-4 rounded-full bg-bg border-2 border-accent" />
                  <p className="text-sm font-medium text-accent">{item.period}</p>
                  <h4 className="mt-1 text-lg font-semibold text-text">{item.title}</h4>
                  <p className="mt-2 text-muted text-sm leading-relaxed">{item.body}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.details.map((detail) => (
                      <span key={detail} className="rounded-full bg-bg px-2.5 py-1 text-xs text-muted border border-line">
                        {detail}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* 链接 */}
          <section id="selected-links" className="rounded-3xl bg-card border border-line p-8 shadow-card">
            <h3 className="text-sm font-semibold text-accent uppercase tracking-wider">Selected Links</h3>
            <div className="mt-5 space-y-3">
              {links.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="group flex items-center justify-between gap-4 rounded-2xl bg-bg border border-line p-5 hover:border-accent hover:shadow-card transition-all"
                >
                  <div>
                    <p className="font-medium text-text">{link.title}</p>
                    <p className="text-sm text-muted mt-0.5">{link.meta}</p>
                  </div>
                  <span className="text-accent text-sm font-medium group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
