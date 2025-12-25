"use client";
import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import Image from "next/image";

const slides = [
  {
    name: "Sophia R",
    location: "Boston, USA",
    text: "HelpMeSpeak makes translation so easy. The app feels smooth and fast.",
    image: "/images/ball.png",
  },
  {
    name: "Rachel K.",
    location: "Boston, USA",
    text: "Using this app daily. The learning suggestions are extremely helpful.",
    image: "/images/ball.png",
  },
  {
    name: "Alicia M",
    location: "Boston, USA",
    text: "Finally an app that makes language learning practical and fun.",
    image: "/images/ball.png",
  },
  {
    name: "Alicia M",
    location: "Boston, USA",
    text: "Finally an app that makes language learning practical and fun.",
    image: "/images/ball.png",
  },
  {
    name: "Alicia M",
    location: "Boston, USA",
    text: "Finally an app that makes language learning practical and fun.",
    image: "/images/ball.png",
  },
  {
    name: "Alicia M",
    location: "Boston, USA",
    text: "Finally an app that makes language learning practical and fun.",
    image: "/images/ball.png",
  },
  {
    name: "Alicia M",
    location: "Boston, USA",
    text: "Finally an app that makes language learning practical and fun.",
    image: "/images/ball.png",
  },
  {
    name: "Alicia M",
    location: "Boston, USA",
    text: "Finally an app that makes language learning practical and fun.",
    image: "/images/ball.png",
  },
  {
    name: "Alicia M",
    location: "Boston, USA",
    text: "Finally an app that makes language learning practical and fun.",
    image: "/images/ball.png",
  },
  {
    name: "Alicia M",
    location: "Boston, USA",
    text: "Finally an app that makes language learning practical and fun.",
    image: "/images/ball.png",
  },
];

export default function CardSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [options, setOptions] = useState({ perView: 1 }); // স্ক্রিন সাইজ ট্র্যাক করার জন্য

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: { perView: 1, spacing: 16 },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 3, spacing: 2 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 5, spacing: 2 },
      },
    },
    created(s) {
      setOptions(s.options.slides);
    },
    optionsChanged(s) {
      setOptions(s.options.slides);
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  // এই লজিকটি ডাইনামিকলি চেক করবে কার্ডটি মাঝখানে আছে কি না
  const checkCenter = (idx) => {
    const perView = options?.perView || 1;
    const centerOffset = Math.floor(perView / 2);
    const relativeIndex = (idx - currentSlide + slides.length) % slides.length;
    return relativeIndex === centerOffset;
  };

  return (
    <section className="py-12 px-4">
      <div className="relative lg:py-12">
        <div ref={sliderRef} className="keen-slider flex items-center mb-6">
          {slides.map((slide, idx) => {
            const isCenter = checkCenter(idx);

            return (
              <div
                key={idx}
                className="keen-slider__slide flex justify-center py-10" // Padding added for scaling space
              >
                <div
                  className={`relative flex flex-col items-center gap-2 p-6 transition-all duration-500 ease-in-out w-full h-130 ring-2 ${
                    isCenter
                      ? "scale-99 opacity-100 z-10 shadow-2xl"
                      : "scale-85 opacity-40 z-0"
                  } ring-base/10 rounded-2xl overflow-hidden text-center backdrop-blur-xl space-y-2`}
                >
                  <div className="w-40 h-20 absolute -top-10 -right-14 blur-2xl bg-primary2 -z-10"></div>
                  <div className="w-full h-20 absolute -bottom-15 blur-2xl rounded-full bg-primary2/50 -z-10"></div>
                  <div className="w-10 h-40 absolute -bottom-20 border bg-primary2/50 blur-2xl -z-10"></div>

                  <Image
                    src={slide.image}
                    width={500}
                    height={500}
                    alt={slide.name}
                    className={`rounded-full border border-white object-cover duration-300 h-35 w-35 mb-8 md:mb-10`}
                  />
                  <h1 className="text-2xl lg:text-3xl xl:text-4xl">
                    Daily Lineups
                  </h1>
                  <h3 className="text-primary1">Flexible. Dynamic. Fun</h3>
                  <br />
                  <p className="text-base md:text-lg font-galdeano">
                    Craft your perfect roster every day. Choose from the best
                    players and maximize your fantasy points with smart picks.
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex items-center justify-center">
          <button
            onClick={() => instanceRef.current?.prev()}
            className="cursor-pointer"
          >
            <MdOutlineKeyboardArrowLeft className="text-4xl text-primary" />
          </button>

          <button
            onClick={() => instanceRef.current?.next()}
            className="cursor-pointer"
          >
            <MdOutlineKeyboardArrowRight className="text-4xl text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
}
