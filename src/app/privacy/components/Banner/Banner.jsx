"use client";

import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import { motion } from "motion/react";
import { useLanguage } from "@/Providers/ContextProvider";

function Banner() {
  const [mounted, setMounted] = useState(false);
  const { t } = useLanguage();
  const content = t.PrivacyBanner;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section className="relative overflow-hidden">
        <div className="max-w-380 mx-auto min-h-120 md:min-h-130 lg:min-h-180 xl:min-h-200 flex items-center relative z-10">
          <div className="opacity-0 w-full h-full" />
        </div>
      </section>
    );
  }

  return (
    <section className="relative">
      <div className="max-w-380 mx-auto min-h-120 md:min-h-130 lg:min-h-150 xl:min-h-150 flex items-center bg-cover bg-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 0.6, x: 0 }}
          viewport={{ once: false}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute top-10 md:top-20 -left-40 md:left-20 lg:left-80 lg:top-40 z-0"
        >
          <Image
            src="/images/animation.png"
            width={1500}
            height={800}
            alt=""
            className="md:opacity-100 w-full max-w-120 lg:max-w-140"
            priority
          />
        </motion.div>

        <div className="flex items-center mt-20 h-full relative z-20 px-4">
          <div className="space-y-8 lg:max-w-7xl w-full">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false}}
              transition={{ duration: 0.8 }}
              className="text-2xl md:text-4xl lg:text-5xl font-bold leading-[1.2] text-white"
            >
              {content.title}{" "}
              <span className="text-primary1 min-h-[1.2em]">
                <TypeAnimation
                  key={content.animatedWord}
                  sequence={[content.animatedWord, 1000, "", 1000]}
                  speed={50}
                  cursor={true}
                  repeat={Infinity}
                  style={{
                    whiteSpace: "wrap",
                  }}
                />
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="sm:text-lg md:text-xl max-w-4xl md:max-w-2xl text-white"
            >
              {content.effectiveDate}
            </motion.p>
          </div>
        </div>

        <div className="w-80 lg:w-100 lg:h-100 h-80 bg-linear-to-br from-primary1/10 via-primary1/20 to-primary2/50 blur-[100px] absolute lg:blur-[250px] lg:top-30 lg:left-30 left-0 top-0"></div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 0.6, x: 0 }}
          viewport={{ once: false}}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
          className="absolute top-20 md:top-10 -right-15 md:-right-10 z-0"
        >
          <Image
            src="/images/throughBall.png"
            width={1500}
            height={800}
            alt=""
            className="md:opacity-100 w-full max-w-140 sm:max-w-120 md:max-w-130 lg:max-w-160"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Banner;
