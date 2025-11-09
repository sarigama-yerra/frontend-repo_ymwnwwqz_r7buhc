import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">Get in touch</h2>
            <p className="text-slate-600 mt-2">Open to opportunities and collaborations. Reach out via email or socials.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a href="mailto:you@example.com" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700">
              <Mail className="h-4 w-4" /> Email
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-slate-200 bg-white text-slate-900 hover:bg-slate-50">
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-slate-200 bg-white text-slate-900 hover:bg-slate-50">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
