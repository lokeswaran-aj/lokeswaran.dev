import getBlogPosts from "@/lib/blog"
import React from "react"
import type { Metadata } from "next"
import { siteConfig } from "@/config/site"

type Props = {
  params: { slug: string }
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata | undefined> {
  let blog = getBlogPosts().find((blog) => blog.slug === params.slug)
  if (!blog || !blog.metadata.published) {
    return
  }

  let {
    title,
    publishedAt: publishedTime,
    description: description,
  } = blog.metadata

  const ogSearchParam = new URLSearchParams()
  ogSearchParam.set("title", title)

  return {
    title,
    description,
    authors: { name: siteConfig.author, url: siteConfig.links.url },
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${siteConfig.links.url}/blog/${blog.slug}`,
      images: [
        {
          url: `/api/og?${ogSearchParam.toString()}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`/api/og?${ogSearchParam.toString()}`],
    },
  }
}
const BlogPage = (props: Props) => {
  return <div>BlogPage</div>
}

export default BlogPage
