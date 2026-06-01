import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getBlogPost, getAllBlogSlugs } from "@/lib/mdx";
import { MdxContent } from "@/components/mdx/mdx-content";
import { createBlogMetadata } from "@/lib/metadata";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return createBlogMetadata({
    title: post.title,
    description: post.description,
    slug: post.slug,
    date: post.date,
    tags: post.tags,
  });
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    url: `https://www.pamentorstudio.com/blog/${post.slug}`,
    author: {
      "@type": "Organization",
      name: "PA Mentor Studio",
      url: "https://www.pamentorstudio.com",
    },
    publisher: {
      "@type": "Organization",
      name: "PA Mentor Studio",
      url: "https://www.pamentorstudio.com",
    },
  };

  return (
    <div className="py-12 md:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-3xl mx-auto px-6">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring rounded-sm"
        >
          ← All articles
        </Link>

        {/* Article header */}
        <header className="mb-12 pb-12 border-b border-border">
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-3 mb-5">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-muted-foreground uppercase tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          <h1 className="font-heading text-4xl md:text-5xl font-semibold text-foreground leading-tight mb-6">
            {post.title}
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-6">
            {post.description}
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            {post.readingTime && <span>{post.readingTime}</span>}
            <span>{post.author}</span>
          </div>
        </header>

        {/* Article content */}
        <MdxContent source={post.content} />

        {/* Article footer */}
        <footer className="mt-16 pt-10 border-t border-border">
          <p className="text-xs text-muted-foreground leading-relaxed mb-6">
            This article is published for educational purposes. It does not
            constitute admissions consulting advice for your individual
            circumstances.{" "}
            <Link href="/disclaimer" className="underline underline-offset-2 hover:text-foreground">
              Full disclaimer
            </Link>
            .
          </p>
          <Link
            href="/blog"
            className="text-sm text-primary underline underline-offset-2 hover:text-primary/80 transition-colors"
          >
            ← Return to all articles
          </Link>
        </footer>
      </div>
    </div>
  );
}
