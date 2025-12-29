import React, { Component, createRef } from 'react';
const PROMPT = 'C:\\NirmalC> ';
const WELCOME_MESSAGE = "Welcome to my terminal. Enter 'help' to get started";
const quickFacts = [
  '4th-year Software Engineering student at McMaster University (GPA 3.9)',
  'Software Engineer with experience across full-stack, backend systems, and applied ML',
  'Interested in building scalable, high-impact tools at the intersection of systems and user experience',
];

const highlights = [
  '2+ years of industry and research experience across internships, co-ops, and academic labs',
  'Led architecture-level work including monolith-to-microservice migration and multi-cloud deployment',
  'Experience spanning React, Spring Boot, Flutter, cloud infrastructure, and applied machine learning',
];


export default class About extends Component {

    constructor() {
        super();
        this.state = {
            input: PROMPT,
            output: WELCOME_MESSAGE,
            view: 'bio',
        };
        this.outputRef = createRef();
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    scrollToBottom = () => {
        if (this.outputRef.current) {
            this.outputRef.current.scrollTop = this.outputRef.current.scrollHeight;
        }
    };

    handleChange = (event) => {
        const nextValue = event.target.value;
        if (!nextValue.startsWith(PROMPT)) {
            this.setState({ input: PROMPT });
            return;
        }
        this.setState({ input: nextValue });
    };

    handleKeyDown = (event) => {
        if (event.key !== 'Enter') {
            return;
        }

        const rawInput = this.state.input;
        if (!rawInput || rawInput === PROMPT) {
            return;
        }

        const command = rawInput.replace(PROMPT, '').trim();
        let newOutput = `${this.state.output}<br>${rawInput}`;

        switch (command) {
            case 'help':
                newOutput +=
                    "<p style='margin-left:5%;'>'des': My Description <br> 'gpa': Current GPA <br> 'projects': Relevant Projects <br> 'experience': Relevant Work Experience <br> 'clear': Clear Terminal</p>";
                break;
            case 'des':
                newOutput +=
                    "<p style='margin-left:5%;'>Hello! I am a final-year Software Engineering student at McMaster University. I enjoy taking part in collaborative projects, especially those that I believe will help me make a positive impact on our society. I seek out opportunities that will allow me to develop these skills so that I may more effectively do this.</p>";
                break;
            case 'gpa':
                newOutput +=
                    "<p style='margin-left:5%;'>My current GPA is 3.9.</p>";
                break;
            case 'projects':
                newOutput +=
                    "<p style='margin-left:5%;'>I have completed 9+ projects. Checkout the Projects section of the website for more information.</p>";
                break;
            case 'experience':
                newOutput +=
                    "<p style='margin-left:5%;'>I have over 4 years of relevant work experience. Checkout the Experiences section of the website for more information.</p>";
                break;
            case 'clear':
                newOutput = WELCOME_MESSAGE;
                break;
            default:
                newOutput +=
                    "<p style='margin-left:5%;'>Invalid command; see 'help' for available commands.</p>";
                break;
        }

        this.setState({ input: PROMPT, output: newOutput });
    };

    render() {
        return (
            <section id="about" className="section">
                <div className="container">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                        <h2 className="section-title">
                            <span>&lt;About</span> Me /&gt;
                        </h2>
                        <div className="flex items-center gap-2">
                            <button
                                type="button"
                                onClick={() => this.setState({ view: 'bio' })}
                                className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide transition ${
                                    this.state.view === 'bio'
                                        ? 'bg-amber-300 text-slate-900'
                                        : 'bg-white/10 text-white hover:bg-white/20'
                                }`}
                                aria-pressed={this.state.view === 'bio'}
                            >
                                Bio
                            </button>
                            <button
                                type="button"
                                onClick={() => this.setState({ view: 'terminal' })}
                                className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide transition ${
                                    this.state.view === 'terminal'
                                        ? 'bg-amber-300 text-slate-900'
                                        : 'bg-white/10 text-white hover:bg-white/20'
                                }`}
                                aria-pressed={this.state.view === 'terminal'}
                            >
                                Terminal
                            </button>
                        </div>
                    </div>
                    <div className="mt-8">
                        {this.state.view === 'terminal' ? (
                            <div className="card bg-slate-950/80 flex h-[360px] flex-col">
                                <div
                                    ref={this.outputRef}
                                    className="flex-1 overflow-y-auto font-mono text-sm text-emerald-300 sm:text-base"
                                >
                                    <div
                                        dangerouslySetInnerHTML={{ __html: this.state.output }}
                                    />
                                </div>
                                <input
                                    className="mt-3 w-full border-none bg-transparent font-mono text-sm text-emerald-200 outline-none sm:text-base"
                                    type="text"
                                    value={this.state.input}
                                    onChange={this.handleChange}
                                    onKeyDown={this.handleKeyDown}
                                    aria-label="Terminal input"
                                />
                            </div>
                        ) : (
                            <div className="space-y-6">
                                <div className="card">
                                    <h3 className="text-lg font-semibold text-white">
                                        Bio
                                    </h3>
                                    <p className="mt-3 text-sm leading-relaxed text-slate-200/85 sm:text-base">
                                        I am a software engineering student focused on building
                                        reliable, user-centered products. I enjoy turning complex
                                        ideas into simple, elegant interfaces while collaborating
                                        closely with teams to ship polished results.
                                    </p>
                                </div>
                                <div className="grid gap-4 md:grid-cols-2">
                                    <div className="card">
                                        <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-200">
                                            Quick facts
                                        </h4>
                                        <ul className="mt-3 space-y-2 text-sm text-slate-200/85 sm:text-base">
                                            {quickFacts.map((fact) => (
                                                <li key={fact} className="flex gap-2">
                                                    <span className="mt-2 h-2 w-2 rounded-full bg-amber-300" />
                                                    <span>{fact}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="card">
                                        <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-200">
                                            Highlights
                                        </h4>
                                        <ul className="mt-3 space-y-2 text-sm text-slate-200/85 sm:text-base">
                                            {highlights.map((item) => (
                                                <li key={item} className="flex gap-2">
                                                    <span className="mt-2 h-2 w-2 rounded-full bg-cyan-300" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        );
    }
}
