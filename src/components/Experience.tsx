import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Award, Download, FileText, Clock, ChevronRight, Star, ExternalLink, Mail, Calendar, CheckCircle, GraduationCap, Sparkles, Code, Briefcase, Users, Upload, ArrowRight
} from "lucide-react";
import resumeThumb from '../img/kuldeep02-1.webp';
import blogImg from '../img/blog.webp';
import trafficImg from '../img/traffic.png';
import leetcodeProfile from '../img/leetcode_profile.png';
import apanaImg from '../img/apana.jpg';
import cipherImg from '../img/cipherschol.jpg';
import hackathonImg from '../img/hacktohon.jpg';
import summerKartImg from '../img/summer kart.webp';

// Achievement data
const achievements = [
  {
    title: "DSA Problem Solver",
    organization: "LeetCode",
    date: "2022 - Present",
    description: "Successfully solved 430+ complex algorithmic challenges using Python, maintaining a top 15% global ranking (Top 14.49%) with a 1,682 contest rating.",
    link: "https://leetcode.com/u/Kp_prajapati/",
    image: leetcodeProfile,
    fit: "object-contain"
  },
  {
    title: "Hackathon Participant",
    organization: "38-Hour University Hackathon",
    date: "June 2022",
    description: "Led a development team to create a crowd detection system using TensorFlow, optimizing density management for public safety.",
    link: "#",
    image: hackathonImg,
    fit: "object-contain"
  },
  {
    title: "Published Research Paper",
    organization: "International Journal of Computer Science",
    date: "Dec 2025",
    description: "Lead author of research on 'Intelligent Traffic Coordination' using Multi-Agent Reinforcement Learning for urban flow optimization.",
    link: "#",
    image: trafficImg,
    fit: "object-contain"
  }
];

// Certification data (removed duplicate CKA entry)
const certifications = [
  {
    title: "Delta Full Stack Development",
    issuer: "Apna College",
    date: "Dec 2023",
    expires: "N/A",
    credentialId: "APNA-FS-2023",
    link: "#",
    color: "blue",
    image: apanaImg,
    fit: "object-contain"
  },
  {
    title: "Web-E-Stand Hackathon Winner",
    issuer: "WEB-E-STAND",
    date: "Feb 2025",
    expires: "N/A",
    credentialId: "WEB-E-2025-12345",
    color: "green",
    image: hackathonImg,
    fit: "object-contain"
  },
  {
    title: "Java Summer Training",
    issuer: "CipherSchool",
    date: "May 2024",
    expires: "N/A",
    credentialId: "CSW2024-13223",
    color: "orange",
    image: cipherImg,
    fit: "object-contain"
  }
];

// Projects data
const projects = [
  {
    title: "Summer Kart - E-commerce",
    tech: "React, Node.js, MongoDB, Express.js",
    description: "A full-stack e-commerce platform with real-time inventory management and secure payment integration.",
    link: "https://summerkart.vercel.app/",
    image: summerKartImg
  },
  {
    title: "SQL Query Master",
    tech: "Node.js, Express, TypeScript",
    description: "Interactive SQL learning platform with real-time query practice, levels (easy/medium/hard), and achievement badges.",
    link: "https://sfrotnkast.vercel.app/",
    image: blogImg
  }
];

const colorMap = {
  blue: { bg: "from-blue-600/30 to-purple-600/30", tagBg: "bg-blue-900/30", text: "text-blue-300", hover: "hover:text-blue-300" },
  cyan: { bg: "from-cyan-600/30 to-blue-600/30", tagBg: "bg-cyan-900/30", text: "text-cyan-300", hover: "hover:text-cyan-300" },
  purple: { bg: "from-purple-600/30 to-blue-600/30", tagBg: "bg-purple-900/30", text: "text-purple-300", hover: "hover:text-purple-300" },
  green: { bg: "from-green-600/30 to-blue-600/30", tagBg: "bg-green-900/30", text: "text-green-300", hover: "hover:text-green-300" },
};

// Achievements, Certifications, and Resume tabs are handled below



// Enhanced Animated Background with improved performance
const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute w-full h-full">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-green-500/10 rounded-full blur-3xl animate-blob animation-delay-3000"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl animate-blob animation-delay-5000"></div>
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:20px_20px] opacity-30"></div>

      <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent animate-scan"></div>
      <div className="absolute top-2/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400/20 to-transparent animate-scan animation-delay-3000"></div>
      {/* <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent animate-scan animation-delay-5000"></div> */}
    </div>
  );
};


