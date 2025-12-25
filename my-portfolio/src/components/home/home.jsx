import Typed from 'react-typed';
import { AiOutlineMail, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import myHeadshot from '../../images/my_picture.jpg';

import resume from '../../docs/Nirmal_Chaudhari_Resume.pdf';

const socialLinks = [
  {
    href: 'https://www.linkedin.com/in/nirmal-chaudhari-0990581aa/',
    label: 'LinkedIn',
    Icon: AiFillLinkedin,
  },
  {
    href: 'https://github.com/Nirmal-code',
    label: 'GitHub',
    Icon: AiFillGithub,
  },
];

export default function Home() {
  return (
    <section id="home" className="section">
      <div className="container">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <span className="accent-pill fade-up">Software Engineering</span>
          <div className="flex items-center gap-3">
            {socialLinks.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-lg text-white transition hover:-translate-y-0.5 hover:bg-white/20"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6 fade-up fade-up-delay-1">
            <h1 className="text-[clamp(2.6rem,5vw,4.4rem)] leading-tight text-white">
              Hi, I&apos;m{' '}
              <span className="gradient-text">Nirmal Chaudhari</span>.
              <span className="mt-4 block text-[clamp(1.15rem,2.4vw,2rem)] font-semibold text-slate-200">
                <span className="text-amber-300">&lt;</span>{' '}
                <Typed
                  strings={[
                    'Software Developer',
                    'Engineering Student',
                    'Innovator',
                    'Computer Nerd',
                  ]}
                  typeSpeed={60}
                  backSpeed={70}
                  loop
                  cursorChar=">"
                />
              </span>
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-slate-200/80 sm:text-lg">
              Skilled at developing, testing, and implementing efficient code to
              perform complex tasks with care and clarity.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={resume}
                download
                className="rounded-full border border-amber-200/40 bg-amber-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:bg-amber-200"
              >
                Download Resume
              </a>
              <a
                href="mailto: nirmal.chaudhari2003@gmail.com"
                target="_blank"
                className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/20"
              >
                <AiOutlineMail className="text-lg" />
                Email Me
              </a>
            </div>
          </div>
          <div className="relative flex justify-center fade-up fade-up-delay-2">
            <div className="glass-panel p-4">
              <img
                src={myHeadshot}
                className="float-slow w-[min(320px,70vw)] rounded-2xl object-cover"
                alt="Nirmal Chaudhari"
                loading="eager"
                decoding="async"
              />
            </div>
            <div className="pointer-events-none absolute -right-10 top-8 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
