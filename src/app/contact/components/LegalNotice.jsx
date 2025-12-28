import React from "react";
import Image from "next/image"; // If using Vite/standard React, replace with <img />

function LegalNotice() {
  const lastUpdated = "26/12/2025";

  return (
    <div className="max-w-380 mx-auto w-11/12 px-6 py-16 text-white bg-transparent font-sans">
      {/* Header Section */}
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">
          Legal <span className="text-[#ea7032]">Notice</span>
        </h1>
        <p className="text-gray-500 text-sm md:text-Base tracking-widest uppercase">
          Last updated: {lastUpdated}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        {/* Left Column: Website Publisher */}
        <div className="space-y-10">
          <div>
            <h2 className="text-xl md:text-2xl font-bold uppercase tracking-widest mb-2">
              Website Publisher
            </h2>
            <div className="w-20 h-1 bg-[#ea7032]"></div>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-[#ea7032] font-black text-lg tracking-wide uppercase">
                MON5MAJEUR – SASU
              </p>
              <p className="text-gray-400 text-sm">
                Single-shareholder simplified joint-stock company
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <section>
                <p className="text-gray-500 text-xs uppercase tracking-[0.2em] font-bold mb-1">
                  Share Capital
                </p>
                <p className="text-white text-lg">€1,000</p>
              </section>

              <section>
                <p className="text-gray-500 text-xs uppercase tracking-[0.2em] font-bold mb-1">
                  Registered Office
                </p>
                <p className="text-white text-lg">
                  229 rue Saint-Honoré, 75001 Paris, France
                </p>
              </section>

              <div className="grid grid-cols-2 gap-4">
                <section>
                  <p className="text-gray-500 text-xs uppercase tracking-[0.2em] font-bold mb-1">
                    RCS (Paris)
                  </p>
                  <p className="text-white text-lg">993 681 915</p>
                </section>
                <section>
                  <p className="text-gray-500 text-xs uppercase tracking-[0.2em] font-bold mb-1">
                    SIRET
                  </p>
                  <p className="text-white text-lg">99368191500019</p>
                </section>
              </div>

              <section>
                <p className="text-gray-500 text-xs uppercase tracking-[0.2em] font-bold mb-1">
                  President / Publishing Director
                </p>
                <p className="text-white text-lg">Robin Martinella</p>
              </section>

              <section>
                <p className="text-gray-500 text-xs uppercase tracking-[0.2em] font-bold mb-1">
                  Contact
                </p>
                <p className="text-[#ea7032] text-lg font-medium">
                  support@mon5majeur.com
                </p>
              </section>
            </div>
          </div>
        </div>

        {/* Right Column: Hosting Provider + Logo */}
        <div className="flex flex-col justify-between">
          <div className="space-y-10">
            <div>
              <h2 className="text-xl md:text-2xl font-bold uppercase tracking-widest mb-2">
                Hosting Provider
              </h2>
              <div className="w-20 h-1 bg-[#ea7032]"></div>
            </div>

            <div className="space-y-6">
              <p className="text-white font-black text-lg tracking-wide uppercase">
                OVH SAS
              </p>
              <section>
                <p className="text-gray-500 text-xs uppercase tracking-[0.2em] font-bold mb-1">
                  Address
                </p>
                <p className="text-white text-lg">
                  2 rue Kellermann, 59100 Roubaix, France
                </p>
              </section>
            </div>
          </div>

          {/* Logo Branding Section */}
          <div className="mt-20 md:mt-0">
            <div className="relative w-48 h-48 md:w-64 md:h-64 mb-4">
              {/* Replace src with your actual logo path */}
              <Image
                src="/logos/logo2.png"
                alt="MON5MAJEUR Player"
                layout="fill"
                objectFit="contain"
                className="opacity-90"
              />
              {/* Subtle orange glow behind player as seen in image */}
              <div className="absolute inset-0 bg-[#ea7032]/20 blur-[60px] rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LegalNotice;
