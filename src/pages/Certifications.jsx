import Reveal from "../components/Reveal";
import { portfolio } from "../data/portfolio";

export default function Certifications() {
  return (
    <div className="space-y-8">
      <Reveal>
        <div className="term-panel overflow-hidden">
          <div className="term-header">
            <span className="term-dot dot-red" />
            <span className="term-dot dot-yellow" />
            <span className="term-dot dot-green" />
            <span className="ml-3 text-xs text-slate-400 font-bold tracking-widest">
              CERTIFICATIONS.TERM
            </span>
          </div>

          <div className="p-7 md:p-10 space-y-7">
            <div className="text-sm md:text-base">
              <span className="prompt">nehan@portfolio</span>
              <span className="text-slate-400">:</span>
              <span className="text-cyan-300">~$</span>{" "}
              <span className="cmd">cat certs.log</span>
            </div>

            <div className="space-y-3 text-slate-200 text-sm md:text-base">
              {portfolio.certifications.map((c, idx) => (
                <div
                  key={idx}
                  className="border border-white/10 bg-black/20 rounded-xl px-4 py-3"
                >
                  <span className="text-green-400 font-bold">✔</span>{" "}
                  <span className="ml-2">{c}</span>
                </div>
              ))}
            </div>

            <div className="pt-3">
              <div className="text-sm md:text-base">
                <span className="prompt">nehan@portfolio</span>
                <span className="text-slate-400">:</span>
                <span className="text-cyan-300">~$</span>{" "}
                <span className="cmd">cat activities.log</span>
              </div>

              <div className="mt-4 grid md:grid-cols-2 gap-3 text-slate-200 text-sm md:text-base">
                {portfolio.activities.map((a, idx) => (
                  <div
                    key={idx}
                    className="border border-white/10 bg-black/20 rounded-xl px-4 py-3"
                  >
                    <span className="text-cyan-300 font-bold">→</span>{" "}
                    <span className="ml-2">{a}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
