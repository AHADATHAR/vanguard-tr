import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, Compass, HardHat, Ruler, Play } from "lucide-react";
import heroHome from "@/assets/hero-home.jpg";
import aboutCraft from "@/assets/about-craft.jpg";
import project1 from "@/assets/project-1.jpg";
import project3 from "@/assets/project-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vanguard Build Co — Building Homes That Last Generations" },
      {
        name: "description",
        content:
          "Premium residential construction across Western Australia. Custom homes, renovations, and design — built with precision and integrity.",
      },
      { property: "og:title", content: "Vanguard Build Co — Premium Residential Construction" },
      {
        property: "og:description",
        content: "Building homes that last generations across Western Australia.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ServicesOverview />
      <WhyChooseUs />
      <FeaturedProject />
      <InclusivitySection />
      <CareersSection />
      <CTASection />
    </>
  );
}

function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden flex items-end text-white">
      {/* Background image as video stand-in (timelapse-style still) */}
      <div className="absolute inset-0">
        <img
          src={heroHome}
          alt="Modern luxury Australian home at dusk"
          className="w-full h-full object-cover slow-zoom"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/85" />
      </div>

      <div className="relative container-x pb-24 md:pb-32">
        <div className="max-w-4xl">
          <div className="eyebrow text-bronze fade-in">
            Vanguard Build Co · Est. Western Australia
          </div>
          <h1 className="reveal-up delay-1 mt-6 font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.02]">
            Building Homes That
            <br />
            <span className="italic text-bronze">Last Generations.</span>
          </h1>
          <p className="reveal-up delay-2 mt-8 max-w-xl text-lg md:text-xl text-white/80 leading-relaxed">
            Premium residential construction across Western Australia — designed with precision,
            built with integrity.
          </p>
          <div className="reveal-up delay-3 mt-10 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 px-7 py-4 bg-bronze text-bronze-foreground text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-ink transition-all duration-300"
            >
              Get a Quote
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/projects"
              className="group inline-flex items-center gap-3 px-7 py-4 border border-white/40 text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-ink transition-all duration-300"
            >
              View Projects
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 right-6 md:right-12 text-xs uppercase tracking-[0.3em] text-white/60 hidden md:flex items-center gap-3">
        <span>Scroll</span>
        <span className="h-px w-12 bg-white/40" />
      </div>
    </section>
  );
}

function AboutPreview() {
  return (
    <section className="py-28 md:py-40 container-x">
      <div className="grid md:grid-cols-12 gap-12 md:gap-20 items-center">
        <div className="md:col-span-5 order-2 md:order-1 relative">
          <img
            src={aboutCraft}
            alt="Craftsmen at a Vanguard residential build site"
            loading="lazy"
            width={1280}
            height={1600}
            className="w-full h-[520px] object-cover"
          />
          <div className="absolute -bottom-8 -right-4 md:-right-12 bg-ink text-bone p-8 max-w-[240px]">
            <div className="font-display text-5xl text-bronze">15+</div>
            <div className="mt-2 text-xs uppercase tracking-[0.2em] text-bone/70">
              Years crafting WA homes
            </div>
          </div>
        </div>

        <div className="md:col-span-7 order-1 md:order-2 md:pl-8">
          <div className="eyebrow">About the studio</div>
          <h2 className="mt-5 font-display text-4xl md:text-6xl leading-[1.05]">
            A quiet pursuit of <span className="italic">enduring craft.</span>
          </h2>
          <p className="mt-8 text-muted-foreground text-lg leading-relaxed max-w-xl">
            Vanguard Build Co is a Western Australian builder devoted exclusively to residential
            homes. We work with a small, deliberate group of architects, trades, and clients to
            produce houses defined by detail, material honesty, and the patience required to do them
            well.
          </p>
          <Link
            to="/about"
            className="mt-10 inline-flex items-center gap-3 text-sm uppercase tracking-[0.2em] link-underline"
          >
            Our Story
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    n: "01",
    title: "Custom Home Construction",
    desc: "Bespoke homes tailored to site, family, and the way you live.",
  },
  {
    n: "02",
    title: "Renovations & Extensions",
    desc: "Sympathetic additions and full transformations of existing homes.",
  },
  {
    n: "03",
    title: "Project Management",
    desc: "Single point of accountability across every phase of build.",
  },
  {
    n: "04",
    title: "Design & Planning",
    desc: "Architectural collaboration, approvals, and pre-construction.",
  },
];

