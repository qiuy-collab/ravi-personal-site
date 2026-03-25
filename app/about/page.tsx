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
    <div className="mx-auto max-w-5xl px-6 py-12">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold text-accent uppercase tracking-wider">About</p>
        <h1 className="mt-3 text-4xl font-bold text-text sm:text-5xl leading-tight">
          Ravi helps people ship with sharper thinking and less noise.
        </h1>
        <p className="mt-6 text-lg text-muted leading-relaxed">
          This first iteration positions Ravi as a strategic operator who can bridge product, growth, AI tooling,
          teaching, and deployment support. Where hard data is still being collected, the site uses restrained
          placeholder copy instead of empty gaps.
        </p>
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {highlights.map((item) => (
          <div key={item} className="rounded-2xl bg-card border border-line p-6 shadow-card hover:shadow-hover transition-shadow">
            <p className="text-text leading-relaxed">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
