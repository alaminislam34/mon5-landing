"use client"; // Next.js App Router ব্যবহার করলে এটি দিতে হবে
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

function AbsoluteBall() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100, y: "-50%" }}
      animate={{
        opacity: 1,
        x: 0,
        y: ["-52%", "-48%", "-52%"],
      }}
      transition={{
        x: { duration: 1, ease: "easeOut" },
        y: {
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        },
        opacity: { duration: 1 },
      }}
      className="max-w-100 md:max-w-130 lg:max-w-150 xl:max-w-180 h-auto absolute top-0 -right-45 lg:-right-58 lg:-top-20 z-0"
    >
      <Image
        src={"/images/ball.png"}
        height={1000}
        width={1000}
        alt="Ball image"
        className="w-full h-full object-cover"
      />
    </motion.div>
  );
}

export default AbsoluteBall;
