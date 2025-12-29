"use client";

import React, { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import { PiStarFourFill } from "react-icons/pi";
import { motion } from "framer-motion";
import { useLanguage } from "@/Providers/ContextProvider";

function Scrolling() {
  const [hasMounted, setHasMounted] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    setHasMounted(true);
  }, []);

  // Convert translation items object to array for mapping
  const scrollingItems = Object.values(t.scrolling.items);

  if (!hasMounted) {
    return (
      <div
        className="relative min-h-30 z-20 mt-12 md:mt-16 lg:mt-20 overflow-hidden"
        aria-hidden="true"
      >
        <div className="h-20 z-10 absolute top-12 left-1/2 -translate-y-1/2 -translate-x-1/2 -rotate-6 w-[150%] bg-primary1 opacity-20" />
        <div className="h-16 sm:h-20 z-10 absolute top-12 left-1/2 -translate-y-1/2 -translate-x-1/2 rotate-3 w-[150%] bg-primary2" />
      </div>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative min-h-30 z-20 mt-12 md:mt-16 lg:mt-20 font-aldrich"
      aria-label={t.scrolling.aria.sectionLabel}
    >
      <div className="h-20 z-10 absolute top-12 left-1/2 -translate-y-1/2 -translate-x-1/2 -rotate-6 w-[150%] bg-primary1 opacity-20 flex items-center justify-center pointer-events-none">
        <Marquee
          speed={30}
          gradient={false}
          autoFill={true}
          className="w-full flex items-center"
        >
          {scrollingItems.map((text, index) => (
            <div
              key={`track-1-${index}`}
              className="flex flex-row items-center"
            >
              <span className="md:text-lg lg:text-2xl xl:text-3xl font-medium px-4 text-white">
                {text}
              </span>
              <PiStarFourFill
                className="text-4xl text-white mx-10"
                aria-hidden="true"
              />
            </div>
          ))}
        </Marquee>
      </div>

      <div className="h-16 sm:h-20 z-10 absolute top-12 left-1/2 -translate-y-1/2 -translate-x-1/2 rotate-3 w-[150%] bg-primary2 flex items-center pointer-events-none shadow-lg">
        <Marquee
          speed={50}
          gradient={false}
          autoFill={true}
          direction="right"
          className="w-full flex items-center"
        >
          {scrollingItems.map((text, index) => (
            <div
              key={`track-2-${index}`}
              className="flex flex-row items-center"
            >
              <span className="md:text-lg lg:text-2xl xl:text-3xl font-medium px-4 text-white">
                {text}
              </span>
              <PiStarFourFill
                className="text-4xl text-white mx-10"
                aria-hidden="true"
              />
            </div> 
          ))}
        </Marquee>
      </div>
    </motion.section>
  );
}

export default Scrolling;
