import Spline from '@splinetool/react-spline';
import { BadgeCheck, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[70vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/2sQpIal5U1pU0o3J/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 grid md:grid-cols-2 gap-8">
        <div className="space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 backdrop-blur border border-white/60 shadow-sm">
            <BadgeCheck className="h-4 w-4 text-indigo-600" />
            <span className="text-sm text-slate-700">Professional CV Website</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
            Craft a standout CV and share it beautifully
          </h1>
          <p className="text-slate-600 text-lg">
            Showcase your experience, education, and skills with a polished, modern design. Export as PDF and share a live link.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#builder" className="inline-flex items-center justify-center px-5 py-2.5 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">
              Start Building
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-white/80 backdrop-blur border border-slate-200 text-slate-900 hover:bg-white">
              <Mail className="h-4 w-4" /> Contact
            </a>
          </div>
        </div>
        <div className="hidden md:block" />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/50 to-white" />
    </section>
  );
}
