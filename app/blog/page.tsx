import BackButton from "@/components/ui/BackButton"
import Heading from "@/components/ui/Heading"
import getBlogPosts from "@/lib/blog"
import Link from "next/link"

export default function Blog() {
  const allBlogs = getBlogPosts()
  return (
    <div>
      <BackButton link={"/"} />
      <Heading text="Read my blogs" />
      {allBlogs.map((blog) => (
        <Link key={blog.slug} href={`/blog/${blog.slug}`}>
          <div className="group flex flex-col p-2 -m-2 space-y-1 mb-4">
            <h4 className="group-hover:underline underline-offset-2">
              {blog.metadata.title}
            </h4>
            <p className="text-muted line-clamp-1 text-ellipsis no-underline hover:no-underline">
              {blog.metadata.description}
            </p>
          </div>
        </Link>
      ))}
    </div>
  )
}
