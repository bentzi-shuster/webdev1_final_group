import { remark } from 'remark';
import html from 'remark-html';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
let postsDirectory = path.join(process.cwd(), 'src/posts');

export async function getPostData(id) {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
  
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
  
    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    const contentHtml = processedContent.toString();
  
    // Combine the data with the id and contentHtml
    return {
      id,
      contentHtml,
      ...matterResult.data,
    };
  }

  //function to get all post data
  export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames.map((fileName) => {
      return {
        params: {
          id: fileName.replace(/\.md$/, ''),
        },
      };
    });
  }


  //function to get all post data
  export function getAllPostsData() {
    let allPostsData = [];
    const fileNames = fs.readdirSync(postsDirectory);
    fileNames.forEach((fileName) => {
      let id = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const matterResult = matter(fileContents);
      allPostsData.push({
        id,
        ...matterResult.data,
      });
    });
    return allPostsData;
  }
  