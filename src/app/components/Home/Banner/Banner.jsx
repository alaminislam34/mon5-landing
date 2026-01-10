"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";
import { useLanguage } from "@/Providers/ContextProvider";
import Link from "next/link";

function Banner() {
  const [mounted, setMounted] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative bg-background">
      <div className="max-w-380 mx-auto min-h-140 md:min-h-150 lg:min-h-180 xl:min-h-200 flex items-center bg-cover bg-center z-10 relative">
        <div className="flex items-center mt-20 h-full w-full">
          <div className="flex items-center justify-start h-full md:pt-6 lg:pt-12 px-4 w-full">
            <div className="space-y-8 z-50 lg:max-w-7xl w-full">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.2] text-foreground"
              >
                {t.banner.title.part1} <br /> {t.banner.title.part2} <br />
                <span className="text-primary1 inline-block min-h-[1.2em]">
                  {mounted && (
                    <TypeAnimation
                      key={t.banner.title.animated} // Re-run animation on language change
                      sequence={[t.banner.title.animated, 2000, "", 1000]}
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
                transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
                className="sm:text-lg md:text-xl text-Base max-w-4xl md:max-w-2xl"
              >
                {t.banner.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
                className="flex flex-row items-center gap-4 sm:gap-6"
              >
                <Link href={"#"}>
                  <div className="rounded-xl flex flex-row items-center gap-2 border-gray-500/50 backdrop-blur-md py-3 px-4 justify-between border">
                    <div>
                      <Image
                        src={"/logos/play.png"}
                        height={50}
                        width={50}
                        alt="Play store"
                        className="w-7 md:w-8 h-auto"
                      />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-xs truncate text-gray-400">
                        {t.banner.downloadLinks.googlePlay}
                      </p>
                      <p className="text-lg truncate md:text-xl font-semibold leading-none">
                        Play Store
                      </p>
                    </div>
                  </div>
                </Link>
                <Link href={"#"}>
                  <div className="rounded-xl flex flex-row items-center gap-2 border-gray-500/50 backdrop-blur-md py-3 px-4 justify-between border">
                    <div>
                      <Image
                        src={"/logos/apple-black-logo.png"}
                        height={50}
                        width={50}
                        alt="Play store"
                        className="w-7 md:w-8 h-auto"
                      />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-xs truncate text-gray-400">
                        {t.banner.downloadLinks.appStore}
                      </p>
                      <p className="text-lg truncate md:text-xl font-semibold leading-none">
                        App Store
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: mounted ? 1 : 0, x: 0 }}
        transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="absolute right-0 top-14 sm:top-14 md:-top-1 lg:top-0 lg:scale-110 lg:right-12 z-0 pointer-events-none select-none"
      >
        <Image
          src="/images/hand.png"
          width={1500}
          height={800}
          alt={t.banner.altText.heroHand}
          className="opacity-50 lg:opacity-100 w-full lg:max-h-160 xl:max-h-190 object-contain"
          priority
        />
      </motion.div>
    </section>
  );
}

export default Banner;
