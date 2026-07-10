import Link from "next/link";
import Container from "../ui/Container";
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  MessageCircle,
  PhoneCall,
  Sparkles,
  Zap,
} from "lucide-react";

const points = [
  "Free project consultation",
  "Website + CRM lead capture planning",
  "SEO, Ads & automation roadmap",
  "Clear budget and timeline discussion",
];

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-20 text-white md:py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.26),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(217,70,239,0.18),transparent_36%),linear-gradient(180deg,#020617_0%,#0f172a_48%,#111827_100%)]" />

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:70px_70px]" />

      {/* Static glows */}
      <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-fuchsia-500/15 blur-3xl" />

      <Container>
        <div className="relative z-10 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.08] p-7 shadow-2xl shadow-black/20 backdrop-blur-xl md:p-10 lg:p-12">
          <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-fuchsia-400/10 blur-3xl" />

          <div className="relative z-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            {/* Left side */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold text-violet-100 backdrop-blur">
                <Sparkles className="h-4 w-4 text-violet-300" />
                Ready To Grow?
              </div>

              <h2 className="mt-6 max-w-4xl text-4xl font-black leading-tight tracking-tight md:text-5xl lg:text-6xl">
                Let&apos;s build a digital system that brings
                <span className="block bg-gradient-to-r from-violet-300 via-fuchsia-300 to-white bg-clip-text text-transparent">
                  leads to your business.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
                Whether you need a modern website, CRM, SEO, Meta Ads,
                WhatsApp API or automation, Infriva Solutions can help you
                build the right system for growth.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {points.map((point) => (
                  <div
                    key={point}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.07] px-4 py-3 transition hover:border-violet-400/30 hover:bg-white/10"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-300" />

                    <span className="text-sm font-semibold text-white/90">
                      {point}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-2xl bg-white px-7 py-4 font-bold text-slate-950 shadow-xl transition hover:-translate-y-1 hover:bg-primary-light"
                >
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>

                <a
                  href="https://wa.me/918287628307?text=Hello%20Infriva%20Solutions%2C%20I%20want%20to%20discuss%20my%20project."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-7 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-white/15"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Us
                </a>
              </div>
            </div>

            {/* Right contact card */}
            <div className="rounded-[2rem] border border-white/10 bg-slate-950/60 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl md:p-8">
              <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.22em] text-violet-300">
                <Zap className="h-4 w-4" />
                Quick Contact
              </p>

              <h3 className="mt-4 text-3xl font-black">
                Discuss your project with us.
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-300">
                Share your requirement and we will guide you with the right
                website, CRM, marketing or automation solution.
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href="tel:+918287628307"
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.07] p-4 transition hover:border-violet-400/30 hover:bg-white/10"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-violet-200 transition group-hover:bg-primary group-hover:text-white">
                    <PhoneCall className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-sm text-slate-400">Call Us</p>
                    <p className="font-bold text-white">
                      +91 82876 28307
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:info@infrivasolutions.com"
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.07] p-4 transition hover:border-violet-400/30 hover:bg-white/10"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-violet-200 transition group-hover:bg-primary group-hover:text-white">
                    <Mail className="h-5 w-5" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-sm text-slate-400">Email Us</p>
                    <p className="break-all font-bold text-white">
                      info@infrivasolutions.com
                    </p>
                  </div>
                </a>
              </div>

              <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.07] p-5">
                <p className="text-sm font-semibold leading-7 text-slate-300">
                  Submit your enquiry through our contact page and it will be
                  captured directly in our CRM for quick follow-up.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}