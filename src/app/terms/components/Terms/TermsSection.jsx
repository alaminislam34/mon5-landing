"use client";

import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { useLanguage } from "@/Providers/ContextProvider";

function Terms() {
  const [mounted, setMounted] = useState(false);
  const { t } = useLanguage();
  const content = t.Terms;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="max-w-380 mx-auto w-11/12 py-16 text-white bg-transparent">
        <div className="opacity-0" />
      </div>
    );
  }

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="max-w-380 mx-auto w-11/12 py-16 space-y-20 text-white bg-transparent">
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="flex flex-col md:flex-row items-start gap-6 md:gap-12 border-b border-white/10 pb-12"
      >
        <h2 className="w-full md:w-1/3 text-xl md:text-2xl font-semibold tracking-wider text-primary1">
          {content.publisherTitle}
        </h2>
        <div className="w-full md:w-2/3 text-[16px] md:text-lg lg:text-xl font-galdeano space-y-4 text-gray-300">
          <p>{content.publisherText}</p>
          <div className="space-y-1">
            <p>
              {content.officeLabel} {content.officeValue}
            </p>
            <p>
              {content.directorLabel} {content.directorValue}
            </p>
            <p>
              {content.contactLabel}{" "}
              <span className="text-primary1">support@mon5majeur.com</span>
            </p>
            <p>
              {content.hostingLabel} {content.hostingValue}
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="flex flex-col md:flex-row items-start gap-6 md:gap-12 border-b border-white/10 pb-12"
      >
        <h2 className="w-full md:w-1/3 text-xl md:text-2xl font-semibold tracking-wider text-primary1">
          {content.purposeTitle}
        </h2>
        <div className="w-full md:w-2/3 text-[16px] md:text-lg lg:text-xl font-galdeano space-y-4 text-gray-300">
          <p>{content.purposeText}</p>
          <p className="border-l-4 border-primary1 pl-4 italic">
            {content.nbaDisclaimer}
          </p>
        </div>
      </motion.div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="flex flex-col md:flex-row items-start gap-6 md:gap-12 border-b border-white/10 pb-12"
      >
        <h2 className="w-full md:w-1/3 text-xl md:text-2xl font-semibold tracking-wider text-primary1">
          {content.accessTitle}
        </h2>
        <div className="w-full md:w-2/3 text-[16px] md:text-lg lg:text-xl font-galdeano space-y-4 text-gray-300">
          <p>{content.accessText1}</p>
          <p>{content.accessText2}</p>
        </div>
      </motion.div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="flex flex-col md:flex-row items-start gap-6 md:gap-12 border-b border-white/10 pb-12"
      >
        <h2 className="w-full md:w-1/3 text-xl md:text-2xl font-semibold tracking-wider text-primary1 text-wrap">
          {content.accountTitle}
        </h2>
        <div className="w-full md:w-2/3 text-[16px] md:text-lg lg:text-xl font-galdeano space-y-4 text-gray-300">
          <p>{content.accountText1}</p>
          <p>
            {content.accountText2}{" "}
            <span className="text-primary1">support@mon5majeur.com</span>
          </p>
        </div>
      </motion.div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="flex flex-col md:flex-row items-start gap-6 md:gap-12 border-b border-white/10 pb-12"
      >
        <h2 className="w-full md:w-1/3 text-xl md:text-2xl font-semibold tracking-wider text-primary1">
          {content.creditsTitle}
        </h2>
        <div className="w-full md:w-2/3 text-[16px] md:text-lg lg:text-xl font-galdeano space-y-4 text-gray-300">
          <p>{content.creditsText}</p>
          <p>{content.adsText}</p>
        </div>
      </motion.div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="flex flex-col md:flex-row items-start gap-6 md:gap-12 border-b border-white/10 pb-12"
      >
        <h2 className="w-full md:w-1/3 text-xl md:text-2xl font-semibold tracking-wider text-primary1">
          {content.conductTitle}
        </h2>
        <div className="w-full md:w-2/3 text-[16px] md:text-lg lg:text-xl font-galdeano space-y-4 text-gray-300">
          <p className="text-primary1 font-bold italic">
            {content.conductForbidden}
          </p>
          <p>{content.conductText}</p>
        </div>
      </motion.div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="flex flex-col md:flex-row items-start gap-6 md:gap-12 border-b border-white/10 pb-12"
      >
        <h2 className="w-full md:w-1/3 text-xl md:text-2xl font-semibold tracking-wider text-primary1">
          {content.contestsTitle}
        </h2>
        <div className="w-full md:w-2/3 text-[16px] md:text-lg lg:text-xl font-galdeano space-y-4 text-gray-300">
          <p>{content.contestsText1}</p>
          <p>{content.contestsText2}</p>
        </div>
      </motion.div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="flex flex-col md:flex-row items-start gap-6 md:gap-12 border-b border-white/10 pb-12"
      >
        <h2 className="w-full md:w-1/3 text-xl md:text-2xl font-semibold tracking-wider text-primary1 text-wrap">
          {content.legalTitle}
        </h2>
        <div className="w-full md:w-2/3 text-[16px] md:text-lg lg:text-xl font-galdeano space-y-4 text-gray-300">
          <p>{content.legalText1}</p>
          <p>{content.legalText2}</p>
        </div>
      </motion.div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="flex flex-col md:flex-row items-start gap-6 md:gap-12 pt-8"
      >
        <h2 className="w-full md:w-1/3 text-xl md:text-2xl font-semibold tracking-wider text-primary1">
          {content.governingTitle}
        </h2>
        <div className="w-full md:w-2/3 text-[16px] md:text-lg lg:text-xl font-galdeano space-y-4 text-gray-300">
          <p>{content.governingText}</p>
          <p className="text-primary1 font-bold pt-4">
            📧 support@mon5majeur.com
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default Terms;
