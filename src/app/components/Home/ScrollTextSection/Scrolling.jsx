import React from "react";
import Marquee from "react-fast-marquee";
import { PiStarFourFill } from "react-icons/pi";

const items = ["CHALLENGES", "VICTORY", "SCORE", "FANTASY"];

function Scrolling() {
  return (
    <div className="relative lg:mt-12 xl:mt-24 ">
      <div className="h-20 z-10 absolute top-12 left-1/2 -translate-y-1/2 -translate-x-1/2 -rotate-3 w-[150%] bg-primary1 opacity-20 flex items-center justify-center">
        <Marquee
          speed={30}
          gradient={false}
          autoFill={true}
          className="w-full flex items-center"
        >
          {items.map((text, index) => (
            <div key={index} className="flex flex-row items-center">
              <h1 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium px-4 text-white">
                {text}
              </h1>

              <PiStarFourFill className="text-4xl text-white mx-10" />
            </div>
          ))}
        </Marquee>
      </div>

      <div className="h-16 sm:h-20 z-10 absolute top-12 left-1/2 -translate-y-1/2 -translate-x-1/2 rotate-3 w-[150%] bg-primary2 flex items-center ">
        <Marquee
          speed={50}
          gradient={false}
          autoFill={true}
          className="w-full flex items-center"
        >
          {items.map((text, index) => (
            <div key={index} className="flex flex-row items-center">
              <h1 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium px-4 text-white">
                {text}
              </h1>

              <PiStarFourFill className="text-4xl text-white mx-10" />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default Scrolling;
