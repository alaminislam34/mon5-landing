import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useAnimation } from "motion/react";
import { useLanguage } from "@/Providers/ContextProvider";
import { toast, Toaster } from "react-hot-toast";

function GetNotified() {
  const [mounted, setMounted] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  // New state to hold the actual subscriber count
  const [subscriberCount, setSubscriberCount] = useState("0");
  const controls = useAnimation();

  const { t } = useLanguage();
  const content = t.GetNotified;

  useEffect(() => {
    setMounted(true);

    // Fetch total subscribers on mount
    const fetchSubscribers = async () => {
      try {
        const response = await fetch("/api/subscribers");
        if (response.ok) {
          const data = await response.json();
          // Fallback to 5k+ if data is missing
          setSubscriberCount(data.totalSubscribers || "0");
        }
      } catch (error) {
        console.error("Error fetching subscribers:", error);
      }
    };

    fetchSubscribers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message || "Successfully subscribed!");
        setEmail("");
      } else {
        toast.error(data.error || "Something went wrong.");
      }
    } catch (error) {
      toast.error("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!mounted) {
    return (
      <section id="launch" aria-hidden="true">
        <div className="max-w-380 mx-auto w-11/12 py-12 md:py-16 invisible" />
      </section>
    );
  }

  return (
    <section id="launch">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="max-w-380 mx-auto w-11/12 py-12 md:py-16 mt-6">
        <div>
          <div className="flex items-center relative">
            <div className="md:max-w-3/5 w-full space-y-4 xl:space-y-6 relative z-10">
              <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white font-medium font-aldrich leading-normal pb-6">
                {content.sectionTitle}
                <span className="text-primary1">
                  {content.sectionTitleAccent}
                </span>
              </h1>
              <div>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary1 mt-4 font-galdeano">
                  {subscriberCount}
                </h1>
                <p className="md:text-lg lg:text-xl text-Base py-2">
                  {content.registeredTitle}
                </p>
              </div>

              <motion.form
                animate={controls}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="flex flex-row gap-2 md:gap-4 items-center justify-between md:text-lg xl:text-xl"
                onSubmit={handleSubmit}
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={content.inputPlaceholder}
                  aria-label={content.inputPlaceholder}
                  className="py-3 px-5 rounded-xl shadow bg-gray-800/20 border-base/5 ring-base/30 border focus:outline-none ring focus:ring-primary1 w-4/6"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="py-3 px-6 rounded-xl truncate bg-linear-to-r from-primary1 to-primary2 hover:bg-primary2 text-white w-2/6 transition-all duration-300 active:scale-95 disabled:opacity-70 flex items-center justify-center"
                >
                  {loading ? (
                    <div className="h-5 w-5 border-2 border-white/30 border-t-white animate-spin rounded-full" />
                  ) : (
                    content.buttonText
                  )}
                </button>
              </motion.form>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
                className="text-gray-400 text-sm pb-4"
              >
                {content.description}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="flex"
              >
                <p className="py-4 font-galdeano leading-normal tracking-wider px-12 text-primary1 border border-primary1/50 shadow-white/30 backdrop-blur-xl rounded-xl shadow text-lg md:text-xl lg:text-2xl">
                  {content.promoText}
                </p>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="md:max-w-2/5 md:relative absolute left-0"
            >
              <Image
                src="/images/throughBall.jpg"
                height={800}
                width={1200}
                alt="Athlete throwing a ball"
                priority={false}
                className="relative z-0 opacity-40 md:opacity-100 scale-125 left-24 md:left-10 md:scale-120 lg:bottom-10 object-contain pointer-events-none"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetNotified;
