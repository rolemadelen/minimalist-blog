import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postDirectory = path.join(process.cwd(), `/src/post`)
const diaryDirectory = path.join(process.cwd(), `/src/diary`)

interface Frontmatter {
  slug?: string
  [key: string]: any
}

export function getDiaryPosts(): Frontmatter {
  const fileNames = fs.readdirSync(diaryDirectory)

  const allpostData: Frontmatter = fileNames.map((fileName) => {
    const slug: string = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath: string = path.join(postDirectory, fileName)
    const fileContents: string = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const { data: frontmatter } = matter(fileContents)
    return { slug, ...frontmatter }
  })

  // sort the posts by latest date
  allpostData.sort((postA: Frontmatter, postB: Frontmatter) => {
    let [dateA, dateB] = [new Date(postA.date), new Date(postB.date)]
    return dateB.getTime() - dateA.getTime()
  })

  return allpostData
}

export function getAllPosts(): Frontmatter {
  const fileNames = fs.readdirSync(postDirectory)

  const allpostData: Frontmatter = fileNames.map((fileName) => {
    const slug: string = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath: string = path.join(postDirectory, fileName)
    const fileContents: string = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const { data: frontmatter } = matter(fileContents)
    return { slug, ...frontmatter }
  })

  // sort the posts by latest date
  allpostData.sort((postA: Frontmatter, postB: Frontmatter) => {
    let [dateA, dateB] = [new Date(postA.date), new Date(postB.date)]
    return dateB.getTime() - dateA.getTime()
  })

  return allpostData
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postDirectory)
  return fileNames.map((fileName) => {
    return { params: { id: [fileName.replace(/\.md$/, '')] } }
  })
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
