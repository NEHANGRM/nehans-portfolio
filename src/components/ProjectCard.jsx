import { FaGithub } from "react-icons/fa";

export default function ProjectCard({ project }) {
  return (
    <div className="group rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 overflow-hidden hover:shadow-xl transition">
      <div className="h-44 w-full overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover group-hover:scale-[1.03] transition duration-300"
        />
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start gap-4">
          <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">
            {project.title}
          </h3>

          <a
            href={project.github}
            target="_blank"
            className="text-slate-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition"
            title="View GitHub"
          >
            <FaGithub className="text-xl" />
          </a>
        </div>

        <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          {project.desc}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t, idx) => (
            <span
              key={idx}
              className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-200"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
