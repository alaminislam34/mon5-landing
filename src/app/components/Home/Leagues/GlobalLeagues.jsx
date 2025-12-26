import { Plus } from "lucide-react";
import Image from "next/image";
import React from "react";

function GlobalLeaguess() {
  return (
    <section className="min-h-125">
      <section className="flex justify-between flex-col md:flex-row gap-6 md:gap-12 lg:gap-20 max-w-380 mx-auto w-11/12 items-center">
        <div className="relative flex items-center justify-start">
          <div className="relative">
            <Image
              src={"/images/circle.png"}
              height={1000}
              width={1200}
              alt="App image"
              className="w-200 -rotate-6 absolute -top-40 -right-80 z-0"
            />
            <div className="absolute top-60 md:top-60 lg:top-60 lg:right-20 ring-2 rounded-2xl ring-base/10 z-20 bg-dark/5 backdrop-blur-xs py-2 px-6 flex flex-col items-start max-w-80">
              <h1 className="font-bold tracking-tigh md:text-lg text-primary1">
                NBR Global League
              </h1>
              <p className="text-base font-galdeano mt-1">
                Compete against everyone. Weekly + Monthly prizes
              </p>
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
        <div className="flex items-center justify-end">
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
      </section>
    </section>
  );
}

export default GlobalLeaguess;
