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
    <div className="mx-auto w-full max-w-5xl px-5 py-12 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.3em] text-accent">About</p>
        <h1 className="mt-3 text-balance text-4xl font-semibold text-text-primary sm:text-5xl">
          Ravi helps people ship with sharper thinking and less noise.
        </h1>
        <p className="mt-6 text-pretty text-lg leading-8 text-text-secondary">
          This first iteration positions Ravi as a strategic operator who can bridge product, growth, AI tooling,
          teaching, and deployment support. Where hard data is still being collected, the site uses restrained
          placeholder copy instead of empty gaps.
        </p>
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {highlights.map((item) => (
          <div key={item} className="hover-lift rounded-[1.5rem] border border-violet-100/50 bg-white/80 p-6 shadow-panel backdrop-blur-lg">
            <p className="text-pretty leading-7 text-text-secondary">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
