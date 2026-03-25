import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Ravi (丘宇), a product and growth operator focused on AI-enabled execution, remote teaching support, and strong digital positioning.",
  alternates: {
    canonical: "/about/"
  }
};

const highlights = [
  "Product strategy rooted in actual user decisions, not abstract slideware.",
  "Growth thinking that respects both brand perception and measurable outcomes.",
  "AI systems shaped for real workflows: content, delivery, support, and coordination.",
  "Remote-first execution with an educator's instinct for clarity and transfer."
];

export default function AboutPage() {
  return (
    <div>
      <h1>About</h1>
      <p>Ravi helps people ship with sharper thinking and less noise.</p>
      <p>
        This first iteration positions Ravi as a strategic operator who can bridge product, growth, AI tooling,
        teaching, and deployment support. Where hard data is still being collected, the site uses restrained
        placeholder copy instead of empty gaps.
      </p>
    </div>
  );
}
