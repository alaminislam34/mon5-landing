import React, { useState } from "react";
import { Send, User, Mail, MessageSquare } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form Submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="bg-transparent py-12 px-4">
      <div className="max-w-380 w-11/12 mx-auto">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Top Row: Name and Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name Input */}
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="font-aldrich text-lg md:text-xl font-bold text-white flex items-center gap-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-primary1/50 focus:ring-1 focus:ring-primary1/50 transition-all font-galdeano"
                required
              />
            </div>

            {/* Email Input */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="font-aldrich text-lg md:text-xl font-bold text-white flex items-center gap-2"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your mail"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-primary1/50 focus:ring-1 focus:ring-primary1/50 transition-all font-galdeano"
                required
              />
            </div>
          </div>

          {/* Message Input */}
          <div className="space-y-2">
            <label
              htmlFor="message"
              className="text-lg md:text-xl font-bold text-white flex items-center gap-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-primary1/50 focus:ring-1 focus:ring-primary1/50 transition-all font-galdeano resize-none"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="group bg-[#ea7032] hover:bg-[#d65f22] text-white font-bold py-4 px-8 rounded-xl flex items-center gap-3 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-orange-950/20"
            >
              Leave us a Message
              <Send
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
