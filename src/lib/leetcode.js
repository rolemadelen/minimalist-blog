import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export function getAllPostIds() {
  const postDirectory = path.join(process.cwd(), `/src/leetcode/`);
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
  const postDirectory = path.join(process.cwd(), `/src/leetcode/`);
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
