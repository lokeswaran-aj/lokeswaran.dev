import { siteConfig } from "@/config/site"
import getBlogPosts from "@/lib/blog"

export default async function sitemap() {
  let blogs = getBlogPosts().map((blog) => ({
    url: `${siteConfig.links.url}/blog/${blog.slug}`,
    lastModified: blog.metadata.publishedAt,
  }))

  let routes = ["", "/blog", "/work"].map((route) => ({
    url: `${siteConfig.links.url}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }))

  return [...routes, ...blogs]
}
