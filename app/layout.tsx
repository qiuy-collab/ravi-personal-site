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
  themeColor: "#f5f8ff",
  colorScheme: "light"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-ink text-text-primary">
      <body className="min-h-dvh antialiased">
        <div className="relative isolate overflow-hidden">
          {/* 背景网格 */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-grid bg-[size:40px_40px] opacity-40"
          />
          {/* 渐变光晕效果 */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-[35rem] bg-gradient-radial opacity-60"
          />
          {/* 装饰性渐变斑点 */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 top-20 h-96 w-96 rounded-full bg-gradient-to-br from-violet-200/30 to-blue-200/20 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-20 bottom-20 h-80 w-80 rounded-full bg-gradient-to-tr from-blue-200/20 to-violet-200/20 blur-3xl"
          />
          {/* 导航栏 */}
          <header className="sticky top-0 z-30 border-b border-violet-100/50 bg-white/70 backdrop-blur-lg">
            <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
              <Link href="/" className="flex items-center gap-3 text-sm font-medium text-text-primary">
                <span className="flex size-10 items-center justify-center rounded-full border border-violet-200 bg-gradient-to-br from-violet-50 to-blue-50 text-base font-semibold text-accent shadow-sm">
                  R
                </span>
                <span className="text-balance">
                  Ravi <span className="text-soft">| 丘宇</span>
                </span>
              </Link>
              <nav className="hidden items-center gap-6 text-sm text-text-secondary md:flex">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="transition-all duration-200 hover:-translate-y-0.5 hover:text-accent"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <Link
                href="/contact"
                className="rounded-full bg-gradient-to-r from-violet-500 to-blue-500 px-5 py-2.5 text-sm font-medium text-white shadow-md shadow-violet-200/50 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-violet-300/50"
              >
                Book a call
              </Link>
            </div>
          </header>
          <main>{children}</main>
          {/* 页脚 */}
          <footer className="border-t border-violet-100/50 bg-white/50 backdrop-blur-sm">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-text-secondary sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
              <p className="text-pretty">Built for conversations, credibility, and conversion.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="mailto:ravi@example.com" className="transition-colors hover:text-accent">
                  ravi@example.com
                </Link>
                <Link href="https://github.com/" className="transition-colors hover:text-accent">
                  GitHub
                </Link>
                <Link href="https://www.linkedin.com/" className="transition-colors hover:text-accent">
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
