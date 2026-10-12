import type { Metadata } from "next";
import Photo from "@/components/Photo";
import { experience } from "@/lib/content";

export const metadata: Metadata = {
  title: "Experience",
  description: "Work history of Faruq Sosanya: The EOS Foundation, Infectious Disease Alliance, Ogun State Laboratory Technical Working Group, INEC and Anambra State Polytechnic.",
  alternates: { canonical: "/experience" },
};

export default function ExperiencePage() {
  return (
    <>
      <header className="page-head exp-head">
        <div className="wrap exp-wrap">
          <h1>Experience</h1>
          <p>Founder support, digital operations, government health secretariat work and electoral field operations, most recent first.</p>
        </div>
      </header>
      <section className="exp-section">
        <div className="wrap exp-wrap">
          <ol className="exp-list">
            {experience.map((r) => (
              <li className="exp-card" key={r.org}>
                <div className="exp-meta">
                  {r.logo && (
                    <span className="exp-logo">
                      <Photo src={r.logo} alt="" />
                    </span>
                  )}
                  <h2 className={r.logo ? undefined : "has-dot"}>{r.org}</h2>
                  <p className="exp-title">{r.title}</p>
                  {r.tag && <span className="exp-tag">{r.tag}</span>}
                  <p className="exp-date">{r.date}</p>
                </div>
                <div className="exp-body">
                  <ul className="exp-points">
                    {r.points.map((p) => <li key={p}>{p}</li>)}
                  </ul>
                  {r.photo && (
                    <figure className="exp-photo">
                      <div className="exp-photo-img"><Photo src={r.photo} alt={r.caption ?? r.org} /></div>
                      {r.caption && <figcaption>{r.caption}</figcaption>}
                    </figure>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
