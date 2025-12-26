import { Plus } from "lucide-react";
import Image from "next/image";
import React from "react";

function PrivateLeagues() {
  return (
    <section className="min-h-screen">
      <section className="grid grid-cols-1 md:grid-cols-2 max-w-380 mx-auto w-11/12 items-center">
        <div>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-anchor-placement="top-bottom"
            className="ring-2 ring-primary2/20 flex flex-col items-start bg-dark/5 backdrop-blur-xs p-6 md:p-8 rounded-2xl lg:max-w-5/6 w-full"
          >
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
        <div className="relative">
          <div className="relative ">
            <Image
              src={"/images/volyball.png"}
              height={1000}
              width={1200}
              alt="App image"
              className="max-w-40 absolute top-10 md:top-0 md:right-0 right-0 lg:right-28 z-0"
            />
            <div className="absolute top-60 left-0 md:left-12 md:top-60 lg:top-83.5 lg:left-44 ring-2 rounded-2xl ring-primary2/20 z-20 bg-dark/5 backdrop-blur-xs py-2 px-6 flex flex-col items-center gap-1">
              <h1 className="font-bold tracking-tigh md:text-lg text-white">
                Join the League
              </h1>
              <span className="p-1.5 rounded-lg bg-white/20 backdrop-blur-lg">
                <Plus size={18} />
              </span>
            </div>
            <div className="absolute bottom-2 md:bottom-50 lg:bottom-54 left-6 ring-2 rounded-2xl ring-primary2/20 z-20  bg-dark/5 backdrop-blur-xs py-4 px-6 flex items-end flex-row gap-4">
              <div className="flex flex-col gap-2 items-center">
                <Image
                  src={"/images/diable-equipe.png"}
                  height={10}
                  width={10}
                  alt="Team logo"
                  className="w-6 h-auto rounded-full ring-4 ring-gray-800 border-4 border-gray-600"
                />
                <h1 className="lg:text-lg tracking-wider font-semibold text-center">
                  Hoops FC
                </h1>
              </div>
              <div>
                <h1
                  className="text-lg lg:text-xl tracking-wider font-semibold text-center
                "
                >
                  Vs
                </h1>
              </div>
              <div className="flex flex-col gap-2 items-center">
                <Image
                  src={"/images/diable-equipe.png"}
                  height={10}
                  width={10}
                  alt="Team logo"
                  className="w-6 h-auto rounded-full ring-4 ring-gray-800 border-4 border-gray-600"
                />
                <h1 className="lg:text-lg tracking-wider font-semibold text-center">
                  Hoops FC
                </h1>
              </div>
            </div>
            <Image
              src={"/images/mobile1.png"}
              height={1000}
              width={1200}
              alt="App image"
              className="lg:h-210 md:h-180 h-150 w-auto object-cover relative z-10"
            />
          </div>
        </div>
      </section>
    </section>
  );
}

export default PrivateLeagues;
