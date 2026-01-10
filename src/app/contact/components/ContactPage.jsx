"use client";

import React, { useEffect, useState } from "react";
import { Mail, Phone } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "@/Providers/ContextProvider";

const ContactPage = () => {
  const [mounted, setMounted] = useState(false);
  const { t } = useLanguage();
  const content = t.ContactPage;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="bg-transparent text-white px-4 py-16 font-sans">
        <div className="max-w-6xl mx-auto space-y-20 opacity-0" />
      </div>
    );
  }

  return (
    <div className="bg-transparent text-white px-4 py-16 font-sans">
      <div className="max-w-6xl mx-auto space-y-20">
        <section className="text-center space-y-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="text-3xl md:text-4xl font-bold tracking-wider uppercase"
          >
            {content.title}{" "}
            <span className="text-primary1">{content.titleHighlight}</span>
          </motion.h2>

          <div className="flex items-center justify-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex items-center gap-5 bg-[#0a0a0a]/40 border border-white/10 rounded-2xl p-8 hover:border-primary1/30 transition-colors group"
            >
              <div className="p-3 border border-primary1 rounded-lg text-primary1 group-hover:bg-primary1 group-hover:text-white transition-all">
                <Mail size={28} />
              </div>
              <div className="text-left">
                <p className="text-sm font-black tracking-[0.2em] text-gray-400 uppercase">
                  {content.emailLabel}
                </p>
                <a
                  href="mailto:contact@mon5majeur.fr"
                  className="text-lg md:text-xl font-medium text-gray-200 hover:text-white transition-colors"
                >
                  contact@mon5majeur.fr
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;
