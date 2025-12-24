import React from "react";
import AbsoluteBall from "../../AbsoluteComponents/AbsoluteBall";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";

function Banner() {
  return (
    <div className="">
      <section className="pt-16 grid grid-cols-1 lg:grid-cols-2 ">
        <div className="flex items-center justify-start min-h-95 px-4">
          <div className="space-y-6 z-50">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.3]">
              Become the <br /> Ultimate{" "}
              <span className="text-primary1">
                <TypeAnimation
                  sequence={[
                    "Fantasy Coach",
                    1000,
                    "Fantasy Coach",
                    1000,
                    "Fantasy Coach",
                    1000,
                  ]}
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </h1>
            <p className="sm:text-lg md:text-xl text-base max-w-3/4">
              Create your dream team, compete with friends, and track real-time
              NBA stats. Ready to play?
            </p>
            <div className="flex flex-row items-center gap-6">
              <Image
                src={"/images/google-play.png"}
                height={200}
                width={500}
                alt="Google play"
                className="h-14 w-auto object-cover bg-cover bg-center"
              />
              <Image
                src={"/images/app-store.png"}
                height={200}
                width={500}
                alt="Google play"
                className="h-14 w-auto object-cover bg-cover bg-center"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end ">
          <Image
            src={"/images/hand.png"}
            height={800}
            width={1000}
            alt="Hand image"
            className="max-h-260 w-auto"
          />
        </div>
      </section>
    </div>
  );
}

export default Banner;
