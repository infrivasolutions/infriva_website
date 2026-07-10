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
  <form onSubmit={handleSubmit} className="space-y-4">
    <div>
      <label className="mb-2 block text-sm font-semibold text-slate-200">
        Full Name *
      </label>

      <input
        type="text"
        name="clientName"
        placeholder="Enter your name"
        value={formData.clientName}
        onChange={handleChange}
        className="w-full rounded-xl border border-white/10 bg-black/25 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-violet-500 focus:bg-black/35 focus:ring-4 focus:ring-violet-500/10"
      />
    </div>

    <div>
      <label className="mb-2 block text-sm font-semibold text-slate-200">
        Phone Number *
      </label>

      <input
        type="tel"
        name="phone"
        inputMode="numeric"
        placeholder="Enter your 10 digit mobile number"
        value={formData.phone}
        onChange={handleChange}
        className="w-full rounded-xl border border-white/10 bg-black/25 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-violet-500 focus:bg-black/35 focus:ring-4 focus:ring-violet-500/10"
      />
    </div>

    <div>
      <label className="mb-2 block text-sm font-semibold text-slate-200">
        Email Address
      </label>

      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={handleChange}
        className="w-full rounded-xl border border-white/10 bg-black/25 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-violet-500 focus:bg-black/35 focus:ring-4 focus:ring-violet-500/10"
      />
    </div>

    <div>
      <label className="mb-2 block text-sm font-semibold text-slate-200">
        What service do you need? *
      </label>

      <select
        name="service"
        value={formData.service}
        onChange={handleChange}
        className="w-full rounded-xl border border-white/10 bg-[#080d18] px-4 py-3.5 text-sm text-white outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10"
      >
        <option value="">Select a Service</option>

        {services.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>

    <div>
      <label className="mb-2 block text-sm font-semibold text-slate-200">
        Budget
      </label>

      <select
        name="budget"
        value={formData.budget}
        onChange={handleChange}
        className="w-full rounded-xl border border-white/10 bg-[#080d18] px-4 py-3.5 text-sm text-white outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10"
      >
        <option value="">Select Budget</option>

        {budgets.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>

    <div>
      <label className="mb-2 block text-sm font-semibold text-slate-200">
        Project Details
      </label>

      <textarea
        name="message"
        placeholder="Tell us briefly about your requirement..."
        rows="4"
        value={formData.message}
        onChange={handleChange}
        className="w-full resize-none rounded-xl border border-white/10 bg-black/25 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-violet-500 focus:bg-black/35 focus:ring-4 focus:ring-violet-500/10"
      />
    </div>

    {error && (
      <p className="rounded-xl border border-red-500/20 bg-red-500/10 p-3 text-sm font-medium text-red-300">
        {error}
      </p>
    )}

    {success && (
      <p className="rounded-xl border border-green-500/20 bg-green-500/10 p-3 text-sm font-medium text-green-300">
        {success}
      </p>
    )}

    <button
      type="submit"
      disabled={loading}
      className="flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-violet-600 to-purple-500 px-5 py-4 font-black text-white shadow-lg shadow-violet-950/30 transition hover:from-violet-700 hover:to-purple-600 disabled:cursor-not-allowed disabled:opacity-60"
    >
      {loading ? "Submitting..." : "Get Free Consultation"}
    </button>
  </form>
);
}
