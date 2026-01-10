"use client";

import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { useLanguage } from "@/Providers/ContextProvider";

/**
 * Privacy Component
 * Dynamically rendered based on the nested PrivacyPolicy JSON structure
 */
function Privacy() {
  const [mounted, setMounted] = useState(false);
  const { t } = useLanguage();

  // Targeting the semantic keys from your new JSON object
  const content = t.PrivacyPolicy;

  useEffect(() => {
    setMounted(true);
  }, []);

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
   * Helper Section Component
   */
  const Section = ({ title, children, isLast = false }) => (
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
      <h2 className="w-full md:w-1/3 text-xl xl:text-2xl font-semibold tracking-wider font-aldrich text-white leading-tight">
        {title}
      </h2>

      {/* Content Area */}
      <div className="w-full md:w-2/3 text-[16px] md:text-lg lg:text-xl font-galdeano space-y-6 text-gray-300 whitespace-pre-line">
        {children}
      </div>
    </motion.div>
  );

  return (
    <div className="max-w-380 mx-auto w-11/12 py-16 space-y-20 text-white bg-transparent">
      {/* 1. SCOPE */}
      <Section title={content.scope.title}>
        <p>{content.scope.content}</p>
      </Section>

      {/* 2. DATA CONTROLLER */}
      <Section title={content.data_controller.title}>
        <p>{content.data_controller.content}</p>
        <div className="mt-4 space-y-2 text-primary1 font-aldrich">
          <p className="text-white">
            {content.data_controller.privacy_contact_label}{" "}
            <span className="text-primary1">
              {content.data_controller.privacy_contact_email}
            </span>
          </p>
          <p className="text-white">
            {content.data_controller.support_label}{" "}
            <span className="text-primary1">
              {content.data_controller.support_email}
            </span>
          </p>
        </div>
      </Section>

      {/* 3. DATA WE COLLECT */}
      <Section title={content.data_collection.title}>
        <p className="font-bold text-white">{content.data_collection.intro}</p>
        <div>
          {[
            content.data_collection.identity_account,
            content.data_collection.game_data,
            content.data_collection.technical_data,
            content.data_collection.in_app_purchases,
            content.data_collection.advertising,
            content.data_collection.support,
            content.data_collection.website,
          ].map((item, idx) => (
            <li key={idx} className="flex gap-3 items-start">
              <span>{item}</span>
            </li>
          ))}
        </div>
        <p>{content.data_collection.sensitive_data_footer}</p>
      </Section>

      {/* 4. PURPOSES */}
      <Section title={content.purposes.title}>
        <p>{content.purposes.content}</p>
      </Section>

      {/* 5. LEGAL BASES */}
      <Section title={content.legal_bases.title}>
        <p className="font-bold text-white">{content.legal_bases.intro}</p>
        <div className="space-y-4">
          <p>
            <span className="text-primary1 ">Contract:</span>{" "}
            {content.legal_bases.contract}
          </p>
          <p>
            <span className="text-primary1 ">Interest:</span>{" "}
            {content.legal_bases.legitimate_interest}
          </p>
          <p>
            <span className="text-primary1 ">Consent:</span>{" "}
            {content.legal_bases.consent}
          </p>
          <p>
            <span className="text-primary1 ">Obligation:</span>{" "}
            {content.legal_bases.legal_obligation}
          </p>
        </div>
      </Section>

      {/* 6. ADVERTISING & MEDIATION */}
      <Section title={content.advertising_mediation.title}>
        <p>{content.advertising_mediation.content}</p>
        <div className="pt-4 border-t border-white/5">
          <p className="text-primary1 font-bold mb-2">
            {content.advertising_mediation.management_title}
          </p>
          <p className=" ">
            {content.advertising_mediation.management_content}
          </p>
        </div>
      </Section>

      {/* 7. RECIPIENTS */}
      <Section title={content.recipients.title}>
        <p className="font-bold text-white">{content.recipients.intro}</p>
        <ul className="space-y-2">
          {content.recipients.list.map((item, idx) => (
            <li key={idx} className="flex gap-3">
              {item}
            </li>
          ))}
        </ul>
        <p className="text-primary1 font-bold pt-4 uppercase ">
          {content.recipients.footer}
        </p>
      </Section>

      {/* 8. AD PARTNERS */}
      <Section title={content.ad_partners.title}>
        <p>{content.ad_partners.content}</p>
      </Section>

      {/* 9. RETENTION */}
      <Section title={content.retention.title}>
        <div className="space-y-4">
          <p>{content.retention.active_account}</p>
          <p>{content.retention.deletion}</p>
          <p>{content.retention.logs}</p>
          <p>{content.retention.launch_alert}</p>
        </div>
      </Section>

      {/* 10. COOKIES */}
      <Section title={content.cookies.title}>
        <p>{content.cookies.content}</p>
      </Section>

      {/* 11. SECURITY */}
      <Section title={content.security.title}>
        <p>{content.security.content}</p>
      </Section>

      {/* 12. TRANSFERS */}
      <Section title={content.transfers.title}>
        <p>{content.transfers.content}</p>
      </Section>

      {/* 13. YOUR RIGHTS */}
      <Section title={content.rights.title}>
        <p>{content.rights.content}</p>
        <div>
          <p className="text-primary1 font-aldrich mb-2">
            {content.rights.exercise}
          </p>
          <p >{content.rights.complaint}</p>
        </div>
      </Section>

      {/* 14. MINORS */}
      <Section title={content.minors.title}>
        <p>{content.minors.content}</p>
      </Section>

      {/* 15. CHANGES  */}
      <Section title={content.changes.title} isLast={true}>
        <p>{content.changes.content}</p>
      </Section>

      {/* 16. CONTACT */}
      <Section title={content.contact.title} isLast={true}>
        <ul>
          {content.contact.list.map((l, i) => (
            <li key={i} className="text-primary1">
              {l}
            </li>
          ))}
        </ul>
      </Section>
    </div>
  );
}

export default Privacy;
