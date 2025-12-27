import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import Image from "next/image";

function GetNotified() {
  return (
    <section id="launch">
      <div className="max-w-380 mx-auto w-11/12 py-12 md:py-16 ">
        <SectionTitle
          title={"Be notified when it"}
          colorTitle={"launches"}
          left="left"
        />
        <div className="flex items-center relative">
          <div className="md:max-w-3/5 w-full space-y-4 xl:space-y-6 relative z-10">
            <div className="flex flex-row gap-2 md:gap-4 items-center justify-between md:text-lg xl:text-xl ">
              <input
                type="email"
                placeholder="Enter your mail..."
                className="py-3 px-5 rounded-xl shadow bg-gray-800/20 border-base/5 ring-base/30 border focus:outline-none ring focus:ring-primary1 w-4/6"
              />
              <button className="py-3 px-6 rounded-xl truncate bg-linear-to-r from-primary1 to-primary2 hover:bg-primary2 text-white w-2/6">
                Get Notified
              </button>
            </div>
            <p className="text-gray-400 text-sm pb-4">
              We'll send you the link as soon as the app is available.
            </p>
            <div className="flex">
              <p className="py-4 font-galdeano leading-normal tracking-wider px-12 text-primary1 border border-primary1/50 shadow-white/30 backdrop-blur-xl rounded-xl shadow text-lg md:text-xl lg:text-2xl">
                Early Access players in the first week unlock 2 exclusive
                jerseys{" "}
              </p>
            </div>
          </div>
          <div className="md:max-w-2/5 md:relative absolute left-0">
            <Image
              src={"/images/throughBall.jpg"}
              height={800}
              width={1200}
              alt="Volyball player through the ball"
              className="relative z-0 scale-125 left-24 md:left-10 md:scale-155 lg:bottom-30 bottom-20"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetNotified;
