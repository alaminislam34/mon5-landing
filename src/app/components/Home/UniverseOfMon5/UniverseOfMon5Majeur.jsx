"use client";

import React, { useEffect } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const features = [
  {
    title: `Pre-launch <span class="text-[#E35D14]">Bonus</span>`, // Inline hex code ba Tailwind safe classes
    subtitle: "2 exclusive jerseys offered to all pre-registered players",
    image: "/images/pre-launch-bouns.jpg",
  },
  {
    title: `In-game <span class="text-[#E35D14]">Jerseys</span>`,
    subtitle: "Customize your team with exclusive jerseys.",
    image: "/images/in-game-jursey.jpg",
  },
  {
    title: `Team <span class="text-[#E35D14]">Logo</span>`,
    subtitle: "Create your GM identity. Your team, your style.",
    image: "/images/team-logo.jpg",
  },
  {
    title: `Hall of <span class="text-[#E35D14]">Fame</span>`,
    subtitle: "Weekly and monthly rankings. Become one of the best",
    image: "/images/hall-of-fame.jpg",
  },
  {
    title: `Victory <span class="text-[#E35D14]">Trophy</span>`,
    subtitle: "Win your league and unlock your unique trophy",
    image: "/images/victory-trophy.jpg",
  },
  {
    title: `Strategic <span class="text-[#E35D14]">Bonuses</span>`,
    subtitle:
      "+3 points, automatic substitute, budget boost... The right choices make the difference.",
    image: "/images/stratigic-bonuses.jpg",
  },
];

function UniverseOfMon5Majeur() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const createMarkup = (html) => {
    return { __html: html };
  };

  const BonusCard = ({ data, delay, side = "left" }) => (
    <div
      data-aos={side === "left" ? "fade-right" : "fade-left"}
      data-aos-delay={delay}
      className="flex flex-col items-center group w-full"
    >
      {/* Box design */}
      <div className="py-2 px-4 md:px-6 lg:px-8 text-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-lg transition-all group-hover:border-[#E35D14]/50 w-fit min-h-20 flex flex-col justify-center">
        <h1
          className="text-sm lg:text-lg mb-1 font-medium whitespace-nowrap text-white"
          dangerouslySetInnerHTML={createMarkup(data.title)}
        />
        <p className="text-[10px] lg:text-xs text-[#B5B5B5] font-galdeano max-w-50 mx-auto leading-tight">
          {data.subtitle}
        </p>
      </div>

      {/* Image with Float Animation */}
      <div className="relative animate-float mt-2">
        <Image
          src={data.image}
          height={400}
          width={400}
          alt="Feature Image"
          className="w-48 h-48 lg:w-72 lg:h-72 object-contain"
        />
      </div>
    </div>
  );

  return (
    <div id="features" className="max-w-380 mx-auto w-11/12 md:py-12 overflow-hidden">
      <SectionTitle title={"Universe of"} colorTitle={"MON5MAJEUR"} left={""} />

      <div className="relative z-10 lg:hidden" data-aos="zoom-in">
        <div className="absolute inset-0 bg-[#E35D14]/10 rounded-full blur-[100px] animate-pulse" />
        <div className="relative">
          <Image
            src="/images/Voly(ball).png"
            height={500}
            width={500}
            alt="Central Ball"
            className="w-60 h-auto object-contain relative z-10 mx-auto"
          />
          <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 bg-black/60 backdrop-blur-xl py-3 border-y border-white/10 z-20">
            <Image
              src="/logos/logo.png"
              height={150}
              width={150}
              alt="Logo"
              className="mx-auto h-10 w-auto"
            />
          </div>
        </div>
      </div>
      {/* Mobile/Tablet Grid */}
      <div className="grid grid-cols-2 gap-y-12 gap-x-4 lg:hidden mt-10">
        {features.map((item, i) => (
          <BonusCard
            key={i}
            data={item}
            delay={i * 100}
            side={i % 2 === 0 ? "left" : "right"}
          />
        ))}
      </div>

      {/* Desktop Orbit Design */}
      <section className="hidden lg:grid grid-cols-3 items-center gap-4 mt-16">
        <div className="flex flex-col gap-24 items-end pr-10">
          <BonusCard data={features[0]} delay={100} side="left" />
          <BonusCard data={features[1]} delay={200} side="left" />
        </div>

        <div className="flex flex-col items-center gap-10">
          <div className="-mb-16 z-20">
            <BonusCard data={features[2]} delay={300} side="left" />
          </div>

          <div className="relative z-10" data-aos="zoom-in">
            <div className="absolute inset-0 bg-[#E35D14]/20 rounded-full blur-[100px] animate-pulse" />
            <div className="relative">
              <Image
                src="/images/Voly(ball).png"
                height={500}
                width={500}
                alt="Central Ball"
                className="w-80 h-auto object-contain relative z-10 mx-auto"
              />
              <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 bg-black/60 backdrop-blur-xl py-3 border-y border-white/10 z-20">
                <Image
                  src="/logos/logo.png"
                  height={150}
                  width={150}
                  alt="Logo"
                  className="mx-auto h-10 w-auto"
                />
              </div>
            </div>
          </div>

          <div className="-mt-16 z-20">
            <BonusCard data={features[3]} delay={400} side="right" />
          </div>
        </div>

        <div className="flex flex-col gap-24 items-start pl-10">
          <BonusCard data={features[4]} delay={500} side="right" />
          <BonusCard data={features[5]} delay={600} side="right" />
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default UniverseOfMon5Majeur;
