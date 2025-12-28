import React from "react";

function Terms() {
  return (
    <div className="max-w-380 mx-auto w-11/12 py-16 space-y-20 text-white bg-transparent">
      {/* Header Info */}
      <div className="border-b border-white/10 pb-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tighter text-primary1">
          General Terms of Use (CGU)
        </h1>
        <p className="mt-4 text-gray-400 font-galdeano tracking-wider">
          Last updated: 26/12/2025 [cite: 5]
        </p>
      </div>

      {/* 1) Publisher */}
      <div className="flex flex-col md:flex-row items-start gap-6 md:gap-12 border-b border-white/10 pb-12">
        <h2 className="w-full md:w-1/3 text-xl md:text-2xl font-semibold tracking-wider text-primary1">
          1) Application Publisher [cite: 6]
        </h2>
        <div className="w-full md:w-2/3 text-[16px] md:text-lg lg:text-xl font-galdeano space-y-4 text-gray-300">
          <p>
            The MON5MAJEUR application is edited by MON5MAJEUR, a SASU with a
            capital of €1,000, registered at the RCS of Paris (993 681
            915)[cite: 7, 8].
          </p>
          <div className="space-y-1">
            <p>
              📍 Office: 229 rue Saint-Honoré, 75001 Paris, France[cite: 8].
            </p>
            <p>
              👤 President & Publication Director: Robin Martinella[cite: 9,
              10].
            </p>
            <p>
              📧 Contact:{" "}
              <span className="text-primary1">support@mon5majeur.com</span>
              [cite: 12].
            </p>
            <p>
              🌐 Hosting (Site): OVH SAS, 2 rue Kellermann, 59100 Roubaix,
              France[cite: 13, 14].
            </p>
          </div>
        </div>
      </div>

      {/* 2 & 3) Purpose & Description */}
      <div className="flex flex-col md:flex-row items-start gap-6 md:gap-12 border-b border-white/10 pb-12">
        <h2 className="w-full md:w-1/3 text-xl md:text-2xl font-semibold tracking-wider text-primary1">
          2 & 3) Purpose & Description [cite: 15, 18]
        </h2>
        <div className="w-full md:w-2/3 text-[16px] md:text-lg lg:text-xl font-galdeano space-y-4 text-gray-300">
          <p>
            By accessing the Application, the User accepts these terms without
            reserve[cite: 17]. MON5MAJEUR is a Fantasy Basketball application
            allowing users to create virtual teams, join leagues, and view
            statistics[cite: 19, 20, 23].
          </p>
          <p className="border-l-4 border-primary1 pl-4 italic">
            MON5MAJEUR is not affiliated with the NBA. No protected NBA logos or
            visuals are used[cite: 26].
          </p>
        </div>
      </div>

      {/* 4) Access Conditions */}
      <div className="flex flex-col md:flex-row items-start gap-6 md:gap-12 border-b border-white/10 pb-12">
        <h2 className="w-full md:w-1/3 text-xl md:text-2xl font-semibold tracking-wider text-primary1">
          4) Access Conditions [cite: 27]
        </h2>
        <div className="w-full md:w-2/3 text-[16px] md:text-lg lg:text-xl font-galdeano space-y-4 text-gray-300">
          <p>
            Accessible from age 13[cite: 31, 32]. Minors require parental
            authorization[cite: 33]. For those under 15, parental consent is
            required for data treatments like personalized ads[cite: 34].
          </p>
          <p>
            The app is available on App Store and Google Play; users are
            responsible for their own internet connection costs[cite: 29, 30].
          </p>
        </div>
      </div>

      {/* 5) Account Management */}
      <div className="flex flex-col md:flex-row items-start gap-6 md:gap-12 border-b border-white/10 pb-12">
        <h2 className="w-full md:w-1/3 text-xl md:text-2xl font-semibold tracking-wider text-primary1 text-wrap">
          5) Accounts & Security [cite: 40]
        </h2>
        <div className="w-full md:w-2/3 text-[16px] md:text-lg lg:text-xl font-galdeano space-y-4 text-gray-300">
          <p>
            Users must provide accurate information and protect their
            credentials[cite: 42, 43]. Accounts inactive for 24 months may be
            deleted after notification[cite: 44].
          </p>
          <p>
            Account deletion can be requested via the app or at{" "}
            <span className="text-primary1">support@mon5majeur.com</span>[cite:
            45].
          </p>
        </div>
      </div>

      {/* 6 & 7) Credits & Ads */}
      <div className="flex flex-col md:flex-row items-start gap-6 md:gap-12 border-b border-white/10 pb-12">
        <h2 className="w-full md:w-1/3 text-xl md:text-2xl font-semibold tracking-wider text-primary1">
          6 & 7) Credits & Ads [cite: 46, 52]
        </h2>
        <div className="w-full md:w-2/3 text-[16px] md:text-lg lg:text-xl font-galdeano space-y-4 text-gray-300">
          <p>
            Credits are virtual currency only, non-transferable and
            non-convertible to cash[cite: 47]. Remaining credits are lost if the
            account is deleted[cite: 50].
          </p>
          <p>
            The app may contain ads or rewarded videos. Ads may be personalized
            based on user settings[cite: 53, 54].
          </p>
        </div>
      </div>

      {/* 8) Usage Rules */}
      <div className="flex flex-col md:flex-row items-start gap-6 md:gap-12 border-b border-white/10 pb-12">
        <h2 className="w-full md:w-1/3 text-xl md:text-2xl font-semibold tracking-wider text-primary1">
          8) Prohibited Conduct [cite: 55]
        </h2>
        <div className="w-full md:w-2/3 text-[16px] md:text-lg lg:text-xl font-galdeano space-y-4 text-gray-300">
          <p className="text-primary1 font-bold italic">Strictly forbidden:</p>
          <p>
            Bots, hacks, scripts, bug exploitation, or any action aimed at
            distorting the game[cite: 56]. Usernames and league names must
            remain respectful[cite: 57]. Sanctions include warnings, suspension,
            or account deletion[cite: 59].
          </p>
        </div>
      </div>

      {/* 9) Contests */}
      <div className="flex flex-col md:flex-row items-start gap-6 md:gap-12 border-b border-white/10 pb-12">
        <h2 className="w-full md:w-1/3 text-xl md:text-2xl font-semibold tracking-wider text-primary1">
          9) Contests & Prizes [cite: 60]
        </h2>
        <div className="w-full md:w-2/3 text-[16px] md:text-lg lg:text-xl font-galdeano space-y-4 text-gray-300">
          <p>
            Prizes are non-exchangeable and non-convertible[cite: 67]. Physical
            prizes (jerseys) are limited to residents of Metropolitan France,
            Belgium, Luxembourg, and Monaco[cite: 69].
          </p>
          <p>
            Jersey selection (model, team, season) is at the Publisher's
            discretion[cite: 73, 74]. Apple and Google are not sponsors or
            organizers of these contests[cite: 62, 63].
          </p>
        </div>
      </div>

      {/* 11, 12 & 13) Legal Limits */}
      <div className="flex flex-col md:flex-row items-start gap-6 md:gap-12 border-b border-white/10 pb-12">
        <h2 className="w-full md:w-1/3 text-xl md:text-2xl font-semibold tracking-wider text-primary1 text-wrap">
          11-14) Legal & Liability [cite: 82, 85, 89, 92]
        </h2>
        <div className="w-full md:w-2/3 text-[16px] md:text-lg lg:text-xl font-galdeano space-y-4 text-gray-300">
          <p>
            All app elements (code, design, text) belong to the Publisher[cite:
            86]. Reproduction is prohibited[cite: 87].
          </p>
          <p>
            The Application is provided "as is"[cite: 90]. The Publisher is not
            liable for network outages, indirect losses, or Force Majeure[cite:
            91, 93].
          </p>
        </div>
      </div>

      {/* 17) Disputes */}
      <div className="flex flex-col md:flex-row items-start gap-6 md:gap-12 pt-8">
        <h2 className="w-full md:w-1/3 text-xl md:text-2xl font-semibold tracking-wider text-primary1">
          17) Governing Law [cite: 98]
        </h2>
        <div className="w-full md:w-2/3 text-[16px] md:text-lg lg:text-xl font-galdeano space-y-4 text-gray-300">
          <p>
            These terms are governed by French law. Any disputes will be handled
            by the courts within the jurisdiction of the headquarters.
          </p>
          <p className="text-primary1 font-bold pt-4">
            📧 support@mon5majeur.com{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Terms;
