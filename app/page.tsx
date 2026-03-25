"use client";

import { useEffect, useMemo, useState } from "react";
import Card from "@/components/Card";
import Hero from "@/components/Hero";
import MobileNav from "@/components/MobileNav";
import SideNav from "@/components/SideNav";

const tabItems = [
  { label: "Profile", href: "profile" },
  { label: "Journey", href: "journey" },
  { label: "Work", href: "work" },
  { label: "Connect", href: "connect" }
];

const heroData = {
  name: "Ravi · 丘宇",
  title: "Product · Growth · AI · Remote Guidance",
  intro:
    "Ravi turns product positioning, growth communication, and AI-assisted execution into compact systems that are easy to trust, review, and ship.",
  tags: ["Product Systems", "Growth Narrative", "AI Workflows", "Remote Delivery"],
  socialLinks: [
    { label: "GitHub", href: "https://github.com/qiuy-collab" },
    { label: "Contact", href: "#connect-note" }
  ]
};

const summaryStats = [
  { label: "Focus", value: "Product × Growth × AI" },
  { label: "Mode", value: "Async remote execution" },
  { label: "Output", value: "Sites, flows, proof" }
];

const profileBlocks = [
  {
    title: "About Ravi",
    intro:
      "Ravi works across product strategy, growth systems, AI workflow design, and remote execution support. The work is less about isolated assets and more about building visible, compounding capability.",
    points: [
      "Connects strategy, messaging, tooling, and delivery into one usable flow",
      "Comfortable switching between operator, builder, and guide roles",
      "Prefers simple systems that create trust fast"
    ]
  },
  {
    title: "What stands out",
    intro:
      "The differentiator is not a single discipline. It is the ability to compress several disciplines into one clean delivery rhythm.",
    points: [
      "Product judgment translated into page and workflow structure",
      "Growth language translated into conversion-ready communication",
      "AI tools translated into repeatable execution layers"
    ]
  }
];

const journeyTimeline = [
  {
    period: "2019",
    title: "Technical foundation",
    body:
      "Independent practice, technical learning, and self-training created the execution discipline that supports later cross-functional work.",
    details: ["Learning", "Practice", "Discipline"]
  },
  {
    period: "2021",
    title: "Product and growth framing",
    body:
      "The work expanded from producing outputs to shaping positioning, funnel thinking, and communication that could move decisions.",
    details: ["Positioning", "Narrative", "Conversion"]
  },
  {
    period: "2023",
    title: "AI as infrastructure",
    body:
      "AI became part of day-to-day execution for delivery support, workflow acceleration, remote guidance, and operational handoff.",
    details: ["Automation", "Support", "Operations"]
  },
  {
    period: "2024",
    title: "Public proof of work",
    body:
      "Repositories, demos, and deployable assets started turning private capability into public proof that strangers can inspect quickly.",
    details: ["Repositories", "Deploys", "Proof"]
  }
];

const selectedWork = [
  {
    badge: "Website",
    title: "Personal website repository",
    description:
      "A public-facing site that packages positioning, visual proof, and shipped assets into one coherent surface.",
    href: "https://github.com/qiuy-collab/ravi-personal-site",
    meta: "Next.js / GitHub Pages"
  },
  {
    badge: "Workflow",
    title: "PR flow demo",
    description:
      "A compact repo showing how local building, pull request review, and deploy-ready collaboration work together in practice.",
    href: "https://github.com/qiuy-collab/openclaw-demo-pr-flow",
    meta: "PR / CI / CD"
  },
  {
    badge: "Service",
    title: "Remote guidance setup",
    description:
      "A delivery model for async support, environment setup, and AI-assisted execution guidance around real work.",
    href: "#connect-note",
    meta: "Guidance / Collaboration"
  }
];

const connectItems = [
  {
    title: "GitHub profile",
    href: "https://github.com/qiuy-collab",
    meta: "Code, repos, public proof"
  },
  {
    title: "Personal website repository",
    href: "https://github.com/qiuy-collab/ravi-personal-site",
    meta: "Source and deployment history"
  },
  {
    title: "Workflow demo repository",
    href: "https://github.com/qiuy-collab/openclaw-demo-pr-flow",
    meta: "Review and CI/CD example"
  }
];