function ServicesOverview() {
  return (
    <section className="bg-ink text-bone py-28 md:py-40">
      <div className="container-x">
        <div className="grid md:grid-cols-12 gap-10 mb-20">
          <div className="md:col-span-5">
            <div className="eyebrow">What we do</div>
            <h2 className="mt-5 font-display text-4xl md:text-6xl leading-[1.05]">
              Four disciplines.
              <br />
              <span className="italic text-bronze">One standard.</span>
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7 flex items-end">
            <p className="text-bone/70 text-lg leading-relaxed">
              From the first sketch to the final handover, every Vanguard home moves through the
              same disciplined process — refined over years of building across Perth and the South
              West.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-bone/10">
          {services.map((s) => (
            <Link
              key={s.n}
              to="/services"
              className="group bg-ink p-10 md:p-14 hover:bg-bone/5 transition-colors"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <div className="font-mono text-xs text-bronze tracking-widest">{s.n}</div>
                  <h3 className="mt-4 font-display text-3xl md:text-4xl">{s.title}</h3>
                  <p className="mt-4 text-bone/60 max-w-md leading-relaxed">{s.desc}</p>
                </div>
                <ArrowRight
                  className="text-bone/40 group-hover:text-bronze group-hover:translate-x-1 transition-all flex-shrink-0"
                  size={22}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

const reasons = [
  {
    icon: Award,
    title: "Uncompromising Quality",
    desc: "Selected materials, exacting tolerances, finishes that age with grace.",
  },
  {
    icon: HardHat,
    title: "Trusted Trades",
    desc: "A loyal network of WA's best craftspeople, brought to every site.",
  },
  {
    icon: Ruler,
    title: "Precise Process",
    desc: "Transparent timelines, fixed-price contracts, no surprises.",
  },
  {
    icon: Compass,
    title: "Designed for Place",
    desc: "Every home shaped to its site, light, and the climate of Western Australia.",
  },
];

function WhyChooseUs() {
  return (
    <section className="py-28 md:py-40 container-x">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <div className="eyebrow">Why Vanguard</div>
        <h2 className="mt-5 font-display text-4xl md:text-6xl leading-[1.05]">
          Built for the people
          <br />
          who live in them.
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
        {reasons.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="bg-background p-10">
            <Icon className="text-bronze" size={28} strokeWidth={1.4} />
            <h3 className="mt-8 font-display text-2xl">{title}</h3>
            <p className="mt-3 text-muted-foreground text-sm leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function FeaturedProject() {
  return (
    <section className="container-x pb-28 md:pb-40">
      <div className="grid md:grid-cols-12 gap-10 items-end mb-12">
        <div className="md:col-span-7">
          <div className="eyebrow">Selected work</div>
          <h2 className="mt-5 font-display text-4xl md:text-6xl">
            A portfolio of <span className="italic">considered homes.</span>
          </h2>
        </div>
        <div className="md:col-span-4 md:col-start-9 md:text-right">
          <Link
            to="/projects"
            className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.2em] link-underline"
          >
            All Projects <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      <div className="grid md:grid-cols-5 gap-6">
        <Link to="/projects" className="group md:col-span-3 overflow-hidden">
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src={project1}
              alt="The Brookdale Residence"
              loading="lazy"
              className="w-full h-full object-cover img-grayscale-hover"
            />
          </div>
          <div className="mt-5 flex items-baseline justify-between">
            <h3 className="font-display text-2xl">The Brookdale Residence</h3>
            <span className="text-xs uppercase tracking-widest text-muted-foreground">2024</span>
          </div>
        </Link>
        <Link to="/projects" className="group md:col-span-2 overflow-hidden">
          <div className="relative aspect-[4/3] md:aspect-[4/5] overflow-hidden">
            <img
              src={project3}
              alt="Coastal Cliff House"
              loading="lazy"
              className="w-full h-full object-cover img-grayscale-hover"
            />
          </div>
          <div className="mt-5 flex items-baseline justify-between">
            <h3 className="font-display text-2xl">Coastal Cliff House</h3>
            <span className="text-xs uppercase tracking-widest text-muted-foreground">2024</span>
          </div>
        </Link>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="bg-bronze text-bronze-foreground">
      <div className="container-x py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-8">
            <div className="eyebrow text-white/80">Begin a project</div>
            <h2 className="mt-5 font-display text-4xl md:text-6xl leading-[1.05]">
              Ready to build something <span className="italic">remarkable?</span>
            </h2>
          </div>
          <div className="md:col-span-4 md:text-right">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-ink text-bone text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-ink transition-colors"
            >
              Start a Conversation <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function CareersSection() {
  return (
    <section className="py-28 md:py-40 container-x">
      <div className="bg-bone/40 p-12 md:p-20 flex flex-col items-center text-center">
        <div className="eyebrow">Careers</div>
        <h2 className="mt-5 font-display text-4xl md:text-6xl">
          Ambitious People, <span className="italic">Impactful Work</span>
        </h2>
        <p className="mt-8 text-muted-foreground text-lg leading-relaxed max-w-2xl">
          At Vanguard Build Co, you will work with people who share your passion for building
          high-quality homes, solving real construction challenges, and making a lasting impact
          across Western Australia.
        </p>
        <Link
          to="/careers"
          className="mt-10 inline-flex items-center gap-3 px-8 py-4 bg-ink text-bone text-xs uppercase tracking-[0.2em] hover:bg-bronze hover:text-bronze-foreground transition-colors"
        >
          Explore a Career with Vanguard <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}

function InclusivitySection() {
  return (
    <section className="bg-ink text-bone py-28 md:py-40">
      <div className="container-x">
        <div className="grid md:grid-cols-12 gap-12 md:gap-20 items-center">
          <div className="md:col-span-5 relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <img
                src={aboutCraft}
                alt="Spencer working on site"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="group flex flex-col items-center gap-4 focus:outline-none">
                  <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-300">
                    <Play size={24} className="text-white fill-white ml-1" />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="md:col-span-7">
            <div className="eyebrow text-bone/60">Inclusivity</div>
            <h2 className="mt-5 font-display text-4xl md:text-6xl leading-[1.05]">
              Building Opportunities
              <br />
              <span className="italic text-bronze">for Everyone.</span>
            </h2>
            <div className="mt-8 space-y-6 text-bone/70 text-lg leading-relaxed max-w-xl">
              <p>
                We are committed to an inclusive workplace and proudly support differently abled
                individuals, creating opportunities for everyone to grow and succeed with us.
              </p>
              <p>
                We are proud to have team members like Spencer, who is an important part of our
                workforce and contributes to building quality homes with dedication and skill.
              </p>
            </div>
            <Link
              to="/inclusivity"
              className="mt-10 inline-flex items-center gap-3 px-8 py-4 bg-bone text-ink text-xs uppercase tracking-[0.2em] hover:bg-bronze hover:text-white transition-colors"
            >
              Learn More <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
