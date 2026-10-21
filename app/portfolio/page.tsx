import type { Metadata } from "next";
import Photo from "@/components/Photo";
import { ArrowRight, ArrowUpRight } from "@/components/Icons";
import { liveSites, projects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Live websites and operational systems built by Faruq Sosanya: coalition websites, a fellowship learning platform, newsletter automation, recruitment workflow repair and job-search tools.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  return (
    <>
      <header className="page-head">
        <div className="wrap narrow">
          <h1>Selected work</h1>
          <p>
            Live websites first, then the systems behind the work: what was
            broken, what I built and what changed.
          </p>
          <a
            href="/cv/Faruq-Sosanya-CV.pdf"
            className="btn btn-primary"
            download
            style={{ marginTop: "1.5rem" }}
          >
            Download CV
          </a>
        </div>
      </header>

      <section className="page-body live-section">
        <div className="wrap narrow">
          <h2 className="writing-title">Live websites</h2>
          {liveSites.map((g) => (
            <div className="site-group" key={g.group}>
              <h3 className="site-group-label">{g.group}</h3>
              <div className="site-grid">
                {g.sites.map((site) => (
                  <a
                    className="site-card"
                    key={site.url}
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {site.image && (
                      <span className="site-thumb">
                        <Photo src={site.image} alt={`${site.name} homepage`} />
                      </span>
                    )}
                    <span className="site-url">
                      {site.url.replace("https://", "")}
                    </span>
                    <strong>{site.name}</strong>
                    <span className="site-desc">{site.description}</span>
                    <span className="site-visit">
                      Visit site <ArrowUpRight />
                    </span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="page-body">
        <div className="wrap narrow">
          <h2 className="writing-title">Systems and projects</h2>
          <div className="work-grid">
            {projects.map((p) => (
              <article className="work-card" key={p.title}>
                {p.cover ? (
                  <div className="work-cover">
                    <span className="cover-meta">{p.cover.meta}</span>
                    <strong>{p.cover.title}</strong>
                    <span className="cover-sub">{p.cover.subtitle}</span>
                  </div>
                ) : p.images && p.images.length > 0 ? (
                  <div
                    className={`work-media count-${p.images.length}${p.narrow ? " is-narrow" : ""}`}
                  >
                    {p.images.map((src, i) => (
                      <div className="work-img" key={src}>
                        <Photo src={src} alt={`${p.title}, image ${i + 1}`} />
                      </div>
                    ))}
                  </div>
                ) : null}
                <div className="work-body">
                  <h2>{p.title}</h2>
                  <p className="work-desc">{p.description}</p>
                  {p.tools && (
                    <p className="work-tools">
                      {p.cover ||
                      p.tools.startsWith("Book") ||
                      p.tools.startsWith("System prompt")
                        ? p.tools
                        : `Tools: ${p.tools}`}
                    </p>
                  )}
                  <ul className="chev-list">
                    {p.outcomes.map((o) => (
                      <li key={o}>{o}</li>
                    ))}
                  </ul>
                </div>
                <div className="work-foot">
                  {p.link ? (
                    <a
                      className="btn-sm"
                      href={p.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {p.link.label} <ArrowRight size={13} />
                    </a>
                  ) : (
                    <span className="on-request">Available on request</span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
