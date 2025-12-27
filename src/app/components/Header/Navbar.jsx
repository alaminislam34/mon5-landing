"use client";

import { useLanguage } from "@/Providers/ContextProvider";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { AiFillMail } from "react-icons/ai";
import { BsArrowUpRightSquareFill } from "react-icons/bs";
import LanguageSwitcher from "../Language/LanguageSwitcher";
// ১. Context এবং Switcher ইম্পোর্ট করুন

function Navbar() {
  const [isScroll, setIsScroll] = useState(false);
  const pathName = usePathname();
  const [showMenu, setShowMenu] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  const { t } = useLanguage();

  const { links: navLinks, inputPlaceholder, buttonText } = t.Navbar;

  const menuItems = [
    { href: "/", label: navLinks[0] },
    { href: "/contact", label: navLinks[1] },
  ];

  useEffect(() => {
    setHasMounted(true);
    const handleScroll = () => {
      setIsScroll(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setShowMenu(false);
  }, [pathName]);

  const navBackground =
    hasMounted && isScroll
      ? "bg-dark shadow-xl shadow-primary1/10"
      : "bg-transparent";

  return (
    <nav
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-duration="1000"
      className={`fixed duration-300 top-0 left-0 w-full z-50 transition-colors ${navBackground}`}
    >
      <section className="max-w-380 mx-auto px-4 py-3 flex flex-row items-center justify-between">
        <div>
          <Image
            src={"/logos/logo.png"}
            height={200}
            width={200}
            alt="Logo"
            priority
            className="h-12 md:h-14 w-auto bg-cover bg-center object-cover"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:block">
          <ul className="flex flex-row items-center gap-6">
            {menuItems.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`py-2 px-6 rounded-lg truncate ${
                    pathName === href ? "bg-primary1 font-medium" : ""
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <LanguageSwitcher />

          <div className="relative">
            <AiFillMail className="absolute top-1/2 -translate-y-1/2 left-3 text-primary1" />
            <input
              type="text"
              placeholder={inputPlaceholder}
              className="py-2 pl-8 pr-4 rounded-lg ring-border bg-input-bg text-sm focus:outline-none focus:ring-primary1 ring-1"
            />
          </div>
          <div>
            <button className="py-2 px-4 rounded-lg bg-linear-to-r from-primary1 to-primary2 text-white font-semibold text-sm flex items-center flex-row gap-2 truncate">
              {buttonText}
              <BsArrowUpRightSquareFill />
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-3">
          <LanguageSwitcher />
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="py-2 px-3 rounded-lg bg-primary2 text-white"
          >
            {showMenu ? <X /> : <Menu />}
          </button>
        </div>

        {/* Dropdown Mobile Menu */}
        <div
          className={`absolute duration-300 z-50 ${
            showMenu ? " top-16" : "top-24 opacity-0 pointer-events-none"
          } right-4 md:right-6 border border-primary2/20 bg-primary1/5 backdrop-blur-3xl min-h-100 max-w-80 rounded-xl shadow-xl w-full`}
        >
          <div className="p-2 pt-4">
            <Image
              src={"/logos/logo.png"}
              height={200}
              width={200}
              alt="Logo"
              className="h-10 md:h-12 w-auto bg-cover bg-center object-cover"
            />
          </div>
          <div className="border-b border-primary2/20 my-4"></div>
          <ul className="flex flex-col gap-4 p-4">
            {menuItems.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`py-2 px-4 rounded-lg inline-block w-full duration-300 ${
                    pathName === href
                      ? "bg-primary2"
                      : "hover:bg-primary1/50 border-b border-primary1/20"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-4 p-4 pb-6">
            <div className="relative">
              <AiFillMail className="absolute top-1/2 -translate-y-1/2 left-3 text-primary1" />
              <input
                type="text"
                placeholder={inputPlaceholder}
                className="py-2 pl-8 pr-4 rounded-lg ring-primary1/50 text-sm focus:outline-none focus:ring-primary2 ring-1 w-full"
              />
            </div>
            <div>
              <button className="py-2 px-4 rounded-lg bg-linear-to-r from-primary1 to-primary2 text-white font-semibold text-sm flex items-center flex-row gap-2 w-full">
                {buttonText}
                <BsArrowUpRightSquareFill />
              </button>
            </div>
          </div>
        </div>
      </section>
    </nav>
  );
}

export default Navbar;
