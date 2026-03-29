import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight, Heart, Code2, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";

// ─── Data ─────────────────────────────────────────────────────────────────────
const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/kuldeep456789",
    icon: Github,
    color: "#e2e8f0",
    hoverColor: "#ffffff",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kuldeep-prajapati-005080257/",
    icon: Linkedin,
    color: "#93c5fd",
    hoverColor: "#60a5fa",
  },
  {
    label: "Email",
    href: "mailto:kuldeepprajapati456789@gmail.com",
    icon: Mail,
    color: "#a78bfa",
    hoverColor: "#8b5cf6",
  },
];

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const techLinks = [
  { label: "LeetCode", href: "https://leetcode.com/u/Kp_prajapati/" },
  { label: "Summer Kart", href: "https://summerkart.vercel.app/" },
  { label: "SQL Query Master", href: "https://sfrotnkast.vercel.app/" },
];

// ─── Component ────────────────────────────────────────────────────────────────
const Footer = () => {
  const navigate = useNavigate();
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-0 overflow-hidden bg-transparent">
      {/* Top glow divider */}
      <div className="relative h-px w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent blur-sm" />
      </div>

      {/* Ambient blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-32 left-1/4 w-80 h-80 bg-indigo-600/8 rounded-full blur-[100px]" />
        <div className="absolute -bottom-32 right-1/4 w-80 h-80 bg-purple-600/8 rounded-full blur-[100px]" />
      </div>

      {/* Main footer content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-16 pb-8">

        {/* ── Top Row ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

          {/* Brand column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Logo mark */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center text-white font-black text-sm shadow-lg shadow-indigo-500/30">
                KP
              </div>
              <div className="leading-none">
                <p className="text-white text-sm font-black tracking-[0.15em] uppercase">Kuldeep</p>
                <p className="text-gray-500 text-[10px] font-bold tracking-[0.1em] uppercase">Prajapati</p>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Full-Stack Developer & ML Engineer crafting scalable systems and
              intelligent applications with modern web technologies.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map(({ label, href, icon: Icon, color, hoverColor }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.12, y: -2 }}
                  whileTap={{ scale: 0.92 }}
                  className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center transition-all duration-300 hover:bg-white/[0.10] hover:border-white/20 group"
                >
                  <Icon
                    className="w-4 h-4 transition-colors duration-300"
                    style={{ color }}
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Navigation column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-white text-xs font-black uppercase tracking-[0.2em] mb-5">
              Navigation
            </h3>
            <ul className="space-y-3">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="group inline-flex items-center gap-2 text-gray-400 text-sm hover:text-white transition-colors duration-200"
                  >
                    <span className="w-0 h-px bg-indigo-400 transition-all duration-300 group-hover:w-4" />
                    {label}
                  </a>
                </li>
              ))}
              <li>
                <button
                  onClick={() => navigate("/contact")}
                  className="group inline-flex items-center gap-2 text-gray-400 text-sm hover:text-white transition-colors duration-200"
                >
                  <span className="w-0 h-px bg-indigo-400 transition-all duration-300 group-hover:w-4" />
                  Contact Me
                </button>
              </li>
            </ul>
          </motion.div>

          {/* Projects / Links column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-white text-xs font-black uppercase tracking-[0.2em] mb-5">
              Projects & Profiles
            </h3>
            <ul className="space-y-3">
              {techLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 text-gray-400 text-sm hover:text-white transition-colors duration-200"
                  >
                    <span className="w-0 h-px bg-purple-400 transition-all duration-300 group-hover:w-4" />
                    {label}
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-60 transition-all -translate-y-0.5 group-hover:translate-y-0" />
                  </a>
                </li>
              ))}
            </ul>

            {/* Status badge */}
            <div className="mt-8 inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-emerald-400 text-xs font-bold tracking-wider">
                Open to Opportunities
              </span>
            </div>
          </motion.div>
        </div>

        {/* ── Divider ── */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* ── Bottom Row ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
        >
          {/* Copyright */}
          <p className="text-gray-500 text-xs">
            © {year} Kuldeep Prajapati. All rights reserved.
          </p>

          {/* Built with */}
          <p className="flex items-center gap-1.5 text-gray-600 text-xs">
            Built with
            <Heart className="w-3 h-3 text-pink-500 fill-pink-500 animate-pulse" />
            using
            <span className="text-indigo-400 font-semibold">React</span>
            <span className="text-gray-600">+</span>
            <span className="text-cyan-400 font-semibold">TypeScript</span>
            <span className="text-gray-600">+</span>
            <span className="text-violet-400 font-semibold">Framer Motion</span>
          </p>

          {/* Back to top */}
          <motion.button
            whileHover={{ scale: 1.05, y: -1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-white transition-colors font-semibold group"
          >
            Back to top
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
