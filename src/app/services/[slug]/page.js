import { servicesData } from "@/data/services";
import { notFound } from "next/navigation";
import ServiceDetailClient from "./ServiceDetailClient";
export function generateStaticParams() {
  return servicesData.map((service) => ({ slug: service.slug }));
}
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = servicesData.find((item) => item.slug === slug);
  if (!service) {
    return { title: "Service Not Found | Infriva Solutions" };
  }
  return {
    title: `${service.title} | Infriva Solutions`,
    description: service.short,
  };
}
export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = servicesData.find((item) => item.slug === slug);
  if (!service) notFound();
  const otherServices = servicesData
    .filter((item) => item.slug !== service.slug)
    .slice(0, 4);
  return (
    <ServiceDetailClient service={service} otherServices={otherServices} />
  );
}
