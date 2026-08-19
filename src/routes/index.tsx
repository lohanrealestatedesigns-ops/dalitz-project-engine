import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  Zap,
  Cog,
  Radio,
  LifeBuoy,
  ArrowUpRight,
  Phone,
  Mail,
  MessageCircle,
  MapPin,
} from "lucide-react";

import { SiteHeader } from "@/components/site/SiteHeader";
import { Reveal, Label } from "@/components/site/Reveal";

import panelAsset from "@/assets/dalitzproject_d193ef03_5.jpg.asset.json";
import lightAsset from "@/assets/3bb5548f_1.jpg.asset.json";
import roofAsset from "@/assets/dalitzproject_0e29877d_5.jpg.asset.json";
import conduitAsset from "@/assets/dalitzproject_7532fd22_3.jpg.asset.json";
import founder from "@/assets/founder.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dalitzproject | Precision M&E Engineering, Nationwide" },
      {
        name: "description",
        content:
          "Dalitzproject designs, installs and maintains electrical, mechanical and low voltage systems for commercial and residential projects nationwide.",
      },
      { property: "og:title", content: "Dalitzproject | Precision M&E Engineering, Nationwide" },
      {
        property: "og:description",
        content:
          "Expert design, installation and maintenance across electrical, mechanical and low voltage systems.",
      },
    ],
  }),
  component: Index,
});

const competencies = [
  {
    n: "01",
    icon: Zap,
    title: "Electrical Systems",
    body: "High-voltage distribution, complex panel wiring, load balancing and full building power infrastructure engineered to specification and certified on handover.",
    points: ["Distribution boards", "HV / LV infrastructure", "Panel fabrication"],
  },
  {
    n: "02",
    icon: Cog,
    title: "Mechanical & Design",
    body: "Structural rough-ins, mechanical system layouts and coordinated services drawings produced before a single conduit is laid on site.",
    points: ["Services layout design", "Structural rough-ins", "Mechanical installation"],
  },
  {
    n: "03",
    icon: Radio,
    title: "Low Voltage & Tech",
    body: "Street and exterior lighting, smart building controls, CCTV, access control and structured low-voltage networks built for uptime.",
    points: ["Street & exterior lighting", "Smart building controls", "Structured networks"],
  },
  {
    n: "04",
    icon: LifeBuoy,
    title: "Nationwide Maintenance",
    body: "Rapid-deployment crews and lifecycle support contracts for commercial and residential portfolios in every region we operate.",
    points: ["Planned maintenance", "24/7 fault response", "Portfolio coverage"],
  },
];

const gallery = [
  {
    src: panelAsset.url,
    title: "Distribution Board Termination",
    meta: "Electrical / Commercial",
    span: "lg:col-span-7 lg:row-span-2",
    h: "h-[420px] lg:h-full",
  },
  {
    src: conduitAsset.url,
    title: "Conduit Rough-In During Casting",
    meta: "Mechanical / Structural",
    span: "lg:col-span-5",
    h: "h-[320px]",
  },
  {
    src: lightAsset.url,
    title: "High-Reach Street Lighting",
    meta: "Low Voltage / Exterior",
    span: "lg:col-span-5",
    h: "h-[320px]",
  },
  {
    src: roofAsset.url,
    title: "Multi-Unit Architectural Build",
    meta: "Site Delivery / Residential",
    span: "lg:col-span-12",
    h: "h-[360px] lg:h-[440px]",
  },
];

const regions = [
  ["North Central", "Abuja · Jos · Lokoja"],
  ["South West", "Lagos · Ibadan · Abeokuta"],
  ["South South", "Port Harcourt · Uyo · Warri"],
  ["South East", "Enugu · Owerri · Aba"],
  ["North West", "Kano · Kaduna · Sokoto"],
  ["North East", "Bauchi · Yola · Maiduguri"],
];

