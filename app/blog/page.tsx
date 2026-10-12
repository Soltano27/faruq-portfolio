import type { Metadata } from "next";
import PostCard from "@/components/PostCard";
import { themes } from "@/lib/content";

export const metadata: Metadata = {
  title: "Writing",
  description: "Writing by Faruq Sosanya on digital operations, information access in NGOs, and job search systems for graduates in Africa.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <header className="page-head">
        <div className="wrap narrow">
          <h1>Writing</h1>
          <p>Notes on operations, information systems in NGOs, and how graduates in Africa can get hired.</p>
        </div>
      </header>
      <section className="page-body">
        <div className="wrap narrow">
          {themes.map((t) => (
            <div className="writing-group" key={t.title}>
              <h2 className="writing-title">{t.title}</h2>
              <div className="writing-grid">{t.posts.map((p) => <PostCard key={p.slug} post={p} />)}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
