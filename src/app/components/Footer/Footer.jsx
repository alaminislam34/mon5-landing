"use client";

import { Instagram, Twitter, Music2 } from "lucide-react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="text-white md:pt-20 pb-10 px-6 md:px-12 max-w-380 mx-auto w-11/12 overflow-hidden">
      {/* Newsletter / Notification Section */}
      <div
        className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16"
        data-aos="fade-up"
      >
        <div className="max-w-4xl w-full">
          <h2 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
            Be notified when it
            <span className="text-primary1 uppercase tracking-wider">
              launches
            </span>
          </h2>
          <p className="text-gray-400 text-lg font-galdeano">
            We'll send you the link as soon as the app is available.
          </p>
        </div>

        <div className="w-full md:w-auto flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter your mail..."
            className="bg-[#0f0f0f] border border-white/10 rounded-xl px-6 py-4 w-full md:w-88 focus:outline-none focus:border-primary1 transition-colors font-galdeano"
          />
          <button className="bg-primary1 hover:bg-orange-600 transition-all text-white font-bold px-8 py-4 rounded-xl whitespace-nowrap active:scale-95">
            Get Notified
          </button>
        </div>
      </div>

      {/* Horizontal Divider */}
      <hr className="border-white/10 mb-16" />

      {/* Main Footer Content */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        {/* Brand Column */}
        <div
          className="col-span-1 md:col-span-1 space-y-6"
          data-aos="fade-right"
        >
          <div className="flex items-center gap-2">
            {/* Replace with your actual SVG Logo */}
            <div className="w-10 h-10 bg-primary1 rounded-full flex items-center justify-center">
              <span className="font-bold text-black text-xs">M5M</span>
            </div>
            <h3 className="text-2xl font-black italic tracking-tighter uppercase">
              Mon<span className="text-primary1">5</span>Majeur
            </h3>
          </div>
          <p className="text-gray-400 font-galdeano leading-relaxed">
            Create your dream team, compete with friends, and track real-time
            NBA stats. Ready to play?
          </p>
        </div>

        {/* Links Column 1 */}
        <div className="space-y-6" data-aos="fade-up" data-aos-delay="100">
          <h4 className="text-primary1 font-bold text-xl">Home</h4>
          <ul className="space-y-4 text-gray-400 font-medium">
            <li>
              <a
                href="/#features"
                className="hover:text-white transition-colors"
              >
                Features
              </a>
            </li>
            <li>
              <a href="/#faq" className="hover:text-white transition-colors">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Links Column 2 */}
        <div className="space-y-6" data-aos="fade-up" data-aos-delay="200">
          <h4 className="text-primary1 font-bold text-xl">Services</h4>
          <ul className="space-y-4 text-gray-400 font-medium">
            <li>
              <Link
                href="/contact"
                className="hover:text-white transition-colors"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                className="hover:text-white transition-colors"
              >
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link
                href="/privacy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Column */}
        <div className="space-y-6" data-aos="fade-up" data-aos-delay="300">
          <h4 className="text-primary1 font-bold text-xl uppercase tracking-widest">
            Follow Us
          </h4>
          <div className="flex gap-4">
            <a
              href="#"
              className="p-3 bg-white/5 rounded-xl hover:bg-primary1 transition-all group"
            >
              <Instagram className="w-6 h-6 group-hover:text-white" />
            </a>
            <a
              href="#"
              className="p-3 bg-white/5 rounded-xl hover:bg-primary1 transition-all group"
            >
              <Twitter className="w-6 h-6 group-hover:text-white" />
            </a>
            <a
              href="#"
              className="p-3 bg-white/5 rounded-xl hover:bg-primary1 transition-all group"
            >
              <Music2 className="w-6 h-6 group-hover:text-white" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div
        className="pt-8 border-t border-white/5 text-center text-gray-500 text-sm font-galdeano"
        data-aos="fade-in"
      >
        © 2025 MON5MAJEUR — Made in Paris.
      </div>
    </footer>
  );
}

export default Footer;