// Professional Resume Preview Component
const ResumePreview = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="max-w-4xl mx-auto mt-12 group"
    >
      <div className="relative rounded-[32px] overflow-hidden bg-[#1E293B]/40 border border-white/10 shadow-2xl transition-all duration-700 hover:border-blue-500/30">
        {/* Hover Overlay for "Ready for Hire" */}
        <div className="absolute inset-x-0 top-0 z-20 flex justify-center p-8 opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-y-4 group-hover:translate-y-0">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-green-500/10 border border-green-500/20 backdrop-blur-md">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-green-400 font-bold tracking-widest uppercase text-xs">Ready for Hire</span>
          </div>
        </div>

        {/* Premium Image Container */}
        <div className="relative aspect-[1/1.414] overflow-hidden cursor-zoom-in">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D11] via-transparent to-transparent opacity-60 z-10" />
          <img
            src={resumeThumb}
            alt="Resume"
            className="w-full h-auto object-contain transform transition-transform duration-1000 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Action Footer */}
      <div className="mt-8 flex justify-center gap-4">
        <a
          href={resumeThumb}
          download
          className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold hover:shadow-[0_0_30px_rgba(37,99,235,0.3)] transition-all active:scale-95"
        >
          <Download className="w-5 h-5" />
          Download Resume
        </a>
      </div>
    </motion.div>
  );
};




