import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { siteConfig } from "@/lib/site"

const _inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Jewel City Locksmith | Fast, Reliable, Secure | Glendale & Greater LA",
    template: "%s | Jewel City Locksmith",
  },
  description:
    "Licensed, bonded & insured locksmith serving Glendale, Burbank, Pasadena and Greater Los Angeles. 24/7 emergency service. Call now for fast response!",
  generator: "v0.app",
  keywords: [
    "locksmith",
    "Glendale locksmith",
    "emergency locksmith",
    "24/7 locksmith",
    "car lockout",
    "residential locksmith",
    "commercial locksmith",
  ],
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: "Jewel City Locksmith | Fast, Reliable, Secure | Glendale & Greater LA",
    description:
      "Licensed, bonded & insured locksmith serving Glendale, Burbank, Pasadena and Greater Los Angeles. 24/7 emergency service. Call now for fast response!",
    images: [
      {
        url: siteConfig.defaultShareImage,
        width: 1200,
        height: 630,
        alt: "Jewel City Locksmith",
      },
    ],
    siteName: "Jewel City Locksmith",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jewel City Locksmith | Fast, Reliable, Secure | Glendale & Greater LA",
    description:
      "Licensed, bonded & insured locksmith serving Glendale, Burbank, Pasadena and Greater Los Angeles. 24/7 emergency service. Call now for fast response!",
    images: [siteConfig.defaultShareImage],
  },
  alternates: {
    canonical: siteConfig.url,
  },
  icons: {
    icon: [
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
      { url: "/favicon.ico" },
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#F36B21",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
