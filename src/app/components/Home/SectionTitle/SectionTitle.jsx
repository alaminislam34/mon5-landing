import React from "react";
import { motion } from "motion/react";
function SectionTitle({ title, colorTitle, left }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className={`my-10 flex items-center relative z-20 justify-${
        left === "left" ? "start" : "center"
      }`}
    >
      <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white font-medium font-aldrich leading-normal">
        {title} <span className="text-primary1">{colorTitle}</span>
      </h1>
    </motion.div>
  );
}

export default SectionTitle;
