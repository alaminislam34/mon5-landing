"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { useLanguage } from "@/Providers/ContextProvider";

function LegalNotice() {
  const [mounted, setMounted] = useState(false);
  const { t } = useLanguage();
  const content = t.LegalNotice;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="max-w-380 mx-auto w-11/12 px-6 py-16 text-white bg-transparent font-sans">
        <div className="opacity-0" />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto w-11/12 px-6 py-16 text-white bg-transparent font-sans">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">
          {content.title}{" "}
          <span className="text-[#ea7032]">{content.titleHighlight}</span>
        </h1>
        <p className="text-gray-500 text-sm md:text-Base tracking-widest uppercase">
          {content.lastUpdated}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-10"
        >
          <div>
            <h2 className="text-xl md:text-2xl font-bold uppercase tracking-widest mb-2">
              {content.publisherTitle}
            </h2>
            <div className="w-20 h-1 bg-[#ea7032]"></div>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-[#ea7032] font-black text-lg tracking-wide uppercase">
                MON5MAJEUR – SASU
              </p>
              <p className="text-gray-400 text-sm">{content.companyType}</p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <section>
                <p className="text-gray-500 text-xs uppercase tracking-[0.2em] font-bold mb-1">
                  {content.shareCapitalLabel}
                </p>
                <p className="text-white text-lg">€1,000</p>
              </section>

              <section>
                <p className="text-gray-500 text-xs uppercase tracking-[0.2em] font-bold mb-1">
                  {content.registeredOfficeLabel}
                </p>
                <p className="text-white text-lg">{content.officeAddress}</p>
              </section>

              <div className=" space-y-4">
                <section>
                  <p className="text-gray-500 text-xs uppercase tracking-[0.2em] font-bold mb-1">
                    {content.rcsLabel}
                  </p>
                  <p className="text-white text-lg">993 681 915</p>
                </section>
                <section>
                  <p className="text-gray-500 text-xs uppercase tracking-[0.2em] font-bold mb-1">
                    {content.siretLabel}
                  </p>
                  <p className="text-white text-lg">99368191500019</p>
                </section>
              </div>

              <section>
                <p className="text-gray-500 text-xs uppercase tracking-[0.2em] font-bold mb-1">
                  {content.directorLabel}
                </p>
                <p className="text-white text-lg">Robin Martinella</p>
              </section>

              <section>
                <p className="text-gray-500 text-xs uppercase tracking-[0.2em] font-bold mb-1">
                  {content.contactLabel}
                </p>
                <p className="text-[#ea7032] text-lg font-medium">
                  support@mon5majeur.com
                </p>
              </section>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col justify-between"
        >
          <div className="space-y-10">
            <div>
              <h2 className="text-xl md:text-2xl font-bold uppercase tracking-widest mb-2">
                {content.hostingTitle}
              </h2>
              <div className="w-20 h-1 bg-[#ea7032]"></div>
            </div>

            <div className="space-y-6">
              <p className="text-white font-black text-lg tracking-wide uppercase">
                OVH SAS
              </p>
              <section>
                <p className="text-gray-500 text-xs uppercase tracking-[0.2em] font-bold mb-1">
                  {content.hostingAddressLabel}
                </p>
                <p className="text-white text-lg">{content.hostingAddress}</p>
              </section>
            </div>
          </div>

          <div className="mt-20 md:mt-0">
            <div className="relative w-48 h-48 md:w-64 md:h-64 mb-4">
              <Image
                src="/logos/logo2.png"
                alt="MON5MAJEUR Branding"
                fill
                className="opacity-90 object-contain"
              />
              <div className="absolute inset-0 bg-[#ea7032]/20 blur-[60px] rounded-full -z-10"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default LegalNotice;
