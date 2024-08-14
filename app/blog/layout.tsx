import type { Metadata } from "next"
import { siteConfig } from "@/config/site"
import BackButton from "@/components/ui/BackButton"

export const metadata: Metadata = {
  title: "Blogs",
  description: "All my blog posts reside here",
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
