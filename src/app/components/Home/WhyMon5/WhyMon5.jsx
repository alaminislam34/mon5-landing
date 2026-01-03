"use client";

import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import CardSlider from "./Slider/CardSlider";
import { useLanguage } from "@/Providers/ContextProvider";

function WhyMon5() {
  const { t } = useLanguage();
  return (
    <div>
      <div className="max-w-380 mx-auto">
        <SectionTitle
          title={t.CardSlider.title}
          colorTitle={t.CardSlider.colorTitle}
        />
      </div>
      <section className="w-full">
        <CardSlider />
      </section>
    </div>
  );
}

export default WhyMon5;
