"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { useLanguage } from "@/Providers/ContextProvider";

function GlobalLeagues() {
  const [mounted, setMounted] = useState(false);
  const { t } = useLanguage();
  const content = t.GlobalLeagues;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section className="min-h-125" aria-hidden="true">
        <div className="flex justify-between flex-col-reverse md:flex-row gap-6 md:gap-12 lg:gap-20 max-w-380 mx-auto w-11/12 items-center invisible" />
      </section>
    );
  }

  return (
    <section className="min-h-125">
      <section className="flex justify-between flex-col-reverse md:flex-row gap-6 md:gap-12 lg:gap-20 max-w-380 mx-auto w-11/12 items-center">
        <div className="relative flex items-center justify-start">
          <div className="relative lg:right-20">
            <div className="absolute top-10 left-0 w-40 h-40 bg-primary1/60 -z-10 blur-[100px]" />

            <motion.div
              initial={{ opacity: 0, rotate: 0 }}
              whileInView={{ opacity: 1, rotate: -6 }}
              viewport={{ once: false }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute -top-70 -right-90 z-0"
            >
              <Image
                src="/images/circle.png"
                height={1000}
                width={1200}
                alt=""
                className="w-200"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/images/globalLeage.png"
                height={1000}
                width={1200}
                alt="Global League Mobile Interface"
                className="lg:max-h-220 w-auto relative z-10"
                priority
              />
            </motion.div>
          </div>
        </div>

        <div className="flex items-center justify-end">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.3 }}
            className="ring-2 ring-primary2/20 flex flex-col items-start bg-dark/5 backdrop-blur-xs p-6 md:p-8 rounded-2xl lg:max-w-5/6 w-full"
          >
            <h1 className="text-2xl md:text-3xl lg:text-4xl tracking-tight font-semibold text-white mb-3">
              {content.title}
            </h1>
            <h4 className="text-lg md:text-xl text-primary1">
              {content.subtitle}
            </h4>
            <p className="text-Base font-galdeano md:text-lg lg:text-xl mt-6">
              {content.description}
            </p>
          </motion.div>
        </div>
      </section>
    </section>
  );
}

export default GlobalLeagues;
