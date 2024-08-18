import type { Metadata, Viewport } from "next"
import { GeistSans } from "geist/font/sans"
import { Fira_Code } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/config/site"
import Header from "@/components/Header"
import { Analytics } from "@vercel/analytics/react"
import Providers from "@/components/Providers"
import { SpeedInsights } from "@vercel/speed-insights/next"

const FiraCode = Fira_Code({ subsets: ["latin"], variable: "--fira-code" })

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL ?? siteConfig.links.url
  ),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.author}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.links.url,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: siteConfig.name,
    card: "summary_large_image",
  },
  verification: {
    google: "p1iiyT6ruqWpFWpJlMQzvcSP75S-4eL8eyNZhOT82ww",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "antialiased bg-background text-text max-w-2xl  mx-12 sm:mx-auto",
          GeistSans.className,
          FiraCode.variable
        )}
      >
        <Providers>
          <div className="flex flex-col py-20 min-h-[calc(100dvh-3rem)]">
            {children}
          </div>
          <div className="fixed inset-x-0 bottom-0 z-20 mx-auto mb-4 w-screen flex justify-center h-12 px-6">
            <Header />
          </div>
          <Analytics />
          <SpeedInsights />
        </Providers>
      </body>
    </html>
  )
}
