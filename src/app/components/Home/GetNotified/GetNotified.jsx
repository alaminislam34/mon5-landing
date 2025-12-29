"use client";
import { useState } from "react";

export default function GetNotified() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); 
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage("Thank you! You've been added to the list.");
        setEmail(""); // Reset input
      } else {
        setStatus("error");
        setMessage(data.message || "Something went wrong. Try again?");
      }
    } catch (err) {
      setStatus("error");
      setMessage("Failed to connect to the server.");
    }
  };

  return (
    <section className="py-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Get Notified</h2>
        <p className="text-gray-600 mb-8">
          Stay in the loop. Receive updates straight to your inbox.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <input
            type="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none w-full sm:max-w-sm text-black"
            disabled={status === "loading"}
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-all disabled:opacity-50"
          >
            {status === "loading" ? "Processing..." : "Notify Me"}
          </button>
        </form>

        {/* Feedback Messages */}
        <div className="mt-4 h-6">
          {status === "success" && (
            <p className="text-green-600 font-medium animate-fade-in">
              {message}
            </p>
          )}
          {status === "error" && (
            <p className="text-red-500 font-medium">{message}</p>
          )}
        </div>
      </div>
    </section>
  );
}
