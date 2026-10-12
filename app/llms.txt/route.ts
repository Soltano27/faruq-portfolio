import { experience, liveSites, projects, site, testimonials, themes } from "@/lib/content";
import { postBodies } from "@/lib/posts";

export const dynamic = "force-static";

/** Plain-text summary for AI assistants (llms.txt convention), generated from the same content as the site. */
export function GET() {
  const lines: string[] = [
    `# ${site.fullName}`,
    "",
    `> ${site.description}`,
    "",
    `- Location: ${site.location}`,
    `- Email: ${site.email}`,
    `- LinkedIn: ${site.linkedin}`,
    `- GitHub: ${site.github}`,
    `- Education: B.Sc. Biochemistry and Molecular Biology, Obafemi Awolowo University (Second Class Upper)`,
    "",
    "## Experience",
    ...experience.map((r) => `- ${r.title}, ${r.org} (${r.date}): ${r.points[0]}`),
    "",
    "## Live websites",
    ...liveSites.flatMap((g) => g.sites.map((s) => `- [${s.name}](${s.url}): ${s.description}`)),
    "",
    "## Selected projects",
    ...projects.map((p) => `- ${p.title}: ${p.description}`),
    "",
    "## Recommendations",
    ...testimonials.slice(0, 5).map((t) => `- "${t.quote}" (${t.name}, ${t.role})`),
    "",
    "## Pages",
    `- [Experience](${site.url}/experience)`,
    `- [Portfolio](${site.url}/portfolio)`,
    `- [About](${site.url}/about)`,
    `- [Contact](${site.url}/contact)`,
    "",
    "## Writing",
    ...themes.flatMap((t) => t.posts).filter((p) => p.slug in postBodies).map((p) => `- [${p.title.replace(/\.\.\.$/, "")}](${site.url}/blog/${p.slug})`),
    "",
  ];
  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
