import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import Image from "next/image";
import { BsArrowUpRightSquareFill } from "react-icons/bs";
import Link from "next/link";

function Experience() {
  const handleScroll = (e) => {
    e.preventDefault();
    const target = document.getElementById("launche");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-280 h-full xl:mt-12">
      <section
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-anchor-placement="top-bottom"
        className="max-w-380 mx-auto w-11/12 lg:mb-24 relative z-30"
      >
        <div className="max-w-180 lg:max-w-195">
          <SectionTitle
            title={"Experience the Ultimate"}
            colorTitle={"NBA Fantasy Game"}
            left={"left"}
          />
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1200"
            className="max-w-10/12"
          >
            <p className="text-lg md:text-2xl lg:text-3xl font-galdeano text-base">
              New NBA night = New team.
            </p>
            <p className="text-lg md:text-2xl lg:text-3xl font-galdeano text-base pt-2 leading-normal">
              You build your starting five based on the day's games, within your
              budget{" "}
              <span className="font-bold font-russoOne text-primary1">
                (80M or 100M)
              </span>
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1200"
            className="flex flex-row items-center gap-4 md:text-lg py-4"
          >
            <h2 className="py-2 px-6 rounded-xl border border-base/50 shadow-inner text-primary1/90">
              No fixed roster
            </h2>
            <h2 className="py-2 px-6 rounded-xl border border-base/50 shadow-inner text-primary1/90">
              No Drafts
            </h2>
          </div>
          <ul className="mt-6">
            <li
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1200"
              className="flex items-center gap-2 p-2"
            >
              <span className="w-5 h-5 ring ring-base/80 bg-white/10 inline-block border-4 border-white/20 rounded-sm"></span>
              <p className="text-xl text-primary1 font-medium font-aldrich">
                100% <span className="text-base">Fun</span>
              </p>
            </li>
            <li
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1200"
              className="flex items-center gap-2 p-2"
            >
              <span className="w-5 h-5 ring ring-base/80 bg-white/10 inline-block border-4 border-white/20 rounded-sm"></span>
              <p className="text-xl text-primary1 font-medium font-aldrich">
                100% <span className="text-base">Freedom</span>
              </p>
            </li>
            <li
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1200"
              className="flex items-center gap-2 p-2"
            >
              <span className="w-5 h-5 ring ring-base/80 bg-white/10 inline-block border-4 border-white/20 rounded-sm"></span>
              <p className="text-xl text-primary1 font-medium font-aldrich">
                100% <span className="text-base">Strategy</span>
              </p>
            </li>
          </ul>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1200"
            className="py-4 flex relative z-50"
          >
            <a
              href="#launch"
              className="py-3 px-6 rounded-lg bg-linear-to-r from-primary1 to-primary2 text-white font-semibold flex items-center flex-row gap-2 relative z-50 cursor-pointer"
            >
              Get Launching Notifications
              <BsArrowUpRightSquareFill />
            </a>
          </div>
        </div>
      </section>

      <div
        data-aos="fade-left"
        data-aos-delay="200"
        data-aos-anchor-placement="top-bottom"
        className="absolute top-0 -right-40 pointer-events-none z-10"
      >
        <Image
          src={"/images/player.png"}
          height={1200}
          width={1200}
          alt="Football player image"
          className="max-h-150 lg:max-h-220 xl:max-h-300 h-full w-auto opacity-20 lg:opacity-100"
        />
      </div>

      <section
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-anchor-placement="top-bottom"
        className="max-w-380 mx-auto w-11/12 grid grid-cols-1 lg:grid-cols-2 py-24 items-center relative z-20"
      >
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1200"
          className="relative"
        >
          <div className="absolute -top-30 -left-30 w-60 h-40 bg-primary1/60 -z-10 blur-[200px]"></div>
          <div className="absolute top-0 left-60 w-40 h-60 bg-primary1/60 -z-10 blur-[200px]"></div>

          <div className="absolute top-10 md:top-35 lg:top-65 md:-left-10 md:-rotate-25 left-0 z-0 pointer-events-none">
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
            className="h-120 md:h-150 lg:h-185 object-cover w-auto relative z-10"
          />
        </div>

        <div className="space-y-12">
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="ring-2 ring-primary2/20 flex flex-col items-start bg-linear-to-tl from-gray-900/80 to-[#00000000] backdrop-blur-2xl p-6 md:p-8 rounded-2xl"
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

          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="ring-2 ring-primary2/20 flex flex-col items-start bg-linear-to-tl from-gray-900/80 to-[#00000000] backdrop-blur-2xl p-6 md:p-8 rounded-2xl"
          >
            <h1 className="text-2xl md:text-3xl lg:text-4xl tracking-tight font-semibold text-white mb-3">
              Scores & Rankings
            </h1>
            <h4 className="text-lg md:text-xl text-primary1">Real NBA stats</h4>
            <p className="text-base font-galdeano md:text-lg lg:text-xl mt-6">
              Your players score in real-time, based on their actual NBA
              performances every night. As the games unfold, your team's fantasy
              score updates instantly, reflecting the points, rebounds, assists,
              and other stats of your selected players..
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Experience;
