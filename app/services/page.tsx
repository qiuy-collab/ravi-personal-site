import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Ravi offers product advisory, AI workflow design, landing page positioning, and remote guidance for teams that need clear execution.",
  alternates: {
    canonical: "/services/"
  }
};

const services = [
  {
    name: "Positioning and offer design",
    detail: "Clarify who the offer is for, what outcome it creates, and how the website should frame trust."
  },
  {
    name: "AI workflow deployment",
    detail: "Design practical systems for content generation, teaching operations, and service delivery."
  },
  {
    name: "Product and growth advisory",
    detail: "Map experiments, messaging, and product priorities to the metrics that actually matter."
  },
  {
    name: "Remote implementation guidance",
    detail: "Support execution across async teams with clean handoff, feedback, and documentation patterns."
  }
];

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold text-accent uppercase tracking-wider">Services</p>
        <h1 className="mt-3 text-4xl font-bold text-text sm:text-5xl leading-tight">
          Focused offers that can lead to stronger pipelines and stronger execution.
        </h1>
      </div>
      <div className="mt-10 grid gap-4">
        {services.map((service) => (
          <article key={service.name} className="rounded-2xl bg-card border border-line p-6 shadow-card hover:shadow-hover transition-shadow">
            <h2 className="text-xl font-semibold text-text">{service.name}</h2>
            <p className="mt-3 max-w-3xl text-muted leading-relaxed">{service.detail}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
