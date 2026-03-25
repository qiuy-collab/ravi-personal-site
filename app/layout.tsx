import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";
const siteName = "Ravi | Product, Growth, AI";
const description =
  "Ravi (丘宇) helps teams and founders turn product strategy, AI workflows, and remote execution into measurable growth.";

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
  themeColor: "#ffffff",
  colorScheme: "light"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* Background glow effect */}
        <div className="bg-glow" aria-hidden="true" />
        <main>{children}</main>
      </body>
    </html>
  );
}
