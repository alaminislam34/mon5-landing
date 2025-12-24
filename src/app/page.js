"use client";

import AbsoluteBall from "./components/AbsoluteComponents/AbsoluteBall";
import Banner from "./components/Home/Banner/Banner";

export default function Home() {
  return (
    <section className="relative min-h-screen">
      <section
        style={{ backgroundImage: "url(/images/banner-bg.png)" }}
        className="object-cover bg-cover bg-center"
      >
        <AbsoluteBall />
        <Banner />
      </section>
    </section>
  );
}
