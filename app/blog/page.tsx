import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { ContentSection } from "@/components/sections/content-section";
import { ArticleCard } from "@/components/blog/article-card";
import { getAllBlogPosts } from "@/lib/mdx";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Blog",
  description:
    "Educational writing on PA school admissions, application strategy, and long-horizon preparation from PA Mentor Studio.",
  path: "/blog",
});

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <>
      <PageHeader
        label="PA Mentor Studio Blog"
        title="Educational writing on the admissions process."
        description="Substantive, honest perspective on PA school applications — written for applicants who want to understand the process, not just navigate it."
      />

      <ContentSection narrow>
        {posts.length === 0 ? (
          <p className="text-muted-foreground leading-relaxed py-8">
            Articles are coming soon. Check back as the editorial calendar
            develops.
          </p>
        ) : (
          <div>
            {posts.map((post) => (
              <ArticleCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </ContentSection>
    </>
  );
}