function Index() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <Competencies />
        <Gallery />
        <Reach />
        <Founder />
      </main>
      <ContactFooter />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-end overflow-hidden">
      <img
        src={panelAsset.url}
        alt="Electrical distribution panel wiring on a commercial project"
        className="absolute inset-0 size-full object-cover"
        width={720}
        height={720}
      />
      <div className="absolute inset-0 bg-navy-deep/88" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/70 to-transparent" />
      <div className="grid-lines absolute inset-0 opacity-40" />

      <div className="relative mx-auto w-full max-w-[1600px] px-6 pb-16 pt-40 lg:px-12 lg:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl"
        >
          <Label>Mechanical · Electrical · Low Voltage</Label>
          <h1 className="mt-8 font-display text-[3.25rem] leading-[0.92] tracking-tight sm:text-7xl lg:text-[8.5rem]">
            Precision Engineering.
            <br />
            <span className="text-primary">Nationwide Execution.</span>
          </h1>
          <p className="mt-8 max-w-2xl border-l-2 border-primary pl-6 text-lg text-muted-foreground lg:text-xl">
            Expert design, installation, and maintenance across Electrical, Mechanical, and Low
            Voltage systems.
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="label-mono group inline-flex items-center gap-3 bg-primary px-9 py-5 font-medium text-primary-foreground transition-colors hover:bg-primary/85"
            >
              Book a Project
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            <a
              href="#projects"
              className="label-mono inline-flex items-center gap-3 border border-foreground/70 px-9 py-5 font-medium text-foreground transition-colors hover:bg-foreground hover:text-navy-deep"
            >
              View Our Work
            </a>
          </div>
        </motion.div>
      </div>

      <div className="relative border-y border-border bg-navy-deep/90">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 divide-y divide-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {["Nationwide Deployment", "M&E Specialists", "24/7 Support"].map((t) => (
            <div key={t} className="label-mono px-6 py-5 text-muted-foreground lg:px-12">
              <span className="mr-3 text-primary">/</span>
              {t}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Competencies() {
  return (
    <section id="services" className="border-b border-border bg-background">
      <div className="mx-auto max-w-[1600px] px-6 py-24 lg:px-12 lg:py-32">
        <Reveal className="max-w-3xl">
          <Label>Core Competencies</Label>
          <h2 className="mt-6 text-4xl leading-[0.95] sm:text-6xl lg:text-7xl">
            The Engineering Grid
          </h2>
        </Reveal>
      </div>
      <div className="grid border-t border-border lg:grid-cols-2">
        {competencies.map((c, i) => (
          <Reveal
            key={c.title}
            delay={i * 0.08}
            className="border-b border-border lg:[&:nth-child(odd)]:border-r"
          >
            <div className="group h-full bg-gunmetal/25 p-8 transition-colors duration-300 hover:bg-gunmetal/60 lg:p-14">
              <div className="flex items-start justify-between">
                <c.icon className="size-9 text-primary" strokeWidth={1.3} />
                <span className="label-mono text-steel">{c.n}</span>
              </div>
              <h3 className="mt-10 text-3xl lg:text-4xl">{c.title}</h3>
              <p className="mt-5 max-w-md text-muted-foreground">{c.body}</p>
              <ul className="mt-8 space-y-2 border-t border-border pt-6">
                {c.points.map((p) => (
                  <li key={p} className="label-mono flex items-center gap-3 text-muted-foreground">
                    <span className="size-1.5 bg-primary" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="projects" className="bg-navy-deep">
      <div className="mx-auto max-w-[1600px] px-6 py-24 lg:px-12 lg:py-32">
        <Reveal className="flex flex-wrap items-end justify-between gap-8">
          <div className="max-w-3xl">
            <Label>Field Execution</Label>
            <h2 className="mt-6 text-4xl leading-[0.95] sm:text-6xl lg:text-7xl">
              Built to Spec. <span className="text-primary">Built to Last.</span>
            </h2>
          </div>
          <p className="label-mono max-w-xs text-muted-foreground">
            Documented site work across power, structure and lighting installations.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-px bg-border lg:grid-cols-12">
          {gallery.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.06} className={g.span}>
              <figure className={`group relative overflow-hidden bg-background ${g.h}`}>
                <img
                  src={g.src}
                  alt={g.title}
                  loading="lazy"
                  className="size-full object-cover grayscale-[35%] transition-all duration-700 group-hover:scale-[1.04] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/10 to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 lg:p-8">
                  <div>
                    <span className="label-mono text-primary">{g.meta}</span>
                    <p className="mt-2 font-display text-xl tracking-wide lg:text-2xl">{g.title}</p>
                  </div>
                  <ArrowUpRight className="size-6 shrink-0 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reach() {
  return (
    <section id="reach" className="border-y border-border bg-background">
      <div className="mx-auto grid max-w-[1600px] lg:grid-cols-12">
        <Reveal className="border-border p-6 py-20 lg:col-span-4 lg:border-r lg:p-14">
          <Label>Nationwide Reach</Label>
          <h2 className="mt-6 text-4xl leading-[0.95] lg:text-6xl">
            Six regions. One standard.
          </h2>
          <p className="mt-6 max-w-sm text-muted-foreground">
            Mobilised crews, vetted local supply chains and a single technical specification applied
            on every site we hold.
          </p>
          <div className="mt-10 flex gap-10 border-t border-border pt-8">
            <div>
              <p className="font-display text-5xl text-primary">36</p>
              <span className="label-mono text-muted-foreground">States covered</span>
            </div>
            <div>
              <p className="font-display text-5xl text-primary">48h</p>
              <span className="label-mono text-muted-foreground">Mobilisation</span>
            </div>
          </div>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:col-span-8 lg:grid-cols-3">
          {regions.map((r, i) => (
            <Reveal key={r[0]} delay={i * 0.05}>
              <div className="h-full border-b border-r border-border p-8 transition-colors hover:bg-gunmetal/40 lg:p-10">
                <MapPin className="size-5 text-primary" strokeWidth={1.5} />
                <h3 className="mt-6 text-2xl">{r[0]}</h3>
                <p className="label-mono mt-3 text-muted-foreground">{r[1]}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Founder() {
  return (
    <section id="about" className="bg-navy-deep">
      <div className="mx-auto grid max-w-[1600px] lg:grid-cols-2">
        <Reveal className="relative">
          <div className="relative h-[520px] border-b border-border lg:h-full lg:min-h-[720px] lg:border-b-0 lg:border-r">
            <img
              src={founder}
              alt="Lead engineer and founder of Dalitzproject"
              loading="lazy"
              width={1008}
              height={1312}
              className="size-full object-cover object-top"
            />
            <div className="absolute bottom-0 left-0 bg-primary px-6 py-4">
              <span className="label-mono font-medium text-primary-foreground">
                Founder & Lead Engineer
              </span>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1} className="flex items-center">
          <div className="p-6 py-20 lg:p-20">
            <Label>Leadership</Label>
            <h2 className="mt-6 text-5xl leading-[0.95] lg:text-7xl">
              Led by <span className="text-primary">Expertise.</span>
            </h2>
            <div className="mt-8 space-y-6 text-lg text-muted-foreground">
              <p>
                Dalitzproject is led by an engineer who still reads the drawings, walks the risers
                and signs off the terminations. More than a decade of hands-on delivery — from
                distribution boards and structural rough-ins to exterior lighting networks — sits
                behind every specification we issue.
              </p>
              <p>
                That field discipline scales into project management across simultaneous nationwide
                sites: sequenced programmes, verified materials, and progress reported against the
                spec rather than against the calendar.
              </p>
              <p>
                Safety and technical standards are non-negotiable. Every installation is tested,
                documented and handed over with certification — because the work has to hold long
                after the crew leaves.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-px border border-border bg-border">
              {[
                ["10+", "Years on site"],
                ["250+", "Projects delivered"],
                ["0", "Compromises"],
              ].map(([k, v]) => (
                <div key={v} className="bg-navy-deep p-6">
                  <p className="font-display text-3xl text-primary lg:text-4xl">{k}</p>
                  <span className="label-mono text-muted-foreground">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const fieldClass =
  "w-full border border-input bg-transparent px-4 py-4 text-sm text-foreground outline-none transition-colors placeholder:text-steel focus:border-primary";

function ContactFooter() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <footer id="contact" className="border-t-2 border-primary bg-navy-deep">
      <div className="mx-auto max-w-[1600px] px-6 py-24 lg:px-12 lg:py-32">
        <Reveal>
          <Label>Rapid Dispatch</Label>
          <h2 className="mt-6 text-5xl leading-[0.92] sm:text-7xl lg:text-[7rem]">
            Ready to Deploy.
            <br />
            <span className="text-primary">Anywhere.</span>
          </h2>
        </Reveal>

        <div className="mt-20 grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <form onSubmit={onSubmit} className="space-y-px">
              <div className="grid gap-4 sm:grid-cols-2">
                <input required name="name" placeholder="Full name" className={fieldClass} />
                <input
                  required
                  name="projectType"
                  placeholder="Project type (Electrical, Mechanical, LV…)"
                  className={fieldClass}
                />
              </div>
              <div className="pt-4">
                <input required name="location" placeholder="Location / State" className={fieldClass} />
              </div>
              <div className="pt-4">
                <textarea
                  required
                  name="message"
                  rows={5}
                  placeholder="Scope, timeline and site details"
                  className={fieldClass}
                />
              </div>
              <div className="flex flex-wrap items-center gap-6 pt-6">
                <button
                  type="submit"
                  className="label-mono group inline-flex items-center gap-3 bg-primary px-9 py-5 font-medium text-primary-foreground transition-colors hover:bg-primary/85"
                >
                  Submit Request
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
                {sent && (
                  <span className="label-mono text-primary">
                    Received — a lead engineer will respond within 24h.
                  </span>
                )}
              </div>
            </form>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="grid gap-px bg-border">
              {[
                { icon: Phone, label: "Direct line", value: "+234 800 000 0000", href: "tel:+2348000000000" },
                { icon: MessageCircle, label: "WhatsApp dispatch", value: "Chat with a dispatcher", href: "https://wa.me/2348000000000" },
                { icon: Mail, label: "Email", value: "projects@dalitzproject.com", href: "mailto:projects@dalitzproject.com" },
                { icon: MapPin, label: "Head office", value: "Abuja, Nigeria · Nationwide crews", href: "" },
              ].map((c) => (
                <div key={c.label} className="bg-navy-deep p-7">
                  <span className="label-mono flex items-center gap-3 text-muted-foreground">
                    <c.icon className="size-4 text-primary" />
                    {c.label}
                  </span>
                  {c.href ? (
                    <a
                      href={c.href}
                      className="mt-3 block font-display text-2xl tracking-wide transition-colors hover:text-primary"
                    >
                      {c.value}
                    </a>
                  ) : (
                    <p className="mt-3 font-display text-2xl tracking-wide">{c.value}</p>
                  )}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-[1600px] flex-wrap items-center justify-between gap-4 px-6 py-8 lg:px-12">
          <span className="font-display text-lg font-bold tracking-[0.28em]">
            DALITZ<span className="text-primary">PROJECT</span>
          </span>
          <span className="label-mono text-steel">
            © {new Date().getFullYear()} Dalitzproject — M&E Engineering Contractors
          </span>
        </div>
      </div>
    </footer>
  );
}
