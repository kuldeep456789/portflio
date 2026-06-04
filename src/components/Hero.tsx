import { GraduationCap, Database, Server, Github, Mail, Linkedin, Menu, Settings, X, Sun, Moon, Monitor, FileText, Award, BadgeCheck } from "lucide-react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import websiteImg from '../img/profile.webp';
import resumeImage from '../img/photo.pdf';

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('system');
  const navigate = useNavigate();

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 flex justify-center pt-8">
        <div className="max-w-4xl w-full flex justify-between items-center bg-black/40 backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-full px-8 py-3 transition-all duration-500">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="flex flex-col leading-none">
              <span className="text-white text-[10px] font-black tracking-[0.2em] uppercase">Kuldeep</span>
              <span className="text-gray-500 text-[9px] font-bold tracking-[0.1em] uppercase group-hover:text-primary transition-colors">Prajapati</span>
            </div>
          </motion.div>

          <div className="hidden md:flex items-center space-x-12">
            <a href="#about" className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-white transition-all relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-500 group-hover:w-full"></span>
            </a>
            <a href="#experience" className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-white transition-all relative group">
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-500 group-hover:w-full"></span>
            </a>
            <a href="#contact" className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-white transition-all relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-500 group-hover:w-full"></span>
            </a>

            <div className="h-4 w-[1px] bg-white/10"></div>

            <motion.a
              href={resumeImage}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-2 rounded-full bg-white text-black text-[10px] font-black uppercase tracking-[0.15em] transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              Resume
            </motion.a>

            <motion.button
              id="settings-btn"
              onClick={() => setSettingsOpen(true)}
              whileHover={{ scale: 1.1, rotate: 45 }}
              whileTap={{ scale: 0.9 }}
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/40 transition-all"
              aria-label="Open Settings"
            >
              <Settings className="h-4 w-4 text-gray-300 hover:text-white transition-colors" />
            </motion.button>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <motion.button
              id="settings-btn-mobile"
              onClick={() => setSettingsOpen(true)}
              whileHover={{ scale: 1.1, rotate: 45 }}
              whileTap={{ scale: 0.9 }}
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/40 transition-all"
              aria-label="Open Settings"
            >
              <Settings className="h-4 w-4 text-gray-300" />
            </motion.button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all active:scale-90"
            >
              <Menu className="h-4 w-4 text-white" />
            </button>
          </div>
        </div>

        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="fixed inset-x-6 top-28 z-50 p-6 rounded-[24px] bg-black/95 backdrop-blur-2xl border border-white/10 shadow-3xl md:hidden flex flex-col items-center space-y-4"
          >
            <a href="#about" onClick={() => setMenuOpen(false)} className="text-[10px] font-black uppercase tracking-[0.2em] py-4 border-b border-white/5 w-full text-center">About</a>
            <a href="#experience" onClick={() => setMenuOpen(false)} className="text-[10px] font-black uppercase tracking-[0.2em] py-4 border-b border-white/5 w-full text-center">Projects</a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="text-[10px] font-black uppercase tracking-[0.2em] py-4 border-b border-white/5 w-full text-center">Contact</a>
            <a href={resumeImage} target="_blank" className="w-full py-4 rounded-xl bg-white text-black text-[10px] font-black uppercase tracking-[0.2em] text-center">View Resume</a>
          </motion.div>
        )}
      </nav>

      {/* Settings Modal */}
      {settingsOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={() => setSettingsOpen(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="relative z-10 w-full max-w-sm rounded-2xl bg-[#111827]/95 border border-white/10 backdrop-blur-2xl shadow-[0_25px_60px_rgba(0,0,0,0.7)] p-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-white text-xl font-bold">Preferences</h2>
                <p className="text-gray-500 text-sm mt-0.5">Customize your experience</p>
              </div>
              <button
                onClick={() => setSettingsOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all group"
                aria-label="Close Settings"
              >
                <X className="h-4 w-4 text-gray-400 group-hover:text-white transition-colors" />
              </button>
            </div>

            {/* Divider */}
            <div className="h-[1px] bg-white/5 mb-6" />

            {/* Appearance Section */}
            <div className="mb-6">
              <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-4">Appearance</p>
              <div className="grid grid-cols-3 gap-3">
                {([
                  { id: 'light', label: 'Light', icon: Sun },
                  { id: 'dark',  label: 'Dark',  icon: Moon },
                  { id: 'system', label: 'System', icon: Monitor },
                ] as const).map(({ id, label, icon: Icon }) => (
                  <motion.button
                    key={id}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setTheme(id)}
                    className={`flex flex-col items-center gap-2.5 p-4 rounded-xl border transition-all duration-200 ${
                      theme === id
                        ? 'bg-white/10 border-primary/50 text-white shadow-[0_0_15px_rgba(99,102,241,0.2)]'
                        : 'bg-white/[0.03] border-white/[0.06] text-gray-400 hover:bg-white/[0.07] hover:text-gray-200'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="text-[11px] font-semibold">{label}</span>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="h-[1px] bg-white/5 mb-6" />

            {/* Communication Section */}
            <div>
              <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-4">Communication</p>
              <div className="space-y-3">
                {[
                  { label: 'Email notifications', defaultOn: true },
                  { label: 'Sound effects', defaultOn: false },
                ].map(({ label, defaultOn }) => (
                  <div key={label} className="flex items-center justify-between">
                    <span className="text-gray-300 text-sm">{label}</span>
                    <div
                      className={`relative w-11 h-6 rounded-full transition-all duration-300 cursor-pointer ${
                        defaultOn ? 'bg-primary' : 'bg-white/10'
                      }`}
                    >
                      <div className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow-md transition-all duration-300 ${
                        defaultOn ? 'left-5' : 'left-0.5'
                      }`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      <section className="min-h-screen relative flex items-center justify-center text-white pt-24 p-4 bg-transparent overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-left"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative mb-8 md:mb-0 md:order-2 group"
          >
            <div className="relative z-10 p-2 rounded-full bg-black shadow-2xl border border-white/10 group-hover:border-primary/50 transition-all duration-500">
              <Avatar className="w-72 h-72 md:w-[22rem] md:h-[22rem] lg:w-[23rem] lg:h-[23rem] shadow-2xl transition-transform duration-700 group-hover:scale-[1.02] overflow-hidden">
                <AvatarImage
                  src={websiteImg}
                  alt="Profile"
                  className="object-cover w-full h-full grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                />
              </Avatar>

              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-md text-white/90 px-4 py-1.5 rounded-full text-xs font-bold border border-white/10 tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 whitespace-nowrap">
                DRIVEN BY CONTINUOUS INNOVATION
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex-1"
          >
            <motion.h1
              className="text-3xl md:text-6xl font-bold mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              I am Kuldeep Prajapati
            </motion.h1>

            <motion.h2
              className="mb-5 text-xl font-semibold text-primary md:text-3xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Machine Learning Engineer & AI Builder
            </motion.h2>

            <motion.p
              className="text-lg md:text-2xl mb-8 text-gray-300 max-w-2xl px-4 md:px-0 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Designing intelligent, scalable, and high-performance systems across AI,
              cloud infrastructure, and modern full-stack engineering.
            </motion.p>

            <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4 mb-12 px-4 md:px-0">
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
                className="flex h-32 w-[7.25rem] sm:w-32 flex-col items-center justify-center gap-2 p-4 bg-gradient-to-b from-gray-800/80 to-gray-900/80 rounded-xl shadow-lg border border-primary/20 hover:border-primary/40 cursor-pointer"
                onClick={() => navigate('/tranner')}
              >
                <div className="p-2 rounded-full bg-primary/10">
                  <Database className="text-primary h-6 md:h-8 w-6 md:w-8" />
                </div>
                <span className="whitespace-nowrap text-sm font-medium ml-highlight">
                  ML Engineer
                </span>
                <span className="text-xs text-gray-400">AI & Algorithms</span>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
                className="flex h-32 w-[7.25rem] sm:w-32 flex-col items-center justify-center gap-2 p-4 bg-gradient-to-b from-gray-800/80 to-gray-900/80 rounded-xl shadow-lg border border-primary/20 hover:border-primary/40 cursor-pointer"
              >
                <div className="p-2 rounded-full bg-primary/10">
                  <GraduationCap className="text-primary h-6 md:h-8 w-6 md:w-8" />
                </div>
                <span className="whitespace-nowrap text-sm font-medium fullstack-highlight">
                  Python
                </span>
                <span className="text-xs text-gray-400">DSA/OOPS/Algo</span>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
                className="flex h-32 w-[7.25rem] sm:w-32 flex-col items-center justify-center gap-2 p-4 bg-gradient-to-b from-gray-800/80 to-gray-900/80 rounded-xl shadow-lg border border-primary/20 hover:border-primary/40 cursor-pointer"
              >
                <div className="p-2 rounded-full bg-primary/10">
                  <Server className="text-primary h-6 md:h-8 w-6 md:w-8" />
                </div>
                <span className="whitespace-nowrap text-sm font-medium devops-highlight">
                  DevOps
                </span>
                <span className="text-xs text-gray-400">CI/CD & Cloud</span>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
                className="flex h-32 w-[7.25rem] sm:w-32 flex-col items-center justify-center gap-2 p-4 bg-gradient-to-b from-gray-800/80 to-gray-900/80 rounded-xl shadow-lg border border-primary/20 hover:border-primary/40 cursor-pointer"
              >
                <div className="p-2 rounded-full bg-primary/10">
                  <GraduationCap className="text-primary h-6 md:h-8 w-6 md:w-8" />
                </div>
                <span className="whitespace-nowrap text-sm font-medium fullstack-highlight">
                  Full Stack
                </span>
                <span className="text-xs text-gray-400">Web Dev</span>
              </motion.div>

              <motion.a
                href={resumeImage}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
                className="flex h-32 w-[7.25rem] sm:w-32 flex-col items-center justify-center gap-2 p-4 bg-gradient-to-b from-orange-500/20 via-gray-800/80 to-gray-900/80 rounded-xl shadow-[0_0_24px_rgba(249,115,22,0.18)] border border-orange-400/50 ring-1 ring-orange-400/20 hover:border-orange-300 hover:ring-orange-300/40 hover:shadow-[0_0_32px_rgba(249,115,22,0.34)] cursor-pointer"
              >
                <div className="p-2 rounded-full bg-orange-400/15 ring-1 ring-orange-300/30">
                  <FileText className="text-orange-300 h-6 md:h-8 w-6 md:w-8" />
                </div>
                <span className="whitespace-nowrap text-sm font-semibold tracking-[0.08em] text-orange-100">
                  Resume
                </span>
                <span className="text-xs text-orange-200/75">Builder</span>
              </motion.a>
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 px-4 md:px-0">
              <a href="https://github.com/kuldeep456789" target="_blank" className="gap-2 bg-gray-800/50 hover:scale-105 transition border-gray-700 hover:border-primary px-4 py-2 rounded-md flex items-center">
                <Github size={18} /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/kuldeep-prajapati-005080257/" target="_blank" className="gap-2 bg-gray-800/50 hover:scale-105 transition border-gray-700 hover:border-primary px-4 py-2 rounded-md flex items-center">
                <Linkedin size={18} /> LinkedIn
              </a>
              <a
                onClick={() => navigate('/contact')}
                className="gap-2 bg-gray-800/50 hover:scale-105 transition border border-gray-700 hover:border-primary px-4 py-2 rounded-md flex items-center cursor-pointer"
              >
                <Mail size={18} /> Contact Me
              </a>
              <a
                href="#experience"
                className="gap-2 bg-gray-800/50 hover:scale-105 transition border border-gray-700 hover:border-primary px-4 py-2 rounded-md flex items-center"
              >
                <Award size={18} /> Achievements
              </a>
              <a
                href="#experience"
                className="gap-2 bg-gray-800/50 hover:scale-105 transition border border-gray-700 hover:border-primary px-4 py-2 rounded-md flex items-center"
              >
                <BadgeCheck size={18} /> Certifications
              </a>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="relative pt-20 pb-24 px-4 bg-transparent overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-32 right-10 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-blue-700/10 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.08)_1px,transparent_0)] bg-[length:22px_22px] opacity-40" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
              Tech Stack
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                title: "Frontend",
                note: "Design systems, performance, accessibility",
                accent: "from-blue-400 to-blue-600",
                glow: "from-blue-500/10 via-blue-600/10 to-transparent",
                border: "hover:border-blue-400/40",
                chips: [
                  { name: "ReactJs", icon: "⚛️" },
                  { name: "NextJs", icon: "▲" },
                  { name: "Recoil", icon: "🔄" },
                  { name: "Zustand", icon: "🐻" },
                  { name: "Redux", icon: "🔮" },
                  { name: "React-Query", icon: "🔍" },
                  { name: "Tailwind", icon: "💨" },
                  { name: "Chakra-UI", icon: "⚡" },
                  { name: "Shadcn", icon: "🎨" },
                  { name: "Magic-UI", icon: "✨" },
                  { name: "Material UI", icon: "🎯" },
                ],
              },
              {
                title: "Backend",
                note: "APIs, data modeling, reliability",
                accent: "from-blue-400 to-blue-600",
                glow: "from-blue-500/10 via-blue-600/10 to-transparent",
                border: "hover:border-blue-400/40",
                chips: [
                  { name: "Node", icon: "🟢" },
                  { name: "Express", icon: "🚂" },
                  { name: "MongoDB", icon: "🍃" },
                  { name: "Mongoose", icon: "🦡" },
                  { name: "MySQL", icon: "🐬" },
                  { name: "Prisma", icon: "🔷" },
                  { name: "Drizzle", icon: "💧" },
                  { name: "Redis", icon: "🔴" },
                  { name: "NextJs", icon: "▲" },
                  { name: "Convex-Db", icon: "🔺" },
                  { name: "PostgreSQL", icon: "🐘" },
                ],
              },
              {
                title: "Languages",
                note: "Typed, performant, pragmatic",
                accent: "from-blue-400 to-blue-600",
                glow: "from-blue-500/10 via-blue-600/10 to-transparent",
                border: "hover:border-blue-400/40",
                chips: [
                  { name: "JavaScript", icon: "JS" },
                  { name: "TypeScript", icon: "TS" },
                  { name: "Java", icon: "☕" },
                  { name: "Python", icon: "🐍" },
                  { name: "C++", icon: "C++" },
                ],
              },
              {
                title: "Other",
                note: "Workflow, tooling, automation",
                accent: "from-blue-400 to-blue-600",
                glow: "from-blue-500/10 via-blue-600/10 to-transparent",
                border: "hover:border-blue-400/40",
                chips: [
                  { name: "Git", icon: "🔀" },
                  { name: "Github", icon: "🐙" },
                  { name: "Docker", icon: "🐳" },
                  { name: "Postman", icon: "📮" },
                  { name: "Cloudinary", icon: "☁️" },
                  { name: "Linux", icon: "🐧" },
                  { name: "Socket-IO", icon: "🔌" },
                ],
              },
            ].map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + sectionIndex * 0.1 }}
                className="group"
              >
                <div className={`relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-[#0E1320]/80 via-[#0B1220]/60 to-[#060A14]/80 p-7 shadow-[0_20px_60px_rgba(0,0,0,0.55)] backdrop-blur-xl transition-all duration-500 ${section.border}`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${section.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  <div className="relative z-10 flex items-start justify-between gap-6">
                    <div>
                      <p className={`text-[11px] font-black uppercase tracking-[0.35em] text-transparent bg-clip-text bg-gradient-to-r ${section.accent}`}>
                        {section.title}
                      </p>
                      <p className="mt-2 text-sm text-slate-400">{section.note}</p>
                    </div>
                    <div className={`h-10 w-10 rounded-2xl bg-gradient-to-br ${section.accent} opacity-20`} />
                  </div>

                  <div className="relative z-10 mt-6 flex flex-wrap gap-2.5">
                    {section.chips.map((tech, index) => (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + index * 0.03 }}
                        whileHover={{ y: -2 }}
                        className="group/badge flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-semibold text-white/80 transition-all duration-300 hover:border-white/25 hover:bg-white/10"
                      >
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-[11px] font-bold">
                          {tech.icon}
                        </span>
                        <span className="text-[12px] font-semibold tracking-wide text-white/90">
                          {tech.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
          .skill-text {
            font-weight: 600;
            padding: 0 2px;
            display: inline-block;
            transition: all 0.3s ease;
            color: #00bcd4;
          }
          
          .skill-text:hover {
            transform: translateY(-2px);
          }
          
          .skill-underline {
            position: absolute;
            height: 2px;
            width: 0;
            bottom: -2px;
            left: 0;
            transition: width 0.3s ease;
            background: #00bcd4;
          }
          
          .skill-text:hover .skill-underline {
            width: 100%;
          }
          
          .ml-highlight {
            text-shadow: 0 0 10px rgba(0, 188, 212, 0.3);
            letter-spacing: 0.02em;
          }
          
          .ml-style {
            background: linear-gradient(90deg, #00bcd4, #00bcd4);
            height: 2px;
          }
          
          .devops-highlight {
            text-shadow: 0 0 8px rgba(0, 188, 212, 0.25);
          }
          
          .devops-style {
            background: linear-gradient(90deg, transparent, #00bcd4, transparent);
            height: 1px;
          }
          
          .fullstack-highlight {
            text-shadow: 0 0 12px rgba(0, 188, 212, 0.35);
            letter-spacing: 0.01em;
          }
          
          .fullstack-style {
            background: linear-gradient(90deg, #00bcd4, transparent);
            height: 3px;
          }
        `}</style>
    </>
  );
};

export default Hero;
