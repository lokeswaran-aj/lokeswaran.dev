import type { Metadata } from "next"
import { siteConfig } from "@/config/site"
import BackButton from "@/components/ui/BackButton"

export const metadata: Metadata = {
  title: "Blog | " + siteConfig.name,
  description: "All my blog posts",
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <BackButton link="/" />
      {children}
    </section>
  )
}
