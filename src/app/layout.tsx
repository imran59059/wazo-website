import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";

import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";

const font = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: {
    default: "Wazo | Employee Engagement Platform",
    template: "%s | Wazo",
  },
  description: "Wazo is the modern employee engagement platform. Boost performance, reduce turnover, and build a winning culture.",
  keywords: ["employee engagement", "performance management", "pulse surveys", "HR tech"],
  authors: [{ name: "Wazo Team" }],
  creator: "Wazo",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://wazo.com",
    title: "Wazo | Employee Engagement Platform",
    description: "The modern platform for employee engagement and performance.",
    siteName: "Wazo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wazo | Employee Engagement Platform",
    description: "Boost performance and reduce turnover with Wazo.",
    creator: "@wazo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} ${font.variable}`}>
        <GoogleAnalytics GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_ID || ""} />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
