"use client";

import React, { useState, useEffect } from "react";
import { Send } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "@/Providers/ContextProvider";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";

const ContactForm = () => {
  const [mounted, setMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useLanguage();
  const content = t.ContactForm;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("All fields are required.");
      return;
    }

    try {
      setIsLoading(true);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
        }),
      });

      // Handle non-2xx responses
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData?.message || "Something went wrong");
      }

      toast.success("Message sent successfully.");

      // Reset form after success
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact form error:", error);
      toast.error(error.message || "Failed to send message.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (!mounted) {
    return (
      <section className="bg-transparent py-12 px-4">
        <div className="max-w-380 w-11/12 mx-auto opacity-0" />
      </section>
    );
  }

  return (
    <section className="bg-transparent py-12 px-4">
      <div className="max-w-380 w-11/12 mx-auto">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="space-y-2"
            >
              <label
                htmlFor="name"
                className="font-aldrich text-lg md:text-xl font-bold text-white flex items-center gap-2"
              >
                {content.nameLabel}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={content.namePlaceholder}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-primary1/50 focus:ring-1 focus:ring-primary1/50 transition-all font-galdeano"
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="space-y-2"
            >
              <label
                htmlFor="email"
                className="font-aldrich text-lg md:text-xl font-bold text-white flex items-center gap-2"
              >
                {content.emailLabel}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={content.emailPlaceholder}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-primary1/50 focus:ring-1 focus:ring-primary1/50 transition-all font-galdeano"
                required
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="space-y-2"
          >
            <label
              htmlFor="message"
              className="text-lg md:text-xl font-bold text-white flex items-center gap-2"
            >
              {content.messageLabel}
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              placeholder={content.messagePlaceholder}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-primary1/50 focus:ring-1 focus:ring-primary1/50 transition-all font-galdeano resize-none"
              required
            ></textarea>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="flex justify-end"
          >
            <button
              type="submit"
              className="group bg-[#ea7032] hover:bg-[#d65f22] text-white font-bold py-4 px-8 rounded-xl flex items-center gap-3 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-orange-950/20"
            >
              {isLoading ? "Sending......." : content.submitBtn}
              <Send
                size={18}
                className="group-hover:translate-x-1 transition-transform"
                aria-hidden="true"
              />
            </button>
          </motion.div>
        </form>
      </div>
      <Toaster position="top-center" />
    </section>
  );
};

export default ContactForm;
