"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { BsArrowUpRightSquareFill } from "react-icons/bs";
import SectionTitle from "../SectionTitle/SectionTitle";
import { useLanguage } from "@/Providers/ContextProvider";
import Link from "next/link";

const GetApp = () => {
  const [mounted, setMounted] = useState(false);
  const { t } = useLanguage();
  const content = t.GetApp;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section className="relative my-24" aria-hidden="true">
        <div className="max-w-380 mx-auto w-11/12 opacity-0" />
      </section>
    );
  }

  return (
    <section className="relative my-24">
      <div className="absolute top-0 lg:-top-130 right-0 border max-h-150 -z-10000 blur-2xl">
        <Image
          src="/images/circle.png"
          height={800}
          width={1500}
          alt=""
          className="w-full rotate-130 bg-bottom border border-white scale-75"
        />
      </div>

      <section className="max-w-380 mx-auto w-11/12">
        <div className="flex flex-col md:flex-row items-center lg:max-w-6xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-center"
          >
            <Image
              src="/images/app.png"
              height={800}
              width={1200}
              alt="Mon5Majeur App Preview"
              className="max-w-60 md:max-w-80 lg:max-w-100"
            />
          </motion.div>

          <div className="space-y-4 flex flex-col">
            <SectionTitle
              title={content.title}
              colorTitle={content.colorTitle}
              left="left"
            />
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-lg md:text-xl lg:text-2xl font-galdeano text-Base"
            >
              {content.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
              className="flex flex-row items-center gap-4 sm:gap-6"
            >
              <Link href={"#"}>
                <div className="rounded-xl flex flex-row items-center gap-2 border-gray-500/50 backdrop-blur-md py-3 px-4 justify-between border">
                  <div>
                    <Image
                      src={"/logos/play.png"}
                      height={50}
                      width={50}
                      alt="Play store"
                      className="w-7 md:w-8 h-auto"
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-xs truncate text-gray-400">
                      {t.banner.downloadLinks.googlePlay}
                    </p>
                    <p className="text-lg truncate md:text-xl font-semibold leading-none">
                      Play Store
                    </p>
                  </div>
                </div>
              </Link>
              <Link href={"#"}>
                <div className="rounded-xl flex flex-row items-center gap-2 border-gray-500/50 backdrop-blur-md py-3 px-4 justify-between border">
                  <div>
                    <Image
                      src={"/logos/apple-black-logo.png"}
                      height={50}
                      width={50}
                      alt="Play store"
                      className="w-7 md:w-8 h-auto"
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-xs truncate text-gray-400">
                      {t.banner.downloadLinks.appStore}
                    </p>
                    <p className="text-lg truncate md:text-xl font-semibold leading-none">
                      App Store
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="py-4 flex relative z-20 my-4"
            >
              <a
                href="#launch"
                className="py-3 px-6 rounded-lg bg-linear-to-r from-primary1 to-primary2 text-white font-semibold flex items-center flex-row gap-2 relative z-50 cursor-pointer"
              >
                {content.cta}
                <BsArrowUpRightSquareFill aria-hidden="true" />
              </a>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute bottom-0 md:top-0 -right-40 md:-right-20 -z-110"
        >
          <Image
            src="/images/throughBall.jpg"
            height={800}
            width={1200}
            alt="Basketball Action Background"
            className="max-w-180 opacity-50 lg:opacity-100"
          />
        </motion.div>
      </section>
    </section>
  );
};

export default GetApp;
