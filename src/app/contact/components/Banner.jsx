"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { useLanguage } from "@/Providers/ContextProvider";

function ContactBanner() {
  const [mounted, setMounted] = useState(false);
  const { t } = useLanguage();
  const content = t.ContactBanner;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section className="relative overflow-hidden">
        <div className="max-w-380 mx-auto min-h-80 md:min-h-100 lg:min-h-110 xl:min-h-120 flex items-center bg-cover bg-center relative z-10">
          <div className="flex items-center justify-center flex-col gap-4 w-full opacity-0" />
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden">
      <div className="max-w-380 mx-auto min-h-80 md:min-h-100 lg:min-h-110 xl:min-h-120 flex items-center bg-cover bg-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 0.6, x: 0 }}
          viewport={{ once: true}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute top-10 md:top-20 -left-40 md:left-20 lg:left-80 lg:top-40 z-0"
        >
          <Image
            src="/images/animation.png"
            width={1500}
            height={800}
            alt=""
            className="md:opacity-100 w-full max-w-120 lg:max-w-150"
            priority
          />
        </motion.div>

        <div className="flex items-center justify-center flex-col gap-4 w-full text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true}}
            transition={{ duration: 0.3 }}
            className="text-2xl md:text-4xl lg:text-5xl font-bold leading-[1.2] text-white"
          >
            {content.title}{" "}
            <span className="text-primary1">{content.titleHighlight}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true}}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="sm:text-lg md:text-xl text-white max-w-2xl"
          >
            {content.subtitle}
          </motion.p>
        </div>

        <div className="w-80 lg:w-100 lg:h-100 h-80 bg-linear-to-br from-primary1/10 via-primary1/20 to-primary2/50 blur-[100px] absolute lg:blur-[250px] lg:top-30 lg:left-30 left-0 top-0" />
      </div>
    </section>
  );
}

export default ContactBanner;
