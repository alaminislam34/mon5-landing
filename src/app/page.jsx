"use client";

import { useEffect } from "react";
import AbsoluteBall from "./components/AbsoluteComponents/AbsoluteBall";
import Banner from "./components/Home/Banner/Banner";
import Experience from "./components/Home/Experience/Experience";
import Scrolling from "./components/Home/ScrollTextSection/Scrolling";
import WhyMon5 from "./components/Home/WhyMon5/WhyMon5";
import Aos from "aos";
import "aos/dist/aos.css";
import PrivateLeagues from "./components/Home/Leagues/PrivateLeagues";

export default function Home() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      offset: 200,
    });
  }, []);
  return (
    <section className="relative min-h-screen">
      <section
        style={{ backgroundImage: "url(/images/banner-bg.jpg)" }}
        className="object-cover bg-cover bg-center"
      >
        <AbsoluteBall />
        <Banner />
      </section>
      <Scrolling />
      <section className="relative min-h-150 pt-44 lg:pt-60">
        <div
          className="absolute top-0 left-0 h-full w-full object-cover bg-top bg-no-repeat bg-cover opacity-10"
          style={{ backgroundImage: "url('/images/bg-image(why-mon5).png')" }}
        ></div>

        <div className="relative z-20 ">
          <WhyMon5 />
        </div>
      </section>
      <section>
        <Experience />
      </section>
      <section>
        <PrivateLeagues />
      </section>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </section>
  );
}
