import Card from "@/components/Card";
import Hero from "@/components/Hero";
import MobileNav from "@/components/MobileNav";
import SideNav from "@/components/SideNav";

const heroData = {
  name: "Ravi · 丘宇",
  title: "Product · Growth · AI · Remote Guidance",
  intro:
    "A modern personal profile for clients, classmates, collaborators, and future teams — built to show direction, capability, and real execution.",
  tags: ["Product Strategy", "Growth Systems", "AI Workflows", "Remote Execution"],
  socialLinks: [
    { label: "GitHub", href: "https://github.com/qiuy-collab" },
    { label: "Contact", href: "/contact" }
  ]
};

const highlights = [
  "Product + Growth + AI operator",
  "Remote deployment, teaching, and guidance",
  "Personal brand systems, workflow design, and hands-on execution"
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

const cardSections = [
  {
    id: "projects-grid",
    title: "Selected Work",
    items: [
      {
        badge: "Website",
        title: "Personal website repository",
        description:
          "A public profile site that turns positioning, proof, and shipped assets into one coherent presentation.",
        href: "https://github.com/qiuy-collab/ravi-personal-site",
        meta: "GitHub Pages / Next.js"
      },
      {
        badge: "Workflow",
        title: "PR flow demo",
        description:
          "A compact repository that shows local development, pull request review, and deploy-ready collaboration in practice.",
        href: "https://github.com/qiuy-collab/openclaw-demo-pr-flow",
        meta: "PR / CI / CD"
      },
      {
        badge: "Support",
        title: "Remote guidance setup",
        description:
          "A service-shaped delivery structure for async support, environment setup, and AI-assisted execution guidance.",
        href: "/contact",
        meta: "Collaboration"
      }
    ]
  }
];

export default function HomePage() {
  return (
    <div className="page-layout">
      <MobileNav />
      <SideNav />

      <div className="content-area">
        <div className="content-container space-y-8 animate-in">
          {/* Decorative floating glows - desktop only */}
          <div className="float absolute right-12 top-20 hidden h-24 w-24 rounded-full bg-accent/10 blur-2xl lg:block" />
          <div className="float-delayed absolute left-12 top-[32rem] hidden h-20 w-20 rounded-full bg-accent-secondary/10 blur-2xl lg:block" />

          {/* Hero Section */}
          <Hero {...heroData} />

          {/* Highlights - Feature List Style */}
          <section className="card reveal visible">
            <h2 className="heading-2 mb-5 flex items-center gap-2">
              <span className="h-1.5 w-6 rounded-full bg-gradient-to-r from-accent to-accent-secondary" />
              Highlights
            </h2>
            <ul className="space-y-4 stagger-in">
              {highlights.map((item, index) => (
                <li
                  key={index}
                  className="group flex items-start gap-4 rounded-lg p-3 transition-all duration-300 hover:bg-accent/5"
                >
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-accent/20 to-accent-secondary/20">
                    <svg className="h-4 w-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="body-text pt-1">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Profile Sections - Card Grid Style */}
          <div className="grid gap-6 md:grid-cols-2">
            {profileSections.map((section, idx) => (
              <section
                key={section.id}
                className="card reveal visible group/card"
              >
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent/15 to-accent-secondary/15 transition-transform duration-300 group-hover/card:scale-110">
                      {idx === 0 && (
                        <svg className="h-5 w-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      )}
                      {idx === 1 && (
                        <svg className="h-5 w-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      )}
                      {idx === 2 && (
                        <svg className="h-5 w-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                      )}
                      {idx === 3 && (
                        <svg className="h-5 w-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      )}
                    </span>
                    <h2 className="heading-2">{section.title}</h2>
                  </div>
                </div>
                <p className="muted-text mb-4 leading-relaxed">{section.intro}</p>
                <ul className="space-y-2.5 stagger-in">
                  {section.points.map((point, index) => (
                    <li key={index} className="flex items-start gap-2.5">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-accent to-accent-secondary" />
                      <span className="body-text text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          {/* Timeline - Enhanced Visual Style */}
          <section className="card reveal visible">
            <h2 className="heading-2 mb-6 flex items-center gap-2">
              <span className="h-1.5 w-6 rounded-full bg-gradient-to-r from-accent to-accent-secondary" />
              Timeline
            </h2>
            <div className="timeline space-y-8 stagger-in">
              {timeline.map((item, index) => (
                <div key={index} className="relative group">
                  <div className="timeline-dot glow-pulse" />
                  <div className="rounded-lg p-4 transition-all duration-300 hover:bg-accent/5">
                    <span className="kicker mb-1.5 block">{item.period}</span>
                    <h3 className="heading-3 mb-2">{item.title}</h3>
                    <p className="muted-text mb-3 leading-relaxed">{item.body}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.details.map((detail, i) => (
                        <span
                          key={i}
                          className="tag transition-all duration-300 hover:bg-accent/20"
                        >
                          {detail}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Selected Work - Card Grid */}
          {cardSections.map((section) => (
            <section key={section.id} className="space-y-4 reveal visible">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-6 rounded-full bg-gradient-to-r from-accent to-accent-secondary" />
                <h2 className="heading-2">{section.title}</h2>
              </div>
              <div className="pillar-grid">
                {section.items.map((item, cardIdx) => (
                  <Card
                    key={item.title}
                    badge={item.badge}
                    title={item.title}
                    description={item.description}
                    href={item.href}
                    meta={item.meta}
                  />
                ))}
              </div>
            </section>
          ))}

          {/* Links - Enhanced List Style */}
          <section className="card reveal visible">
            <h2 className="heading-2 mb-5 flex items-center gap-2">
              <span className="h-1.5 w-6 rounded-full bg-gradient-to-r from-accent to-accent-secondary" />
              Links
            </h2>
            <div className="space-y-3 stagger-in">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="card-clickable group flex items-center justify-between p-4"
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-accent/15 to-accent-secondary/15 transition-transform duration-300 group-hover:scale-110">
                      {index === 0 && (
                        <svg className="h-4 w-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      )}
                      {index === 1 && (
                        <svg className="h-4 w-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                      )}
                      {index === 2 && (
                        <svg className="h-4 w-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      )}
                    </span>
                    <div>
                      <h3 className="font-medium transition-colors group-hover:text-accent">
                        {link.title}
                      </h3>
                      <p className="muted-text text-sm">{link.meta}</p>
                    </div>
                  </div>
                  <svg
                    className="h-5 w-5 shrink-0 text-muted transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
