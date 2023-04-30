import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export function getAllPosts(lang) {
    const postsDirectory = path.join(process.cwd(), `/src/blog/${lang}`);
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        const slug = fileName.replace(/\.md$/, '');
        
        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        
        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);
        return {
            lang,
            slug,
            ...matterResult.data,
        };
    });

    return allPostsData;
}

export function getAllPostIds(lang) {
    const postsDirectory = path.join(process.cwd(), `/src/blog/${lang}/`);
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames.map((fileName) => {
        return {
            params: {
                id: [fileName.replace(/\.md$/, '')],
            },
        };
    });
}

export async function getPostData(lang, id) {
    const postsDirectory = path.join(process.cwd(), `/src/blog/${lang}`);
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
