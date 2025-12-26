import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import CountUp from "react-countup";
import { useEffect } from "react";
import Aos from "aos";

function Banner() {
  useEffect(() => {
    Aos.init({
      delay: 1500,
    });
  }, []);
  return (
    <section className="relative">
      <div className="max-w-380 mx-auto min-h-[80vh] md:min-h-[95vh] bg-cover bg-center z-10 relative">
        <section className="flex items-center mt-20 min-h-[50vh] md:min-h-[50vh] lg:min-h-[65vh]">
          <div className="flex items-center justify-start h-full md:pt-6 lg:pt-12 px-4">
            <div className="space-y-8 z-50">
              <h1
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-anchor-placement="top-bottom"
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.2]"
              >
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
              <p
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-anchor-placement="top-bottom"
                className="sm:text-lg md:text-xl text-base max-w-[90%] md:max-w-[75%]"
              >
                Create your dream team, compete with friends, and track
                real-time NBA stats. Ready to play?
              </p>
              <div
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-anchor-placement="top-bottom"
                className="flex flex-row items-center gap-4 sm:gap-6"
              >
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
        </section>
        <div
          data-aos="fade-up"
          data-aos-delay="1000"
          data-aos-anchor-placement="top-bottom"
          className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 items-center md:mt-24"
        >
          <div className="flex flex-col gap-2 items-center text-[#cccccc]">
            <h1 className="text-3xl lg:text-4xl xl:text-6xl font-bold">
              <CountUp end={5} duration={2} />
              k+
            </h1>
            <p className="md:text-lg lg:text-xl xl:text-2xl">Downloads</p>
          </div>
          <div className="flex flex-col gap-2 items-center text-[#cccccc]">
            <h1 className="text-3xl lg:text-4xl xl:text-6xl font-bold">
              <CountUp end={500} duration={3} />
              k+
            </h1>
            <p className="md:text-lg lg:text-xl xl:text-2xl">Leagues Created</p>
          </div>
          <div className="flex flex-col gap-2 items-center text-[#cccccc]">
            <h1 className="text-3xl lg:text-4xl xl:text-6xl font-bold">
              <CountUp end={10} duration={2} />
              k+
            </h1>
            <p className="md:text-lg lg:text-xl xl:text-2xl">
              Pre-Registrations
            </p>
          </div>
          <div className="flex flex-col gap-2 items-center text-[#cccccc]">
            <h1 className="text-3xl lg:text-4xl xl:text-6xl font-bold">
              <CountUp end={1} duration={2} />
              k+
            </h1>
            <p className="md:text-lg lg:text-xl xl:text-2xl">Active Players</p>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="1500"
        data-aos-anchor-placement="top-bottom"
        className="absolute right-0 top-14 sm:top-14 md:-top-1 lg:-top-20 z-0"
      >
        <Image
          src={"/images/hand.png"}
          width={1500}
          height={800}
          alt="Hand image"
          className="opacity-50 lg:opacity-100 w-full lg:max-h-160 xl:max-h-190"
          priority
        />
      </div>
    </section>
  );
}

export default Banner;
