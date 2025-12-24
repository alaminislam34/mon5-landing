"use client";

import AbsoluteBall from "./components/AbsoluteComponents/AbsoluteBall";
import Banner from "./components/Home/Banner/Banner";

export default function Home() {
  return (
    <section className="relative overflow-hidden min-h-screen">
      <AbsoluteBall />
      <Banner />
    </section>
  );
}
