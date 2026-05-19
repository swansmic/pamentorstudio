import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

interface MdxContentProps {
  source: string;
}

export async function MdxContent({ source }: MdxContentProps) {
  const { content } = await compileMDX({
    source,
    options: {
      parseFrontmatter: false,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
      },
    },
  });

  return (
    <div className="prose prose-slate prose-editorial prose-lg max-w-none">
      {content}
    </div>
  );
}
