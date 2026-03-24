import type { Metadata, Viewport } from "next";
import "./globals.css";
import Link from "next/link";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";
const siteName = "Ravi | Product, Growth, AI";
const description =
  "Ravi (丘宇) helps teams and founders turn product strategy, AI workflows, and remote execution into measurable growth.";
const navItems = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Proof" },
  { href: "/contact", label: "Contact" }
];

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: "%s | Ravi"
  },
  description,
  applicationName: "Ravi Personal Site",
  keywords: [
    "Ravi",
    "丘宇",
    "product strategy",
    "growth",
    "AI consulting",
    "remote deployment",
    "teaching"
  ],
  authors: [{ name: "Ravi" }],
  creator: "Ravi",
  publisher: "Ravi",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    url: "/",
    title: siteName,
    description,
    siteName,
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Ravi personal brand website"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description,
    images: ["/og-image.svg"]
  },
  robots: {
    index: true,
    follow: true
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/apple-touch-icon.svg"
  }
};

export const viewport: Viewport = {
  themeColor: "#050816",
  colorScheme: "dark"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-ink text-white">
      <body className="min-h-dvh bg-ink text-white antialiased">
        <div className="relative isolate overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-grid bg-[size:32px_32px] opacity-20"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-[28rem] bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.18),transparent_55%)]"
          />
          <header className="sticky top-0 z-30 border-b border-white/10 bg-ink/85 backdrop-blur-sm">
            <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
              <Link href="/" className="flex items-center gap-3 text-sm font-medium text-white">
                <span className="flex size-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-base">
                  R
                </span>
                <span className="text-balance">
                  Ravi <span className="text-soft">| 丘宇</span>
                </span>
              </Link>
              <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href} className="transition-transform duration-200 hover:-translate-y-0.5 hover:text-white">
                    {item.label}
                  </Link>
                ))}
              </nav>
              <Link
                href="/contact"
                className="rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-sm font-medium text-accent transition-transform duration-200 hover:-translate-y-0.5 hover:bg-accent/15"
              >
                Book a call
              </Link>
            </div>
          </header>
          <main>{children}</main>
          <footer className="border-t border-white/10">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-slate-400 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
              <p className="text-pretty">Built for conversations, credibility, and conversion.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="mailto:ravi@example.com" className="hover:text-white">
                  ravi@example.com
                </Link>
                <Link href="https://github.com/" className="hover:text-white">
                  GitHub
                </Link>
                <Link href="https://www.linkedin.com/" className="hover:text-white">
                  LinkedIn
                </Link>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
