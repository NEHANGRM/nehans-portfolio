import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkBase =
    "text-xs md:text-sm font-bold uppercase tracking-[0.22em] transition";

  const linkClass = ({ isActive }) =>
    `${linkBase} ${
      isActive ? "text-cyan-300" : "text-slate-300 hover:text-cyan-300"
    }`;

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <NavLink
          to="/"
          className="text-sm md:text-base font-extrabold text-slate-100"
        >
          <span className="text-green-400">nehan</span>
          <span className="text-slate-400">@portfolio</span>
          <span className="text-cyan-300">:~$</span>
        </NavLink>

        <nav className="flex items-center gap-6">
          <NavLink to="/about" className={linkClass}>
            ABOUT
          </NavLink>
          <NavLink to="/projects" className={linkClass}>
            PROJECTS
          </NavLink>
          <NavLink to="/certifications" className={linkClass}>
            CERTS
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            CONTACT
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
