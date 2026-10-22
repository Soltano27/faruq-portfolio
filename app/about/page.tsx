import type { Metadata } from "next";
import Photo from "@/components/Photo";
import ScrollGrayscale from "@/components/ScrollGrayscale";
import { External, QuoteMark } from "@/components/Icons";
import { site, testimonials } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Faruq Olawale Sosanya: operations and programme coordinator supporting founders and health NGOs, with recommendations from IDA's Executive Director and colleagues.",
  alternates: { canonical: "/about" },
};

const commendationsLink =
  "https://drive.google.com/file/d/1rOZldmvESJUpGywMR3iG3LzaSgPQdsdE/view?usp=sharing";

const commendations = [
  {
    from: "Anambra State Polytechnic",
    office: "Office of the Rector",
    reason:
      "Exemplary service, initiative and outstanding contributions, including systems improvement and campus support projects.",
    signed: "Dr. Njideka Rita Chiekezie, Ag. Rector",
    date: "13 November 2025",
  },
  {
    from: "Anambra State Polytechnic",
    office: "Office of the Registrar",
    reason:
      "Diligence, reliability and contribution to academic record management in the Library Unit.",
    signed: "Dr. Edith Nkechi Udalla, Ag. Registrar",
    date: "24 December 2025",
  },
  {
    from: "NYSC Anambra State Secretariat",
    office: "Office of the State Coordinator",
    reason:
      "Discipline, diligence and commitment during the 2024 Batch C service year.",
    signed: "Mrs. Pauline Ojisua, State Coordinator",
    date: "12 December 2025",
  },
];

export default function AboutPage() {
  return (
    <section className="about-page">
      <ScrollGrayscale />
      <div className="wrap about-grid">
        <div className="about-photo-frame">
          <div className="about-photo">
            <Photo src="/images/about.jpg" alt="Portrait of Faruq Sosanya" />
          </div>
        </div>
        <div className="about-main">
          <h1>About</h1>
          <p className="pull">
            I turn scattered work into systems a team can rely on.
          </p>
          <div className="about-body">
            <p>
              I&apos;m Faruq Olawale Sosanya, an operations and programme
              coordinator based in Abeokuta, Nigeria. I studied Biochemistry and
              Molecular Biology at Obafemi Awolowo University and moved into
              operations through NYSC, electoral field work and global health.
            </p>
            <p>
              At The EOS Foundation I work directly with the founder. When the
              foundation relaunched, I rebuilt its operating systems within 48
              hours of joining, then built its website and fellowship learning
              platform from scratch. At the Infectious Disease Alliance I built
              the stakeholder records, newsletter system and recruitment
              workflow behind a global health network, and I onboard the people
              who now run them. I also serve as rapporteur for the Ogun State
              Laboratory Technical Working Group.
            </p>
            <p>
              Some numbers I can explain in detail: 2,800+ stakeholder records
              across 13 committees; a newsletter averaging about 50% opens
              across 4,500+ recipients; 1,200+ voter registrations with zero
              errors at INEC; 1,600+ library records digitised; and written
              commendations from the Rector, the Registrar and the NYSC State
              Coordinator during my service year.
            </p>
            <p>
              I use Claude every day for research, drafting and building, and I
              wrote Land The Role, a job-search guide for African graduates.
            </p>
          </div>

          <a
            href="/cv/Faruq-Sosanya-CV.pdf"
            className="btn btn-primary"
            download
            style={{ marginTop: "2rem" }}
          >
            Download CV
          </a>

          <div className="commendations">
            <div className="colleagues-head">
              <h2>Formal commendations</h2>
              <span className="count-pill">{commendations.length} letters</span>
            </div>
            <ul className="commend-list">
              {commendations.map((c) => (
                <li className="commend" key={c.office}>
                  <p className="commend-from">
                    <strong>{c.from}</strong>
                    <span>{c.office}</span>
                  </p>
                  <p className="commend-reason">{c.reason}</p>
                  <p className="commend-sign">
                    {c.signed} · <time>{c.date}</time>
                  </p>
                </li>
              ))}
            </ul>
            <a
              className="text-link li-link"
              href={commendationsLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read the letters <External />
            </a>
          </div>

          <div className="colleagues">
            <div className="colleagues-head">
              <h2>What colleagues say</h2>
              <span className="count-pill">
                {testimonials.length} recommendations
              </span>
            </div>
            <div className="testimonials">
              {testimonials.map((t) => (
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
            <a
              className="text-link li-link"
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              View all recommendations on LinkedIn → <External />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
