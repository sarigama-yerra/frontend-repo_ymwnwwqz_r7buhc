export default function EducationSkills() {
  const education = [
    {
      school: 'State University',
      degree: 'B.S. in Computer Science',
      period: '2015 — 2019',
      detail: 'Graduated with honors; focus on HCI and distributed systems.'
    }
  ];

  const skills = [
    'React', 'TypeScript', 'Node.js', 'Python', 'Tailwind CSS', 'Accessibility', 'Testing', 'CI/CD'
  ];

  return (
    <section id="education" className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <div className="grid lg:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">Education</h2>
          <div className="mt-6 space-y-6">
            {education.map((ed, idx) => (
              <div key={idx} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">{ed.degree}</h3>
                <p className="text-slate-600">{ed.school}</p>
                <p className="text-sm text-slate-500 mt-1">{ed.period}</p>
                <p className="text-slate-700 mt-3">{ed.detail}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">Skills</h2>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {skills.map((s, idx) => (
              <span
                key={idx}
                className="inline-flex items-center justify-center rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 shadow-sm"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
