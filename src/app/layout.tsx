import Head from "next/head";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "@/assets/css/globals.css";

import { twMerge } from "tailwind-merge";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: false,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://gennyoon.net"),
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <script async src={`https://www.googletagmanager.com/gtag/js?id=G-51WGHWCJ9G`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-51WGHWCJ9G');
          `,
          }}
        />
      </Head>
      <body className={twMerge("min-h-screen bg-background font-sans antialiased", inter.className)}>
        <GoogleAnalytics gaId="G-51WGHWCJ9G" />

        {children}
      </body>
    </html>
  );
}
