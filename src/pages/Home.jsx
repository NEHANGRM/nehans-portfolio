import Reveal from "../components/Reveal";
import SocialLinks from "../components/SocialLinks";
import { portfolio } from "../data/portfolio";

export default function Home() {
  return (
    <Reveal>
      <div className="term-panel overflow-hidden min-h-[70vh] md:min-h-[78vh] flex flex-col">
        {/* HEADER */}
        <div className="term-header">
          <span className="term-dot dot-red" />
          <span className="term-dot dot-yellow" />
          <span className="term-dot dot-green" />
          <span className="ml-3 text-[11px] font-bold tracking-widest text-green-300/80">
            C:\USERS\NEHAN\PORTFOLIO
          </span>
        </div>

        {/* BODY */}
        <div className="p-6 md:p-10 space-y-8 flex-1 flex flex-col justify-center">
          {/* Prompt line */}
          <div className="text-[12px] md:text-[13px] leading-relaxed">
            <span className="prompt">nehan@portfolio</span>
            <span className="muted">:</span>
            <span className="prompt">~$</span>{" "}
            <span className="cmd">whoami</span>
            <span className="cursor">▌</span>
          </div>

          {/* Content layout */}
          <div className="grid md:grid-cols-[160px_1fr] gap-8 items-start">
            {/* image */}
            <div className="flex justify-center md:justify-start">
              <div className="w-[140px] h-[140px] md:w-[155px] md:h-[155px] rounded-md overflow-hidden border border-green-500/30 shadow-[0_0_25px_rgba(34,197,94,0.15)]">
                <img
                  src="/profile.jpeg"
                  alt="Nehan"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            {/* info */}
            <div className="space-y-4">
              <div className="text-xl md:text-2xl font-extrabold tracking-tight text-green-300">
                {portfolio.name}
              </div>

              <div className="text-[12px] md:text-[13px] leading-relaxed">
                <span className="muted">role</span>
                <span className="muted">:</span>{" "}
                <span className="cmd">{portfolio.role}</span>
                <br />
                <span className="muted">college</span>
                <span className="muted">:</span>{" "}
                <span className="cmd">{portfolio.college}</span>
              </div>
            </div>
          </div>

          {/* links command */}
          <div className="text-[12px] md:text-[13px] leading-relaxed pt-2">
            <span className="prompt">nehan@portfolio</span>
            <span className="muted">:</span>
            <span className="prompt">~$</span>{" "}
            <span className="cmd">links</span>
            <span className="cursor">▌</span>
          </div>

          <SocialLinks />

          {/* bottom note */}
          <div className="text-[11px] text-green-300/70 pt-2">
            Use navbar commands to navigate: <span className="cmd">ABOUT</span>,{" "}
            <span className="cmd">PROJECTS</span>, <span className="cmd">CERTS</span>,{" "}
            <span className="cmd">CONTACT</span>.
          </div>
        </div>
      </div>
    </Reveal>
  );
}
