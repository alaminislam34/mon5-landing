import React, { useEffect } from "react";
import { Download, CheckCircle2 } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const GUIDE_FEATURES = [
  "Proven strategies explained simply",
  "Real examples & best practices",
  "Beginner to advanced friendly",
];

function PlayersGuide() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="text-white font-sans max-w-380 mx-auto w-11/12 py-16">
      <div className="max-w-3xl space-y-8">
        {/* Header Section */}
        <div data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Ultimate <span className="text-primary1">Player's Guide</span>
          </h2>
          <p className="font-galdeano text-Base text-lg md:text-xl lg:text-2xl leading-relaxed max-w-3xl">
            A complete PDF packed with strategies, insights, and step-by-step
            guidance to help you make smarter decisions and level up your game.
          </p>
        </div>

        {/* Features List */}
        <ul className="space-y-4 py-4">
          {GUIDE_FEATURES.map((feature, index) => (
            <li
              key={index}
              data-aos="fade-left"
              data-aos-delay={index * 150}
              className="flex items-center gap-3 text-lg md:text-xl font-medium"
            >
              <div className="text-primary1 shrink-0">
                <CheckCircle2
                  className="w-6 h-6 md:w-7 md:h-7"
                  strokeWidth={2.5}
                />
              </div>
              <span className="tracking-wide">{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA Section */}
        <div data-aos="zoom-in" data-aos-delay="500" className="space-y-4">
          <a
            href="/files/Mon5Majeur Presentation-2.pdf"
            download
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-linear-to-r from-primary1 to-primary2 text-white font-bold uppercase tracking-wider text-sm md:text-Base transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(227,93,20,0.3)] active:scale-95"
          >
            Download the PDF
            <Download className="w-5 h-5" strokeWidth={3} />
          </a>
          <p className="text-gray-500 text-sm md:text-lg font-galdeano ml-1">
            No spam. Instant download.
          </p>
        </div>
      </div>
    </section>
  );
}

export default PlayersGuide;
