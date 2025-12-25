import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import CardSlider from "./Slider/CardSlider";

function WhyMon5() {
  return (
    <div>
      <div className="max-w-380 mx-auto">
        <SectionTitle title={"Why"} colorTitle={"Mon5majeur?"} />
      </div>
      <section className="w-full">
        <CardSlider />
      </section>
    </div>
  );
}

export default WhyMon5;
