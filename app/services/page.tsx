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
    <div className="mx-auto w-full max-w-5xl px-5 py-12 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.3em] text-accent">Services</p>
        <h1 className="mt-3 text-balance text-4xl font-semibold text-text-primary sm:text-5xl">
          Focused offers that can lead to stronger pipelines and stronger execution.
        </h1>
      </div>
      <div className="mt-10 grid gap-5">
        {services.map((service) => (
          <article key={service.name} className="hover-lift rounded-[1.75rem] border border-violet-100/50 bg-white/80 p-6 shadow-panel backdrop-blur-lg">
            <h2 className="text-2xl font-medium text-text-primary">{service.name}</h2>
            <p className="mt-3 max-w-3xl text-pretty leading-7 text-text-secondary">{service.detail}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
