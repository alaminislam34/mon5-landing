"use client";

import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { useLanguage } from "@/Providers/ContextProvider";

function Privacy() {
  const [mounted, setMounted] = useState(false);
  const { t } = useLanguage();
  const content = t.Privacy;

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
        viewport={{ once: true}}
        className="flex flex-col md:flex-row items-start gap-6 md:gap-12 border-b border-white/10 pb-12"
      >
        <h2 className="w-full md:w-1/3 text-xl md:text-2xl font-semibold tracking-wider text-primary1">
          {content.scopeTitle}
        </h2>
        <p className="w-full md:w-2/3 text-[16px] md:text-lg lg:text-xl font-galdeano leading-relaxed text-gray-300">
          {content.scopeText}
        </p>
      </motion.div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true}}
        className="flex flex-col md:flex-row items-start gap-6 md:gap-12 border-b border-white/10 pb-12"
      >
        <h2 className="w-full md:w-1/3 text-xl md:text-2xl font-semibold tracking-wider text-primary1">
          {content.controllerTitle}
        </h2>
        <div className="w-full md:w-2/3 text-[16px] md:text-lg lg:text-xl font-galdeano space-y-4 text-gray-300">
          <p>{content.controllerText}</p>
          <p>
            📧 {content.privacyContact}{" "}
            <span className="text-primary1">contact@mon5majeur.fr</span>
          </p>
          <p>
            📧 {content.supportContact}{" "}
            <span className="text-primary1">support@mon5majeur.com</span>
          </p>
        </div>
      </motion.div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true}}
        className="flex flex-col md:flex-row items-start gap-6 md:gap-12 border-b border-white/10 pb-12"
      >
        <h2 className="w-full md:w-1/3 text-xl md:text-2xl font-semibold tracking-wider text-primary1">
          {content.collectTitle}
        </h2>
        <div className="w-full md:w-2/3 text-[16px] md:text-lg lg:text-xl font-galdeano space-y-4 text-gray-300">
          <p className="text-primary1 font-bold">{content.collectIntro}</p>
          <p>
            <span className="text-white font-medium italic">
              {content.collectIdentityLabel}
            </span>{" "}
            {content.collectIdentityText}
          </p>
          <p>
            <span className="text-white font-medium italic">
              {content.collectGameLabel}
            </span>{" "}
            {content.collectGameText}
          </p>
          <p>
            <span className="text-white font-medium italic">
              {content.collectTechLabel}
            </span>{" "}
            {content.collectTechText}
          </p>
          <p>
            <span className="text-white font-medium italic">
              {content.collectPurchaseLabel}
            </span>{" "}
            {content.collectPurchaseText}
          </p>
          <p>
            <span className="text-white font-medium italic">
              {content.collectAdLabel}
            </span>{" "}
            {content.collectAdText}
          </p>
          <p>
            <span className="text-white font-medium italic">
              {content.collectSupportLabel}
            </span>{" "}
            {content.collectSupportText}
          </p>
          <p>
            <span className="text-white font-medium italic">
              {content.collectWebLabel}
            </span>{" "}
            {content.collectWebText}
          </p>
          <p>{content.collectSensitive}</p>
        </div>
      </motion.div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true}}
        className="flex flex-col md:flex-row items-start gap-6 md:gap-12 border-b border-white/10 pb-12"
      >
        <h2 className="w-full md:w-1/3 text-xl md:text-2xl font-semibold tracking-wider text-primary1">
          {content.purposesTitle}
        </h2>
        <div className="w-full md:w-2/3 text-[16px] md:text-lg lg:text-xl font-galdeano space-y-4 text-gray-300">
          <p className="text-primary1 font-bold">{content.purposesIntro}</p>
          <p>{content.purposesText}</p>
        </div>
      </motion.div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true}}
        className="flex flex-col md:flex-row items-start gap-6 md:gap-12 border-b border-white/10 pb-12"
      >
        <h2 className="w-full md:w-1/3 text-xl md:text-2xl font-semibold tracking-wider text-primary1">
          {content.legalTitle}
        </h2>
        <div className="w-full md:w-2/3 text-[16px] md:text-lg lg:text-xl font-galdeano space-y-4 text-gray-300">
          <p className="text-primary1 font-bold text-[16px]">
            {content.legalIntro}
          </p>
          <p>{content.legalText}</p>
        </div>
      </motion.div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true}}
        className="flex flex-col md:flex-row items-start gap-6 md:gap-12 border-b border-white/10 pb-12"
      >
        <h2 className="w-full md:w-1/3 text-xl md:text-2xl lg:text-3xl font-bold tracking-wider text-primary1 text-wrap">
          {content.adTitle}
        </h2>
        <div className="w-full md:w-2/3 text-[16px] md:text-lg lg:text-xl font-galdeano space-y-4 text-gray-300">
          <p>{content.adText}</p>
          <p className="text-primary1 font-bold pt-2">
            {content.adConsentTitle}
          </p>
          <p>{content.adConsentText}</p>
        </div>
      </motion.div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true}}
        className="flex flex-col md:flex-row items-start gap-6 md:gap-12 border-b border-white/10 pb-12"
      >
        <h2 className="w-full md:w-1/3 text-xl md:text-2xl font-semibold tracking-wider text-primary1">
          {content.rightsTitle}
        </h2>
        <div className="w-full md:w-2/3 text-[16px] md:text-lg lg:text-xl font-galdeano space-y-4 text-gray-300">
          <p>{content.rightsText}</p>
          <p>
            📧 {content.rightsExercise}{" "}
            <span className="text-primary1 underline">
              contact@mon5majeur.fr
            </span>{" "}
            {content.rightsVerification}
          </p>
        </div>
      </motion.div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true}}
        className="flex flex-col md:flex-row items-start gap-6 md:gap-12 pt-8"
      >
        <h2 className="w-full md:w-1/3 text-xl md:text-2xl font-semibold tracking-wider text-primary1">
          {content.contactTitle}
        </h2>
        <div className="w-full md:w-2/3 text-[16px] md:text-lg lg:text-xl font-galdeano space-y-2 text-primary1 font-bold tracking-wider">
          <p>📧 contact@mon5majeur.fr (privacy)</p>
          <p>📧 support@mon5majeur.com (support)</p>
        </div>
      </motion.div>
    </div>
  );
}

export default Privacy;
