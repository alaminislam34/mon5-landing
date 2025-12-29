"use client";

import React, { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import Image from "next/image";
import { motion } from "motion/react";
import { useLanguage } from "@/Providers/ContextProvider";

function GetNotified() {
  const [mounted, setMounted] = useState(false);
  const { t } = useLanguage();
  const content = t.GetNotified;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section id="launch" aria-hidden="true">
        <div className="max-w-380 mx-auto w-11/12 py-12 md:py-16 invisible" />
      </section>
    );
  }

  return (
    <section id="launch">
      <div className="max-w-380 mx-auto w-11/12 py-12 md:py-16 mt-6">
        <div>
          <div className="flex items-center relative">
            <div className="md:max-w-3/5 w-full space-y-4 xl:space-y-6 relative z-10">
              <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white font-medium font-aldrich leading-normal pb-6">
                {content.sectionTitle}{" "}
                <span className="text-primary1">
                  {content.sectionTitleAccent}
                </span>
              </h1>
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex flex-row gap-2 md:gap-4 items-center justify-between md:text-lg xl:text-xl"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  required
                  placeholder={content.inputPlaceholder}
                  aria-label={content.inputPlaceholder}
                  className="py-3 px-5 rounded-xl shadow bg-gray-800/20 border-base/5 ring-base/30 border focus:outline-none ring focus:ring-primary1 w-4/6"
                />
                <button
                  type="submit"
                  className="py-3 px-6 rounded-xl truncate bg-linear-to-r from-primary1 to-primary2 hover:bg-primary2 text-white w-2/6 transition-all duration-300 active:scale-95"
                >
                  {content.buttonText}
                </button>
              </motion.form>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                className="text-gray-400 text-sm pb-4"
              >
                {content.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex"
              >
                <p className="py-4 font-galdeano leading-normal tracking-wider px-12 text-primary1 border border-primary1/50 shadow-white/30 backdrop-blur-xl rounded-xl shadow text-lg md:text-xl lg:text-2xl">
                  {content.promoText}
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="md:max-w-2/5 md:relative absolute left-0"
            >
              <Image
                src="/images/throughBall.jpg"
                height={800}
                width={1200}
                alt="Athlete throwing a ball"
                priority={false}
                className="relative z-0 opacity-40 md:opacity-100 scale-125 left-24 md:left-10 md:scale-120 lg:bottom-10 object-contain pointer-events-none"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetNotified;
