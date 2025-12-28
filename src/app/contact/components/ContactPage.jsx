import React from "react";
import { Mail, Phone, ArrowRight } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="bg-transparent text-white px-4 py-16 font-sans">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* SECTION 2: OTHER WAYS TO REACH OUT */}
        <section className="text-center space-y-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-wider uppercase">
            Other ways to <span className="text-[#ea7032]">reach out</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Email Card */}
            <div className="flex items-center gap-5 bg-[#0a0a0a]/40 border border-white/10 rounded-2xl p-8 hover:border-[#ea7032]/30 transition-colors group">
              <div className="p-3 border border-[#ea7032] rounded-lg text-[#ea7032] group-hover:bg-[#ea7032] group-hover:text-white transition-all">
                <Mail size={28} />
              </div>
              <div className="text-left">
                <p className="text-sm font-black tracking-[0.2em] text-gray-400 uppercase">
                  Email
                </p>
                <p className="text-lg md:text-xl font-medium text-gray-200">
                  robmarti@gmail.com
                </p>
              </div>
            </div>

            {/* Phone Card */}
            <div className="flex items-center gap-5 bg-[#0a0a0a]/40 border border-white/10 rounded-2xl p-8 hover:border-[#ea7032]/30 transition-colors group">
              <div className="p-3 border border-[#ea7032] rounded-lg text-[#ea7032] group-hover:bg-[#ea7032] group-hover:text-white transition-all">
                <Phone size={28} />
              </div>
              <div className="text-left">
                <p className="text-sm font-black tracking-[0.2em] text-gray-400 uppercase">
                  Phone No
                </p>
                <p className="text-lg md:text-xl font-medium text-gray-200">
                  +33 1 23 45 67 89
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;
