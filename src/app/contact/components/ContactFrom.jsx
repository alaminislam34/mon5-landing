"use client";

import React, { useState, useEffect } from "react";
import { Send } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "@/Providers/ContextProvider";

const ContactForm = () => {
  const [mounted, setMounted] = useState(false);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
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
              viewport={{ once: false}}
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
              viewport={{ once: false}}
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
            viewport={{ once: false}}
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
            viewport={{ once: false}}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="flex justify-end"
          >
            <button
              type="submit"
              className="group bg-[#ea7032] hover:bg-[#d65f22] text-white font-bold py-4 px-8 rounded-xl flex items-center gap-3 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-orange-950/20"
            >
              {content.submitBtn}
              <Send
                size={18}
                className="group-hover:translate-x-1 transition-transform"
                aria-hidden="true"
              />
            </button>
          </motion.div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
