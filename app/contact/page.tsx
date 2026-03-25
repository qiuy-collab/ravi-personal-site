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
    <div className="mx-auto max-w-5xl px-6 py-12">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="flex-1">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider">Contact</p>
          <h1 className="mt-3 text-4xl font-bold text-text sm:text-5xl leading-tight">
            Start with one clear conversation.
          </h1>
          <p className="mt-6 text-muted leading-relaxed">
            This page uses placeholder contact details for now. Swap these links with Ravi&apos;s real inbox, meeting
            link, and social accounts before launch.
          </p>
        </div>
        <div className="w-full md:w-80 shrink-0">
          <div className="rounded-2xl bg-card border border-line p-6 shadow-card">
            <div className="space-y-3">
              {channels.map((channel) => (
                <Link
                  key={channel.label}
                  href={channel.href}
                  className="block rounded-xl bg-bg border border-line p-4 hover:border-accent transition-colors"
                >
                  <p className="text-sm text-muted">{channel.label}</p>
                  <p className="mt-1 font-medium text-text">{channel.value}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
