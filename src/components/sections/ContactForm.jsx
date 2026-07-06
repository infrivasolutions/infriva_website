"use client";

import { useState } from "react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import { API_URL } from "@/lib/api";

const initialForm = {
  clientName: "",
  phone: "",
  email: "",
  company: "",
  service: "",
  budget: "",
  message: "",
};

const services = [
  "Business Website",
  "E-commerce Website",
  "CRM Development",
  "Web Application",
  "Mobile App Development",
  "SEO Services",
  "Meta Ads / Lead Generation",
  "WhatsApp API Integration",
  "Automation",
  "Other",
];

const budgets = [
  "Below ₹15,000",
  "₹15,000 - ₹30,000",
  "₹30,000 - ₹50,000",
  "₹50,000 - ₹1,00,000",
  "Above ₹1,00,000",
  "Not Sure",
];

export default function ContactForm() {
  const [formData, setFormData] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === "phone" ? value.replace(/\D/g, "").slice(0, 10) : value,
    }));

    setError("");
    setSuccess("");
  };

  const validateForm = () => {
    if (!formData.clientName.trim()) {
      return "Please enter your name.";
    }

    if (formData.clientName.trim().length < 2) {
      return "Name must be at least 2 characters.";
    }

    if (!formData.phone.trim()) {
      return "Please enter your phone number.";
    }

    if (formData.phone.length !== 10) {
      return "Phone number must be exactly 10 digits.";
    }

    if (!formData.service) {
      return "Please select a service.";
    }

    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = validateForm();

    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      setLoading(true);
      setError("");
      setSuccess("");

      const response = await fetch(`${API_URL}/leads`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          clientName: formData.clientName.trim(),
          phone: formData.phone.trim(),
          email: formData.email.trim(),
          company: formData.company.trim(),
          service: formData.service,
          budget: formData.budget,
          message: formData.message.trim(),
          source: "Website",
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Something went wrong.");
      }

      setSuccess(
        "Thank you! Your enquiry has been received. Our team will contact you soon.",
      );
      setFormData(initialForm);
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-950 py-20 text-white"
    >
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-violet-600/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />

      <Container>
        <SectionHeading
          badge="Get Free Consultation"
          title="Ready To Build A Digital System That Brings Leads?"
          description="Tell us about your project. Your enquiry will directly reach our CRM so our team can follow up quickly."
          light
        />

        <div className="relative mx-auto mt-12 grid max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-white/10 shadow-2xl backdrop-blur-xl lg:grid-cols-[0.9fr_1.1fr]">
          <div className="bg-gradient-to-br from-violet-600 to-fuchsia-600 p-8 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/80">
              Infriva Solutions
            </p>

            <h3 className="mt-5 text-3xl font-bold leading-tight md:text-4xl">
              Websites, CRMs, SEO & Automation for Growing Businesses.
            </h3>

            <p className="mt-5 text-white/85">
              We do not just create websites. We build business systems that
              help you capture, manage and convert leads.
            </p>

            <div className="mt-8 space-y-4 text-sm text-white/90">
              <div className="rounded-2xl bg-white/15 p-4">
                Website + CRM Lead Capture
              </div>
              <div className="rounded-2xl bg-white/15 p-4">
                Meta Ads & Lead Generation Support
              </div>
              <div className="rounded-2xl bg-white/15 p-4">
                WhatsApp API & Business Automation
              </div>
            </div>

            <div className="mt-8 rounded-2xl bg-black/20 p-5">
              <p className="text-sm text-white/75">Quick Contact</p>
              <p className="mt-2 font-semibold">+91 82876 28307</p>
              <p className="mt-1 font-semibold">info@infrivasolutions.com</p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="grid gap-5 bg-white p-6 text-slate-900 md:p-10 md:grid-cols-2"
          >
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Full Name *
              </label>
              <input
                type="text"
                name="clientName"
                placeholder="Enter your name"
                value={formData.clientName}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 p-4 outline-none transition focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-100"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="10 digit mobile number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 p-4 outline-none transition focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-100"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 p-4 outline-none transition focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-100"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Company Name
              </label>
              <input
                type="text"
                name="company"
                placeholder="Your business name"
                value={formData.company}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 p-4 outline-none transition focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-100"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Service Required *
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 p-4 outline-none transition focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-100"
              >
                <option value="">Select Service</option>
                {services.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Budget
              </label>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 p-4 outline-none transition focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-100"
              >
                <option value="">Select Budget</option>
                {budgets.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Project Details
              </label>
              <textarea
                name="message"
                placeholder="Tell us about your business, website, CRM or marketing requirement..."
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 p-4 outline-none transition focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-100"
              />
            </div>

            {error && (
              <p className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm font-medium text-red-600 md:col-span-2">
                {error}
              </p>
            )}

            {success && (
              <p className="rounded-2xl border border-green-200 bg-green-50 p-4 text-sm font-medium text-green-700 md:col-span-2">
                {success}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="rounded-2xl bg-violet-600 px-6 py-4 font-semibold text-white transition hover:bg-violet-700 disabled:cursor-not-allowed disabled:opacity-70 md:col-span-2"
            >
              {loading ? "Submitting..." : "Send Enquiry"}
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}
