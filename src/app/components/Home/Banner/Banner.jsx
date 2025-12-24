import { TypeAnimation } from "react-type-animation";
import Image from "next/image";

function Banner() {
  return (
    <div className="max-w-380 mx-auto min-h-screen bg-cover bg-center">
      <section className="pt-16 flex items-center">
        <div className="flex items-center justify-start min-h-[80vh] w-2/5 xl:w-2/6 px-4">
          <div className="space-y-6 z-50">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.2]">
              Become the <br /> Ultimate{" "}
              <span className="text-primary1 min-h-[1.2em]">
                <TypeAnimation
                  sequence={["Fantasy Coach", 1000, "", 1000]}
                  speed={50}
                  cursor={true}
                  repeat={Infinity}
                  style={{
                    whiteSpace: "wrap",
                  }}
                />
              </span>
            </h1>
            <p className="sm:text-lg md:text-xl text-base max-w-[90%] md:max-w-[75%]">
              Create your dream team, compete with friends, and track real-time
              NBA stats. Ready to play?
            </p>
            <div className="flex flex-row items-center gap-4 sm:gap-6">
              <Image
                src={"/images/google-play.png"}
                height={200}
                width={500}
                alt="Google play"
                className="h-10 sm:h-14 w-auto cursor-pointer hover:opacity-80 transition-opacity"
              />
              <Image
                src={"/images/app-store.png"}
                height={200}
                width={500}
                alt="App Store"
                className="h-10 sm:h-14 w-auto cursor-pointer hover:opacity-80 transition-opacity"
              />
            </div>
          </div>
        </div>
        <div className="border w-3/5 xl:w-4/6">
          <Image
            src={"/images/hand.png"}
            width={1500}
            height={1000}
            alt="Hand image"
            className="opacity-30 lg:opacity-100 w-full relative border border-white"
            priority
          />
        </div>
      </section>
    </div>
  );
}

export default Banner;
