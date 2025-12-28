import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import CountUp from "react-countup";
import { useEffect } from "react";
import Aos from "aos";

function Banner() {
  useEffect(() => {
    Aos.init({
      delay: 1500,
      offset: 100,
    });
  }, []);
  return (
    <section className="relative">
      <div className="max-w-380 mx-auto min-h-140 md:min-h-150  lg:min-h-180 xl:min-h-200 flex items-center bg-cover bg-center z-10 relative">
        <section className="flex items-center mt-20 h-full">
          <div className="flex items-center justify-start h-full md:pt-6 lg:pt-12 px-4">
            <div className="space-y-8 z-50 lg:max-w-7xl w-full">
              <h1
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-anchor-placement="top-bottom"
                className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.2]"
              >
                Build your 5. <br /> Dominate The{" "}
                <span className="text-primary1 min-h-[1.2em]">
                  <TypeAnimation
                    sequence={["NBA Nights.", 1000, "", 1000]}
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
                className="sm:text-lg md:text-xl text-Base max-w-4xl md:max-w-2xl"
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
                  className="h-10 sm:h-14 md:h-16 hover:opacity-90 transition-opacity bg-dark/50 rounded-lg w-auto cursor-pointer"
                />
                <Image
                  src={"/images/app-store.png"}
                  height={200}
                  width={500}
                  alt="App Store"
                  className="h-10 sm:h-14 md:h-16 hover:opacity-90 transition-opacity bg-dark/50 rounded-lg w-auto cursor-pointer"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <div
        data-aos="fade-left"
        data-aos-delay="200"
        data-aos-duration="1200"
        data-aos-anchor-placement="top-bottom"
        className="absolute right-0 top-14 sm:top-14 md:-top-1 lg:top-0 lg:scale-110 lg:right-12 z-0"
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
