"use client";

import React, { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import Image from "next/image";
import { motion } from "motion/react";
import { useLanguage } from "@/Providers/ContextProvider";

function UniverseOfMon5Majeur() {
  const [mounted, setMounted] = useState(false);
  const { t } = useLanguage();
  const content = t.UniverseOfMon5Majeur;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div id="features" className="max-w-380 mx-auto w-11/12 md:py-12">
        <div className="opacity-0 h-screen" />
      </div>
    );
  }

  const createMarkup = (html) => ({ __html: html });

  const featureImages = [
    "/images/pre-launch-bouns.jpg",
    "/images/in-game-jursey.jpg",
    "/images/team-logo.jpg",
    "/images/hall-of-fame.jpg",
    "/images/victory-trophy.jpg",
    "/images/stratigic-bonuses.jpg",
  ];
  const BonusCard = ({ index, delay, side = "left" }) => (
    <motion.div
      initial={{ opacity: 0, x: side === "left" ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: delay / 1000 }}
      className="flex flex-col items-center group w-full px-2" // Added padding to prevent edge touching
    >
      {/* Text Content Container */}
      <div className="py-3 px-4 md:px-6 text-center rounded-xl border border-white/50 bg-white/5 backdrop-blur-lg transition-all group-hover:border-[#E35D14]/50 w-full max-w-70 md:max-w-xs lg:max-w-sm flex flex-col justify-center">
        <h3
          className="text-sm lg:text-lg mb-1 font-medium text-white leading-snug"
          // Removed whitespace-nowrap to prevent screen overflow on mobile
          dangerouslySetInnerHTML={createMarkup(content.features[index].title)}
        />
        <p className="text-[10px] lg:text-xs text-[#B5B5B5] font-galdeano leading-tight opacity-90">
          {content.features[index].subtitle}
        </p>
      </div>

      {/* Image Container */}
      <div className="relative animate-float mt-4 w-full flex justify-center">
        <Image
          src={featureImages[index]}
          // Optimized dimensions for the actual rendered size
          height={400}
          width={400}
          alt={content.features[index].title || "Feature Image"}
          priority={index < 2} // Priority load for first few items
          className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>
    </motion.div>
  );

  return (
    <div id="features" className="max-w-380 mx-auto w-11/12 md:py-12">
      <SectionTitle
        title={content.title}
        colorTitle={content.colorTitle}
        left={""}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative z-10 lg:hidden"
      >
        <div className="absolute inset-0 bg-[#E35D14]/10 rounded-full blur-[100px] animate-pulse" />
        <div className="relative">
          <Image
            src="/images/Voly(ball).png"
            height={500}
            width={500}
            alt="Central Game Element"
            className="w-60 h-auto object-contain relative z-10 mx-auto"
          />
          <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 bg-black/60 backdrop-blur-xl py-3 border-y border-white/10 z-20">
            <Image
              src="/logos/logo.png"
              height={150}
              width={150}
              alt="Mon5Majeur Logo"
              className="mx-auto h-10 w-auto"
            />
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-2 gap-y-12 gap-x-4 lg:hidden mt-10">
        {content.features.map((_, i) => (
          <BonusCard
            key={i}
            index={i}
            delay={i * 100}
            side={i % 2 === 0 ? "left" : "right"}
          />
        ))}
      </div>

      <section className="hidden lg:grid grid-cols-3 items-center gap-4 mt-16">
        <div className="flex flex-col gap-24 items-end pr-10">
          <BonusCard index={0} delay={100} side="left" />
          <BonusCard index={1} delay={200} side="left" />
        </div>

        <div className="flex flex-col items-center gap-10">
          <div className="-mb-16 z-20">
            <BonusCard index={2} delay={300} side="left" />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="relative z-10"
          >
            <div className="absolute inset-0 bg-[#E35D14]/20 rounded-full blur-[100px] animate-pulse" />
            <div className="relative">
              <Image
                src="/images/Voly(ball).png"
                height={500}
                width={500}
                alt="Central Game Element"
                className="w-80 lg:w-100 h-auto object-contain relative z-10 mx-auto"
              />
              <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 bg-black/60 backdrop-blur-xl py-3 border-y border-white/10 z-20">
                <Image
                  src="/logos/logo.png"
                  height={150}
                  width={150}
                  alt="Mon5Majeur Logo"
                  className="mx-auto h-10 w-auto"
                />
              </div>
            </div>
          </motion.div>

          <div className="-mt-16 z-20">
            <BonusCard index={3} delay={400} side="right" />
          </div>
        </div>

        <div className="flex flex-col gap-24 items-start pl-10">
          <BonusCard index={4} delay={500} side="right" />
          <BonusCard index={5} delay={600} side="right" />
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default UniverseOfMon5Majeur;
