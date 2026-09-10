import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import { siteConfig } from "@/lib/content";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.name} | ${siteConfig.taglineEn}`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "The Accountability App is a fully integrated leadership development platform for CHROs, CEOs, and operations leaders in aerospace, defense, and electronics manufacturing. Lead with Accountability.",
  keywords: [
    "leadership development",
    "accountability app",
    "leadership development platform",
    "aerospace leadership training",
    "manufacturing leadership development",
    "operations leadership software",
  ],
  authors: [{ name: siteConfig.founder }],
  creator: siteConfig.legalName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | ${siteConfig.taglineEn}`,
    description:
      "A fully integrated leadership development platform where your leaders develop themselves while you monitor their progress in real time.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.taglineEn}`,
    description: "The Accountability App — a fully integrated leadership development platform.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: "#04342C",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="flex min-h-screen flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
