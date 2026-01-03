"use client";

import React, { useEffect, useState } from "react";
import { Download, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "@/Providers/ContextProvider";

function PlayersGuide() {
  const [mounted, setMounted] = useState(false);
  const { t } = useLanguage();
  const content = t.PlayersGuide;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section className="text-white font-sans max-w-380 mx-auto w-11/12 py-16">
        <div className="max-w-3xl space-y-8 opacity-0" />
      </section>
    );
  }

  return (
    <section className="text-white font-sans max-w-380 mx-auto w-11/12 py-16">
      <div className="max-w-3xl space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false}}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            {content.title}{" "}
            <span className="text-primary1">{content.colorTitle}</span>
          </h2>
          <p className="font-galdeano text-Base text-lg md:text-xl lg:text-2xl leading-relaxed max-w-3xl">
            {content.description}
          </p>
        </motion.div>

        <ul className="space-y-4 py-4">
          {content.features.map((feature, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="flex items-center gap-3 text-lg md:text-xl font-medium"
            >
              <div className="text-primary1 shrink-0">
                <CheckCircle2
                  className="w-6 h-6 md:w-7 md:h-7"
                  strokeWidth={2.5}
                />
              </div>
              <span className="tracking-wide">{feature}</span>
            </motion.li>
          ))}
        </ul>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="space-y-4"
        >
          <a
            href="/files/Mon5Majeur Presentation-2.pdf"
            download
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-linear-to-r from-primary1 to-primary2 text-white font-bold uppercase tracking-wider text-sm md:text-Base transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(227,93,20,0.3)] active:scale-95"
          >
            {content.cta}
            <Download className="w-5 h-5" strokeWidth={3} />
          </a>
          <p className="text-gray-500 text-sm md:text-lg font-galdeano ml-1">
            {content.disclaimer}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default PlayersGuide;
