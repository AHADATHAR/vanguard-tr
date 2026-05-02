import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/project-5.jpg";
import p6 from "@/assets/project-6.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Vanguard Build Co" },
      {
        name: "description",
        content:
          "A selection of luxury residential homes built by Vanguard across Western Australia. Modern custom homes, coastal residences, and renovations.",
      },
      { property: "og:title", content: "Projects — Vanguard Build Co" },
      {
        property: "og:description",
        content: "Selected residential projects across Western Australia.",
      },
      { property: "og:image", content: p1 },
    ],
  }),
  component: ProjectsPage,
});

const projects = [
  {
    img: p1,
    title: "The Brookdale Residence",
    location: "Brookdale, WA",
    year: "2024",
    category: "Custom Home",
  },
  {
    img: p3,
    title: "Coastal Cliff House",
    location: "Yallingup, WA",
    year: "2024",
    category: "Custom Home",
  },
  {
    img: p2,
    title: "Whitewash on Sixth",
    location: "Mount Lawley, WA",
    year: "2023",
    category: "Custom Home",
  },
  {
    img: p5,
    title: "The Open Plan",
    location: "Cottesloe, WA",
    year: "2023",
    category: "Renovation",
  },
  {
    img: p4,
    title: "Brick & Brass",
    location: "Subiaco, WA",
    year: "2022",
    category: "Custom Home",
  },
  {
    img: p6,
    title: "Federation Reimagined",
    location: "Fremantle, WA",
    year: "2022",
    category: "Extension",
  },
];

function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Selected work · 2022 — 2024"
        title="A portfolio of considered, contemporary homes."
        subtitle="Each Vanguard project is a collaboration between client, architect, and builder — and a quiet record of what residential construction can be when treated with care."
      />

      <section className="py-20 md:py-28 container-x">
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-20 md:gap-y-28">
          {projects.map((p, i) => (
            <Link
              key={p.title}
              to="/contact"
              className={`group block ${i % 2 === 1 ? "md:mt-24" : ""}`}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover img-grayscale-hover"
                />
                <div className="absolute top-5 left-5 px-3 py-1.5 bg-background/80 backdrop-blur-sm text-[10px] uppercase tracking-[0.2em]">
                  {p.category}
                </div>
              </div>
              <div className="mt-6 flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-3xl leading-tight group-hover:text-bronze transition-colors">
                    {p.title}
                  </h3>
                  <div className="mt-2 text-sm text-muted-foreground">
                    {p.location} · {p.year}
                  </div>
                </div>
                <ArrowUpRight
                  className="text-muted-foreground group-hover:text-bronze group-hover:-translate-y-1 group-hover:translate-x-1 transition-all"
                  size={22}
                />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-bronze text-bronze-foreground">
        <div className="container-x py-24 md:py-32 text-center">
          <div className="eyebrow text-white/80">Your project, next</div>
          <h2 className="mt-5 font-display text-4xl md:text-6xl leading-[1.05] max-w-3xl mx-auto">
            We accept a limited number of <span className="italic">commissions each year.</span>
          </h2>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-3 px-8 py-4 bg-ink text-bone text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-ink transition-colors"
          >
            Enquire Now
          </Link>
        </div>
      </section>
    </>
  );
}
