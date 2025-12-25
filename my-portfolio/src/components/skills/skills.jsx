import python from './../../images/python.png';
import java from './../../images/java.png';
import c from './../../images/c.png';
import bash from './../../images/bash.png';
import git from './../../images/git.png';
import javascript from './../../images/javascript.png';
import matlab from './../../images/matlab.png';
import sql from './../../images/sql.png';
import react from './../../images/react.png';
import nodejs from './../../images/node.png';
import gatsby from './../../images/gatsby.png';
import r from './../../images/r.png';
import html from './../../images/html.png';
import css from './../../images/css.png';
import treesitter from './../../images/tree-sitter.png';
import ubuntu from './../../images/ubuntu.png';
import docker from './../../images/docker.png';
import quartus from './../../images/quartus.png';

const skills = [
  { name: 'Python', image: python },
  { name: 'Java', image: java },
  { name: 'Git', image: git },
  { name: 'C', image: c },
  { name: 'Bash', image: bash },
  { name: 'JavaScript', image: javascript },
  { name: 'Matlab', image: matlab },
  { name: 'SQL', image: sql },
  { name: 'React', image: react },
  { name: 'Node.js', image: nodejs },
  { name: 'Gatsby', image: gatsby },
  { name: 'R', image: r },
  { name: 'HTML', image: html },
  { name: 'CSS', image: css },
  { name: 'Tree-sitter', image: treesitter },
  { name: 'Ubuntu', image: ubuntu },
  { name: 'Docker', image: docker },
  { name: 'Quartus', image: quartus },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">
          <span>&lt;Skills</span> /&gt;
        </h2>
        <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 sm:gap-6 md:grid-cols-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:-translate-y-1 hover:border-amber-200/40 hover:bg-white/10"
              title={skill.name}
            >
              <img
                src={skill.image}
                alt={skill.name}
                loading="lazy"
                decoding="async"
                className="h-10 w-10 object-contain sm:h-12 sm:w-12"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
