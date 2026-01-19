import { GraduationCap, Database, Server, Github, Mail, Linkedin, Menu } from "lucide-react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import websiteImg from '../img/profile.webp';
import resumeThumb from '../img/kuldeep02-1.webp';

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);
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
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-primary to-purple-600 flex items-center justify-center text-white font-black text-xs shadow-lg group-hover:rotate-12 transition-transform duration-500">KP</div>
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
              href={resumeThumb}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-2 rounded-full bg-white text-black text-[10px] font-black uppercase tracking-[0.15em] transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              Resume
            </motion.a>
          </div>

          <div className="md:hidden">
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
            <a href={resumeThumb} target="_blank" className="w-full py-4 rounded-xl bg-white text-black text-[10px] font-black uppercase tracking-[0.2em] text-center">View Resume</a>
          </motion.div>
        )}
      </nav>

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
              <Avatar className="w-64 h-64 md:w-80 md:h-80 shadow-2xl transition-transform duration-700 group-hover:scale-[1.02] overflow-hidden">
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
              className="text-3xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Hi, I'm <span className="text-primary">Kuldeep Prajapati</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-2xl mb-8 text-gray-300 max-w-2xl px-4 md:px-0 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              I bridge the gap between <span className="text-white font-medium">ambitious ideas</span> and <span className="text-primary font-medium">scalable reality</span> through expertise in{" "}
              <span className="skill-text ml-highlight relative">
                Machine Learning
                <span className="skill-underline ml-style"></span>
              </span>, {" "}
              <span className="skill-text devops-highlight relative">
                Cloud Architecture
                <span className="skill-underline devops-style"></span>
              </span>, and{" "}
              <span className="skill-text fullstack-highlight relative">
                Modern Web Engineering
                <span className="skill-underline fullstack-style"></span>
              </span>.
            </motion.p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-12 px-4 md:px-0">
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center gap-2 p-4 bg-gradient-to-b from-gray-800/80 to-gray-900/80 rounded-xl shadow-lg border border-primary/20 hover:border-primary/40 cursor-pointer"
                onClick={() => navigate('/tranner')}
              >
                <div className="p-2 rounded-full bg-primary/10">
                  <Database className="text-primary h-6 md:h-8 w-6 md:w-8" />
                </div>
                <span className="font-medium text-sm md:text-base ml-highlight">
                  ML Engineer
                </span>
                <span className="text-xs text-gray-400">AI & Algorithms</span>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center gap-2 p-4 bg-gradient-to-b from-gray-800/80 to-gray-900/80 rounded-xl shadow-lg border border-primary/20 hover:border-primary/40 cursor-pointer"
              >
                <div className="p-2 rounded-full bg-primary/10">
                  <GraduationCap className="text-primary h-6 md:h-8 w-6 md:w-8" />
                </div>
                <span className="font-medium text-sm md:text-base fullstack-highlight">
                  Python
                </span>
                <span className="text-xs text-gray-400">DSA/OOPS/Algo</span>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center gap-2 p-4 bg-gradient-to-b from-gray-800/80 to-gray-900/80 rounded-xl shadow-lg border border-primary/20 hover:border-primary/40 cursor-pointer"
              >
                <div className="p-2 rounded-full bg-primary/10">
                  <Server className="text-primary h-6 md:h-8 w-6 md:w-8" />
                </div>
                <span className="font-medium text-sm md:text-base devops-highlight">
                  DevOps
                </span>
                <span className="text-xs text-gray-400">CI/CD & Cloud</span>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center gap-2 p-4 bg-gradient-to-b from-gray-800/80 to-gray-900/80 rounded-xl shadow-lg border border-primary/20 hover:border-primary/40 cursor-pointer"
              >
                <div className="p-2 rounded-full bg-primary/10">
                  <GraduationCap className="text-primary h-6 md:h-8 w-6 md:w-8" />
                </div>
                <span className="font-medium text-sm md:text-base fullstack-highlight">
                  Full Stack
                </span>
                <span className="text-xs text-gray-400">Web Dev</span>
              </motion.div>
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
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="relative py-20 px-4 bg-transparent overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-4">
              Tech Stack
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mx-auto mb-6"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#1E293B]/60 to-[#0F172A]/60 border border-white/10 backdrop-blur-xl p-8 hover:border-blue-500/30 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 mb-6">
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-2">
                    Frontend
                  </h3>
                  <div className="h-1 w-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
                </div>

                <div className="relative z-10 flex flex-wrap gap-3">
                  {[
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
                  ].map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + index * 0.05 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="group/badge relative overflow-hidden rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 backdrop-blur-sm px-4 py-2.5 cursor-pointer transition-all duration-300"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/badge:translate-x-full transition-transform duration-700"></div>
                      <div className="relative flex items-center gap-2">
                        <span className="text-lg">{tech.icon}</span>
                        <span className="text-sm font-semibold text-white/90 group-hover/badge:text-white transition-colors">
                          {tech.name}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#1E293B]/60 to-[#0F172A]/60 border border-white/10 backdrop-blur-xl p-8 hover:border-green-500/30 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 mb-6">
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 mb-2">
                    Backend
                  </h3>
                  <div className="h-1 w-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
                </div>

                <div className="relative z-10 flex flex-wrap gap-3">
                  {[
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
                  ].map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.05 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="group/badge relative overflow-hidden rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 backdrop-blur-sm px-4 py-2.5 cursor-pointer transition-all duration-300"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/badge:translate-x-full transition-transform duration-700"></div>
                      <div className="relative flex items-center gap-2">
                        <span className="text-lg">{tech.icon}</span>
                        <span className="text-sm font-semibold text-white/90 group-hover/badge:text-white transition-colors">
                          {tech.name}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#1E293B]/60 to-[#0F172A]/60 border border-white/10 backdrop-blur-xl p-8 hover:border-yellow-500/30 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 mb-6">
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 mb-2">
                    Languages
                  </h3>
                  <div className="h-1 w-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full"></div>
                </div>

                <div className="relative z-10 flex flex-wrap gap-3">
                  {[
                    { name: "JavaScript", icon: "JS" },
                    { name: "TypeScript", icon: "TS" },
                    { name: "Java", icon: "☕" },
                    { name: "Python", icon: "🐍" },
                    { name: "C++", icon: "C++" },
                  ].map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.05 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="group/badge relative overflow-hidden rounded-xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 backdrop-blur-sm px-4 py-2.5 cursor-pointer transition-all duration-300"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/badge:translate-x-full transition-transform duration-700"></div>
                      <div className="relative flex items-center gap-2">
                        <span className="text-lg font-bold">{tech.icon}</span>
                        <span className="text-sm font-semibold text-white/90 group-hover/badge:text-white transition-colors">
                          {tech.name}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#1E293B]/60 to-[#0F172A]/60 border border-white/10 backdrop-blur-xl p-8 hover:border-purple-500/30 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 mb-6">
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
                    Other
                  </h3>
                  <div className="h-1 w-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                </div>

                <div className="relative z-10 flex flex-wrap gap-3">
                  {[
                    { name: "Git", icon: "🔀" },
                    { name: "Github", icon: "🐙" },
                    { name: "Docker", icon: "🐳" },
                    { name: "Postman", icon: "📮" },
                    { name: "Cloudinary", icon: "☁️" },
                    { name: "Linux", icon: "🐧" },
                    { name: "Socket-IO", icon: "🔌" },
                  ].map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + index * 0.05 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="group/badge relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 backdrop-blur-sm px-4 py-2.5 cursor-pointer transition-all duration-300"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/badge:translate-x-full transition-transform duration-700"></div>
                      <div className="relative flex items-center gap-2">
                        <span className="text-lg">{tech.icon}</span>
                        <span className="text-sm font-semibold text-white/90 group-hover/badge:text-white transition-colors">
                          {tech.name}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
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