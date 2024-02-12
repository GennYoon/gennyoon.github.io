import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "@/assets/css/globals.css";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { twMerge } from "tailwind-merge";
import { ThemeProvider } from "@/components/ThemeProvider";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "GennYoon Blog",
  description: "GennYoon Blog",
  keywords: ["React", "NextJS", "Supabase", "GennYoon", "Blog"],
  authors: {
    name: "GennYoon",
    url: "https://portfolio.gennyoon.net",
  },
  openGraph: {
    type: "website",
    url: "https://gennyoon.net",
    title: "GennYoon Blog",
    images: {
      url: "https://udakkdpxfzwyalqyjmiz.supabase.co/storage/v1/object/public/images/meta-image.png",
      width: 1200,
      height: 630,
    },
    description: "GennYoon Blog",
    siteName: "GennYoon Blog",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary",
    site: "@yoonwonyoul",
    title: "GennYoon Blog",
    description: "GennYoon Blog",
    creator: "@yoonwonyoul",
    images: "https://udakkdpxfzwyalqyjmiz.supabase.co/storage/v1/object/public/images/meta-image.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={twMerge("min-h-screen bg-background font-sans antialiased", inter.className)}>
        <GoogleAnalytics gaId="G-51WGHWCJ9G" />
        <ThemeProvider attribute="class" defaultTheme="dark" storageKey="blog-ui-theme" enableSystem disableTransitionOnChange>
          <Header />
          <main className="flex flex-col items-center w-full max-w-[1400px] ml-auto mr-auto pt-28">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
