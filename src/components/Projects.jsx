import { Code, Globe, Smartphone } from 'lucide-react';

const projects = [
  {
    title: 'SaaS Dashboard',
    description: 'Analytics platform with interactive charts and role-based access.',
    tags: ['React', 'Tailwind', 'FastAPI'],
    icon: Code,
    link: '#',
  },
  {
    title: '3D Landing Page',
    description: 'Immersive hero built with Spline and smooth page transitions.',
    tags: ['Spline', 'Framer Motion', 'Vite'],
    icon: Globe,
    link: '#',
  },
  {
    title: 'Mobile Companion',
    description: 'Cross-platform app with offline sync and push notifications.',
    tags: ['React Native', 'Expo'],
    icon: Smartphone,
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-sm font-medium text-blue-600">Selected Work</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">Projects</h2>
            <p className="mt-2 text-gray-600 max-w-prose">A snapshot of things I’ve built recently. I focus on clean UX, performance, and polish.</p>
          </div>
          <a href="#contact" className="hidden md:inline-flex items-center rounded-full bg-gray-900 text-white px-4 py-2 text-sm shadow-sm hover:shadow-md">Start a project</a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map(({ title, description, tags, icon: Icon, link }) => (
            <a key={title} href={link} className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition block">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-gray-900 text-white p-2">
                  <Icon size={20} />
                </div>
                <h3 className="font-semibold text-lg tracking-tight text-gray-900 group-hover:underline">{title}</h3>
              </div>
              <p className="mt-3 text-gray-600">{description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((t) => (
                  <span key={t} className="rounded-full bg-gray-100 text-gray-800 text-xs px-2.5 py-1">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
