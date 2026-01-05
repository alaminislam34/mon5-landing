"use client";

import React, { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { AiFillMail } from "react-icons/ai";
import { BsArrowUpRightSquareFill } from "react-icons/bs";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "@/Providers/ContextProvider";
import LanguageSwitcher from "../Language/LanguageSwitcher";
import toast from "react-hot-toast";

function Navbar() {
  const [isScroll, setIsScroll] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const [email, setEmail] = useState("");
  const pathName = usePathname();
  const { t } = useLanguage();

  const { links: navLinks, inputPlaceholder, buttonText } = t.Navbar;

  const menuItems = useMemo(
    () => [
      { href: "/", label: navLinks[0] },
      { href: "/contact", label: navLinks[1] },
    ],
    [navLinks]
  );

  useEffect(() => {
    setHasMounted(true);
    const handleScroll = () => {
      setIsScroll(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
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

  const handleSendAppLink = async () => {
    if (!email) {
      toast.error("Please input your email first!");
      return;
    }

    try {
      const res = await fetch("/api/send-link", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Download link sent to your email!");
        setEmail("");
      } else {
        toast.error(data.error || "Something went wrong!");
      }
    } catch (error) {
      toast.error("Failed to connect to the server.");
      console.error(error);
    }
  };
  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navBackground}`}
    >
      <section className="max-w-380 mx-auto px-4 py-3 flex flex-row items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link href="/" aria-label="Home">
            <Image
              src="/logos/logo.png"
              height={56}
              width={200}
              alt="Game Application Logo"
              priority
              className="h-12 md:h-14 w-auto object-contain"
            />
          </Link>
        </motion.div>

        <div className="hidden lg:block">
          <ul className="flex flex-row items-center gap-6">
            {menuItems.map(({ href, label }, index) => (
              <motion.li
                key={href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  href={href}
                  className={`py-2 px-6 rounded-lg truncate transition-colors duration-200 ${
                    pathName === href
                      ? "bg-primary1 font-medium"
                      : "hover:text-primary1"
                  }`}
                >
                  {label}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>

        <motion.div
          className="hidden lg:flex items-center gap-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <LanguageSwitcher />

          <div className="relative">
            <label htmlFor="desktop-email" className="sr-only">
              Email Subscription
            </label>
            <AiFillMail
              className="absolute top-1/2 -translate-y-1/2 left-3 text-primary1"
              aria-hidden="true"
            />
            <input
              id="desktop-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={inputPlaceholder}
              className="py-2 pl-8 pr-4 rounded-lg ring-border bg-input-bg text-sm focus:outline-none focus:ring-primary1 ring-1 transition-shadow"
            />
          </div>

          <button
            onClick={handleSendAppLink}
            className="py-2 px-4 rounded-lg bg-linear-to-r from-primary1 to-primary2 text-white font-semibold text-sm flex items-center flex-row gap-2 truncate hover:opacity-90 transition-opacity active:scale-95"
          >
            {buttonText}
            <BsArrowUpRightSquareFill aria-hidden="true" />
          </button>
        </motion.div>

        <div className="lg:hidden flex items-center gap-3">
          <LanguageSwitcher />
          <button
            onClick={() => setShowMenu(!showMenu)}
            aria-expanded={showMenu}
            aria-label="Toggle navigation menu"
            className="py-2 px-3 rounded-lg bg-primary2 text-white transition-transform active:scale-90"
          >
            {showMenu ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {showMenu && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-16 right-4 md:right-6 border border-primary2/20 bg-primary1/5 backdrop-blur-3xl min-h-100 max-w-80 rounded-xl shadow-xl w-full z-50 overflow-hidden"
            >
              <div className="p-2 pt-4">
                <Image
                  src="/logos/logo.png"
                  height={48}
                  width={150}
                  alt="Logo"
                  className="h-10 md:h-12 w-auto object-contain"
                />
              </div>
              <div className="border-b border-primary2/20 my-4"></div>
              <ul className="flex flex-col gap-4 p-4">
                {menuItems.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className={`py-2 px-4 rounded-lg inline-block w-full duration-300 transition-colors ${
                        pathName === href
                          ? "bg-primary2 text-white"
                          : "hover:bg-primary1/20 border-b border-primary1/10"
                      }`}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4 p-4 pb-6">
                <div className="relative">
                  <label htmlFor="mobile-email" className="sr-only">
                    Email Subscription Mobile
                  </label>
                  <AiFillMail
                    className="absolute top-1/2 -translate-y-1/2 left-3 text-primary1"
                    aria-hidden="true"
                  />
                  <input
                    id="mobile-email"
                    type="email"
                    placeholder={inputPlaceholder}
                    className="py-2 pl-8 pr-4 rounded-lg ring-primary1/50 text-sm focus:outline-none focus:ring-primary2 ring-1 w-full bg-white/5"
                  />
                </div>
                <button className="py-2 px-4 rounded-lg bg-linear-to-r from-primary1 to-primary2 text-white font-semibold text-sm flex items-center flex-row gap-2 w-full justify-center active:scale-95 transition-transform">
                  {buttonText}
                  <BsArrowUpRightSquareFill aria-hidden="true" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </nav>
  );
}

export default Navbar;
