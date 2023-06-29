import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export function getAllPosts() {
  const postDirectory = path.join(process.cwd(), `/src/post`);
  const fileNames = fs.readdirSync(postDirectory);

  const allpostData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    return {
      slug,
      ...matterResult.data,
    };
  });

  // sort post by most recent only for the Blog
  allpostData.sort((postA, postB) => {
    let dateA = new Date(postA.date);
    let dateB = new Date(postB.date);

    return dateB - dateA;
  });

  return allpostData;
}

export function getAllPostIds() {
  const postDirectory = path.join(process.cwd(), `/src/post/`);
  const fileNames = fs.readdirSync(postDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: [fileName.replace(/\.md$/, "")],
      },
    };
  });
}

export async function getPostData(id) {
  const postDirectory = path.join(process.cwd(), `/src/post/`);
  const fullPath = path.join(postDirectory, `${id[0]}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    markdown: matterResult.content,
    ...matterResult.data,
  };
}
