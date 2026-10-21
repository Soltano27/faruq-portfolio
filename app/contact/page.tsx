import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { Mail, MapPin, Phone } from "@/components/Icons";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Faruq Sosanya about operations, programme coordination, executive and founder support, or digital operations roles. Based in Abeokuta, Nigeria; open to remote and hybrid work.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="contact-page">
      <div className="wrap contact-grid">
        <div>
          <h1>Let&apos;s talk</h1>
          <p className="contact-intro">
            I&apos;m open to remote and hybrid roles in operations coordination,
            programme coordination, executive and founder support, digital
            operations and project coordination. Send a short note about the
            role or project and I&apos;ll reply by email.
          </p>
          <ul className="contact-list">
            <li>
              <span className="c-icon">
                <MapPin />
              </span>
              <span>
                <strong>Location</strong>
                <span>{site.location}</span>
              </span>
            </li>
            <li>
              <span className="c-icon">
                <Mail size={18} />
              </span>
              <span>
                <strong>Email</strong>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </span>
            </li>
            <li>
              <span className="c-icon">
                <Phone />
              </span>
              <span>
                <strong>Phone</strong>
                <a href={`tel:${site.phone.replace(/\s/g, "")}`}>
                  {site.phone}
                </a>
              </span>
            </li>
          </ul>
          <a
            href="/cv/Faruq-Sosanya-CV.pdf"
            className="btn btn-ghost"
            download
            style={{ marginTop: "1.5rem" }}
          >
            Download CV
          </a>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
