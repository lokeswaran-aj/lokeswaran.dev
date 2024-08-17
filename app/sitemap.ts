import { siteConfig } from "@/config/site"
import getBlogPosts from "@/lib/blog"
import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  let blogs: MetadataRoute.Sitemap = getBlogPosts().map((blog) => ({
    url: `${siteConfig.links.url}/blog/${blog.slug}`,
    lastModified: blog.metadata.publishedAt,
    changeFrequency: "monthly",
    priority: 0.9,
  }))

  let routes: MetadataRoute.Sitemap = ["", "/blog", "/work"].map((route) => ({
    url: `${siteConfig.links.url}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "monthly",
    priority: 1,
  }))

  return [...routes, ...blogs]
}
