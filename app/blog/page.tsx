import Heading from "@/components/ui/Heading"
import getBlogPosts from "@/lib/blog"
import Link from "next/link"

export default function Blog() {
  const allBlogs = getBlogPosts()
  return (
    <div>
      <Heading text="Read my blogs" />
      {allBlogs.map((blog) => (
        <Link
          key={blog.slug}
          href={`/blog/${blog.slug}`}
          className="flex flex-col p-2 -m-2 space-y-1 mb-4 hover:bg-foreground/5"
        >
          <h4>{blog.metadata.title}</h4>
          <p className="text-muted line-clamp-1 text-ellipsis">
            {blog.metadata.description}
          </p>
        </Link>
      ))}
    </div>
  )
}
