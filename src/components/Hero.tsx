import { GraduationCap, Database, Server, Github, Mail, Linkedin, Menu, FileText } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Link, useNavigate } from "react-router-dom";
import websiteImg from '../img/profile.webp';
import resumeThumb from '../img/kuldeep02-1.webp';


const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <>
      {/* Navbar - High-End Refined Design */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 flex justify-center pt-8">
        <div className="max-w-4xl w-full flex justify-between items-center bg-black/40 backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-full px-8 py-3 transition-all duration-500">
          {/* Custom Minimal Logo */}
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

          {/* Nav Links - Modern Minimalist */}
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

          {/* Mobile Menu Trigger */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all active:scale-90"
            >
              <Menu className="h-4 w-4 text-white" />
            </button>
          </div>
        </div>

        {/* Mobile menu remains similarly refined */}
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

      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center justify-center text-white pt-24 p-4 bg-animated overflow-hidden">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            fullScreen: { enable: false },
            background: { color: { value: "#000000" } },
            particles: {
              number: { value: 40 },
              color: { value: "#00bcd4" },
              links: {
                enable: true,
                color: "#00bcd4",
                distance: 150,
                opacity: 0.3,
                width: 1,
              },
              move: {
                enable: true,
                speed: 0.6,
                direction: "none",
                outModes: "out",
              },
              size: {
                value: { min: 1, max: 3 },
              },
              opacity: {
                value: 0.4,
              },
            },
            interactivity: {
              events: {
                onHover: { enable: true, mode: "repulse" },
                resize: true,
              },
              modes: {
                repulse: { distance: 100 },
              },
            },
            detectRetina: true,
          }}
          className="absolute inset-0 -z-10"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-left"
        >
          {/* Avatar on right side - Clean Minimalist Style */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative mb-8 md:mb-0 md:order-2 group"
          >
            {/* Clean Portfolio Avatar Design */}
            <div className="relative z-10 p-2 rounded-full bg-black shadow-2xl border border-white/10 group-hover:border-primary/50 transition-all duration-500">
              {/* Avatar with clean border */}
              <Avatar className="w-64 h-64 md:w-80 md:h-80 shadow-2xl transition-transform duration-700 group-hover:scale-[1.02] overflow-hidden">
                <AvatarImage
                  src={websiteImg}
                  alt="Profile"
                  className="object-cover w-full h-full grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                />
              </Avatar>

              {/* Hover Badge - Simplified */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-md text-white/90 px-4 py-1.5 rounded-full text-xs font-bold border border-white/10 tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 whitespace-nowrap">
                DRIVEN BY CONTINUOUS INNOVATION
              </div>
            </div>
            {/* Clean Portfolio Avatar Design End */}
          </motion.div>


          {/* Text and Buttons on left side */}
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
              // onClick={() => navigate('/python')}
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
                onClick={() => navigate('/devops')}
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
                onClick={() => navigate('/fullstack')}
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
              {/* <a
                href={resumeThumb}
                target="_blank"
                rel="noopener noreferrer"
                className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground hover:scale-105 transition shadow-lg shadow-primary/20 hover:shadow-primary/30 px-4 py-2 rounded-md flex items-center cursor-pointer font-semibold"
              >
                <FileText size={18} /> Resume
              </a> */}
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

      {/* Animated Gradient Background and Role Color Animation */}
      <style>{`
          .bg-animated {
            background: linear-gradient(-45deg, #000000, #050505, #0a0a0a, #000000);
            background-size: 400% 400%;
            animation: gradientBG 15s ease infinite;
          }

          @keyframes gradientBG {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
          
          /* Unified skill text styling with consistent primary color */
          .skill-text {
            font-weight: 600;
            padding: 0 2px;
            display: inline-block;
            transition: all 0.3s ease;
            color: #00bcd4; /* Primary color */
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
            background: #00bcd4; /* Primary color */
          }
          
          .skill-text:hover .skill-underline {
            width: 100%;
          }
          
          /* Individual highlighting variations while maintaining unified color */
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
            // font-style: ;
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
      <style>{`
                .animate-pulse-slow {
                  animation: pulse-slow 3s infinite;
                }
                @keyframes pulse-slow {
                  0%, 100% { opacity: 0.6; }
                  50% { opacity: 1; }
                }
                .animate-spin-slow {
                  animation: spin 12s linear infinite;
                }
                @keyframes spin {
                  100% { transform: rotate(360deg); }
                }
                .animate-glow {
                  box-shadow: 0 0 40px 10px #00bcd4, 0 0 80px 20px #3b82f6;
                  opacity: 0.15;
                  animation: glow 2.5s ease-in-out infinite alternate;
                }
                @keyframes glow {
                  0% { opacity: 0.12; }
                  100% { opacity: 0.22; }
                }
                .animate-bounce-slow {
                  animation: bounce-slow 2.5s infinite;
                }
                @keyframes bounce-slow {
                  0%, 100% { transform: translateY(0); }
                  50% { transform: translateY(-8px); }
                }
              `}</style>
    </>
  );
};

export default Hero;