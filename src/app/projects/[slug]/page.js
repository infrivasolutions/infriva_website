import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import ProjectDetailClient from "./ProjectDetailClient";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | Infriva Solutions",
    };
  }

  return {
    title: `${project.title} | Infriva Solutions`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) notFound();

  const otherProjects = projects
    .filter((item) => item.slug !== project.slug)
    .slice(0, 3);

  return (
    <ProjectDetailClient project={project} otherProjects={otherProjects} />
  );
}
