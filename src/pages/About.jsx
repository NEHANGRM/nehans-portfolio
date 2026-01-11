import Reveal from "../components/Reveal";
import { portfolio } from "../data/portfolio";

export default function About() {
  return (
    <div className="space-y-8">
      <Reveal>
        <div className="term-panel overflow-hidden">
          <div className="term-header">
            <span className="term-dot dot-red" />
            <span className="term-dot dot-yellow" />
            <span className="term-dot dot-green" />
            <span className="ml-3 text-xs text-slate-400 font-bold tracking-widest">
              ABOUT.TERM
            </span>
          </div>

          <div className="p-7 md:p-10 space-y-6">
            <div className="text-sm md:text-base">
              <span className="prompt">nehan@portfolio</span>
              <span className="text-slate-400">:</span>
              <span className="text-cyan-300">~$</span>{" "}
              <span className="cmd">cat about.txt</span>
            </div>

            <p className="text-slate-200 leading-relaxed text-sm md:text-base">
              {portfolio.about}
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="term-panel overflow-hidden">
          <div className="term-header">
            <span className="term-dot dot-red" />
            <span className="term-dot dot-yellow" />
            <span className="term-dot dot-green" />
            <span className="ml-3 text-xs text-slate-400 font-bold tracking-widest">
              EDUCATION.LOG
            </span>
          </div>

          <div className="p-7 md:p-10 space-y-6">
            <div className="text-sm md:text-base">
              <span className="prompt">nehan@portfolio</span>
              <span className="text-slate-400">:</span>
              <span className="text-cyan-300">~$</span>{" "}
              <span className="cmd">timeline --education</span>
            </div>

            <div className="space-y-5">
              {portfolio.education.map((e, idx) => (
                <div key={idx} className="border-l-4 border-cyan-400/70 pl-4">
                  <div className="font-bold text-slate-100">{e.title}</div>
                  <div className="text-slate-300 text-sm">{e.subtitle}</div>
                  {e.extra ? (
                    <div className="text-green-400 font-bold mt-1 text-sm">
                      {e.extra}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
