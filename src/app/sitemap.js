import { servicesData } from "@/data/services";
import { projects } from "@/data/projects";
import { blogs } from "@/data/blogs";

const BASE_URL = "https://www.infrivasolutions.com";

export default function sitemap() {
  const staticPages = [
    {
      path: "",
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      path: "/about",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      path: "/services",
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      path: "/projects",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      path: "/blog",
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      path: "/contact",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      path: "/privacy-policy",
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      path: "/terms-and-conditions",
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const servicePages = servicesData.map((service) => ({
    url: `${BASE_URL}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const projectPages = projects.map((project) => ({
    url: `${BASE_URL}/projects/${project.slug}`,
    lastModified: project.updatedAt ? new Date(project.updatedAt) : new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const blogPages = blogs.map((blog) => ({
    url: `${BASE_URL}/blog/${blog.slug}`,
    lastModified: new Date(blog.updatedAt || blog.publishedAt),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const formattedStaticPages = staticPages.map((page) => ({
    url: `${BASE_URL}${page.path}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  return [
    ...formattedStaticPages,
    ...servicePages,
    ...projectPages,
    ...blogPages,
  ];
}
