import type { Metadata } from "next";
import Link from "next/link";
import Photo from "@/components/Photo";
import PostCard from "@/components/PostCard";
import { ArrowRight, QuoteMark } from "@/components/Icons";
import { featuredPosts, milestones, testimonials } from "@/lib/content";

export const metadata: Metadata = { alternates: { canonical: "/" } };

/* A taste of each page, with a link through to the full version */
const featuredWork = [
  {
    title: "IDA newsletter system",
    summary:
      "Rebuilt the subscriber pipeline across Wix, Brevo and Google Sheets so a global health network reaches its members reliably.",
    image: "/images/portfolio-newsletter.jpg",
  },
  {
    title: "The EOS Foundation, from zero",
    summary:
      "Rebuilt the foundation's operating systems within 48 hours of joining, then built its website and fellowship learning platform.",
    image: "/images/site-eos.jpg",
  },
  {
    title: "IMAN medical outreach, Ogun State",
    summary:
      "Ran registration and patient flow for 100+ health screenings per session, keeping records accurate from intake to consultation.",
    image: "/images/portfolio-iman.jpg",
    position: "center 30%",
  },
];

const featuredQuotes = [
  "Rodrigo Scotini",
  "Tue Ingemann Paarup",
  "Gaspare Tocci",
];

export default function Home() {
  const quotes = featuredQuotes
    .map((name) => testimonials.find((t) => t.name === name))
    .filter((t): t is (typeof testimonials)[number] => Boolean(t));

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

      {/* Window into Experience */}
      <section className="milestones" aria-labelledby="milestones-title">
        <div className="wrap">
          <div className="row-head row-head-sm">
            <h2 id="milestones-title" className="eyebrow">
              Where I have worked
            </h2>
            <Link href="/experience" className="text-link">
              Full experience <ArrowRight />
            </Link>
          </div>
          <ul>
            {milestones.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Window into Portfolio */}
      <section className="section">
        <div className="wrap">
          <div className="row-head">
            <h2 className="section-title">Selected work</h2>
            <Link href="/portfolio" className="text-link">
              View all work <ArrowRight />
            </Link>
          </div>
          <div className="home-work">
            {featuredWork.map((w) => (
              <Link href="/portfolio" className="home-work-card" key={w.title}>
                <span
                  className="home-work-img"
                  style={{ "--pos": w.position } as React.CSSProperties}
                >
                  <Photo src={w.image} alt="" />
                </span>
                <span className="home-work-body">
                  <strong>{w.title}</strong>
                  <span>{w.summary}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Window into About */}
      <section className="section section-alt">
        <div className="wrap">
          <div className="row-head">
            <h2 className="section-title">What colleagues say</h2>
            <Link href="/about" className="text-link">
              All {testimonials.length} recommendations <ArrowRight />
            </Link>
          </div>
          <div className="home-quotes">
            {quotes.map((t) => (
              <figure className="testimonial" key={t.name}>
                <figcaption>
                  <span className="q-icon">
                    <QuoteMark />
                  </span>
                  <span>
                    <strong>{t.name}</strong>
                    <span className="t-role">{t.role}</span>
                  </span>
                </figcaption>
                <blockquote>“{t.quote}”</blockquote>
              </figure>
            ))}
          </div>
          <p className="home-note">
            Plus formal commendations from the Rector, the Registrar and the
            NYSC State Coordinator.{" "}
            <Link href="/about" className="text-link">
              Read more about me <ArrowRight />
            </Link>
          </p>
        </div>
      </section>

      {/* Window into Writing */}
      <section className="section">
        <div className="wrap">
          <div className="row-head">
            <h2 className="section-title">Featured writing</h2>
            <Link href="/blog" className="text-link">
              All writing <ArrowRight />
            </Link>
          </div>
          <div className="posts">
            {featuredPosts.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Window into Contact */}
      <section className="home-cta">
        <div className="wrap">
          <h2>Need someone to keep things running?</h2>
          <p>
            I&apos;m open to remote and hybrid roles with health NGOs and
            growing organisations.
          </p>
          <div className="actions">
            <Link href="/contact" className="btn btn-primary">
              Let&apos;s Work Together <ArrowRight />
            </Link>
            <a
              href="/cv/Faruq-Sosanya-CV.pdf"
              className="btn btn-ghost"
              download
            >
              Download CV
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
