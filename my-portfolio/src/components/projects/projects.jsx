import Macademy from '../../images/Macademy.png';
import Pong from '../../images/pong.png';
import Humans from '../../images/humans.png';
import QArm from '../../images/q_arm.png';
import PProjects from '../../images/1P13.png';
import instacal from '../../images/instacal.png';
import Piraten from '../../images/Piraten.png';
import Terrain from '../../images/Terrain.png';
import GitMerge from '../../images/gitmerge.png';
import MonoDepth from '../../images/mono-depth.png';
import Cognia from '../../images/cognia.jpg';

import { AiFillGithub } from 'react-icons/ai';

const projects = [
  {
    name: 'Monocular Depth Perception',
    date: 'Nov 2025',
    link: 'https://github.com/Nirmal-code/mono-depth-prediction',
    image: MonoDepth,
    description:
      'Developed and evaluated monocular depth estimation models using CNN (ResNet-34/50) and Vision Transformer (ViT) backbones on the KITTI Depth Benchmark to approximate LiDAR-level depth from single RGB images. Designed custom encoder-decoder architectures with multi-scale feature fusion, transformer token reassembly, and residual fusion blocks for dense depth prediction. Trained models on 93k+ images using multi-GPU distributed training with Hugging Face Accelerate on an HPC cluster. Achieved order-of-magnitude gains with a transformer model (SiLog ~ 0.0034, Abs Rel ~ 0.036), outperforming CNN baselines and heuristic depth methods.',
  },
  {
    name: 'Cognia (Brain Wave Classification)',
    date: 'Oct 2025',
    link: 'https://github.com/Nirmal-code/BrainWaveClassification',
    image: Cognia,
    description:
      'Built classification workflows on EEG data to trigger focus and wellness actions (e.g., break reminders, focus alerts). Modeled features using clinically accepted EEG frequency bands and trained on simulated signals to overcome noisy, hard-to-label data. Planned integration with the Muse 2 headset for real-time inference once the software pipeline is validated.',
  },
  { 
    name: '1KEY',
    date: 'May 2024',
    link: 'https://github.com/Nirmal-code/1KEY',
    image: null,
    description:
      'Designed and developed a scalable chat system for companies using Model-View-Controller (MVC) architecture. Used repository and pipe-and-filter architectures to support secure message transmission via a cryptosystem filter. Integrated an AI chat so users can ask company-specific questions using the OpenAI API with contextual retrieval.',
  },
  {
    name: 'Git Merge ADV',
    date: 'Aug 2023',
    link: 'https://github.com/ace-design/git-merge-adv',
    image: GitMerge,
    description:
      'Developed a new structured merge algorithm to improve source-code merging. Designed Abstract Syntax Trees to improve accuracy across multiple languages. Configured VCS like Git to use this merge tool, preventing potential merge conflicts. Tool written in Python.',
  },
  {
    name: 'Terrain Generation',
    date: 'Apr 2023',
    link: 'https://github.com/2AA4-W23/a4-urbanism-Nirmal-code',
    image: Terrain,
    description:
      'Developed a terrain generator, similar to what developers did for games like Minecraft. User has full control over terrain type, temperature, humidity, shape, etc... Terrain generates randomly unless seed is given. Developed using Java, and Maven as the dependency manager.',
  },
  {
    name: 'Piraten Karpen',
    date: 'Jan 2023',
    link: 'https://github.com/Nirmal-code/PiratenKarpenGame',
    image: Piraten,
    description:
      'Developed PiratenKapern game as part of a course project. Up to 2 players can play the game, and functionality resembles that of the actual game. Developed game using Java and Maven as the dependency manager.',
  },
  {
    name: 'InstaCal',
    date: 'Jan 2023',
    link: 'https://github.com/Nirmal-code/InstaCal-DeltaHacks9',
    image: instacal,
    description:
      'DeltaHacks IX Submission: Application processes the image you upload to provide data on what you eat. It tells you the calories, carbs, fat and protein associated with your meal along with a brief description. Used React.js for the frontend, a YoloV5 model for the backend, and flask to create api calls that connect the two.',
  },
  {
    name: 'Macademy',
    date: 'Aug 2022',
    link: 'https://github.com/Nirmal-code/Macademy',
    image: Macademy,
    description:
      'Website developed to help students develop more effective study habits. Features a planner page for students to track course work, and interval studying. Developed using React.js, Node.js, HTML and CSS.',
  },
  {
    name: '1P13 Projects',
    date: 'Sep 2021 - Apr 2022',
    link: 'https://abalone-bowler-f8e.notion.site/Nirmal-Chaudhari-6d456ba722de443eb8f0046fa48bbd7f',
    image: PProjects,
    description:
      'Various projects I worked on in groups of 4-5 as part of my Eng 1P13 course in first year. Developed skills in Engineering Design, Python, AutoCAD, PrusaSlicer, Report Writing.',
  },
  {
    name: 'Humans Project',
    date: 'Feb 2022',
    link: 'https://github.com/Nirmal-code/Humans-Project',
    image: Humans,
    description:
      'Collaborated as a group of over 6 people in SFL to develop a website that helps give a voice to influential people in our society. Completed using React.js, Node.js, HTML and CSS.',
  },
  {
    name: 'Q-Arm Project',
    date: 'Nov 2021',
    link: 'https://github.com/Nirmal-code/Q-Arm_Project',
    image: QArm,
    description:
      'Programmed a Q-Arm to work in surgical environments to sterilize equipment for use by responding to muscle sensor emulators. Developed using Python and a Raspberry Pi.',
  },
  {
    name: 'Pong',
    date: 'Jan 2020',
    link: 'https://github.com/Nirmal-code/pong_game',
    image: Pong,
    description:
      '2-Player game developed for people to play on their devices. Contains point system for users to keep score of who is winning. Developed using Lua through Love2D software.',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">
          <span>&lt;Projects</span> /&gt;
        </h2>
        <div className="grid gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ name, date, link, image, description }) {
  return (
    <div className="card grid gap-6 lg:grid-cols-[220px_minmax(0,1fr)]">
      <div className="overflow-hidden rounded-xl border border-white/10 bg-slate-900/60">
        {image ? (
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-amber-300/20 via-slate-900/70 to-cyan-400/20 p-6 text-center">
            <span className="text-lg font-semibold text-white">{name}</span>
          </div>
        )}
      </div>
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="text-xl font-semibold text-white">{name}</h3>
            <p className="text-sm text-slate-300">{date}</p>
          </div>
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              aria-label={`View ${name}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/20"
            >
              <AiFillGithub className="text-lg" />
              View
            </a>
          ) : null}
        </div>
        <p className="text-sm leading-relaxed text-slate-200/80 sm:text-base">
          {description}
        </p>
      </div>
    </div>
  );
}
