"use client";

import React, { useEffect, useState } from "react";
import { Instagram, Twitter, Music2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { useLanguage } from "@/Providers/ContextProvider";

function Footer() {
  const [mounted, setMounted] = useState(false);
  const { t } = useLanguage();
  const content = t.Footer;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <footer className="text-white md:pt-20 pb-10 max-w-380 mx-auto w-11/12 overflow-hidden">
        <div className="opacity-0 h-96" />
      </footer>
    );
  }

  return (
    <footer className="text-white md:pt-20 pb-10 max-w-380 mx-auto w-11/12 ">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false}}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16"
      >
        <div className="max-w-4xl w-full">
          <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-4">
            {content.notifiedTitle}{" "}
            <span className="text-primary1 uppercase tracking-wider">
              {content.launches}
            </span>
          </h2>
          <p className="text-gray-400 text-lg font-galdeano">
            {content.notifiedSubtitle}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder={content.placeholder}
            className="bg-[#0f0f0f] border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-primary1 transition-colors font-galdeano"
          />
          <button className="bg-primary1 hover:bg-orange-600 transition-all text-white font-bold px-8 py-4 rounded-xl whitespace-nowrap active:scale-95">
            {content.button}
          </button>
        </div>
      </motion.div>

      <hr className="border-white/10 mb-16" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false}}
          transition={{ duration: 0.6 }}
          className="col-span-1 md:col-span-1 space-y-6"
        >
          <div className="flex items-center gap-2">
            <div>
              <Link href="/">
                <Image
                  src="/logos/logo.png"
                  height={200}
                  width={200}
                  alt="Logo"
                  priority
                  className="h-12 w-auto bg-cover bg-center object-cover"
                />
              </Link>
            </div>
          </div>
          <p className="text-gray-400 font-galdeano leading-relaxed">
            {content.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-6"
        >
          <h4 className="text-primary1 font-bold text-xl">{content.home}</h4>
          <ul className="space-y-4 text-gray-400 font-medium">
            <li>
              <a
                href="/#features"
                className="hover:text-white transition-colors"
              >
                {content.features}
              </a>
            </li>
            <li>
              <a href="/#faq" className="hover:text-white transition-colors">
                {content.faq}
              </a>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <h4 className="text-primary1 font-bold text-xl">
            {content.services}
          </h4>
          <ul className="space-y-4 text-gray-400 font-medium">
            <li>
              <Link
                href="/contact"
                className="hover:text-white transition-colors"
              >
                {content.contact}
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                className="hover:text-white transition-colors"
              >
                {content.terms}
              </Link>
            </li>
            <li>
              <Link
                href="/privacy"
                className="hover:text-white transition-colors"
              >
                {content.privacy}
              </Link>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-6"
        >
          <h4 className="text-primary1 font-bold text-xl uppercase tracking-widest">
            {content.followUs}
          </h4>
          <div className="flex gap-4">
            <a
              href="#"
              className="p-3 bg-white/5 rounded-xl hover:bg-primary1 transition-all group"
            >
              <Instagram className="w-6 h-6 group-hover:text-white" />
            </a>
            <a
              href="#"
              className="p-3 bg-white/5 rounded-xl hover:bg-primary1 transition-all group"
            >
              <Twitter className="w-6 h-6 group-hover:text-white" />
            </a>
            <a
              href="#"
              className="p-3 bg-white/5 rounded-xl hover:bg-primary1 transition-all group"
            >
              <Music2 className="w-6 h-6 group-hover:text-white" />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false}}
        transition={{ duration: 0.8 }}
        className="pt-8 border-t border-white/5 text-center text-gray-500 text-sm font-galdeano"
      >
        {content.copyright}
      </motion.div>
    </footer>
  );
}

export default Footer;
