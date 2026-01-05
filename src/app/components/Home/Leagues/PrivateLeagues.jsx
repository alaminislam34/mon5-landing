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
      <section className="grid grid-cols-1 gap-8 md:grid-cols-2 max-w-380 mx-auto w-11/12 items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
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
          <div className="relative flex items-center justify-end">
            <div className="absolute top-10 left-0 w-40 h-40 bg-primary1/60 -z-10 blur-[100px]"></div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <Image
                src="/images/privateLeage.png"
                height={1000}
                width={1200}
                alt="Mobile application interface"
                className="lg:h-150 border-white w-auto object-cover relative z-10"
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
