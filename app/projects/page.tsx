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
    <div className="mx-auto w-full max-w-5xl px-5 py-12 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm uppercase text-slate-400">Proof</p>
        <h1 className="mt-3 text-balance text-4xl font-semibold text-white sm:text-5xl">
          Credibility without overclaiming.
        </h1>
        <p className="mt-6 text-pretty text-lg leading-8 text-slate-300">
          These are representative proof blocks for the first release. Replace them with named clients, screenshots,
          metrics, or case studies as Ravi gathers public-facing material.
        </p>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {projects.map((project) => (
          <article key={project.title} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
            <p className="text-lg font-medium text-white">{project.title}</p>
            <p className="mt-3 text-pretty leading-7 text-slate-300">{project.outcome}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
