export default function Toast({ show, message }) {
  return (
    <div
      className={`fixed top-24 right-6 z-[9999] transition-all duration-300 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
      }`}
    >
      <div className="rounded-2xl border border-white/10 bg-black/70 backdrop-blur-xl px-5 py-4 shadow-2xl">
        <p className="text-white font-bold text-sm">{message}</p>
      </div>
    </div>
  );
}
