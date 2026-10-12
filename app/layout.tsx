import type { Metadata, Viewport } from "next";
import Header from "@/components/Header";
import { experience, site } from "@/lib/content";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} | ${site.jobTitle}, Nigeria`, template: `%s | ${site.name}` },
  description: site.metaDescription,
  applicationName: `${site.name} portfolio`,
  authors: [{ name: site.fullName, url: site.url }],
  creator: site.fullName,
  keywords: [
    "Faruq Sosanya", "Faruq Olawale Sosanya", "operations coordinator Nigeria", "programme coordinator Nigeria",
    "executive assistant Nigeria remote", "founder support", "digital operations", "NGO operations", "global health operations",
    "Wix CMS", "workflow automation", "Abeokuta", "Ogun State", "remote operations Africa",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: "/",
    siteName: `${site.name} portfolio`,
    title: `${site.name} | ${site.jobTitle}`,
    description: site.metaDescription,
    locale: "en_GB",
    firstName: "Faruq",
    lastName: "Sosanya",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.jobTitle}`,
    description: "I build the systems that keep organisations running. Founder support and digital operations for health NGOs. Open to remote and hybrid roles.",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  other: { "llms-txt": "/llms.txt" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#0a0a0a" };

/** Structured data so search engines and AI assistants can identify the person behind the site. */
const personLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${site.url}/#person`,
      name: site.fullName,
      alternateName: site.name,
      jobTitle: site.jobTitle,
      description: site.description,
      url: site.url,
      image: `${site.url}/images/about.jpg`,
      email: `mailto:${site.email}`,
      telephone: site.phone.replace(/\s/g, ""),
      address: { "@type": "PostalAddress", addressLocality: "Abeokuta", addressRegion: "Ogun State", addressCountry: "NG" },
      alumniOf: { "@type": "CollegeOrUniversity", name: "Obafemi Awolowo University" },
      worksFor: [
        { "@type": "Organization", name: "The EOS Foundation", url: "https://theeosfoundation.org" },
        { "@type": "Organization", name: "Infectious Disease Alliance", url: "https://id-alliance.org" },
      ],
      hasOccupation: experience.slice(0, 3).map((r) => ({ "@type": "Occupation", name: r.title, description: r.points[0] })),
      knowsAbout: site.knowsAbout,
      sameAs: [site.linkedin, site.github],
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: `${site.name} portfolio`,
      inLanguage: "en",
      publisher: { "@id": `${site.url}/#person` },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }} />
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
