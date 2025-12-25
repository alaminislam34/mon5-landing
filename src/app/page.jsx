"use client";

import AbsoluteBall from "./components/AbsoluteComponents/AbsoluteBall";
import Banner from "./components/Home/Banner/Banner";
import Scrolling from "./components/Home/ScrollTextSection/Scrolling";

export default function Home() {
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
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </section>
  );
}
