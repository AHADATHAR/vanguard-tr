import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Vanguard Build Co" },
      {
        name: "description",
        content:
          "Custom home construction, renovations and extensions, project management, and design and planning across Western Australia.",
      },
      { property: "og:title", content: "Services — Vanguard Build Co" },
      {
        property: "og:description",
        content:
          "Four disciplines, one standard. Residential construction services across Western Australia.",
      },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    n: "01",
    title: "Custom Home Construction",
    short: "New builds shaped to site, family, and place.",
    body: "From the first conversation to the final inspection, we build new residential homes designed around the way you live. Every Vanguard home is delivered under a fixed-price contract with a single point of accountability.",
    points: [
      "Single & double storey",
      "Coastal & inland sites",
      "Architect collaboration",
      "Energy-efficient builds",
    ],
  },
  {
    n: "02",
    title: "Renovations & Extensions",
    short: "Thoughtful additions to existing homes.",
    body: "Whether it's a careful kitchen reconfiguration or a full second-storey addition, we approach renovations with the same craft and structural rigour as a new build — and the discretion required to live on site.",
    points: [
      "Whole-home renovations",
      "Second-storey additions",
      "Kitchen & bathroom",
      "Heritage-sensitive work",
    ],
  },
  {
    n: "03",
    title: "Project Management",
    short: "One team, one accountability.",
    body: "Our directors run every project personally. You receive a defined schedule, a transparent budget, weekly site updates, and a single phone number to call from day one through the warranty period.",
    points: [
      "Fixed-price contracts",
      "Weekly progress reports",
      "Trade coordination",
      "Defects & warranty",
    ],
  },
  {
    n: "04",
    title: "Design & Planning",
    short: "From concept through approval.",
    body: "We collaborate with architects and designers, or work with our trusted partners, to bring your project from sketch through council approval. Built-in constructability advice protects your design and your budget.",
    points: [
      "Architect partnership",
      "Council approvals",
      "Site analysis",
      "Pre-construction planning",
    ],
  },
];

function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Four disciplines. One standard of craft."
        subtitle="Vanguard Build Co works exclusively on residential projects across Western Australia. Each service is delivered by the same in-house team, under the same exacting process."
      />

      <section className="py-20 md:py-28 container-x">
        <div className="space-y-px bg-border">
          {services.map((s, i) => (
            <article key={s.n} className="bg-background py-16 md:py-20">
              <div className="grid md:grid-cols-12 gap-10">
                <div className="md:col-span-4">
                  <div className="font-mono text-bronze text-sm tracking-widest">
                    {s.n} / {String(services.length).padStart(2, "0")}
                  </div>
                  <h2 className="mt-6 font-display text-4xl md:text-5xl leading-[1.05]">
                    {s.title}
                  </h2>
                  <p className="mt-5 text-lg italic text-muted-foreground">{s.short}</p>
                </div>
                <div className="md:col-span-7 md:col-start-6">
                  <p className="text-lg text-foreground/80 leading-relaxed">{s.body}</p>
                  <ul className="mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-3">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-center gap-3 text-sm">
                        <span className="h-px w-6 bg-bronze" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {i < services.length - 1 && <div className="hairline mt-16" />}
            </article>
          ))}
        </div>
      </section>

      <section className="bg-ink text-bone">
        <div className="container-x py-24 md:py-32 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-8">
            <h2 className="font-display text-4xl md:text-5xl leading-[1.1]">
              Tell us about your project —{" "}
              <span className="italic text-bronze">we'll take it from there.</span>
            </h2>
          </div>
          <div className="md:col-span-4 md:text-right">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-7 py-4 bg-bronze text-bronze-foreground text-xs uppercase tracking-[0.2em] hover:bg-bone hover:text-ink transition-colors"
            >
              Request a Quote <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