const Achievements = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 mt-12 px-2">
      {achievements.map((achievement, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="group cursor-pointer"
        >
          <div className="aspect-[16/10] overflow-hidden rounded-[24px] mb-6 bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-white/5 flex items-center justify-center relative group-hover:border-white/10 transition-all duration-500">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] from-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="w-full h-full overflow-hidden transform transition-transform duration-700 group-hover:scale-110">
              <img src={achievement.image} alt={achievement.title} className={`w-full h-full ${achievement.fit || 'object-cover'} opacity-80 group-hover:opacity-100 transition-opacity`} />
            </div>
            <div className="absolute bottom-4 right-4 text-[10px] font-mono tracking-widest text-white/50 uppercase font-bold bg-black/50 px-2 py-1 rounded backdrop-blur-sm">
              {achievement.date}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-white leading-tight group-hover:text-yellow-400 transition-colors">
              {achievement.title}
            </h3>
            <p className="text-sm font-medium text-slate-400 uppercase tracking-widest">
              {achievement.organization}
            </p>
            <div className="pt-2">
              <a
                href={achievement.link}
                className="inline-flex items-center text-[#E5E7EB] text-sm font-medium hover:opacity-100 opacity-90 transition-all gap-1 group/link"
              >
                <span className="border-b border-transparent group-hover/link:border-[#E5E7EB] pb-0.5 transition-all">
                  View details
                </span>
                <ChevronRight className="w-4 h-4 mt-0.5 transform group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// Updated Certifications section to include mobile view styling
const Certifications = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 mt-12 px-2">
      {certifications.map((cert, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="group cursor-pointer"
        >
          <div className={`aspect-[16/10] overflow-hidden rounded-[24px] mb-6 bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-white/5 flex items-center justify-center relative group-hover:border-${cert.color}-500/20 transition-all duration-500`}>
            <div className={`absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] from-${cert.color}-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            <div className="w-full h-full overflow-hidden transform transition-transform duration-700 group-hover:scale-110 text-white">
              <img src={cert.image} alt={cert.title} className={`w-full h-full ${cert.fit || 'object-cover'} opacity-80 group-hover:opacity-100 transition-opacity`} />
            </div>
            <div className="absolute top-4 right-4 text-[10px] font-mono tracking-widest text-white/50 uppercase font-bold bg-black/50 px-2 py-1 rounded backdrop-blur-sm">
              ID: {cert.credentialId.split('-').pop()}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-white leading-tight group-hover:text-blue-400 transition-colors">
              {cert.title}
            </h3>
            <p className={`text-sm font-medium text-${cert.color}-400/80 uppercase tracking-widest`}>
              {cert.issuer} • {cert.date}
            </p>
            <div className="pt-2">
              <a
                href={cert.link}
                className="inline-flex items-center text-[#E5E7EB] text-sm font-medium hover:opacity-100 opacity-90 transition-all gap-1 group/link"
              >
                <span className="border-b border-transparent group-hover/link:border-[#E5E7EB] pb-0.5 transition-all">
                  Verify Certificate
                </span>
                <ChevronRight className="w-4 h-4 mt-0.5 transform group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};


// Projects Component
// Projects Component
const ProjectsList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 px-2">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group relative overflow-hidden rounded-[32px] bg-[#1E293B]/40 border border-white/10 hover:border-primary/50 transition-all duration-500 min-h-[300px]"
        >
          <div className="aspect-video overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-100 transition-opacity"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
          </div>

          <div className="p-8 absolute bottom-0 left-0 right-0 transform translate-y-6 group-hover:translate-y-0 transition-all duration-500">
            <div className="flex justify-between items-end gap-4">
              <div className="flex-1">
                <p className="text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-3">{project.tech}</p>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-xs text-slate-400 max-w-sm opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>
              </div>
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 12 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-black shadow-2xl transition-all"
              >
                <ExternalLink className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// Tech Stack Component
const TechStack = () => {
  const techData = {
    Frontend: [
      { name: "ReactJs", icon: "⚛️", color: "from-cyan-500/20 to-blue-500/20", borderColor: "border-cyan-500/30" },
      { name: "NextJs", icon: "▲", color: "from-gray-700/20 to-black/20", borderColor: "border-gray-500/30" },
      { name: "Recoil", icon: "🔄", color: "from-blue-500/20 to-purple-500/20", borderColor: "border-blue-500/30" },
      { name: "Zustand", icon: "🐻", color: "from-amber-500/20 to-orange-500/20", borderColor: "border-amber-500/30" },
      { name: "Redux", icon: "🔮", color: "from-purple-500/20 to-pink-500/20", borderColor: "border-purple-500/30" },
      { name: "React-Query", icon: "🔍", color: "from-red-500/20 to-pink-500/20", borderColor: "border-red-500/30" },
      { name: "Tailwind", icon: "💨", color: "from-cyan-400/20 to-blue-600/20", borderColor: "border-cyan-400/30" },
      { name: "Chakra-UI", icon: "⚡", color: "from-teal-500/20 to-green-500/20", borderColor: "border-teal-500/30" },
      { name: "Shadcn", icon: "🎨", color: "from-slate-500/20 to-gray-600/20", borderColor: "border-slate-500/30" },
      { name: "Magic-UI", icon: "✨", color: "from-pink-500/20 to-purple-500/20", borderColor: "border-pink-500/30" },
      { name: "Material UI", icon: "🎯", color: "from-blue-600/20 to-indigo-600/20", borderColor: "border-blue-600/30" },
    ],
    Backend: [
      { name: "Node", icon: "🟢", color: "from-green-600/20 to-emerald-600/20", borderColor: "border-green-600/30" },
      { name: "Express", icon: "🚂", color: "from-gray-600/20 to-slate-700/20", borderColor: "border-gray-600/30" },
      { name: "MongoDB", icon: "🍃", color: "from-green-500/20 to-lime-600/20", borderColor: "border-green-500/30" },
      { name: "Mongoose", icon: "🦡", color: "from-red-600/20 to-rose-600/20", borderColor: "border-red-600/30" },
      { name: "MySQL", icon: "🐬", color: "from-blue-500/20 to-cyan-500/20", borderColor: "border-blue-500/30" },
      { name: "Prisma", icon: "🔷", color: "from-indigo-500/20 to-blue-600/20", borderColor: "border-indigo-500/30" },
      { name: "Drizzle", icon: "💧", color: "from-emerald-500/20 to-teal-500/20", borderColor: "border-emerald-500/30" },
      { name: "Redis", icon: "🔴", color: "from-red-500/20 to-orange-500/20", borderColor: "border-red-500/30" },
      { name: "NextJs", icon: "▲", color: "from-gray-700/20 to-black/20", borderColor: "border-gray-500/30" },
      { name: "Convex-Db", icon: "🔺", color: "from-orange-500/20 to-red-500/20", borderColor: "border-orange-500/30" },
      { name: "PostgreSQL", icon: "🐘", color: "from-blue-600/20 to-indigo-700/20", borderColor: "border-blue-600/30" },
    ],
    Languages: [
      { name: "JavaScript", icon: "JS", color: "from-yellow-400/20 to-yellow-600/20", borderColor: "border-yellow-400/30" },
      { name: "TypeScript", icon: "TS", color: "from-blue-500/20 to-blue-700/20", borderColor: "border-blue-500/30" },
      { name: "Java", icon: "☕", color: "from-red-600/20 to-orange-600/20", borderColor: "border-red-600/30" },
      { name: "Python", icon: "🐍", color: "from-blue-400/20 to-yellow-400/20", borderColor: "border-blue-400/30" },
      { name: "C++", icon: "C++", color: "from-blue-600/20 to-purple-600/20", borderColor: "border-blue-600/30" },
    ],
    Other: [
      { name: "Git", icon: "🔀", color: "from-orange-600/20 to-red-600/20", borderColor: "border-orange-600/30" },
      { name: "Github", icon: "🐙", color: "from-gray-700/20 to-black/20", borderColor: "border-gray-700/30" },
      { name: "Docker", icon: "🐳", color: "from-blue-500/20 to-cyan-500/20", borderColor: "border-blue-500/30" },
      { name: "Postman", icon: "📮", color: "from-orange-500/20 to-red-500/20", borderColor: "border-orange-500/30" },
      { name: "Cloudinary", icon: "☁️", color: "from-blue-400/20 to-indigo-500/20", borderColor: "border-blue-400/30" },
      { name: "Linux", icon: "🐧", color: "from-yellow-500/20 to-orange-500/20", borderColor: "border-yellow-500/30" },
      { name: "Socket-IO", icon: "🔌", color: "from-gray-700/20 to-slate-800/20", borderColor: "border-gray-700/30" },
    ],
  };

  return (
    <div className="mt-12 px-2">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {Object.entries(techData).map(([category, techs], categoryIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: categoryIndex * 0.1 }}
            className="group"
          >
            <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#1E293B]/60 to-[#0F172A]/60 border border-white/10 backdrop-blur-xl p-8 hover:border-white/20 transition-all duration-500">
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Category Title */}
              <div className="relative z-10 mb-6">
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-2">
                  {category}
                </h3>
                <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
              </div>

              {/* Tech badges */}
              <div className="relative z-10 flex flex-wrap gap-3">
                {techs.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.1 + index * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className={`group/badge relative overflow-hidden rounded-xl bg-gradient-to-br ${tech.color} border ${tech.borderColor} backdrop-blur-sm px-4 py-2.5 cursor-pointer transition-all duration-300`}
                  >
                    {/* Shine effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/badge:translate-x-full transition-transform duration-700" />

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
        ))}
      </div>
    </div>
  );
};


// Main component - Enhanced with better animations and loading states
const ProfessionalProfile = () => {
  const [activeTab, setActiveTab] = useState("resume");
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [theme, setTheme] = useState("blue"); // New theme state for dynamic theming

  // Enhanced effect for smoother page loading
  useEffect(() => {
    const loadTimer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    const visibilityTimer = setTimeout(() => {
      setIsVisible(true);
    }, 600);

    return () => {
      clearTimeout(loadTimer);
      clearTimeout(visibilityTimer);
    };
  }, []);


  // Enhanced tabs with better visual styling
  const tabs = [
    { id: "resume", label: "Resume", icon: <FileText className="h-4 w-4" /> },
    { id: "projects", label: "Projects", icon: <Briefcase className="h-4 w-4" /> },
    { id: "achievements", label: "Achievements", icon: <Award className="h-4 w-4" /> },
    { id: "certifications", label: "Certifications", icon: <GraduationCap className="h-4 w-4" /> },
  ];

  // Loading state UI
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#000000]">
        <div className="w-16 h-16 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <section id="experience" className="py-12 md:py-24 px-4 bg-transparent text-gray-200 relative overflow-hidden min-h-screen">
      {/* Local background removed to show global background */}

      <div className={`max-w-5xl mx-auto relative z-10 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

        <div className="flex flex-wrap justify-center items-center gap-4 mb-10">
          <div className="flex flex-wrap justify-center gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full transition-all duration-300 ${activeTab === tab.id
                  ? `bg-gradient-to-r from-${theme}-600 to-purple-600 text-white shadow-lg shadow-${theme}-900/20`
                  : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/70"
                  }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>


        {activeTab === "resume" && (
          <div className="animate-fadeIn">
            <ResumePreview />
          </div>
        )}

        {activeTab === "projects" && (
          <div className="animate-fadeIn">
            <ProjectsList />
          </div>
        )}

        {activeTab === "achievements" && (
          <div className="animate-fadeIn">
            <Achievements />
          </div>
        )}

        {activeTab === "certifications" && (
          <div className="animate-fadeIn">
            <Certifications />
          </div>
        )}


      </div>
    </section>
  );
};

function Trophy() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trophy">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 22v-4" />
      <path d="M14 22v-4" />
      <path d="M12 2v8" />
      <path d="M12 10c4 0 8-1 8-6H4c0 5 4 6 8 6Z" />
    </svg>
  );
}

function Shield() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function Server() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-server">
      <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
      <line x1="6" x2="6" y1="6" y2="6" />
      <line x1="6" x2="6" y1="18" y2="18" />
    </svg>
  );
}

function Cloud() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-cloud">
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  );
}

function Brain() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-brain">
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
    </svg>
  );
}

function GitHub({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}


function Twitter({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

export default ProfessionalProfile;