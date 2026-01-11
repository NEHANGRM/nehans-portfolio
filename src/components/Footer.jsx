export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-10 text-center text-sm text-slate-500 dark:text-slate-400">
        © {new Date().getFullYear()} Nehan — Built with React + Tailwind
      </div>
    </footer>
  );
}
