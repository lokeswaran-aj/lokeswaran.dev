import CustomMDX from "@/components/Mdx"

export default function Blog() {
  return (
    <div className="prose dark:prose-invert">
      <CustomMDX
        source={`# Blog
        This is my blog.`}
      />
    </div>
  )
}
