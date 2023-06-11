import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export function getAllPosts(type) {
  const postsDirectory = path.join(process.cwd(), `/src/${type}`);
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    return {
      type,
      slug,
      ...matterResult.data,
    };
  });

  // sort posts by most recent only for the Blog 
  if(type === 'blog') {
    return allPostsData.sort((postA, postB) => {
      let dateA = new Date(postA.date);
      let dateB = new Date(postB.date);

      return dateB - dateA;
    })
  } else {
    return allPostsData;
  }
}

export function getAllPostIds(type) {
  const postsDirectory = path.join(process.cwd(), `/src/${type}/`);
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: [fileName.replace(/\.md$/, '')],
      },
    };
  });
}

export async function getPostData(type, id) {
  const postsDirectory = path.join(process.cwd(), `/src/${type}`);
  const fullPath = path.join(postsDirectory, `${id[0]}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

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
