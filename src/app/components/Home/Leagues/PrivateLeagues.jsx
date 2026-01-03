"use client";

import { Plus } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { useLanguage } from "@/Providers/ContextProvider";

function PrivateLeagues() {
  const [mounted, setMounted] = useState(false);
  const { t } = useLanguage();
  const content = t.PrivateLeagues;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section className="min-h-125">
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-380 mx-auto w-11/12 items-center opacity-0" />
      </section>
    );
  }

  return (
    <section className="min-h-125">
      <section className="grid grid-cols-1 md:grid-cols-2 max-w-380 mx-auto w-11/12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false}}
          transition={{ duration: 0.3 }}
        >
          <div className="ring-2 ring-primary2/20 flex flex-col items-start bg-dark/5 backdrop-blur-xs p-6 md:p-8 rounded-2xl lg:max-w-5/6 w-full">
            <h1 className="text-2xl md:text-3xl lg:text-4xl tracking-tight font-semibold text-white mb-3">
              {content.title}
            </h1>
            <h4 className="text-lg md:text-xl text-primary1">
              {content.subtitle}
            </h4>
            <p className="text-Base font-galdeano md:text-lg lg:text-xl mt-6">
              {content.description}
            </p>
          </div>
        </motion.div>

        <div className="relative">
          <div className="relative lg:left-24">
            <div className="absolute top-10 left-0 w-40 h-40 bg-primary1/60 -z-10 blur-[100px]"></div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute top-10 md:top-0 md:right-0 right-0 lg:right-28 z-0"
            >
              <Image
                src="/images/volyball.png"
                height={1000}
                width={1200}
                alt="Decorative ball"
                className="max-w-40"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute top-60 left-0 md:left-12 md:top-60 lg:top-83.5 lg:left-44 ring-2 bg-linear-to-r from-[#000000] to-[#1B0D05] rounded-2xl ring-[#2D2D2D] z-20 py-2 px-6 flex flex-col items-center gap-1"
            >
              <h1 className="font-bold tracking-tigh md:text-lg text-white">
                {content.joinLeague}
              </h1>
              <span className="p-1.5 rounded-lg bg-white/20 backdrop-blur-lg">
                <Plus size={18} className="text-white" />
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="absolute bottom-2 md:bottom-50 lg:bottom-54 left-6 ring-2 rounded-2xl ring-[#2D2D2D] z-20 bg-linear-to-r from-[#000000] to-[#1B0D05] py-4 px-6 flex items-end flex-row gap-4"
            >
              <div className="flex flex-col gap-2 items-center">
                <Image
                  src="/images/diable-equipe.png"
                  height={40}
                  width={40}
                  alt="Team logo"
                  className="w-6 h-auto rounded-full ring-4 ring-gray-800 border-4 border-gray-600"
                />
                <h1 className="lg:text-lg tracking-wider font-semibold text-center text-white">
                  {content.teamName}
                </h1>
              </div>
              <div>
                <h1 className="text-lg lg:text-xl tracking-wider font-semibold text-center text-white">
                  {content.versus}
                </h1>
              </div>
              <div className="flex flex-col gap-2 items-center">
                <Image
                  src="/images/diable-equipe.png"
                  height={40}
                  width={40}
                  alt="Team logo"
                  className="w-6 h-auto rounded-full ring-4 ring-gray-800 border-4 border-gray-600"
                />
                <h1 className="lg:text-lg tracking-wider font-semibold text-center text-white">
                  {content.teamName}
                </h1>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false}}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <Image
                src="/images/mobile1.png"
                height={1000}
                width={1200}
                alt="Mobile application interface"
                className="lg:h-210 md:h-180 h-150 w-auto object-cover scale-110 relative z-10"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default PrivateLeagues;
