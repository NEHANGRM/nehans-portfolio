import Reveal from "../components/Reveal";
import { portfolio } from "../data/portfolio";

export default function Projects() {
  return (
    <div className="space-y-8">
      <Reveal>
        <div className="term-panel overflow-hidden">
          <div className="term-header">
            <span className="term-dot dot-red" />
            <span className="term-dot dot-yellow" />
            <span className="term-dot dot-green" />
            <span className="ml-3 text-xs text-slate-400 font-bold tracking-widest">
              PROJECTS.TERM
            </span>
          </div>

          <div className="p-7 md:p-10 space-y-8">
            <div className="text-sm md:text-base">
              <span className="prompt">nehan@portfolio</span>
              <span className="text-slate-400">:</span>
              <span className="text-cyan-300">~$</span>{" "}
              <span className="cmd">ls projects/</span>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {portfolio.projects.map((p, idx) => (
                <Reveal key={idx}>
                  <div className="rounded-2xl border border-white/10 bg-black/20 hover:border-cyan-400/40 transition overflow-hidden">
                    <div className="h-44 overflow-hidden">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="w-full h-full object-cover opacity-90"
                      />
                    </div>

                    <div className="p-6 space-y-3">
                      <div className="text-lg font-extrabold text-slate-100">
                        {p.title}
                      </div>
                      <p className="text-sm text-slate-300 leading-relaxed">
                        {p.desc}
                      </p>

                      <div className="flex flex-wrap gap-2 pt-1">
                        {p.tech.map((t, i) => (
                          <span
                            key={i}
                            className="text-[11px] font-bold tracking-widest px-2.5 py-1 rounded-full border border-white/10 text-slate-200"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <a
                        href={p.github}
                        target="_blank"
                        className="inline-block text-sm font-bold text-cyan-300 hover:underline pt-2"
                      >
                        → View GitHub
                      </a>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
