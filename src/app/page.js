import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import TrustedSection from "@/components/sections/TrustedSection";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Projects from "@/components/sections/Projects";
import Process from "@/components/sections/Process";
import CTA from "@/components/sections/CTA";

export const metadata = {
  title: "Infriva Solutions | Website, CRM, SEO & IT Solutions Company",
  description:
    "Infriva Solutions helps businesses grow with modern websites, CRM systems, SEO, Meta Ads, WhatsApp API, automation and custom IT solutions.",
  keywords: [
    "Infriva Solutions",
    "IT Solutions Company",
    "Website Development",
    "CRM Development",
    "SEO Services",
    "Meta Ads",
    "Lead Generation",
    "WhatsApp API",
    "Business Automation",
  ],
  alternates: {
    canonical: "https://www.infrivasolutions.com/",
  },
  openGraph: {
    title: "Infriva Solutions | Website, CRM, SEO & IT Solutions",
    description:
      "Build high-converting websites, CRMs, automation systems and digital growth solutions for your business.",
    url: "https://www.infrivasolutions.com/",
    siteName: "Infriva Solutions",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Infriva Solutions",
  url: "https://www.infrivasolutions.com/",
  email: "info@infrivasolutions.com",
  telephone: "+91 82876 28307",
  description:
    "Infriva Solutions provides website development, CRM development, SEO, lead generation, WhatsApp API integration, automation and custom IT solutions.",
  areaServed: "India",
  sameAs: ["https://www.infrivasolutions.com/"],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <Navbar />

      <main className="overflow-hidden">
        <Hero />
        <TrustedSection />
        <Services />
        <WhyChooseUs />
        <Projects />
        <Process />
        <CTA />
      </main>

      <Footer />
    </>
  );
}
