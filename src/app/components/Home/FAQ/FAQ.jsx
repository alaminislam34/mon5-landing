"use client";

import React, { useState, useEffect } from "react";
import { Plus, Minus } from "lucide-react";
import { BsArrowUpRightSquareFill } from "react-icons/bs";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "@/Providers/ContextProvider";

function FAQ() {
  const [mounted, setMounted] = useState(false);
  const [openIndex, setOpenIndex] = useState(0);
  const { t } = useLanguage();
  const content = t.FAQ;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section
        id="faq"
        className="flex flex-col md:flex-row gap-12 text-white font-sans max-w-380 mx-auto w-11/12 md:py-16"
      >
        <div className="flex-1 invisible" />
      </section>
    );
  }

  return (
    <section
      id="faq"
      className="flex flex-col md:flex-row gap-12 text-white font-sans max-w-380 mx-auto w-11/12 md:py-16"
    >
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex-1 space-y-6"
      >
        <h4 className="text-gray-400 font-medium tracking-widest text-sm uppercase">
          {content.badge}
        </h4>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          {content.titlePart1}{" "}
          <span className="text-primary1">{content.titlePart2}</span> <br />
          <span className="text-primary1">{content.titlePart3}</span>{" "}
          {content.titlePart4}
        </h2>
        <p className="font-galdeano text-gray-400 text-lg md:text-xl max-w-md">
          {content.description}
        </p>

        <div className="pt-4">
          <a
            href="#launch"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-linear-to-r from-primary1 to-primary2 text-white font-semibold transition-transform hover:scale-105 active:scale-95"
          >
            {content.cta}
            <BsArrowUpRightSquareFill className="text-xl" aria-hidden="true" />
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex-1 space-y-4"
      >
        {content.questions.map((item, index) => (
          <div
            key={index}
            className={`border border-white/10 rounded-2xl overflow-hidden transition-colors duration-300 ${
              openIndex === index ? "bg-white/5" : "bg-transparent"
            }`}
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              aria-expanded={openIndex === index}
            >
              <span className="text-lg md:text-xl font-medium tracking-wide pr-4">
                {item.question}
              </span>
              <div
                className={`shrink-0 p-1 rounded-md transition-all duration-300 ${
                  openIndex === index
                    ? "bg-primary1 rotate-0"
                    : "bg-primary1/80"
                }`}
              >
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-white" strokeWidth={3} />
                ) : (
                  <Plus className="w-5 h-5 text-white" strokeWidth={3} />
                )}
              </div>
            </button>

            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="overflow-hidden px-6 pb-6 text-gray-400 leading-relaxed font-galdeano">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

export default FAQ;
