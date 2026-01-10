"use client";

import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { useLanguage } from "@/Providers/ContextProvider";

/**
 * Terms Component
 * Updated to handle the new "TermsAndConditions" JSON structure.
 * Supports multi-line strings and nested sub-sections.
 */
function Terms() {
  const [mounted, setMounted] = useState(false);
  const { t } = useLanguage();

  // Ensure we are targeting the correct key from your JSON
  const content = t.TermsAndConditions;

  useEffect(() => {
    setMounted(true);
  }, []);

  // Hydration fix for Next.js
  if (!mounted || !content) {
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

  /**
   * Helper component for rendering sections to avoid code repetition
   */
  const Section = ({ title, mainText, subSections = [], isLast = false }) => (
    <motion.div
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`flex flex-col md:flex-row items-start gap-6 md:gap-12 ${
        !isLast ? "border-b border-white/10 pb-12" : "pt-8"
      }`}
    >
      {/* Sidebar Title */}
      <h2 className="w-full md:w-1/3 text-xl xl:text-2xl font-semibold tracking-wider font-aldrich text-white uppercase">
        {title}
      </h2>

      {/* Content Area */}
      <div className="w-full md:w-2/3 text-[16px] md:text-lg lg:text-xl font-galdeano space-y-6 text-Base whitespace-pre-line">
        {/* Main paragraph if it exists */}
        {mainText && <p>{mainText}</p>}

        {/* Sub-sections (Subtitle + Paragraph) if they exist */}
        {subSections.length > 0 && (
          <div className="space-y-6">
            {subSections.map((sub, index) => (
              <div key={index} className="">
                <p className="">
                  {" "}
                  {sub.subtitle && (
                    <span className="text-primary1">{sub.subtitle}</span>
                  )}{" "}
                  {sub.content}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );

  return (
    <div className="max-w-380 mx-auto w-11/12 py-16 space-y-20 text-white bg-transparent">
      {/* 1. APPLICATION PUBLISHER */}
      <Section title={content["1stTitle"]} mainText={content["1stContent"]} />

      {/* 2. HOSTING */}
      <Section title={content["2ndTitle"]} mainText={content["2ndContent"]} />

      {/* 3. PURPOSE OF THE TCU */}
      <Section title={content["3rdTitle"]} mainText={content["3rd"]} />

      {/* 4. DESCRIPTION OF THE APPLICATION */}
      <Section title={content["4thTitle"]} mainText={content["4thContent"]} />

      {/* 5. CONDITIONS OF ACCESS */}
      <Section
        title={content["5thTitle"]}
        subSections={[
          {
            subtitle: content["5th_1st_subtitle"],
            content: content["5th_1st_content"],
          },
          {
            subtitle: content["5th_2nd_subtitle"],
            content: content["5th_2nd_content"],
          },
          {
            subtitle: content["5th_3rd_subtitle"],
            content: content["5th_3rd_content"],
          },
          {
            subtitle: content["5th_4th_subtitle"],
            content: content["5th_4th_content"],
          },
        ]}
      />

      {/* 6. ACCOUNT CREATION AND MANAGEMENT */}
      <Section
        title={content["6thTitle"]}
        subSections={[
          {
            subtitle: content["6th_1st_subtitle"],
            content: content["6th_1st_content"],
          },
          {
            subtitle: content["6th_2nd_subtitle"],
            content: content["6th_2nd_content"],
          },
          {
            subtitle: content["6th_3rd_subtitle"],
            content: content["6th_3rd_content"],
          },
          {
            subtitle: content["6th_4th_subtitle"],
            content: content["6th_4th_content"],
          },
          {
            subtitle: content["6th_5th_subtitle"],
            content: content["6th_5th_content"],
          },
        ]}
      />

      {/* 7. VIRTUAL CREDITS AND PURCHASES */}
      <Section
        title={content["7thTitle"]}
        subSections={[
          {
            subtitle: content["7th_1st_subtitle"],
            content: content["7th_1st_content"],
          },
          {
            subtitle: content["7th_2nd_subtitle"],
            content: content["7th_2nd_content"],
          },
          {
            subtitle: content["7th_3rd_subtitle"],
            content: content["7th_3rd_content"],
          },
          {
            subtitle: content["7th_4th_subtitle"],
            content: content["7th_4th_content"],
          },
        ]}
      />

      {/* 8. ADVERTISING */}
      <Section title={content["8thTitle"]} mainText={content["8thContent"]} />

      {/* 9. USAGE RULES AND CODE OF CONDUCT */}
      <Section
        title={content["9thTitle"]}
        subSections={[
          {
            subtitle: content["9th_1st_subtitle"],
            content: content["9th_1st_content"],
          },
          {
            subtitle: content["9th_2nd_subtitle"],
            content: content["9th_2nd_content"],
          },
          {
            subtitle: content["9th_3rd_subtitle"],
            content: content["9th_3rd_content"],
          },
          {
            subtitle: content["9th_4th_subtitle"],
            content: content["9th_4th_content"],
          },
        ]}
      />

      {/* 10. CONTESTS */}
      <Section
        title={content["10thTitle"]}
        mainText={content["10thContent"]}
        subSections={[
          {
            subtitle: content["10th_1st_subtitle"],
            content: content["10th_1st_content"],
          },
          {
            subtitle: content["10th_2nd_subtitle"],
            content: content["10th_2nd_content"],
          },
          {
            subtitle: content["10th_3rd_subtitle"],
            content: content["10th_3rd_content"],
          },
          {
            subtitle: content["10th_4th_subtitle"],
            content: content["10th_4th_content"],
          },
          {
            subtitle: content["10th_5th_subtitle"],
            content: content["10th_5th_content"],
          },
          {
            subtitle: content["10th_6th_subtitle"],
            content: content["10th_6th_content"],
          },
          {
            subtitle: content["10th_7th_subtitle"],
            content: content["10th_7th_content"],
          },
          {
            subtitle: content["10th_8th_subtitle"],
            content: content["10th_8th_content"],
          },
          {
            subtitle: content["10th_9th_subtitle"],
            content: content["10th_9th_content"],
          },
        ]}
      />

      {/* 11. ACCOUNT SUSPENSION */}
      <Section
        title={content["11thTitle"]}
        mainText={content["11thContent"]}
        subSections={[
          {
            subtitle: content["11th_1st_subtitle"],
            content: content["11th_1st_content"],
          },
        ]}
      />

      {/* 12. MAINTENANCE */}
      <Section title={content["12thTitle"]} mainText={content["12thContent"]} />

      {/* 13. INTELLECTUAL PROPERTY */}
      <Section title={content["13thTitle"]} mainText={content["13thContent"]} />

      {/* 14. LIMITATION OF LIABILITY */}
      <Section title={content["14thTitle"]} mainText={content["14thContent"]} />

      {/* 15. FORCE MAJEURE */}
      <Section title={content["15thTitle"]} mainText={content["15thContent"]} />

      {/* 16. PERSONAL DATA */}
      <Section title={content["16thTitle"]} mainText={content["16thContent"]} />

      {/* 17. APPLICABLE LAW */}
      <Section
        title={content["17thTitle"]}
        mainText={content["17thContent"]}
        subSections={[
          {
            subtitle: content["17th_1st_subtitle"],
            content: content["17th_1st_content"],
          },
        ]}
        isLast={true}
      />
    </div>
  );
}

export default Terms;
