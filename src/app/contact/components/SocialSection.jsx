"use client";

import React, { useEffect, useState } from "react";
import {
  FaSquareInstagram,
  FaSquareXTwitter,
  FaXTwitter,
} from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { motion } from "motion/react";
import { useLanguage } from "@/Providers/ContextProvider";
import { Instagram, Music2 } from "lucide-react";

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
          transition={{ duration: 0.3 }}
          className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white"
        >
          {content.title}{" "}
          <span className="text-primary1">{content.titleHighlight}</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="flex gap-4 mt-6 md:mt-8"
        >
          <a
            href="https://www.instagram.com/mon5majeur/"
            target="_blank"
            className="py-1 px-1.5 flex items-center justify-center transition-all group bg-linear-to-tr from-yellow-500 to-pink-600 rounded-md hover:shadow-lg shadow-white/50 duration-300"
          >
            <Instagram size={28} className="text-4xl" />
          </a>
          <a
            href="https://x.com/mon5majeur"
            target="_blank"
            className="bg-black p-2 rounded-md hover:shadow-lg shadow-white/50 duration-300 group border border-white/10"
          >
            <FaXTwitter className="text-2xl group-hover:text-white" />
          </a>
          <a
            href="https://www.tiktok.com/@mon5majeur"
            target="_blank"
            className="bg-black p-2 rounded-md hover:shadow-lg shadow-white/50 duration-300 group border border-white/10"
          >
            <Music2 size={24} className=" group-hover:text-white" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default SocialSection;
