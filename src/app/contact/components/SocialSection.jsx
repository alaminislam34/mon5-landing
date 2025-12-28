"use client";

import React, { useEffect, useState } from "react";
import { FaSquareInstagram, FaSquareXTwitter } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { motion } from "motion/react";
import { useLanguage } from "@/Providers/ContextProvider";

function SocialSection() {
  const [mounted, setMounted] = useState(false);
  const { t } = useLanguage();
  const content = t.SocialSection;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section className="relative min-h-100 flex items-center justify-center">
        <div className="max-w-380 mx-auto w-11/12 flex flex-col items-center justify-center opacity-0" />
      </section>
    );
  }

  return (
    <section className="relative min-h-100 flex items-center justify-center">
      <div className="max-w-380 mx-auto w-11/12 flex flex-col items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white"
        >
          {content.title}{" "}
          <span className="text-primary1">{content.titleHighlight}</span>
        </motion.h1>

        <div className="*:text-4xl flex items-center gap-6 flex-row justify-center mt-6 text-white">
          <motion.a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            whileHover={{ scale: 1.1 }}
            className="text-primary1"
          >
            <FaSquareInstagram aria-label="Instagram" />
          </motion.a>

          <motion.a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            whileHover={{ scale: 1.1 }}
            className="bg-black shadow rounded"
          >
            <FaSquareXTwitter aria-label="X (Twitter)" />
          </motion.a>

          <motion.a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            whileHover={{ scale: 1.1 }}
          >
            <AiFillTikTok aria-label="TikTok" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}

export default SocialSection;
