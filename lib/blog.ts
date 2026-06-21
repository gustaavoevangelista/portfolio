import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { BlogFrontmatter, BlogPost, BlogPostMeta } from "./blog-types";

const blogDirectory = path.join(process.cwd(), "content/blog");

function readBlogFiles() {
  if (!fs.existsSync(blogDirectory)) {
    return [];
  }

  return fs
    .readdirSync(blogDirectory)
    .filter((file) => file.endsWith(".mdx"))
    .sort();
}

export function getAllPosts(): BlogPostMeta[] {
  return readBlogFiles()
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const filePath = path.join(blogDirectory, fileName);
      const source = fs.readFileSync(filePath, "utf8");
      const { data } = matter(source);

      return {
        slug,
        ...(data as BlogFrontmatter),
      };
    })
    .sort(
      (a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime(),
    );
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(blogDirectory, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const source = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(source);

  return {
    slug,
    content,
    ...(data as BlogFrontmatter),
  };
}
