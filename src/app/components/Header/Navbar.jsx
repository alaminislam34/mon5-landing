"use client";

import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiFillMail } from "react-icons/ai";
import { BsArrowUpRightSquareFill } from "react-icons/bs";

function Navbar() {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 ${isScroll ? "bg-white" : ""}`}
    >
      <section className="max-w-380 mx-auto px-4 py-2 flex flex-row items-center justify-between">
        <div>
          <Image
            src={"/logos/logo.png"}
            height={200}
            width={200}
            alt="Logo"
            className="h-12 md:h-14 w-auto bg-cover bg-center object-cover"
          />
        </div>
        <div className="hidden lg:block">
          <ul className="flex flex-row items-center gap-6 ">
            <li>
              <Link className="py-2 px-6 rounded-lg bg-primary1" href={"/"}>
                Home
              </Link>
            </li>
            <li>
              <Link
                className="py-2 px-6 rounded-lg bg-primary1"
                href={"/about"}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                className="py-2 px-6 rounded-lg bg-primary1"
                href={"/contact"}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden lg:flex items-center gap-4">
          <div className="relative">
            <AiFillMail className="absolute top-1/2 -translate-y-1/2 left-3 text-primary1" />
            <input
              type="text"
              placeholder="Enter your mail"
              className="py-2 pl-8 pr-4 rounded-lg ring-border bg-input-bg text-sm focus:outline-none focus:ring-primary1 ring-1"
            />
          </div>
          <div>
            <button className="py-2 px-4 rounded-lg bg-linear-to-r from-primary1 to-primary2 text-white font-semibold text-sm flex items-center flex-row gap-2">
              Get Download Link
              <BsArrowUpRightSquareFill />
            </button>
          </div>
        </div>
        <div className="lg:hidden">
          <button className="py-2 px-4 rounded-lg bg-primary1 text-white">
            <Menu />
          </button>
        </div>
        <div className="absolute top-16 right-6 border border-primary1 bg-white h-100 w-sm hidden"></div>
      </section>
    </nav>
  );
}

export default Navbar;
