import Link from "next/link";

const pillars = [
  {
    title: "Product direction",
    body: "Clarify positioning, sharpen offers, and translate messy opportunities into a roadmap people can execute."
  },
  {
    title: "Growth systems",
    body: "Design content, funnels, and experiments that create traffic with a clear commercial path."
  },
  {
    title: "AI execution",
    body: "Turn AI from a demo into a working layer inside teaching, service delivery, and remote operations."
  }
];

const proof = [
  "Built remote-first systems for shipping guidance, deployment support, and async collaboration.",
  "Combines product thinking with direct-response clarity for websites, offers, and service pages.",
  "Comfortable bridging strategy, teaching, tooling, and hands-on implementation."
];

const offers = [
  "Growth advisory for product-led and service-led teams",
  "AI workflow design for teaching, client operations, and internal execution",
  "Landing pages, positioning, and credibility assets that convert strangers into conversations"
];

export default function HomePage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-24 px-5 py-10 sm:px-6 sm:py-14 lg:px-8">
      <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
            Product + Growth + AI + Remote Delivery
          </span>
          <h1 className="mt-6 max-w-4xl text-balance text-5xl font-semibold leading-tight sm:text-6xl lg:text-7xl">
            Ravi builds modern systems that turn attention into trust, and trust into work.
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-slate-300 sm:text-xl">
            Personal brand, product strategy, AI-enabled execution, and remote teaching support for founders, teams,
            and ambitious operators who need clear momentum.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-full bg-accent px-6 py-3 text-center text-base font-medium text-slate-950 transition-transform duration-200 hover:-translate-y-0.5"
            >
              Start a conversation
            </Link>
            <Link
              href="/projects"
              className="rounded-full border border-white/15 px-6 py-3 text-center text-base font-medium text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-white/5"
            >
              See proof
            </Link>
          </div>
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-panel">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <p className="text-sm text-slate-400">Current focus</p>
              <p className="mt-1 text-lg font-medium text-white">High-trust digital presence</p>
            </div>
            <span className="rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-sm text-emerald-300">
              Available
            </span>
          </div>
          <div className="space-y-5 pt-5">
            <div>
              <p className="text-sm text-slate-400">Ideal work</p>
              <p className="mt-1 text-pretty text-base text-slate-200">
                Advisory, brand positioning, AI deployment guidance, and remote operating systems.
              </p>
            </div>
            <div>
              <p className="text-sm text-slate-400">Best fit</p>
              <p className="mt-1 text-pretty text-base text-slate-200">
                Founders, educators, agencies, and product teams who need strategic clarity plus practical shipping.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-5 text-sm">
              <div>
                <p className="text-slate-400">Timezone</p>
                <p className="mt-1 font-medium text-white">APAC / Global</p>
              </div>
              <div>
                <p className="text-slate-400">Working style</p>
                <p className="mt-1 font-medium text-white">Remote-first</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {pillars.map((item) => (
          <article
            key={item.title}
            className="rounded-[1.5rem] border border-white/10 bg-panel/70 p-6 transition-transform duration-200 hover:-translate-y-1"
          >
            <p className="text-lg font-medium text-white">{item.title}</p>
            <p className="mt-3 text-pretty leading-7 text-slate-300">{item.body}</p>
          </article>
        ))}
      </section>

      <section className="grid gap-8 rounded-[2rem] border border-white/10 bg-white/5 p-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm uppercase text-slate-400">Why Ravi</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold text-white sm:text-4xl">
            The positioning is strategic. The delivery is practical.
          </h2>
        </div>
        <div className="space-y-4">
          {proof.map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-ink/60 p-5">
              <p className="text-pretty leading-7 text-slate-300">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-sm uppercase text-slate-400">Services</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold text-white sm:text-4xl">
            Built for credibility, conversion, and long-term leverage.
          </h2>
        </div>
        <div className="space-y-4">
          {offers.map((item) => (
            <div key={item} className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
              <span className="mt-1 size-2 rounded-full bg-accent" />
              <p className="text-pretty leading-7 text-slate-300">{item}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
