"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";

function Banner() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative overflow-hidden bg-background">
      <div className="max-w-380 mx-auto min-h-140 md:min-h-150 lg:min-h-180 xl:min-h-200 flex items-center bg-cover bg-center z-10 relative">
        <div className="flex items-center mt-20 h-full w-full">
          <div className="flex items-center justify-start h-full md:pt-6 lg:pt-12 px-4 w-full">
            <div className="space-y-8 z-50 lg:max-w-7xl w-full">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.2] text-foreground"
              >
                Build your 5. <br /> Dominate The{" "}
                <span className="text-primary1 inline-block min-h-[1.2em]">
                  {mounted && (
                    <TypeAnimation
                      sequence={["NBA Nights.", 2000, "", 1000]}
                      speed={50}
                      cursor={true}
                      repeat={Infinity}
                      style={{
                        whiteSpace: "pre-wrap",
                        display: "inline-block",
                      }}
                    />
                  )}
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="sm:text-lg md:text-xl text-Base max-w-4xl md:max-w-2xl"
              >
                Create your dream team, compete with friends, and track
                real-time NBA stats. Ready to play?
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="flex flex-row items-center gap-4 sm:gap-6"
              >
                <a
                  href="#"
                  className="transition-transform active:scale-95"
                  aria-label="Download on Google Play"
                >
                  <Image
                    src="/images/google-play.png"
                    height={64}
                    width={180}
                    alt="Get it on Google Play"
                    className="h-10 sm:h-14 md:h-16 hover:opacity-90 transition-opacity bg-dark/50 rounded-lg w-auto object-contain"
                  />
                </a>
                <a
                  href="#"
                  className="transition-transform active:scale-95"
                  aria-label="Download on the App Store"
                >
                  <Image
                    src="/images/app-store.png"
                    height={64}
                    width={180}
                    alt="Download on the App Store"
                    className="h-10 sm:h-14 md:h-16 hover:opacity-90 transition-opacity bg-dark/50 rounded-lg w-auto object-contain"
                  />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: mounted ? 1 : 0, x: 0 }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute right-0 top-14 sm:top-14 md:-top-1 lg:top-0 lg:scale-110 lg:right-12 z-0 pointer-events-none select-none"
      >
        <Image
          src="/images/hand.png"
          width={1500}
          height={800}
          alt="Hand holding mobile showing game application"
          className="opacity-50 lg:opacity-100 w-full lg:max-h-160 xl:max-h-190 object-contain"
          priority
        />
      </motion.div>
    </section>
  );
}

export default Banner;
