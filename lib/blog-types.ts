export type BlogFrontmatter = {
  title: string;
  description: string;
  date: string;
  tags: string[];
  readingTime: string;
};

export type BlogPostMeta = BlogFrontmatter & {
  slug: string;
};

export type BlogPost = BlogPostMeta & {
  content: string;
};
