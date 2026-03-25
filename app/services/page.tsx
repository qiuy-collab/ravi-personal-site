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
    <div>
      <h1>Services</h1>
      <p>Focused offers that can lead to stronger pipelines and stronger execution.</p>
    </div>
  );
}
