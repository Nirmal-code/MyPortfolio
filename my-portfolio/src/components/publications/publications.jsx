const publications = [
  {
    title: 'Pipelines Have Feelings Too: A Structured Way To Design CI/CD Pipelines',
    venue: 'MODELS Conference 2024 (2nd Place in Undergraduate Research Competition)',
    sortKey: 2023,
    summary:
      'Competed in international research competition focused on model-driven engienering. Presented a novel approach in developing sustainable CI/CD pipelines using a new tool jPipe.',
    link: 'https://dl.acm.org/doi/10.1145/3652620.3676876',
  },
];

export default function Publications() {
  const sortedPublications = [...publications].sort(
    (a, b) => b.sortKey - a.sortKey
  );

  return (
    <section id="publications" className="section">
      <div className="container">
        <h2 className="section-title">
          <span>&lt;Publications</span> /&gt;
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {sortedPublications.map((item) => (
            <article key={item.title} className="card">
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  {item.venue}
                </p>
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-200/85 sm:text-base">
                  {item.summary}
                </p>
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/20"
                  >
                    Read publication
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
