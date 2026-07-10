import Link from "next/link";
import Container from "../ui/Container";
import { servicesData } from "@/data/services";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  DatabaseZap,
  Megaphone,
  MessageCircle,
  Palette,
  PhoneCall,
  Search,
  Sparkles,
  Target,
  Video,
  Workflow,
  Zap,
} from "lucide-react";

const iconMap = {
  "Web & App Development": Code2,
  "CRM Development": DatabaseZap,
  "SEO Services": Search,
  "Paid Advertising": Megaphone,
  "Lead Generation": Target,
  "WhatsApp API & Automation": MessageCircle,
  "UI/UX Design": Palette,
  "Graphic Design": Palette,
  "Video Editing": Video,
  Automation: Workflow,
};

const fallbackFeatures = [
  "Business-focused strategy",
  "Modern responsive design",
  "SEO-ready structure",
  "Lead generation focused",
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-slate-950 py-24 text-white"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.28),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(217,70,239,0.2),transparent_36%),linear-gradient(180deg,#020617_0%,#0f172a_48%,#111827_100%)]" />

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:70px_70px]" />

      {/* Static glows */}
      <div className="absolute -left-32 top-24 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-fuchsia-500/15 blur-3xl" />

      <Container>
        <div className="relative z-10">
          {/* Heading */}
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-5 py-2 text-sm font-bold text-violet-100 shadow-xl backdrop-blur">
              <Sparkles className="h-4 w-4 text-violet-300" />
              Our IT Solutions
            </div>

            <h2 className="mt-6 text-3xl font-black leading-tight tracking-tight md:text-5xl">
              Complete IT Solutions To Build, Grow & Scale Your Business
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
              From websites and CRMs to SEO, ads and automation, we create
              digital systems that help your business generate, track and manage
              leads properly.
            </p>
          </div>

          {/* Services grid */}
          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {servicesData.map((service, index) => {
              const Icon = iconMap[service.title] || Code2;

              const features =
                Array.isArray(service.features) && service.features.length > 0
                  ? service.features
                  : fallbackFeatures;

              return (
                <article
                  key={service.slug || service.title}
                  className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-7 shadow-2xl shadow-black/10 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-violet-300/40 hover:bg-white/15"
                >
                  <div className="absolute right-0 top-0 h-36 w-36 rounded-bl-full bg-violet-500/10 transition group-hover:bg-violet-500/20" />

                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/20 blur-2xl" />

                  <div className="relative z-10">
                    <div className="mb-7 flex items-center justify-between">
                      <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-white/10 text-violet-200 transition duration-300 group-hover:rotate-3 group-hover:bg-primary group-hover:text-white">
                        <Icon className="h-8 w-8" />
                      </div>

                      <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-black text-slate-300">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {service.category && (
                      <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-violet-300">
                        {service.category}
                      </p>
                    )}

                    <h3 className="text-2xl font-black tracking-tight text-white">
                      {service.title}
                    </h3>

                    <p className="mt-4 min-h-[72px] text-sm leading-7 text-slate-300">
                      {service.short}
                    </p>

                    <ul className="mt-7 space-y-3">
                      {features.slice(0, 4).map((feature) => (
                        <li
                          key={feature}
                          className="flex gap-3 text-sm font-medium text-slate-300 transition hover:translate-x-1"
                        >
                          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-300" />

                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8 flex flex-wrap gap-3">
                      <Link
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/10 px-5 py-3 text-sm font-bold text-white transition hover:border-primary/40 hover:bg-primary"
                      >
                        Learn More
                        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                      </Link>

                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 rounded-2xl bg-primary px-5 py-3 text-sm font-bold text-white transition hover:bg-primary-dark"
                      >
                        Get Quote
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Custom solution CTA */}
          <div className="mt-14 overflow-hidden rounded-[2.2rem] border border-white/10 bg-white/10 p-8 text-white shadow-2xl shadow-black/20 backdrop-blur-xl md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.25em] text-violet-300">
                  <Zap className="h-4 w-4" />
                  Need Custom Solution?
                </p>

                <h3 className="mt-4 max-w-3xl text-3xl font-black tracking-tight text-white md:text-4xl">
                  We can build a website, CRM, dashboard, automation or complete
                  business system as per your workflow.
                </h3>

                <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
                  Share your business requirement and our team will suggest the
                  best digital solution with proper planning, design and
                  development roadmap.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-2xl bg-primary px-7 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-primary-dark"
                >
                  Discuss Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>

                <a
                  href="tel:+918287628307"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-7 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-white/15"
                >
                  <PhoneCall className="mr-2 h-5 w-5" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
