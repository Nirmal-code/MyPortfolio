import McSCert from '../../images/McSCert.png';
import Vena from '../../images/vena.jpeg';
import EcoCAR from '../../images/ecocar.jpeg';

const experiences = [
  {
    date: 'Aug 2025 - Present',
    title: 'Software Research Assistant, Calliope',
    org: 'McSCert',
    location: 'Hamilton, ON',
    sortKey: 202508,
    highlights: [
      'Designed a cross-platform journaling app in Flutter with on-device sentiment analysis.',
      'Collaborated with psychologists from UQAM to refine and prioritize requirements.',
      "Converted Hugging Face's NLP model to TFLite with float16 quantization, reducing size by 65%.",
      'Built a feedback + resync loop to personalize outputs and refresh models when online.',
    ],
    tools: 'Flutter, Dart, TFLite, Hugging Face, NLP, Product Discovery',
    image: McSCert,
  },
  {
    date: 'May 2024 - Aug 2025',
    title: 'Software Engineer Co-op',
    org: 'Vena',
    location: 'Toronto, ON',
    sortKey: 202508,
    highlights: [
      'Built Microsoft add-ins with ReactJS and SSP servers using Spring Boot and Hibernate.',
      'Led monolith-to-microservices planning with weekly architecture reviews and cross-team coordination.',
      'Replaced polling with Server-Sent Events (SSE), reducing refresh time by 80%.',
      'Improved backend performance by ~150% via parallelization, Jaeger profiling, and multi-cloud CI/CD.',
    ],
    tools:
      'React, Spring Boot, Hibernate, SSE, Jaeger, Jenkins, AWS, Azure, MCP',
    image: Vena,
  },
  {
    date: 'Sep 2023 - May 2024',
    title: 'Software Research Assistant, jPipe Compiler',
    org: 'McSCert',
    location: 'Hamilton, ON',
    sortKey: 202405,
    highlights: [
      'Won 2nd place in the 2024 MODELS competition for contributions to the jPipe DSL compiler.',
      'Extended the Java compiler to support patterns and abstract composition for CI/CD pipeline justification.',
      'Built a VS Code extension with real-time visualization, syntax highlighting, and LSP diagnostics.',
      'Implemented visitor-based traversal logic to decouple data structures from operations.',
    ],
    tools: 'Java, TypeScript, VS Code API, LSP, DSL Tooling',
    image: McSCert,
  },
  {
    date: 'May 2023 - Aug 2023',
    title: 'Software Research Intern, Git Tool',
    org: 'McSCert',
    location: 'Hamilton, ON',
    sortKey: 202308,
    highlights: [
      'Developed merge tools in Python to improve source-code merging for Python and Java.',
      'Designed an abstract data structure to depict statically and dynamically typed code.',
      'Integrated the tool with Git and improved semantic accuracy over jDime and Spork by 19% and 90%.',
      'Ran validation tests using developer-selected versions as benchmarks.',
    ],
    tools:
      'Python, Git, AST/CST, Tree-Sitter, Gumtree, jDime, Spork',
    image: McSCert,
  },
  {
    date: 'Sep 2023 - May 2024',
    title: 'CAV Software Developer',
    org: 'McMaster EcoCAR',
    location: 'Hamilton, ON',
    sortKey: 202405,
    highlights: [
      'Collaborated with 40+ teammates to implement autonomous driving features for the EcoCAR EV Challenge.',
      'Estimated vehicle position in trajectories using dead reckoning from IMU data.',
      'Clustered sensor data using K-Means and DBSCAN algorithms in Python.',
      'Implemented PyUnit tests and simulated algorithms in the Carla SIL environment.',
    ],
    tools: 'Python, IMU, K-Means, DBSCAN, Carla, PyUnit',
    image: EcoCAR
  },
];

export default function Experience() {
  const sortedExperiences = [...experiences].sort(
    (a, b) => b.sortKey - a.sortKey
  );

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">
          <span>&lt;Experiences</span> /&gt;
        </h2>
        <div className="grid gap-6">
          {sortedExperiences.map((item) => (
            <article key={`${item.title}-${item.date}`} className="card">
              <div className="grid gap-6 md:grid-cols-[160px_minmax(0,1fr)]">
                {item.image ? (
                  <div className="flex items-center justify-center rounded-xl border border-white/10 bg-slate-900/60 p-4">
                    <img
                      className="max-h-24 object-contain"
                      src={item.image}
                      alt={item.org}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                ) : (
                  <div className="rounded-xl border border-white/10 bg-slate-900/60 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                      {item.org}
                    </p>
                    <p className="mt-3 text-3xl font-semibold text-white">
                      {item.location.split(',')[0]}
                    </p>
                  </div>
                )}
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="text-sm text-amber-200">{item.org}</p>
                      <p className="text-sm text-slate-300">{item.location}</p>
                    </div>
                    <span className="accent-pill text-xs text-slate-200">
                      {item.date}
                    </span>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-200/85 sm:text-base">
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-amber-300" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-slate-300 sm:text-sm">
                    <span className="font-semibold text-slate-100">Tools:</span>{' '}
                    {item.tools}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
