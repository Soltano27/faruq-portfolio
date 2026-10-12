import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, External } from "@/components/Icons";
import { formatDate, site, themes } from "@/lib/content";
import { postBodies } from "@/lib/posts";

type Props = { params: Promise<{ slug: string }> };

/** First ~155 characters of a post, on one line, for search snippets. */
function excerpt(body: string) {
  const text = body.replace(/\s+/g, " ").replace(/https?:\/\/\S+/g, "").trim();
  return text.length > 155 ? `${text.slice(0, 152).replace(/\s\S*$/, "")}...` : text;
}

function findPost(slug: string) {
  for (const theme of themes) {
    const post = theme.posts.find((p) => p.slug === slug);
    if (post) return { post, theme: theme.title };
  }
  return null;
}

export function generateStaticParams() {
  return Object.keys(postBodies).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const found = findPost(slug);
  const content = postBodies[slug];
  if (!found || !content) return {};
  const title = found.post.title.replace(/\.\.\.$/, "").trim();
  const description = excerpt(content.body);
  return {
    title,
    description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: { type: "article", url: `/blog/${slug}`, title, description, publishedTime: found.post.date || undefined, authors: [site.fullName] },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const found = findPost(slug);
  const content = postBodies[slug];
  if (!found || !content) notFound();
  const { post, theme } = found;

  return (
    <article className="article">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title.replace(/\.\.\.$/, "").trim(),
            description: excerpt(content.body),
            datePublished: post.date || undefined,
            url: `${site.url}/blog/${slug}`,
            mainEntityOfPage: `${site.url}/blog/${slug}`,
            author: { "@type": "Person", "@id": `${site.url}/#person`, name: site.fullName, url: site.url },
            articleSection: theme,
          }),
        }}
      />
      <div className="wrap article-wrap">
        <Link href="/blog" className="back-link"><ArrowLeft /> Back to all writing</Link>
        <p className="article-theme">{theme}</p>
        <h1>{post.title}</h1>
        <div className="article-meta">
          {post.date && <time dateTime={post.date}>{formatDate(post.date)}</time>}
        </div>
        <div className="article-body">{content.body}</div>
        <div className="article-foot">
          <a className="text-link" href={content.linkedin ?? `${site.linkedin}/recent-activity/all/`} target="_blank" rel="noopener noreferrer">
            Discuss this on LinkedIn <External />
          </a>
        </div>
      </div>
    </article>
  );
}
