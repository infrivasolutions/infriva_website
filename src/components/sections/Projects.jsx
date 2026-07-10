import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import { projects } from "@/data/projects";
import {
  ArrowRight,
  ExternalLink,
  FolderKanban,
  Sparkles,
  Zap,
} from "lucide-react";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-slate-950 py-24 text-white"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.26),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(217,70,239,0.2),transparent_36%),linear-gradient(180deg,#020617_0%,#0f172a_48%,#111827_100%)]" />

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
              Featured Work
            </div>

            <h2 className="mt-6 text-3xl font-black leading-tight tracking-tight text-white md:text-5xl">
              Projects Built To Improve
              <span className="block bg-gradient-to-r from-violet-300 via-fuchsia-300 to-white bg-clip-text text-transparent">
                Trust, UX And Leads
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
              A look at digital platforms and websites we have designed and
              developed for real business use cases.
            </p>
          </div>

          {/* Project cards */}
          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.slug}
                className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 shadow-2xl shadow-black/10 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-violet-300/40 hover:bg-white/15"
              >
                <div className="relative h-72 overflow-hidden bg-white/10 md:h-80">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/35 to-transparent" />

                  <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/25 blur-3xl" />

                  <div className="absolute bottom-5 left-5 right-5 flex flex-wrap items-center justify-between gap-3">
                    <span className="rounded-full border border-white/10 bg-white/15 px-4 py-2 text-sm font-bold text-white shadow-lg backdrop-blur">
                      {project.category}
                    </span>

                    {project.website && (
                      <a
                        href={project.website}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/15 px-4 py-2 text-sm font-bold text-white backdrop-blur transition hover:bg-white hover:text-slate-950"
                      >
                        Live Website
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="p-7 md:p-8">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-violet-200 transition group-hover:bg-primary group-hover:text-white">
                    <FolderKanban className="h-7 w-7" />
                  </div>

                  <h3 className="text-3xl font-black tracking-tight text-white">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-300">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-bold text-slate-200 transition hover:-translate-y-0.5 hover:bg-white/15"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-2 rounded-2xl bg-primary px-5 py-3 text-sm font-bold text-white transition hover:bg-primary-dark"
                    >
                      View Case Study
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </Link>

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/10 px-5 py-3 text-sm font-bold text-white transition hover:border-violet-300/40 hover:bg-white/15"
                    >
                      Build Similar Project
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-14 overflow-hidden rounded-[2.2rem] border border-white/10 bg-white/10 p-8 shadow-2xl shadow-black/20 backdrop-blur-xl md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-center">
              <div>
                <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.25em] text-violet-300">
                  <Zap className="h-4 w-4" />
                  Have An Idea?
                </p>

                <h3 className="mt-4 text-3xl font-black text-white md:text-4xl">
                  We can build a project like this for your business too.
                </h3>

                <p className="mt-4 max-w-2xl text-slate-300">
                  Share your requirement and we will suggest the right website,
                  CRM, dashboard or automation solution.
                </p>
              </div>

              <div className="flex lg:justify-end">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-2xl bg-primary px-7 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-primary-dark"
                >
                  Discuss Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}