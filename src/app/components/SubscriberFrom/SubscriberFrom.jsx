"use client";
import { useState } from "react";

export default function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMsg("");

    const res = await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();
    setLoading(false);
    setMsg(data.message);
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        type="email"
        placeholder="Enter your email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border px-4 py-2 w-full"
      />
      <button
        disabled={loading}
        className="bg-black text-white px-4 py-2 w-full"
      >
        {loading ? "Submitting..." : "Notify Me"}
      </button>

      {msg && <p className="text-sm">{msg}</p>}
    </form>
  );
}
