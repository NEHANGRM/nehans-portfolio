import { useState } from "react";
import emailjs from "@emailjs/browser";

import Reveal from "../components/Reveal";
import SocialLinks from "../components/SocialLinks";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("ERROR: Fill Name, Email and Message.");
      return;
    }

    try {
      setLoading(true);

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus("SUCCESS: Message sent to Nehan.");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("ERROR: Sending failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Reveal>
      <div className="term-panel overflow-hidden min-h-[70vh] md:min-h-[78vh] flex flex-col">
        {/* HEADER */}
        <div className="term-header">
          <span className="term-dot dot-red" />
          <span className="term-dot dot-yellow" />
          <span className="term-dot dot-green" />
          <span className="ml-3 text-[11px] font-bold tracking-widest text-green-300/80">
            CONTACT.TERM
          </span>
        </div>

        {/* BODY */}
        <div className="p-6 md:p-10 flex-1 flex flex-col justify-center space-y-8">
          {/* Prompt */}
          <div className="text-[12px] md:text-[13px] leading-relaxed">
            <span className="prompt">nehan@portfolio</span>
            <span className="muted">:</span>
            <span className="prompt">~$</span>{" "}
            <span className="cmd">connect --message</span>
            <span className="cursor">▌</span>
          </div>

          <SocialLinks />

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-4 max-w-3xl">
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="name"
              className="w-full p-3 rounded-xl border border-green-500/25 bg-black/40 text-green-200 outline-none focus:border-green-400"
            />
            <input
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="email"
              className="w-full p-3 rounded-xl border border-green-500/25 bg-black/40 text-green-200 outline-none focus:border-green-400"
            />
            <textarea
              rows="6"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="message"
              className="w-full p-3 rounded-xl border border-green-500/25 bg-black/40 text-green-200 outline-none focus:border-green-400"
            />

            <button
              disabled={loading}
              className={`w-full py-3 rounded-xl font-extrabold tracking-widest uppercase transition ${
                loading
                  ? "bg-green-900/40 cursor-not-allowed"
                  : "bg-green-500/90 hover:bg-green-400 text-black"
              }`}
            >
              {loading ? "SENDING..." : "SEND MESSAGE"}
            </button>
          </form>

          {/* STATUS */}
          {status ? (
            <div
              className={`text-[11px] md:text-xs font-bold tracking-widest uppercase ${
                status.startsWith("SUCCESS")
                  ? "text-green-400"
                  : "text-red-400"
              }`}
            >
              {status}
            </div>
          ) : null}
        </div>
      </div>
    </Reveal>
  );
}
