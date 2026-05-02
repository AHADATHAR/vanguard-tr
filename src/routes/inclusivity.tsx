import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Play } from "lucide-react";
import aboutCraft from "@/assets/about-craft.jpg";

export const Route = createFileRoute("/inclusivity")({
  head: () => ({
    meta: [
      { title: "Inclusivity — Vanguard Build Co" },
      {
        name: "description",
        content:
          "We are committed to creating an inclusive environment where differently abled individuals are supported, respected, and empowered to succeed.",
      },
    ],
  }),
  component: InclusivityPage,
});

function InclusivityPage() {
  return (
    <div className="pt-24 md:pt-32 pb-24 md:pb-32 bg-background">
      <Hero />
      <RealStories />
      <CTA />
    </div>
  );
}

function Hero() {
  return (
    <section className="container-x py-20">
      <div className="max-w-4xl">
        <div className="eyebrow">Inclusivity</div>
        <h1 className="mt-6 font-display text-5xl md:text-7xl leading-[1.02]">
          Building Opportunities,
          <br />
          <span className="italic text-bronze">Empowering People.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-xl text-muted-foreground leading-relaxed">
          At Vanguard Build Co, we believe everyone deserves the opportunity to build a meaningful
          career. We are committed to creating an inclusive environment where differently abled
          individuals are supported, respected, and empowered to succeed.
        </p>
      </div>
    </section>
  );
}

function RealStories() {
  return (
    <section className="py-20 md:py-32 bg-ink text-bone">
      <div className="container-x">
        <div className="eyebrow text-bone/60">Real Stories</div>
        <h2 className="mt-5 font-display text-4xl md:text-6xl mb-16">
          Meet <span className="italic text-bronze">Spencer.</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 relative aspect-square md:aspect-[4/3] w-full overflow-hidden">
            <img
              src={aboutCraft}
              alt="Spencer working on site"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="group flex flex-col items-center gap-4 focus:outline-none">
                <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-300">
                  <Play size={24} className="text-white fill-white ml-1" />
                </div>
                <span className="text-xs uppercase tracking-widest text-white/80">Play Video</span>
              </button>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <p className="text-xl md:text-2xl text-bone/80 leading-relaxed font-light">
              "Spencer is a valued member of our team whose dedication and hard work reflect our
              belief in equal opportunity. His contribution is a testament to what can be achieved
              when people are given the right support and environment to grow."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="container-x py-20 md:py-32 text-center">
      <h2 className="font-display text-3xl md:text-5xl">Join a Team That Values Everyone</h2>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Link
          to="/careers"
          className="inline-flex items-center gap-3 px-8 py-4 bg-bronze text-bronze-foreground text-xs uppercase tracking-[0.2em] hover:bg-ink hover:text-bone transition-colors"
        >
          Explore Careers <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
