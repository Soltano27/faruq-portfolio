import type { Metadata } from "next";
import Link from "next/link";
import Photo from "@/components/Photo";
import PostCard from "@/components/PostCard";
import { ArrowRight } from "@/components/Icons";
import { featuredPosts, milestones, postUrl, themes } from "@/lib/content";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-bg" aria-hidden="true">
          <div className="figure hero-portrait">
            <Photo src="/images/about.jpg" alt="" />
          </div>
        </div>
        <div className="wrap">
          <p className="status">Available for Opportunities</p>
          <h1>
            <span>I build the systems</span>
            <span>that keep organisations</span>
            <span className="yellow">running.</span>
          </h1>
          <p className="lede">
            Operations and programme coordinator for health NGOs and growing
            organisations. I support founders, run digital operations and build
            trackers, databases and websites that keep working after I hand them
            over. Based in Abeokuta, Nigeria. Open to remote and hybrid roles.
          </p>

          <div className="actions">
            <Link href="/portfolio" className="btn btn-primary">
              See My Work <ArrowRight />
            </Link>
            <Link href="/contact" className="btn btn-ghost">
              Let&apos;s Work Together
            </Link>
            <a
              href="/cv/Faruq-Sosanya-CV.pdf"
              className="btn btn-ghost"
              download
            >
              Download CV
            </a>
          </div>
          <dl className="hero-stats">
            <div>
              <dt>2,800+</dt>
              <dd>stakeholder records</dd>
            </div>
            <div>
              <dt>4,500+</dt>
              <dd>newsletter recipients, ~50% opens</dd>
            </div>
            <div>
              <dt>1,200+</dt>
              <dd>voter registrations, 0 errors</dd>
            </div>
            <div>
              <dt>1,600+</dt>
              <dd>library records digitised</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="milestones" aria-labelledby="milestones-title">
        <div className="wrap">
          <h2 id="milestones-title" className="eyebrow">
            Where I have worked
          </h2>
          <ul>
            {milestones.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2 className="section-title">What I write about</h2>
          <div className="themes">
            {themes.map((t) => (
              <article className="theme" key={t.title}>
                <h3>{t.title}</h3>
                <p>{t.summary}</p>
                {t.quotes.map((q) => (
                  <blockquote className="quote" key={q.slug}>
                    “{q.text}”
                    <br />
                    <Link className="text-link" href={postUrl(q.slug)}>
                      Read the post <ArrowRight />
                    </Link>
                  </blockquote>
                ))}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap">
          <div className="row-head">
            <h2 className="section-title">Featured writing</h2>
            <Link href="/blog" className="text-link">
              View all <ArrowRight />
            </Link>
          </div>
          <div className="posts">
            {featuredPosts.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
