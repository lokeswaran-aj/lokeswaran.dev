import path from "path"
import fs from "fs"

export type Metadata = {
  title: string
  description: string
  image?: string
  publishedAt: string
  published: boolean
}
const parseFrontMatter = (fileContent: string) => {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/
  const match = frontmatterRegex.exec(fileContent)
  const frontMatterBlock = match![1]
  const content = fileContent.replace(frontmatterRegex, "").trim()
  const frontMatterLines = frontMatterBlock.trim().split("\n")
  const metadata: any = {}

  frontMatterLines.forEach((line) => {
    const [key, ...valueArr] = line.split(": ")
    let value = valueArr.join(": ").trim()
    value = value.replace(/^['"](.*)['"]$/, "$1") // Remove quotes
    metadata[key.trim() as keyof Metadata] = value
  })
  return { metadata: metadata as Metadata, content }
}

const getMDXFiles = (dir: string) => {
  return fs.readdirSync(dir).filter((file) => file.endsWith(".mdx"))
}

const readMDXFile = (filePath: string) => {
  const rawContent = fs.readFileSync(filePath, "utf-8")
  return parseFrontMatter(rawContent)
}

const getMDXData = (dir: string) => {
  const mdxFiles = getMDXFiles(dir)
  const MDXData = mdxFiles.map((mdxFile: string) => {
    const { metadata, content } = readMDXFile(path.join(dir, mdxFile))
    const slug = path.basename(mdxFile, path.extname(mdxFile))
    return {
      metadata,
      slug,
      content,
    }
  })
  return MDXData.sort((a, b) => {
    return new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
      ? -1
      : 1
  })
}

const getBlogPosts = () => {
  return getMDXData(path.join(process.cwd(), "content"))
}

export default getBlogPosts
