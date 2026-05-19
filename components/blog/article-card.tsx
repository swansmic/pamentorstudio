import Link from "next/link";
import type { BlogPost } from "@/types/content";

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

interface ArticleCardProps {
  post: BlogPost;
}

export function ArticleCard({ post }: ArticleCardProps) {
  return (
    <article className="group border-b border-border py-10 first:pt-0 last:border-0">
      <div className="flex flex-col gap-3">
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-3" aria-label="Article tags">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs text-muted-foreground uppercase tracking-wider"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <h2 className="font-heading text-xl md:text-2xl font-semibold text-foreground leading-snug group-hover:text-primary transition-colors">
          <Link
            href={`/blog/${post.slug}`}
            className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring rounded-sm"
          >
            {post.title}
          </Link>
        </h2>

        <p className="text-muted-foreground leading-relaxed">{post.description}</p>

        <div className="flex items-center gap-4 pt-1">
          <time
            dateTime={post.date}
            className="text-sm text-muted-foreground"
          >
            {formatDate(post.date)}
          </time>
          {post.readingTime && (
            <span className="text-sm text-muted-foreground">
              {post.readingTime}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
