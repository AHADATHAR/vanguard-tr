import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import aboutCraft from "@/assets/about-craft.jpg";
import project5 from "@/assets/project-5.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Vanguard Build Co" },
      {
        name: "description",
        content:
          "Vanguard Build Co is a Western Australian residential builder devoted to quality, trust, and innovation. Learn about our mission and values.",
      },
      { property: "og:title", content: "About Vanguard Build Co" },
      {
        property: "og:description",
        content:
          "A Western Australian residential builder devoted to quality, trust, and innovation.",
      },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    n: "I",
    title: "Quality, without exception",
    desc: "Every joint, every junction, every finish — held to a standard that doesn't bend with budget or schedule.",
  },
  {
    n: "II",
    title: "Trust as the foundation",
    desc: "Fixed-price contracts, weekly site updates, and a single point of contact from sketch to handover.",
  },
  {
    n: "III",
    title: "Innovation in service of craft",
    desc: "We pair traditional building knowledge with modern materials, energy thinking, and digital project tools.",
  },
];

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Vanguard"
        title="A Western Australian builder of houses meant to outlast us."
        subtitle="Founded on the conviction that a home is the most important thing most families ever commission — and that it deserves to be treated that way."
      />

      {/* Mission */}
      <section className="py-28 md:py-40 container-x">
        <div className="grid md:grid-cols-12 gap-12 md:gap-20 items-center">
          <div className="md:col-span-6">
            <img
              src={aboutCraft}
              alt="Vanguard build site at golden hour"
              loading="lazy"
              width={1280}
              height={1600}
              className="w-full h-[600px] object-cover"
            />
          </div>
          <div className="md:col-span-6">
            <div className="eyebrow">Our mission</div>
            <h2 className="mt-5 font-display text-4xl md:text-5xl leading-[1.1]">
              To raise the standard of the
              <br />
              <span className="italic">Western Australian home.</span>
            </h2>
            <div className="mt-8 space-y-5 text-muted-foreground text-lg leading-relaxed">
              <p>
                Vanguard Build Co Pty Ltd was established to do one thing exceptionally — build
                residential houses across Western Australia, with the rigour usually reserved for
                far larger commercial projects.
              </p>
              <p>
                We take on a small number of homes each year. That restraint is deliberate. It
                allows our directors to remain involved in every build, our trades to stay focused,
                and our clients to be heard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-ink text-bone py-28 md:py-40">
        <div className="container-x">
          <div className="max-w-3xl">
            <div className="eyebrow">Our values</div>
            <h2 className="mt-5 font-display text-4xl md:text-6xl leading-[1.05]">
              Three principles that
              <br />
              guide every decision.
            </h2>
          </div>

          <div className="mt-20 grid md:grid-cols-3 gap-12">
            {values.map((v) => (
              <div key={v.n} className="border-t border-bone/20 pt-8">
                <div className="font-mono text-bronze text-sm tracking-widest">{v.n}</div>
                <h3 className="mt-6 font-display text-3xl">{v.title}</h3>
                <p className="mt-5 text-bone/65 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-28 container-x">
        <div className="grid sm:grid-cols-3 gap-12 text-center">
          {[
            { v: "15+", l: "Years building in WA" },
            { v: "60+", l: "Homes delivered" },
            { v: "100%", l: "On-time, on-budget" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display text-6xl md:text-7xl text-bronze">{s.v}</div>
              <div className="mt-3 eyebrow text-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Closing image + CTA */}
      <section className="container-x pb-28">
        <div className="relative">
          <img
            src={project5}
            alt="Interior of a Vanguard home"
            loading="lazy"
            className="w-full h-[480px] object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center">
            <div className="container-x">
              <div className="max-w-xl text-white">
                <h2 className="font-display text-4xl md:text-5xl">Let's talk about your build.</h2>
                <Link
                  to="/contact"
                  className="mt-8 inline-flex items-center gap-3 px-7 py-4 bg-bronze text-bronze-foreground text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-ink transition-colors"
                >
                  Start a Conversation <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
