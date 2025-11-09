import { FileDown } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="font-semibold text-slate-900 text-lg tracking-tight">
            <span className="text-indigo-600">CV</span> Builder
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
            <a href="#about" className="hover:text-indigo-600">About</a>
            <a href="#experience" className="hover:text-indigo-600">Experience</a>
            <a href="#education" className="hover:text-indigo-600">Education</a>
            <a href="#download" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">
              <FileDown className="h-4 w-4" /> Download CV
            </a>
          </nav>
          <a href="#download" className="md:hidden inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">
            <FileDown className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  );
}
