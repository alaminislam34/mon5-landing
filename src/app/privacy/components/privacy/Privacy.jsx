"use client";

import React from "react";

// Reusable Heading Component for the "Title --- Content" layout
const PolicySection = ({ number, title, children }) => (
  <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] lg:grid-cols-[300px_1fr] py-12 border-b border-white/10 last:border-none">
    {/* LEFT SIDE: Title */}
    <div className="mb-4 md:mb-0">
      <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
        <span className="text-primary1 font-mono text-sm opacity-60">
          {number}.
        </span>
        {title}
      </h2>
    </div>

    {/* RIGHT SIDE: Content & Lists */}
    <div className="text-gray-400 leading-relaxed">{children}</div>
  </div>
);

function PrivacyPage() {
  return (
    <div className="bg-transparent min-h-screen text-gray-300 font-sans selection:bg-primary1 selection:text-black py-10">
      <div className="max-w-380 mx-auto w-11/12 px-6">
        {/* 01. Scope */}
        <PolicySection number="01" title="Scope">
          <p className="mb-6 text-lg">
            This Privacy Policy applies to all users interacting with the
            following digital properties managed by <span className="text-primary1">MON5MAJEUR</span>:
          </p>
          <ul className="space-y-4">
            <li className="flex items-center gap-4">
              <div className="w-1.5 h-1.5 bg-primary1 rounded-full" />
              <span>
                The <strong className="text-white"><span className="text-primary1">MON5MAJEUR</span></strong> mobile
                application.
              </span>
            </li>
            <li className="flex items-center gap-4">
              <div className="w-1.5 h-1.5 bg-primary1 rounded-full" />
              <span>
                Official website:{" "}
                <span className="text-primary1 underline underline-offset-4">
                  mon5majeur.com
                </span>
              </span>
            </li>
          </ul>
        </PolicySection>

        {/* 02. Data Controller */}
        <PolicySection number="02" title="Data Controller">
          <div className="space-y-4">
            <h3 className="text-white font-bold text-xl uppercase tracking-wider">
              <span className="text-primary1">MON5MAJEUR</span>, SASU
            </h3>
            <p>Capital: €1,000 | RCS Paris: 993 681 915</p>
            <p>229 rue Saint-Honoré, 75001 Paris, France</p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <span className="text-primary1">contact@mon5majeur.fr</span>
              <span className="hidden sm:inline text-gray-700">|</span>
              <span className="text-primary1">support@mon5majeur.com</span>
            </div>
          </div>
        </PolicySection>

        {/* 03. Data Collection */}
        <PolicySection number="03" title="Data We Collect">
          <p className="mb-8 italic">
            We process data to provide a seamless gaming experience and improve
            our services.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
            <div>
              <h4 className="text-white font-bold mb-2 uppercase text-xs tracking-widest">
                Identity Data
              </h4>
              <p className="text-sm">
                Email, User ID, Username, and authentication tokens from Google
                or Apple.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-2 uppercase text-xs tracking-widest">
                Gameplay Data
              </h4>
              <p className="text-sm">
                Lineups, scores, rankings, leagues, progression, and virtual
                Credits.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-2 uppercase text-xs tracking-widest">
                Technical Data
              </h4>
              <p className="text-sm">
                Device models, OS versions, crash logs, and IP addresses.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-2 uppercase text-xs tracking-widest">
                Advertising
              </h4>
              <p className="text-sm">
                Device identifiers (IDFA/GAID) used for personalized experiences
                subject to consent.
              </p>
            </div>
          </div>
        </PolicySection>

        {/* 04. Advertising */}
        <PolicySection number="04" title="Advertising & Mediation">
          <p className="mb-6">
            To support our free-to-play model, we integrate mediation partners
            to display advertisements.
          </p>
          <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-4">
              <span className="text-primary1 font-bold">01.</span>
              <span>
                <strong>Google AdMob:</strong> Serves contextual and
                personalized ads based on your region.
              </span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-primary1 font-bold">02.</span>
              <span>
                <strong>AppLovin MAX:</strong> Acts as our mediation layer to
                ensure ad quality and compliance.
              </span>
            </li>
          </ul>
          <div className="p-4 bg-white/5 border-l-4 border-primary1 text-sm font-mono text-white">
            Path: Settings &gt; Privacy Options inside the App.
          </div>
        </PolicySection>

        {/* 05. Your Rights */}
        <PolicySection number="05" title="Your Rights">
          <p className="mb-6">
            Under GDPR compliance, you are entitled to full control over your
            personal data:
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-4">
            {[
              "Access",
              "Rectification",
              "Erasure",
              "Objection",
              "Portability",
              "Withdrawal",
            ].map((right) => (
              <span
                key={right}
                className="text-white font-bold border-b border-primary1/30 hover:border-primary1 transition-all cursor-default"
              >
                {right}
              </span>
            ))}
          </div>
        </PolicySection>

        {/* FOOTER */}
        <footer className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs uppercase tracking-[0.4em] text-gray-600 font-bold">
            MON5MAJEUR SASU
          </p>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} — All Rights Reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default PrivacyPage;
