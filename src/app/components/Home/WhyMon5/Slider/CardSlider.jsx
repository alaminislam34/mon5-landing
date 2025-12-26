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
    name: "Strategic Boosts",
    content:
      "Unlock strategic boosts to enhance your team—Luxury Tax, 6th Man, Chef Curry, and more. Use them to gain an edge over your opponents!",
    image: "/images/stratigic.png",
  },
  {
    name: " Real-time NBA Stats",
    content:
      "Create a private league, compete in real-time, track your victories, and see who wins!",
    image: "/images/static.png",
  },
  {
    name: "Daily Lineups",
    content:
      "Craft your perfect roster every day. Choose from the best players and maximize your fantasy points with smart picks.",
    image: "/images/ball.png",
  },
  {
    name: "Challenge  Friends",
    content:
      "Create a private league, compete in real-time with your friends, track your victories, and see who wins!",
    image: "/images/challenge.png",
  },
  {
    name: " Global Competition",
    content:
      "Compete against players worldwide! Climb the weekly and monthly leaderboards for a chance to win amazing prizes and earn bragging rights.",
    image: "/images/global.png",
  },
];

export default function CardSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [options, setOptions] = useState({ perView: 1 });
  const [loaded, setLoaded] = useState(false); // To ensure slider is ready before rendering dots

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
    const perView = options?.perView || 1;
    const centerOffset = Math.floor(perView / 2);
    const relativeIndex = (idx - currentSlide + slides.length) % slides.length;
    return relativeIndex === centerOffset;
  };

  return (
    <section className="py-12 px-4">
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-anchor-placement="top-bottom"
        className="relative lg:py-12"
      >
        {/* Slider Container */}
        <div ref={sliderRef} className="keen-slider flex items-center mb-6">
          {slides.map((slide, idx) => {
            const isCenter = checkCenter(idx);
            return (
              <div
                key={idx}
                className="keen-slider__slide flex justify-center py-10"
              >
                <div
                  className={`relative flex flex-col items-center gap-2 px-4 py-6 transition-all duration-500 ease-in-out w-full min-h-128 ring-2 ${
                    isCenter
                      ? "scale-99 opacity-100 z-10 shadow-2xl"
                      : "md:scale-85 opacity-40 z-0"
                  } ring-base/10 rounded-2xl overflow-hidden text-center backdrop-blur-xl space-y-2`}
                >
                  <div className="w-40 h-20 absolute -top-10 -right-14 blur-2xl bg-primary2 -z-10"></div>
                  <div className="w-full h-20 absolute -bottom-15 blur-2xl rounded-full bg-primary2/50 -z-10"></div>
                  <div className="w-10 h-40 absolute -bottom-20 border bg-primary2/50 blur-2xl -z-10"></div>

                  <Image
                    src={slide.image}
                    width={500}
                    height={500}
                    alt={"Icon image"}
                    className="rounded-full object-cover duration-300 h-35 w-35 mb-8 md:mb-10"
                  />
                  <div className="space-y-4">
                    <h1 className="text-3xl xl:text-4xl font-semibold tracking-widest">
                      {slide.name}
                    </h1>
                    <h3 className="text-primary1 text-lg tracking-wider">
                      Flexible. Dynamic. Fun
                    </h3>
                  </div>
                  <p className="text-base md:text-lg font-galdeano">
                    {slide.content}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Controls: Arrows + Dots */}
        {loaded && instanceRef.current && (
          <div className="flex items-center justify-center gap-6">
            {/* Left Arrow */}
            <button
              onClick={() => instanceRef.current?.prev()}
              className="cursor-pointer hover:scale-110 transition-transform"
            >
              <MdOutlineKeyboardArrowLeft className="text-4xl text-primary1" />
            </button>

            {/* Dots Container */}
            <div className="flex gap-2">
              {Array.from(Array(slides.length).keys()).map((idx) => (
                <button
                  key={idx}
                  onClick={() => instanceRef.current?.moveToIdx(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentSlide === idx
                      ? "w-8 bg-primary1"
                      : "w-2.5 bg-gray-500 opacity-50"
                  }`}
                />
              ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={() => instanceRef.current?.next()}
              className="cursor-pointer hover:scale-110 transition-transform"
            >
              <MdOutlineKeyboardArrowRight className="text-4xl text-primary1" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
