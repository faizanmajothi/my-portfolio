export default function Projects() {
  const projects = [
    {
      title: "Real Estate Landing Page",
      desc: "Lead-focused landing page with modern UI and fast load time.",
      tech: "React, Tailwind"
    },
    {
      title: "Clinic Website Redesign",
      desc: "Clean redesign improving mobile UX and appointment flow.",
      tech: "React, Headless CMS"
    },
    {
      title: "SaaS Dashboard UI",
      desc: "Responsive admin dashboard with reusable components.",
      tech: "React, Tailwind"
    }
  ];

  return (
    <section id="projects" className="px-6 md:px-20 py-24">
      <h2 className="text-3xl font-bold mb-12">
        Selected Work
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <div
            key={i}
            className="p-6 border border-slate-700 rounded-xl hover:border-primary transition"
          >
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p className="text-gray-400 mb-4">{p.desc}</p>
            <span className="text-sm text-primary">{p.tech}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
