import getBlogPosts from "@/lib/blog"
import React, { Suspense } from "react"
import type { Metadata } from "next"
import { siteConfig } from "@/config/site"
import CustomMDX from "@/components/Mdx"
import BackButton from "@/components/ui/BackButton"

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
  let blog = getBlogPosts().find((blog) => blog.slug === props.params.slug)

  if (!blog || !blog.metadata.published) {
    return null
  }
  const { title, description, publishedAt, image } = blog.metadata

  return (
    <section>
      <BackButton link="/blog" />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogBlogBloging",
            headline: title,
            datePublished: publishedAt,
            dateModified: publishedAt,
            description: description,
            image: `${siteConfig.links.url}/og?title=${title}`,
            url: `${siteConfig.links.url}/blog/${blog.slug}`,
            author: {
              "@type": "Person",
              name: siteConfig.author,
            },
          }),
        }}
      />
      <h1 className="title font-medium text-2xl">{title}</h1>
      <div className="flex items-center mt-2 mb-8 text-sm">
        <Suspense fallback={<p className="h-5" />}>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {publishedAt}
          </p>
        </Suspense>
      </div>
      <article className="prose dark:prose-invert">
        <CustomMDX source={blog.content} />
      </article>
    </section>
  )
}

export default BlogPage
