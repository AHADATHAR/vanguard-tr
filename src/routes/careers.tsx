import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, HardHat, ShieldCheck, TrendingUp, Users } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Vanguard Build Co" },
      {
        name: "description",
        content:
          "Join a team dedicated to excellence in residential construction at Vanguard Build Co.",
      },
      { property: "og:title", content: "Careers at Vanguard Build Co" },
    ],
  }),
  component: CareersPage,
});

const benefits = [
  {
    icon: HardHat,
    title: "Real Projects",
    desc: "Work on real residential construction projects that shape the community.",
  },
  {
    icon: Users,
    title: "Supportive Environment",
    desc: "A supportive and skilled team environment where your voice matters.",
  },
  {
    icon: TrendingUp,
    title: "Professional Growth",
    desc: "Abundant opportunities for professional growth and career advancement.",
  },
  {
    icon: ShieldCheck,
    title: "Quality & Safety",
    desc: "A strong focus on quality, safety, and innovation in every build.",
  },
];

const positions = [
  "Site Supervisor",
  "Construction Worker",
  "Project Manager",
  "Architect / Designer",
];

function CareersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Careers"
        title="Build Your Future With Vanguard"
        subtitle="Join a team dedicated to excellence in residential construction. At Vanguard Build Co, we value craftsmanship, innovation, and people who want to grow while building meaningful work."
      />

      {/* Why Join Us */}
      <section className="py-28 md:py-40 container-x bg-background">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="eyebrow">Why Join Us</div>
          <h2 className="mt-5 font-display text-4xl md:text-5xl leading-[1.05]">
            A place to master your <span className="italic">craft.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {benefits.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-background p-10">
              <Icon className="text-bronze" size={28} strokeWidth={1.4} />
              <h3 className="mt-8 font-display text-2xl">{title}</h3>
              <p className="mt-3 text-muted-foreground text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Open Positions */}
      <section className="bg-ink text-bone py-28 md:py-40">
        <div className="container-x">
          <div className="max-w-3xl mb-16">
            <div className="eyebrow">Current Opportunities</div>
            <h2 className="mt-5 font-display text-4xl md:text-5xl leading-[1.05]">
              Open Positions
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-bone/10">
            {positions.map((pos) => (
              <div
                key={pos}
                className="group bg-ink p-10 md:p-12 hover:bg-bone/5 transition-colors flex items-center justify-between"
              >
                <h3 className="font-display text-2xl md:text-3xl">{pos}</h3>
                <ArrowRight
                  className="text-bone/40 group-hover:text-bronze group-hover:translate-x-1 transition-all flex-shrink-0"
                  size={24}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-bronze text-bronze-foreground py-24 md:py-32">
        <div className="container-x text-center">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-10">
            Start Your Journey With Vanguard
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-ink text-bone text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-ink transition-colors"
          >
            Apply Now <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
