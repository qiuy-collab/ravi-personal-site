import type { Metadata } from "next";

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
    <div>
      <h1>Contact</h1>
      <p>Start with one clear conversation.</p>
      <p>
        This page uses placeholder contact details for now. Swap these links with Ravi&apos;s real inbox, meeting
        link, and social accounts before launch.
      </p>
    </div>
  );
}