function ProfileTab() {
  return (
    <section className="tab-panel reveal visible space-y-6">
      <div className="tab-panel-header card">
        <span className="tab-panel-kicker">Profile</span>
        <h2 className="heading-2">A compact profile shaped like an execution system.</h2>
        <p className="body-text max-w-2xl">
          The structure follows the reference site&apos;s left-fixed profile rail and right-side tab rhythm,
          while the content is remapped to Ravi&apos;s own positioning, working method, and visible proof.
        </p>
      </div>

      <div className="numbers-grid">
        {summaryStats.map((item) => (
          <div key={item.label} className="summary-card">
            <span className="summary-label">{item.label}</span>
            <strong className="summary-value">{item.value}</strong>
          </div>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {profileBlocks.map((block) => (
          <section key={block.title} className="card section-card">
            <h3 className="heading-3 mb-3">{block.title}</h3>
            <p className="muted-text mb-4">{block.intro}</p>
            <ul className="space-y-2.5 stagger-in">
              {block.points.map((point) => (
                <li key={point} className="feature-row compact">
                  <span className="feature-dot" />
                  <span className="body-text text-sm">{point}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </section>
  );
}

function JourneyTab() {
  return (
    <section className="tab-panel reveal visible space-y-6">
      <div className="tab-panel-header card">
        <span className="tab-panel-kicker">Journey</span>
        <h2 className="heading-2">Capability built in layers, then made public.</h2>
      </div>

      <section className="card timeline-card">
        <div className="timeline space-y-8 stagger-in">
          {journeyTimeline.map((item) => (
            <div key={item.period} className="relative">
              <div className="timeline-dot glow-pulse" />
              <div className="rounded-lg p-4 transition-all duration-300 hover:bg-accent/5">
                <span className="kicker mb-1.5 block">{item.period}</span>
                <h3 className="heading-3 mb-2">{item.title}</h3>
                <p className="muted-text mb-3">{item.body}</p>
                <div className="flex flex-wrap gap-2">
                  {item.details.map((detail) => (
                    <span key={detail} className="tag">
                      {detail}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}

function WorkTab() {
  return (
    <section className="tab-panel reveal visible space-y-6">
      <div className="tab-panel-header card">
        <span className="tab-panel-kicker">Work</span>
        <h2 className="heading-2">A small set of public artifacts that make execution legible.</h2>
      </div>

      <div className="pillar-grid">
        {selectedWork.map((item) => (
          <Card
            key={item.title}
            badge={item.badge}
            title={item.title}
            description={item.description}
            href={item.href.startsWith("http") ? item.href : undefined}
            meta={item.meta}
          />
        ))}
      </div>

      <div className="card note-card">
        <span className="tab-panel-kicker">Selection logic</span>
        <p className="body-text mt-3">
          The point is not to list everything. It is to show enough shipped proof to explain how Ravi
          thinks, builds, and supports real work.
        </p>
      </div>
    </section>
  );
}

function ConnectTab() {
  return (
    <section className="tab-panel reveal visible space-y-6">
      <div className="tab-panel-header card">
        <span className="tab-panel-kicker">Connect</span>
        <h2 className="heading-2">Clear entry points for review, follow-up, and collaboration.</h2>
      </div>

      <div className="space-y-3">
        {connectItems.map((link) => (
          <a
            key={link.title}
            href={link.href}
            className="card-clickable group flex items-center justify-between p-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <h3 className="font-medium transition-colors group-hover:text-accent">{link.title}</h3>
              <p className="muted-text text-sm">{link.meta}</p>
            </div>
            <svg
              className="h-5 w-5 shrink-0 text-muted transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        ))}
      </div>

      <section id="connect-note" className="card note-card">
        <span className="tab-panel-kicker">Working style</span>
        <p className="body-text mt-3">
          Best fit: remote guidance, structured async collaboration, and projects where positioning,
          systems, and execution need to align quickly.
        </p>
      </section>
    </section>
  );
}

export default function HomePage() {
  const [activeTab, setActiveTab] = useState(tabItems[0].href);

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (tabItems.some((item) => item.href === hash)) {
        setActiveTab(hash);
      }
    };

    onHashChange();
    window.addEventListener("hashchange", onHashChange);

    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const changeTab = (nextTab: string) => {
    setActiveTab(nextTab);
    window.history.replaceState(null, "", `#${nextTab}`);
  };

  const currentTab = useMemo(() => {
    switch (activeTab) {
      case "journey":
        return <JourneyTab />;
      case "work":
        return <WorkTab />;
      case "connect":
        return <ConnectTab />;
      case "profile":
      default:
        return <ProfileTab />;
    }
  }, [activeTab]);

  return (
    <div className="page-layout single-page-shell">
      <MobileNav
        name={heroData.name}
        navItems={tabItems}
        activeTab={activeTab}
        onTabChange={changeTab}
      />
      <SideNav
        name={heroData.name}
        role={heroData.title}
        intro={heroData.intro}
        navItems={tabItems}
        activeTab={activeTab}
        onTabChange={changeTab}
      />

      <div className="content-area">
        <div className="content-container single-page-content animate-in">
          <div className="float absolute right-12 top-20 hidden h-24 w-24 rounded-full bg-accent/10 blur-2xl lg:block" />
          <div className="float-delayed absolute left-12 top-[32rem] hidden h-20 w-20 rounded-full bg-accent-secondary/10 blur-2xl lg:block" />

          <Hero {...heroData} />

          <div className="tab-strip" role="tablist" aria-label="Content tabs">
            {tabItems.map((tab) => {
              const isActive = activeTab === tab.href;
              return (
                <button
                  key={tab.href}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`tab-chip ${isActive ? "active" : ""}`}
                  onClick={() => changeTab(tab.href)}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {currentTab}
        </div>
      </div>
    </div>
  );
}
