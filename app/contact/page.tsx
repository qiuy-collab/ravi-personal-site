import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Ravi for product strategy, AI implementation guidance, landing page work, or remote growth support.",
  alternates: {
    canonical: "/contact/"
  }
};

const channels = [
  {
    label: "Email",
    value: "ravi@example.com",
    href: "mailto:ravi@example.com"
  },
  {
    label: "Calendar",
    value: "Schedule a discovery call",
    href: "https://cal.com/"
  },
  {
    label: "LinkedIn",
    value: "Connect professionally",
    href: "https://www.linkedin.com/"
  }
];

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-5 py-12 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <p className="text-sm uppercase text-slate-400">Contact</p>
          <h1 className="mt-3 text-balance text-4xl font-semibold text-white sm:text-5xl">
            Start with one clear conversation.
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-slate-300">
            This page uses placeholder contact details for now. Swap these links with Ravi&apos;s real inbox, meeting
            link, and social accounts before launch.
          </p>
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-panel/70 p-6 shadow-panel">
          <div className="space-y-4">
            {channels.map((channel) => (
              <Link
                key={channel.label}
                href={channel.href}
                className="block rounded-2xl border border-white/10 bg-white/5 p-5 transition-transform duration-200 hover:-translate-y-1"
              >
                <p className="text-sm text-slate-400">{channel.label}</p>
                <p className="mt-1 text-lg font-medium text-white">{channel.value}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
