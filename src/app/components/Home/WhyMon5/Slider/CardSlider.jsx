"use client";
import React, { useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import Image from "next/image";
import { motion } from "motion/react";
import { useLanguage } from "@/Providers/ContextProvider";

const slideImages = [
  "/images/stratigic.png",
  "/images/static.png",
  "/images/ball.png",
  "/images/challenge.png",
  "/images/global.png",
];

export default function CardSlider() {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [options, setOptions] = useState({ perView: 1 });
  const [loaded, setLoaded] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: { perView: 1, spacing: 16 },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 3, spacing: 2 },
      },
      "(min-width: 1440px)": {
        slides: { perView: 5, spacing: 2 },
      },
    },
    created(s) {
      setOptions(s.options.slides);
      setLoaded(true);
    },
    optionsChanged(s) {
      setOptions(s.options.slides);
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  const checkCenter = (idx) => {
    if (!isMounted) return false;
    const perView = options?.perView || 1;
    const centerOffset = Math.floor(perView / 2);
    const totalSlides = slideImages.length;
    const relativeIndex = (idx - currentSlide + totalSlides) % totalSlides;
    return relativeIndex === centerOffset;
  };

  if (!isMounted) return null;

  return (
    <section className="py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true}}
        transition={{ duration: 0.3 }}
        className="relative lg:py-12"
      >
        <div ref={sliderRef} className="keen-slider flex items-center mb-6">
          {t.CardSlider.slides.map((slide, idx) => {
            const isCenter = checkCenter(idx);
            return (
              <div
                key={idx}
                className="keen-slider__slide flex justify-center py-10"
              >
                <div
                  className={`relative flex flex-col items-center gap-2 px-4 py-6 transition-all duration-500 ease-in-out max-w-90 sm:max-w-100 md:w-full min-h-128 lg:min-150 ring text-wrap ${
                    isCenter
                      ? "scale-98 opacity-100 z-10 shadow-2xl"
                      : "md:scale-85 opacity-40 z-0"
                  } ring-base/10 rounded-2xl overflow-hidden text-center backdrop-blur-xl space-y-2`}
                >
                  <div className="w-40 h-20 absolute -top-10 -right-14 blur-2xl bg-primary2 -z-10"></div>
                  <div className="w-full h-20 absolute -bottom-15 blur-2xl rounded-full bg-primary2/50 -z-10"></div>
                  <div className="w-10 h-40 absolute -bottom-20 border bg-primary2/50 blur-2xl -z-10"></div>

                  <Image
                    src={slideImages[idx]}
                    width={500}
                    height={500}
                    alt="Icon image"
                    className="rounded-full object-cover duration-300 h-35 w-35 mb-8 md:mb-10"
                  />
                  <div className="space-y-4">
                    <h1 className="text-2xl xl:text-3xl font-semibold tracking-widest">
                      {slide.name}
                    </h1>
                    <h3 className="text-primary1 text-lg xl:text-xl tracking-wider">
                      {t.CardSlider.subtitle}
                    </h3>
                  </div>
                  <p className="text-Base md:text-lg font-galdeano">
                    {slide.content}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {loaded && instanceRef.current && (
          <div className="flex items-center justify-center gap-6">
            <button
              aria-label="Previous slide"
              onClick={() => instanceRef.current?.prev()}
              className="cursor-pointer hover:scale-110 transition-transform"
            >
              <MdOutlineKeyboardArrowLeft className="text-4xl text-primary1" />
            </button>

            <div className="flex gap-2" role="tablist">
              {Array.from(Array(slideImages.length).keys()).map((idx) => (
                <button
                  key={idx}
                  role="tab"
                  aria-selected={currentSlide === idx}
                  aria-label={`Go to slide ${idx + 1}`}
                  onClick={() => instanceRef.current?.moveToIdx(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentSlide === idx
                      ? "w-8 bg-primary1"
                      : "w-2.5 bg-gray-500 opacity-50"
                  }`}
                />
              ))}
            </div>

            <button
              aria-label="Next slide"
              onClick={() => instanceRef.current?.next()}
              className="cursor-pointer hover:scale-110 transition-transform"
            >
              <MdOutlineKeyboardArrowRight className="text-4xl text-primary1" />
            </button>
          </div>
        )}
      </motion.div>
    </section>
  );
}
