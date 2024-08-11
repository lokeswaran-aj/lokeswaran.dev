import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import "./globals.css"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/config/site"
import Header from "@/components/Header"
import { Analytics } from "@vercel/analytics/react"
import Providers from "@/components/Providers"

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
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
          GeistSans.className
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
        </Providers>
      </body>
    </html>
  )
}
