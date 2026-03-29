import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import summerKartImg from '../img/summer kart.webp';
import blogImg from '../img/blog.webp';
import TiltCard from './TiltCard';

// ─── Project data ────────────────────────────────────────────────────────────
const projects = [
  {
    id: 1,
    title: "Summer Kart",
    subtitle: "Full-Stack E-Commerce Platform",
    description:
      "A production-ready e-commerce platform built with React and Node.js. Features real-time inventory, secure Stripe payments, JWT auth, admin dashboard, and optimised MongoDB queries with Redis caching.",
    tech: ["React", "Node.js", "MongoDB", "Express", "Redis", "Stripe"],
    link: "https://summerkart.vercel.app/",
    github: "https://github.com/kuldeep456789",
    image: summerKartImg,
    accent: "#6366f1",          // indigo
    accentLight: "rgba(99,102,241,0.15)",
    tag: "E-Commerce",
    featured: true,
  },
  {
    id: 2,
    title: "SQL Query Master",
    subtitle: "Interactive Learning Platform",
    description:
      "An interactive SQL learning platform with real-time query execution, levelled challenges (easy / medium / hard), achievement badge system, and a built-in leaderboard.",
    tech: ["Node.js", "TypeScript", "Express", "PostgreSQL", "React"],
    link: "https://sfrotnkast.vercel.app/",
    github: "https://github.com/kuldeep456789",
    image: blogImg,
    accent: "#10b981",          // emerald
    accentLight: "rgba(16,185,129,0.15)",
    tag: "EdTech",
    featured: true,
  },
  {
    id: 3,
    title: "TrafficAI",
    subtitle: "Multi-Agent Traffic Coordination",
    description:
      "Research-backed intelligent traffic-signal system using Multi-Agent Reinforcement Learning (MARL). Reduces average wait time by 38 % in simulation benchmarks compared to static signal cycles.",
    tech: ["Python", "TensorFlow", "MARL", "OpenAI Gym", "FastAPI"],
    link: "#",
    github: "https://github.com/kuldeep456789",
    image: null,
    accent: "#f59e0b",          // amber
    accentLight: "rgba(245,158,11,0.15)",
    tag: "ML / Research",
    featured: false,
  },
  {
    id: 4,
    title: "CrowdSense",
    subtitle: "Real-Time Crowd Detection System",
    description:
      "Hackathon project (38-hr sprint) — a real-time crowd density estimation system powered by TensorFlow object detection, deployed via a Flask API with a live heatmap dashboard.",
    tech: ["Python", "TensorFlow", "OpenCV", "Flask", "React"],
    link: "#",
    github: "https://github.com/kuldeep456789",
    image: null,
    accent: "#ec4899",          // pink
    accentLight: "rgba(236,72,153,0.15)",
    tag: "Computer Vision",
    featured: false,
  },
  {
    id: 5,
    title: "DevConnect",
    subtitle: "Real-Time Developer Network",
    description:
      "A LinkedIn-style social platform for developers with real-time messaging via Socket.IO, GitHub OAuth login, code-snippet sharing with syntax highlighting, and a skill-based matching engine.",
    tech: ["React", "Socket.IO", "Node.js", "MongoDB", "GitHub OAuth"],
    link: "#",
    github: "https://github.com/kuldeep456789",
    image: null,
    accent: "#3b82f6",          // blue
    accentLight: "rgba(59,130,246,0.15)",
    tag: "Social / SaaS",
    featured: false,
  },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────
const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// ─── Gradient placeholder when no image ──────────────────────────────────────
const GradientPlaceholder = ({ accent, title }: { accent: string; title: string }) => (
  <div
    className="w-full h-full flex items-center justify-center"
    style={{
      background: `radial-gradient(ellipse at 60% 40%, ${accent}33 0%, transparent 70%), radial-gradient(ellipse at 20% 80%, ${accent}22 0%, transparent 60%), #0f172a`,
    }}
  >
    <span
      className="text-6xl md:text-7xl font-black tracking-tighter select-none opacity-20"
      style={{ color: accent }}
    >
      {title.slice(0, 2)}
    </span>
  </div>
);

// ─── Featured (large) card ────────────────────────────────────────────────────
const FeaturedCard = ({ project }: { project: typeof projects[0] }) => (
  <TiltCard intensity={10} accent={project.accent} className="h-[420px] md:h-[480px]">
    <motion.div
      variants={cardVariants}
      className="group relative overflow-hidden rounded-[32px] border border-white/[0.08] backdrop-blur-xl h-full shadow-2xl"
      style={{ boxShadow: `0 0 0 1px ${project.accent}22`, backgroundColor: '#0a0f1a' }}
      whileHover={{ boxShadow: `0 32px 64px -16px ${project.accent}44, 0 0 0 1px ${project.accent}44` }}
      transition={{ duration: 0.4 }}
    >
      {/* Background image */}
      <div className="absolute inset-0">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 opacity-90"
          />
        ) : (
          <GradientPlaceholder accent={project.accent} title={project.title} />
        )}
      </div>

      {/* Top subtle gradient for buttons/tags visibility */}
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />

      {/* Tag pill */}
      <div className="absolute top-6 left-6 z-10">
        <span
          className="text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-full border backdrop-blur-md"
          style={{ color: project.accent, borderColor: `${project.accent}55`, backgroundColor: `${project.accent}20` }}
        >
          {project.tag}
        </span>
      </div>

      {/* Action buttons */}
      <div className="absolute top-6 right-6 z-10 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-[#050810]/60 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all backdrop-blur-md"
          >
            <Github className="w-4 h-4 text-white" />
          </a>
        )}
        {project.link && project.link !== "#" && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full flex items-center justify-center transition-all backdrop-blur-md border border-white/20"
            style={{ backgroundColor: `${project.accent}90` }}
          >
            <ArrowUpRight className="w-4 h-4 text-white" />
          </a>
        )}
      </div>

      {/* Glassmorphic Content Footer */}
      <div className="absolute bottom-0 left-0 right-0 z-10 overflow-hidden border-t border-white/[0.08]">
        {/* Glass Base layers */}
        <div className="absolute inset-0 backdrop-blur-3xl bg-[#050810]/50" />
        <div className="absolute inset-0" style={{ backgroundColor: `${project.accent}25` }} />
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${project.accent}80, transparent)` }} />

        <div className="relative p-8 transition-transform duration-500">
          <p className="text-xs font-semibold text-gray-300 mb-1">{project.subtitle}</p>
          <h3 className="text-3xl font-black text-white mb-4 group-hover:text-white/90 transition-colors drop-shadow-md">
            {project.title}
          </h3>
          
          <div className="max-h-0 overflow-hidden group-hover:max-h-32 transition-all duration-500">
            <p className="text-sm text-gray-200 leading-relaxed mb-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 drop-shadow">
              {project.description}
            </p>
          </div>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-[10px] px-2.5 py-1 rounded-lg font-bold border border-white/10 backdrop-blur-md drop-shadow"
                style={{ backgroundColor: `${project.accent}33`, color: '#fff' }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  </TiltCard>
);

// ─── Regular card (smaller) ───────────────────────────────────────────────────
const RegularCard = ({ project }: { project: typeof projects[0] }) => (
  <TiltCard intensity={13} accent={project.accent} className="h-[320px]">
    <motion.div
      variants={cardVariants}
      className="group relative overflow-hidden rounded-[24px] border border-white/[0.08] backdrop-blur-xl h-full shadow-xl"
      style={{ boxShadow: `0 0 0 1px ${project.accent}22`, backgroundColor: '#0a0f1a' }}
      whileHover={{ boxShadow: `0 24px 48px -12px ${project.accent}44, 0 0 0 1px ${project.accent}44` }}
      transition={{ duration: 0.4 }}
    >
      {/* Background */}
      <div className="absolute inset-0">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 opacity-80"
          />
        ) : (
          <GradientPlaceholder accent={project.accent} title={project.title} />
        )}
      </div>

      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />

      {/* Tag */}
      <div className="absolute top-5 left-5 z-10">
        <span
          className="text-[9px] font-black uppercase tracking-[0.2em] px-2.5 py-1 rounded-full border backdrop-blur-md"
          style={{ color: project.accent, borderColor: `${project.accent}55`, backgroundColor: `${project.accent}20` }}
        >
          {project.tag}
        </span>
      </div>

      {/* Links */}
      <div className="absolute top-5 right-5 z-10 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 rounded-full bg-[#050810]/60 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all backdrop-blur-md"
        >
          <Github className="w-3.5 h-3.5 text-white" />
        </a>
        {project.link !== "#" && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full flex items-center justify-center border border-white/20 transition-all backdrop-blur-md"
            style={{ backgroundColor: `${project.accent}90` }}
          >
            <ExternalLink className="w-3.5 h-3.5 text-white" />
          </a>
        )}
      </div>

      {/* Glassmorphic Content Footer */}
      <div className="absolute bottom-0 left-0 right-0 z-10 overflow-hidden border-t border-white/[0.08]">
        <div className="absolute inset-0 backdrop-blur-2xl bg-[#050810]/60" />
        <div className="absolute inset-0" style={{ backgroundColor: `${project.accent}25` }} />
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${project.accent}80, transparent)` }} />

        <div className="relative p-6 transition-transform duration-500">
          <p className="text-[10px] font-semibold text-gray-300 mb-0.5">{project.subtitle}</p>
          <h3 className="text-xl font-black text-white mb-3 group-hover:text-white/90 drop-shadow-md">{project.title}</h3>
          
          <div className="max-h-0 overflow-hidden group-hover:max-h-24 transition-all duration-500">
            <p className="text-xs text-gray-200 leading-relaxed mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 drop-shadow">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5 mt-auto">
            {project.tech.slice(0, 4).map((t) => (
              <span
                key={t}
                className="text-[9px] px-2 py-0.5 rounded-md font-bold border border-white/10 backdrop-blur-sm drop-shadow"
                style={{ backgroundColor: `${project.accent}33`, color: '#fff' }}
              >
                {t}
              </span>
            ))}
            {project.tech.length > 4 && (
              <span className="text-[9px] px-2 py-0.5 rounded-md font-bold border border-white/10 bg-white/10 text-white backdrop-blur-sm">
                +{project.tech.length - 4}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  </TiltCard>
);

// ─── Main Section ─────────────────────────────────────────────────────────────
const Projects = () => {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative py-24 px-4 bg-transparent overflow-hidden">
      {/* Ambient glow blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* eyebrow */}
          <span className="inline-block text-[10px] font-black uppercase tracking-[0.3em] text-indigo-400 mb-4 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4 leading-none">
            Selected{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              Projects
            </span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-base leading-relaxed">
            A curated showcase of what I've built — from scalable full-stack apps to
            ML research systems.
          </p>
          {/* decorative line */}
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-indigo-500/60" />
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-indigo-500/60" />
          </div>
        </motion.div>

        {/* ── Bento Grid ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="space-y-6"
        >
          {/* Row 1 — two featured cards side-by-side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featured.map((p) => (
              <FeaturedCard key={p.id} project={p} />
            ))}
          </div>

          {/* Row 2 — three smaller cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((p) => (
              <RegularCard key={p.id} project={p} />
            ))}
          </div>
        </motion.div>

        {/* ── View all CTA ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-14 flex justify-center"
        >
          <a
            href="https://github.com/kuldeep456789"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white/[0.04] border border-white/10 text-white text-sm font-bold hover:bg-white/[0.08] hover:border-indigo-500/40 transition-all duration-300 backdrop-blur-md"
          >
            <Github className="w-4 h-4" />
            View all on GitHub
            <ArrowUpRight className="w-4 h-4 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
