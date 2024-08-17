import { siteConfig } from "@/config/site"

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/"],
      },
    ],
    sitemap: `${siteConfig.links.url}/sitemap.xml`,
    host: siteConfig.links.url,
  }
}
