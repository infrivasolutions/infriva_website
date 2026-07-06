import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import {
  ArrowRight,
  Mail,
  MapPin,
  MessageCircle,
  PhoneCall,
} from "lucide-react";

const services = [
  { name: "Web & App Development", href: "/services/web-app-development" },
  { name: "CRM Development", href: "/services/crm-development" },
  { name: "SEO Services", href: "/services/seo-services" },
  { name: "Paid Advertising", href: "/services/paid-advertising" },
  { name: "Lead Generation", href: "/services/lead-generation" },
  {
    name: "WhatsApp API & Automation",
    href: "/services/whatsapp-api-automation",
  },
];

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/#contact" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl" />
      <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-fuchsia-600/20 blur-3xl" />
      <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:70px_70px]" />

      <Container>
        <div className="relative z-10 py-16 md:py-20">
          {/* <div className="mb-14 overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur md:p-8">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-violet-300">
                  Let’s Build Your Digital Growth System
                </p>

                <h2 className="mt-4 max-w-3xl text-3xl font-extrabold leading-tight md:text-5xl">
                  Need a website, CRM, SEO, ads or automation solution?
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
                  Share your requirement and our team will help you choose the
                  right digital solution for your business.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center rounded-2xl bg-violet-600 px-6 py-4 text-sm font-extrabold text-white transition hover:-translate-y-1 hover:bg-violet-700"
                >
                  Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>

                <a
                  href="https://wa.me/918287628307"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/10 px-6 py-4 text-sm font-extrabold text-white transition hover:-translate-y-1 hover:bg-white/15"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div> */}

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_0.9fr_1fr]">
            <div>
              <Link href="/" className="inline-flex">
                <Image
                  src="/images/infriva-logo.png"
                  alt="Infriva Solutions"
                  width={220}
                  height={80}
                  className="h-auto w-[180px] object-contain"
                />
              </Link>

              <p className="mt-5 max-w-md text-sm leading-7 text-slate-400">
                Infriva Solutions is an IT solutions company helping businesses
                grow with modern websites, custom CRMs, web apps, SEO, Meta Ads,
                WhatsApp API integrations and automation systems.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold text-slate-300">
                  Website
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold text-slate-300">
                  CRM
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold text-slate-300">
                  SEO
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold text-slate-300">
                  Automation
                </span>
              </div>
            </div>

            <div>
              <h4 className="mb-5 text-lg font-extrabold text-white">
                Quick Links
              </h4>

              <div className="space-y-3 text-sm">
                {quickLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-slate-400 transition hover:translate-x-1 hover:text-violet-300"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h4 className="mb-5 text-lg font-extrabold text-white">
                Services
              </h4>

              <div className="space-y-3 text-sm">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block text-slate-400 transition hover:translate-x-1 hover:text-violet-300"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h4 className="mb-5 text-lg font-extrabold text-white">
                Contact
              </h4>

              <div className="space-y-4 text-sm">
                <a
                  href="tel:+918287628307"
                  className="flex gap-3 text-slate-400 transition hover:text-violet-300"
                >
                  <PhoneCall className="mt-0.5 h-5 w-5 shrink-0 text-violet-400" />
                  <span>+91 82876 28307</span>
                </a>

                <a
                  href="mailto:info@infrivasolutions.com"
                  className="flex gap-3 text-slate-400 transition hover:text-violet-300"
                >
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-violet-400" />
                  <span>info@infrivasolutions.com</span>
                </a>

                <div className="flex gap-3 text-slate-400">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-violet-400" />
                  <span>India</span>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm font-semibold leading-6 text-slate-300">
                  Your website enquiries can directly connect with CRM for
                  faster follow-ups.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
            <p>
              © {new Date().getFullYear()} Infriva Solutions. All rights
              reserved.
            </p>

            <div className="flex flex-wrap gap-5">
              <Link
                href="/privacy-policy"
                className="transition hover:text-violet-300"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms-and-conditions"
                className="transition hover:text-violet-300"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
