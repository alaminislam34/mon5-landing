"use client";

import React, { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import Image from "next/image";
import { BsArrowUpRightSquareFill } from "react-icons/bs";
import { motion } from "motion/react";
import { useLanguage } from "@/Providers/ContextProvider";

function Experience() {
  const [mounted, setMounted] = useState(false);
  const { t } = useLanguage();
  const content = t.Experience;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section className="relative min-h-280 h-full xl:mt-12">
        <div className="max-w-380 mx-auto w-11/12 opacity-0" />
      </section>
    );
  }

  return (
    <section className="relative min-h-280 h-full xl:mt-12">
      <section className="max-w-380 mx-auto w-11/12 lg:mb-24 relative z-30">
        <div className="max-w-180 lg:max-w-195">
          <SectionTitle
            title={content.title}
            colorTitle={content.colorTitle}
            left="left"
          />
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false}}
            transition={{ duration: 0.8 }}
            className="max-w-10/12"
          >
            <p className="text-lg md:text-2xl lg:text-3xl font-galdeano text-Base">
              {content.subtitle1}
            </p>
            <p className="text-lg md:text-2xl lg:text-3xl font-galdeano text-Base pt-2 leading-normal">
              {content.subtitle2}{" "}
              <span className="font-bold font-russoOne text-primary1">
                {content.budget}
              </span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-row items-center gap-4 md:text-lg py-4"
          >
            <h2 className="py-2 px-6 rounded-xl border border-base/50 shadow-inner text-primary1/90">
              {content.badge1}
            </h2>
            <h2 className="py-2 px-6 rounded-xl border border-base/50 shadow-inner text-primary1/90">
              {content.badge2}
            </h2>
          </motion.div>

          <ul className="mt-6">
            {[
              { val: "100%", label: content.fun },
              { val: "100%", label: content.freedom },
              { val: "100%", label: content.strategy },
            ].map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="flex items-center gap-2 p-2"
              >
                <span className="w-5 h-5 ring ring-base/80 bg-white/10 inline-block border-4 border-white/20 rounded-sm"></span>
                <p className="text-xl text-primary1 font-medium font-aldrich">
                  {item.val} <span className="text-Base">{item.label}</span>
                </p>
              </motion.li>
            ))}
          </ul>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="py-4 flex relative z-50"
          >
            <a
              href="#launch"
              className="py-3 px-6 rounded-lg bg-linear-to-r from-primary1 to-primary2 text-white font-semibold flex items-center flex-row gap-2 relative z-50 cursor-pointer"
            >
              {content.cta}
              <BsArrowUpRightSquareFill aria-hidden="true" />
            </a>
          </motion.div>
        </div>
      </section>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false}}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute top-0 -right-40 pointer-events-none z-10"
      >
        <Image
          src="/images/player.png"
          height={1200}
          width={1200}
          alt="NBA Player visual"
          className="max-h-150 lg:max-h-220 xl:max-h-300 h-full w-auto opacity-20 lg:opacity-100 object-contain"
        />
      </motion.div>

      <section className="max-w-380 mx-auto w-11/12 grid grid-cols-1 lg:grid-cols-2 py-24 items-center relative z-20">
        <div className="relative">
          <div className="absolute -top-30 -left-30 w-60 h-40 bg-primary1/60 -z-10 blur-[200px]" />
          <div className="absolute top-0 left-60 w-40 h-60 bg-primary1/60 -z-10 blur-[200px]" />

          <motion.div
            animate={{
              y: [-5, 5, -5],
            }}
            transition={{
              duration: 3, // Eta smooth floating er jonno 3 second rakha hoyeche
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-10 md:top-35 lg:top-65 md:-left-10 md:-rotate-25 left-0 z-0 pointer-events-none"
          >
            <Image
              src="/images/circle.png"
              height={600}
              width={1000}
              alt=""
              aria-hidden="true"
              className="max-w-200 h-auto"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false}}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/images/mobile.png"
              height={1000}
              width={1500}
              alt="Mobile app preview"
              className="h-120 md:h-150 lg:h-185 object-cover w-auto relative z-10"
            />
          </motion.div>
        </div>

        <div className="space-y-12">
          {[content.card1, content.card2].map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false}}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="ring-2 ring-primary2/20 flex flex-col items-start bg-linear-to-tl from-gray-900/80 to-[#00000000] backdrop-blur-2xl p-6 md:p-8 rounded-2xl"
            >
              <h1 className="text-2xl md:text-3xl lg:text-4xl tracking-tight font-semibold text-white mb-3">
                {card.title}
              </h1>
              <h4 className="text-lg md:text-xl text-primary1">
                {card.subtitle}
              </h4>
              <p className="text-Base font-galdeano md:text-lg lg:text-xl mt-6">
                {card.content}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </section>
  );
}

export default Experience;
