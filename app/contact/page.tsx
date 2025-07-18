"use client";
import { useState } from "react";
import VantaBackground from "../components/vantaBg";

interface FormData {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          company: "",
          subject: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <VantaBackground options={{ color: 0x1e88e5 }}>
      <section
        className="flex items-center justify-center text-white p-4 mt-20 mb-10"
        style={{ zIndex: 1 }}
      >
        <div className="bg-black/70 backdrop-blur-lg p-10 rounded-2xl border border-white/10 shadow-2xl w-full max-w-4xl">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
              Get In Touch
            </h1>
            <p className="text-white/80 text-lg leading-relaxed">
              Have a project in mind? Let&apos;s discuss how we can work
              together.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name and Email Row */}
            <div className="flex gap-4 flex-wrap">
              <div className="flex-1 min-w-[250px]">
                <label className="block mb-2 font-medium text-white/90">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg bg-white/10 text-white border transition-all duration-300 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 ${
                    errors.name ? "border-red-400" : "border-white/20"
                  }`}
                  placeholder="Your full name"
                />
                {errors.name && (
                  <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div className="flex-1 min-w-[250px]">
                <label className="block mb-2 font-medium text-white/90">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg bg-white/10 text-white border transition-all duration-300 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 ${
                    errors.email ? "border-red-400" : "border-white/20"
                  }`}
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                )}
              </div>
            </div>

            {/* Company */}
            <div>
              <label className="block mb-2 font-medium text-white/90">
                Company (Optional)
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white/10 text-white border border-white/20 transition-all duration-300 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
                placeholder="Your company name"
              />
            </div>

            {/* Subject */}
            <div>
              <label className="block mb-2 font-medium text-white/90">
                Subject *
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg bg-white/10 text-white border transition-all duration-300 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 ${
                  errors.subject ? "border-red-400" : "border-white/20"
                }`}
                placeholder="What's this about?"
              />
              {errors.subject && (
                <p className="text-red-400 text-sm mt-1">{errors.subject}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <label className="block mb-2 font-medium text-white/90">
                Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className={`w-full px-4 py-3 rounded-lg bg-white/10 text-white border transition-all duration-300 outline-none resize-y min-h-[120px] focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 ${
                  errors.message ? "border-red-400" : "border-white/20"
                }`}
                placeholder="Tell me about your project, timeline, and any specific requirements..."
              />
              {errors.message && (
                <p className="text-red-400 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full px-8 py-4 rounded-lg text-white text-lg font-semibold transition-all duration-300 transform ${
                isSubmitting
                  ? "bg-blue-400/50 cursor-not-allowed"
                  : "bg-gradient-to-r from-blue-400 to-blue-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-400/30 active:translate-y-0"
              }`}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {/* Status Messages */}
            {submitStatus === "success" && (
              <div className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-300 text-center">
                ✅ Message sent successfully! I&apos;ll get back to you soon.
              </div>
            )}

            {submitStatus === "error" && (
              <div className="p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-300 text-center">
                ❌ Something went wrong. Please try again or contact me
                directly.
              </div>
            )}
          </form>

          {/* Footer */}
          <div className="text-center mt-8 pt-8 border-t border-white/10">
            <p className="text-white/70 text-sm leading-relaxed">
              Prefer email? Reach me directly at{" "}
              <a
                href="mailto:christopherespenida@email.com"
                className="text-blue-400 hover:text-blue-300 hover:underline transition-colors duration-300"
              >
                christopherespenida@email.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </VantaBackground>
  );
}
