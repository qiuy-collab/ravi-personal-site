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
    <html lang="en" className="bg-bg text-text">
      <body className="min-h-screen bg-bg text-text antialiased">
        <div className="relative min-h-screen">
          {/* 背景装饰 */}
          <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 bg-grid opacity-30"
          />
          {/* 导航栏 */}
          <header className="sticky top-0 z-50 backdrop-blur-md bg-bg/80 border-b border-line">
            <nav className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
              <Link href="/" className="flex items-center gap-3 text-text hover:opacity-80 transition-opacity">
                <span className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-accent2 flex items-center justify-center text-white font-semibold text-lg">
                  R
                </span>
                <span className="font-medium text-lg">
                  Ravi <span className="text-muted font-normal">丘宇</span>
                </span>
              </Link>
              <div className="flex items-center gap-6">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-muted hover:text-text transition-colors text-sm font-medium"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </nav>
          </header>
          {/* 主内容 */}
          <main className="relative z-10">
            {children}
          </main>
          {/* 页脚 */}
          <footer className="border-t border-line bg-bg/50 backdrop-blur-sm">
            <div className="mx-auto max-w-5xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
              <p>Built for conversations, credibility, and conversion.</p>
              <div className="flex items-center gap-4">
                <Link href="mailto:ravi@example.com" className="hover:text-accent transition-colors">
                  ravi@example.com
                </Link>
                <Link href="https://github.com/" className="hover:text-accent transition-colors">
                  GitHub
                </Link>
                <Link href="https://www.linkedin.com/" className="hover:text-accent transition-colors">
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
