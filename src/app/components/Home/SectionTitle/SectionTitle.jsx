import React from "react";

function SectionTitle({ title, colorTitle }) {
  return (
    <div className="my-10 flex items-center justify-center">
      <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white font-medium font-aldrich leading-normal">
        {title} <span className="text-primary1">{colorTitle}</span>
      </h1>
    </div>
  );
}

export default SectionTitle;
