import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import Image from "next/image";

function Experience() {
  return (
    <section className="relative min-h-280 h-full  xl:mt-12">
      <section className="max-w-380 mx-auto w-11/12 lg:mb-24">
        <div className="max-w-180 lg:max-w-195">
          <SectionTitle
            title={"Experience the Ultimate"}
            colorTitle={"NBA Fantasy Game"}
          />
          <p className="sm:text-xl md:text-2xl lg:text-4xl font-galdeano text-base pt-8 leading-normal">
            Dive into Mon5Majeur, where every night is a new challenge. Build
            dynamic lineups, track real-time NBA stats, and compete with friends
            or globally. Unlock bonuses and climb the rankings to earn your spot
            in the Hall of Fame. It’s all about strategy, competition, and
            basketball
          </p>
        </div>
      </section>
      <div className="absolute top-0 -right-40">
        <Image
          src={"/images/player.png"}
          height={1200}
          width={1200}
          alt="Football player image"
          className="max-h-150 lg:max-h-220 xl:max-h-300 h-full w-auto opacity-20 lg:opacity-100"
        />
      </div>
      <section className="max-w-380 mx-auto w-11/12 grid grid-cols-1 lg:grid-cols-2 py-24 items-center">
        <div className="relative">
          <div className="absolute -top-40 left-0 w-40 h-40 bg-primary1/60 blur-[150px] z-0"></div>
          <div className="absolute top-0 left-60 w-40 h-40 bg-primary1/60 blur-[150px] z-0"></div>

          <div className="absolute -bottom-190 left-15 transform scale-x-[-1] -rotate-45 z-0">
            <Image
              src={"/images/circle.png"}
              height={600}
              width={1000}
              alt="Circle animation"
              className="max-w-200 h-auto"
            />
          </div>

          <Image
            src={"/images/mobile.png"}
            height={1000}
            width={1500}
            alt="Mobile app image"
            className="h-120 md:h-150 lg:h-185 object-cover w-auto relative z-10 "
          />
        </div>
        <div className="space-y-12">
          <div className="ring-2 ring-primary2/20 flex flex-col items-start bg-linear-to-tl from-gray-900/80 to-[#00000000] backdrop-blur-2xl p-6 md:p-8 rounded-2xl">
            <h1 className="text-2xl md:text-3xl lg:text-4xl tracking-tight font-semibold text-white mb-3">
              Build Your 5
            </h1>
            <h4 className="text-lg md:text-xl text-primary1">
              Your lineup changes every night
            </h4>
            <p className="text-base font-galdeano md:text-lg lg:text-xl mt-6">
              Create a new starting five based on the NBA games of the night.
              Budget, stars, strategy… it’s your call
            </p>
          </div>
          <div className="ring-2 ring-primary2/20 flex flex-col items-start bg-linear-to-tl from-gray-900/80 to-[#00000000] backdrop-blur-2xl p-6 md:p-8 rounded-2xl">
            <h1 className="text-2xl md:text-3xl lg:text-4xl tracking-tight font-semibold text-white mb-3">
              Build Your 5
            </h1>
            <h4 className="text-lg md:text-xl text-primary1">
              Your lineup changes every night
            </h4>
            <p className="text-base font-galdeano md:text-lg lg:text-xl mt-6">
              Create a new starting five based on the NBA games of the night.
              Budget, stars, strategy… it’s your call
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Experience;
