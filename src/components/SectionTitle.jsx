export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-8">
      <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
        {title}
      </h1>

      {subtitle ? (
        <p className="mt-2 text-slate-600 dark:text-slate-300 leading-relaxed">
          {subtitle}
        </p>
      ) : null}

      <div className="mt-4 h-1 w-20 rounded-full bg-cyan-500/90" />
    </div>
  );
}
