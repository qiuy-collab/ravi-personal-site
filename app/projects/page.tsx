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
    <div>
      <h1>Projects</h1>
      <p>Credibility without overclaiming.</p>
      <p>
        These are representative proof blocks for the first release. Replace them with named clients, screenshots,
        metrics, or case studies as Ravi gathers public-facing material.
      </p>
    </div>
  );
}
