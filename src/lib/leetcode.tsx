import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postDirectory = path.join(process.cwd(), `/src/leetcode/`)

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postDirectory)
  return fileNames.map((fileName) => ({
    params: {
      id: [fileName.replace(/\.md$/, '')],
    },
  }))
}

export async function getPostData(id: string[]) {
  const fullPath = path.join(postDirectory, `${id[0]}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const { content: markdown, data: frontmatter } = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const processedContent = await remark().use(html).process(markdown)
  const contentHtml = processedContent.toString()

  return {
    id,
    contentHtml,
    markdown,
    ...frontmatter,
  }
}
