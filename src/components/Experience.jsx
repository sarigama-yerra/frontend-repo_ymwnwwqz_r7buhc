export default function Experience() {
  const items = [
    {
      role: 'Senior Frontend Engineer',
      company: 'Acme Corp',
      period: '2021 — Present',
      bullets: [
        'Led the rebuild of the design system increasing delivery speed by 30%.',
        'Optimized React performance, cutting TTI by 40% across key pages.',
        'Mentored 5 engineers and drove accessibility initiatives (WCAG 2.1 AA).',
      ],
    },
    {
      role: 'Frontend Engineer',
      company: 'Pixel Labs',
      period: '2019 — 2021',
      bullets: [
        'Built data-heavy dashboards with charts and real-time updates.',
        'Collaborated with product and design to ship features on a 2-week cadence.',
      ],
    },
  ];

  return (
    <section id="experience" className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">Experience</h2>
      <div className="mt-8 grid gap-6">
        {items.map((item, idx) => (
          <div key={idx} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">{item.role}</h3>
                <p className="text-slate-600">{item.company}</p>
              </div>
              <span className="text-sm text-slate-500">{item.period}</span>
            </div>
            <ul className="mt-4 list-disc pl-5 space-y-2 text-slate-700">
              {item.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
