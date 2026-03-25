import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected proof points and representative capabilities across product positioning, AI systems, and conversion-oriented execution.",
  alternates: {
    canonical: "/projects/"
  }
};

const projects = [
  {
    title: "Personal brand systems",
    outcome: "Designed trust-building web presence and messaging layers for warm and cold traffic."
  },
  {
    title: "AI-enabled teaching support",
    outcome: "Structured repeatable workflows for content, response quality, and remote handoff."
  },
  {
    title: "Growth and landing page strategy",
    outcome: "Mapped offers, proof, and narrative sequence to improve conversion quality."
  }
];

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold text-accent uppercase tracking-wider">Proof</p>
        <h1 className="mt-3 text-4xl font-bold text-text sm:text-5xl leading-tight">
          Credibility without overclaiming.
        </h1>
        <p className="mt-6 text-muted leading-relaxed">
          These are representative proof blocks for the first release. Replace them with named clients, screenshots,
          metrics, or case studies as Ravi gathers public-facing material.
        </p>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {projects.map((project) => (
          <article key={project.title} className="rounded-2xl bg-card border border-line p-6 shadow-card hover:shadow-hover transition-shadow">
            <p className="text-lg font-semibold text-text">{project.title}</p>
            <p className="mt-3 text-muted leading-relaxed">{project.outcome}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
