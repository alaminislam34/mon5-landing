import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { BsArrowUpRightSquareFill } from "react-icons/bs";

const FAQ_DATA = [
  {
    question: "What is Mon5Majeur?",
    answer:
      "An NBA fantasy game made to play with friends: you build your starting five every night, follow live scores, and climb the rankings.",
  },
  {
    question: "Is the app free?",
    answer: "Yes. The app is free, with optional premium features.",
  },
  {
    question: "Can I play with my friends?",
    answer:
      "Yes. You can create Private Leagues (mini seasons + playoffs) and join them via invitation.",
  },
  {
    question: "Where do the scores come from?",
    answer:
      "From real NBA performances, updated every night (and in real time during games).",
  },
  {
    question: "How do I get the 2 exclusive jerseys?",
    answer:
      "Sign up for the launch alert and create your account during the first week after release: the 2 in-game jerseys will be unlocked and available to claim for free in the shop.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="flex flex-col md:flex-row gap-12 text-white font-sans max-w-380 mx-auto w-11/12 md:py-16">
      {/* Left Content */}
      <div className="flex-1 space-y-6" data-aos="fade-up">
        <h4 className="text-gray-400 font-medium tracking-widest text-sm uppercase">
          FAQ
        </h4>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Get all your <span className="text-primary1">questions</span> <br />
          <span className="text-primary1">answered</span> here
        </h2>
        <p className="font-galdeano text-gray-400 text-lg md:text-xl max-w-md">
          Everything you need to know about Mon5Majeur and how it works
        </p>

        <div className="pt-4">
          <a
            href="#launch"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-linear-to-r from-primary1 to-primary2 text-white font-semibold transition-transform hover:scale-105 active:scale-95"
          >
            Get Launching Notifications
            <BsArrowUpRightSquareFill className="text-xl" />
          </a>
        </div>
      </div>

      {/* Accordion Right Side */}
      <div data-aos="fade-up" data-aos-delay="100" className="flex-1 space-y-4">
        {FAQ_DATA.map((item, index) => (
          <div
            key={index}
            className={`border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 ${
              openIndex === index ? "bg-white/5" : "bg-transparent"
            }`}
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              className="w-full flex items-center justify-between p-6 text-left"
            >
              <span className="text-lg md:text-xl font-medium tracking-wide pr-4">
                {item.question}
              </span>
              <div
                className={`shrink-0 p-1 rounded-md transition-all duration-300 ${
                  openIndex === index
                    ? "bg-primary1 rotate-0"
                    : "bg-primary1/80"
                }`}
              >
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-white" strokeWidth={3} />
                ) : (
                  <Plus className="w-5 h-5 text-white" strokeWidth={3} />
                )}
              </div>
            </button>

            {/* Smooth transition for content */}
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                openIndex === index
                  ? "grid-rows-[1fr] opacity-100 pb-6"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden px-6 text-gray-400 leading-relaxed font-galdeano">
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
