import React from "react";

function Privacy() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 space-y-12 text-white">
      {/* 1. Scope */}
      <div className="flex flex-col md:flex-row items-start gap-4 md:gap-10">
        <h1 className="w-full md:w-1/3 text-xl md:text-2xl lg:text-3xl font-bold uppercase tracking-tight text-primary1">
          Scope
        </h1>
        <p className="w-full md:w-2/3 text-base md:text-lg lg:text-xl font-galdeano leading-relaxed text-gray-300">
          This Privacy Policy applies to: the MON5MAJEUR application; and the
          website mon5majeur.com (and any associated site), including when a
          User subscribes to a launch alert / waitlist.
        </p>
      </div>

      {/* 2. Data Controller */}
      <div className="flex flex-col md:flex-row items-start gap-4 md:gap-10">
        <h1 className="w-full md:w-1/3 text-xl md:text-2xl lg:text-3xl font-bold uppercase tracking-tight text-primary1">
          Data Controller
        </h1>
        <div className="w-full md:w-2/3 text-base md:text-lg lg:text-xl font-galdeano space-y-4 text-gray-300">
          <p>
            MON5MAJEUR, SASU with a share capital of €1,000, registered with the
            Paris Trade and Companies Register (RCS) under number 993 681 915
            (SIRET: 99368191500019), with its registered office at 229 rue
            Saint-Honoré, 75001 Paris, France.
          </p>
          <div className="space-y-1 border-l border-primary1/30 pl-4">
            <p>
              Privacy contact:{" "}
              <span className="text-primary1 break-all">
                contact@mon5majeur.fr
              </span>
            </p>
            <p>
              Support:{" "}
              <span className="text-primary1 break-all">
                support@mon5majeur.com
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* 3. Data We Collect */}
      <div className="flex flex-col md:flex-row items-start gap-4 md:gap-10">
        <h1 className="w-full md:w-1/3 text-xl md:text-2xl lg:text-3xl font-bold uppercase tracking-tight text-primary1">
          Data We Collect
        </h1>
        <div className="w-full md:w-2/3 text-base md:text-lg lg:text-xl font-galdeano space-y-4 text-gray-300">
          <p className="text-primary1 font-bold italic">We may collect:</p>

          <div className="space-y-3">
            <p>
              <span className="text-white font-medium">
                Identity / account:
              </span>{" "}
              email, user ID, username, account-related information
              (Google/Apple if used).
            </p>
            <p>
              <span className="text-primary1 font-medium">Game data:</span>{" "}
              lineups, scores, rankings, leagues, progression, Credits,
              preferences.
            </p>
            <p>
              <span className="text-primary1 font-medium">Technical data:</span>{" "}
              device, OS, version, logs, crash reports, IP address / connection
              information.
            </p>
            <p>
              <span className="text-primary1 font-medium">
                In-app purchases:
              </span>
              identifiers/receipts required for verification/restoration (no
              banking data).
            </p>
            <p>
              <span className="text-primary1 font-medium">Advertising:</span>{" "}
              advertising identifiers (IDFA/GAID) and ad interactions, depending
              on your choices.
            </p>
            <p>
              <span className="text-primary1 font-medium">Support:</span>{" "}
              messages and information sent to customer support.
            </p>
            <p>
              <span className="text-primary1 font-medium">
                Website (launch alert):
              </span>{" "}
              email + technical metadata (e.g., IP/logs) required for security
              and proper operation.
            </p>
          </div>

          <p className="pt-4 text-sm italic text-gray-500 border-t border-white/10">
            We do not knowingly collect sensitive data.
          </p>

          <div className="pt-4 space-y-1 border-l border-primary1/30 pl-4">
            <p>
              Privacy contact:{" "}
              <span className="text-primary1 break-all">
                contact@mon5majeur.fr
              </span>
            </p>
            <p>
              Support:{" "}
              <span className="text-primary1 break-all">
                support@mon5majeur.com
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Privacy;
