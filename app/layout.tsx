import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import "./globals.css"
import { cn } from "@/libs/utils"
import { siteConfig } from "@/config/site"

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
          "antialiased bg-background text-text max-w-2xl mb-40 flex flex-col mx-4 mt-20 sm:mx-auto",
          GeistSans.className
        )}
      >
        {children}
      </body>
    </html>
  )
}
