import { useEffect, useState } from 'react';

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#publications', label: 'Publications' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.replace('#', ''));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) {
      return undefined;
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;
      let currentSection = sections[0].id;

      sections.forEach((section) => {
        console.log('Section:', section.id, 'OffsetTop:', section.offsetTop);
        console.log('Scroll Position:', scrollPosition);
        if (scrollPosition >= section.offsetTop) {
          currentSection = section.id;
        }
      });

      console.log('Current Section:', currentSection);

      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur-md">
      <div className="container flex flex-col gap-3 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:py-4">
        <a
          href="#home"
          className="w-full text-center text-base font-semibold text-white sm:w-auto sm:text-left sm:text-lg"
        >
          Nirmal <span className="text-amber-300">Chaudhari</span>
        </a>
        <div className="flex w-full flex-wrap items-center justify-center gap-2 text-xs font-semibold text-slate-200 sm:w-auto sm:justify-end sm:gap-4 sm:text-sm">
          {navItems.map(({ href, label }) => {
            const isActive = activeSection === href.replace('#', '');
            return (
              <a
                key={label}
                href={href}
                aria-current={isActive ? 'page' : undefined}
                className={`whitespace-nowrap rounded-full px-3 py-1 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/70 ${
                  isActive
                    ? 'bg-amber-300 text-slate-900'
                    : 'text-slate-200 hover:bg-white/10 hover:text-white'
                }`}
              >
                {label}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
