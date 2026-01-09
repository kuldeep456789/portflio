import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Award, Download, FileText, Clock, ChevronRight, Star, ExternalLink, Mail, Calendar, CheckCircle, GraduationCap, Sparkles, Code, Briefcase, Users, Upload, ArrowRight
} from "lucide-react";
import resumeThumb from '../img/kuldeep02-1.webp';
import aiSafety from '../img/ai safety.webp';
import blogImg from '../img/blog.webp';
import currencyImg from '../img/currency.webp';
import summerKart from '../img/summer kart.webp';
import websiteImg from '../img/profile.webp';
// Achievement data
const achievements = [
  {
    title: "Industry Recognition Award",
    organization: "Tech Innovation Summit",
    date: "November 2023",
    description: "Recognized for contributions to open-source ML frameworks and innovative deployments in production environments.",
    link: "#",
    image: currencyImg
  },
  {
    title: "1st Place Hackathon Winner",
    organization: "Global Dev Challenge",
    date: "June 2022",
    description: "Led a team of 4 developers to create an AI-powered accessibility tool that won first place among 200+ international teams.",
    link: "#",
    image: summerKart
  },
  {
    title: "Published Research Paper",
    organization: "International Journal of Computer Science",
    date: "August 2021",
    description: "Research on optimization techniques for deep learning models was published and cited in over 30 subsequent papers.",
    link: "#",
    image: blogImg
  },
  {
    title: "Open Source Contributor",
    organization: "Major Framework",
    date: "2020 - Present",
    description: "Core contributor with 50+ accepted pull requests improving performance and adding new features.",
    link: "#",
    image: aiSafety
  }
];

// Certification data (removed duplicate CKA entry)
const certifications = [
  {
    title: "Cipher school from (java)",
    issuer: "Cipher school",
    date: "April 2024",
    expires: "May 2024",
    credentialId: "CSW2024-13223",
    link: "https://www.dropbox.com/scl/fi/irwo2ehn9qm5vyjyne9k3/cipher_school-java-summer-term.pdf?rlkey=qjlajrwuzxr94d8q823kec7be&st=71o9a1p5&dl=0",
    color: "blue",
    image: currencyImg
  },
  {
    title: "Hackaton ",
    issuer: "WEB-E=-STAND",
    date: "feb 2025",
    expires: "feb 2025",
    credentialId: "WEB-E-2025-12345",
    link: "https://www.dropbox.com/scl/fi/zmbb3jv3qmw3uffiaav0l/web-e-stand.pdf?rlkey=1ixxyburv2ci7jfjtrh859fqm&st=7johk0h5&dl=0",
    color: "green",
    image: summerKart
  },
  {
    title: "TensorFlow Developer Certificate",
    issuer: "Google",
    date: "January 2022",
    expires: "N/A (Non-expiring)",
    credentialId: "TF-DEV-345678",
    link: "#",
    color: "orange",
    image: aiSafety
  },
  {
    title: "Microsoft Certified: Azure DevOps Engineer Expert",
    issuer: "Microsoft",
    date: "November 2021",
    expires: "November 2024",
    credentialId: "MS-ADOE-901234",
    link: "#",
    color: "indigo",
    image: blogImg
  },
  {
    title: "Certified Kubernetes Administrator (CKA)",
    issuer: "Cloud Native Computing Foundation",
    date: "March 2021",
    expires: "March 2024",
    credentialId: "CKA-567890",
    link: "#",
    color: "purple",
    image: summerKart
  }
];

// Projects data
const projects = [
  {
    title: "Individual Look: Luxury Experience",
    tech: "React, Framer Motion, 3D",
    description: "The Audi A4 luxury sedan stands out with its broad wings, striking sill trims, and distinctive wheels. This digital experience brings that refinement to life with LED lighting effects and trapezoid tailpipe highlights, emphasizing a strong and elegant presence.",
    link: "https://github.com/kuldeep456789",
    image: websiteImg,
    featured: true
  },
  {
    title: "Summer Kart - E-commerce",
    tech: "React, Node.js, MongoDB",
    description: "A full-stack e-commerce platform with real-time inventory management and secure payment integration.",
    link: "https://github.com/kuldeep456789",
    image: summerKart
  },
  {
    title: "AI Safety Monitor",
    tech: "Python, TensorFlow, Flask",
    description: "Machine learning model to detect and flag potential safety risks in real-time communication streams.",
    link: "https://github.com/kuldeep456789",
    image: aiSafety
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

          {/* Quick Actions Hover */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20">
            <a
              href={resumeThumb}
              target="_blank"
              className="px-8 py-3 rounded-full bg-white text-black font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:bg-blue-500 hover:text-white"
            >
              <ExternalLink className="w-4 h-4" />
              View Full Size
            </a>
          </div>
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
              <img src={achievement.image} alt={achievement.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
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
              <img src={cert.image} alt={cert.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
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
    <div className="space-y-16 mt-12 px-2">
      {projects.map((project, index) => (
        project.featured ? (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row items-center gap-12 group"
          >
            {/* Left Side: Content */}
            <div className="flex-1 space-y-8">
              <div className="flex items-center gap-6 text-gray-500 font-mono text-sm">
                <span className="text-white border-b border-white pb-1">01</span>
                <span>02</span>
                <ChevronRight className="w-4 h-4" />
              </div>

              <div className="space-y-4">
                <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
                  {project.description}
                </p>
              </div>

              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 10 }}
                className="flex items-center gap-2 text-primary font-bold group/link"
              >
                Explore Luxury Design
                <ArrowRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
              </motion.a>
            </div>

            {/* Right Side: Image */}
            <div className="flex-[1.5] relative">
              <div className="absolute -inset-4 bg-primary/10 blur-[100px] rounded-full opacity-20 group-hover:opacity-40 transition-opacity" />
              <div className="relative overflow-hidden rounded-[40px] border border-white/10 aspect-[16/10]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105"
                />
              </div>

              {/* Floating Tech Label */}
              <div className="absolute bottom-6 right-6 px-6 py-2 bg-black/80 backdrop-blur-md rounded-full border border-white/10 text-xs font-bold tracking-[0.2em] text-white">
                {project.tech}
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-[32px] bg-[#1E293B]/40 border border-white/10 hover:border-primary/50 transition-all duration-500"
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
        )
      ))}
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
    <section id="experience" className="py-12 md:py-24 px-4 bg-[#000000] text-gray-200 relative overflow-hidden min-h-screen">
      <AnimatedBackground />

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