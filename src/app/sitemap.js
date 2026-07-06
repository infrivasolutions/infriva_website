import { servicesData } from "@/data/services";
import { projects } from "@/data/projects";

export default function sitemap() {
  const baseUrl = "https://www.infrivasolutions.com";

  const staticPages = [
    "",
    "/about",
    "/services",
    "/projects",
    "/contact",
    "/privacy-policy",
    "/terms-and-conditions",
  ];

  const servicePages = servicesData.map(
    (service) => `/services/${service.slug}`,
  );
  const projectPages = projects.map((project) => `/projects/${project.slug}`);

  return [...staticPages, ...servicePages, ...projectPages].map((url) => ({
    url: `${baseUrl}${url}`,
    lastModified: new Date(),
  }));
}
