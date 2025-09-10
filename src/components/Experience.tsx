import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Download, FileText, Clock, ChevronRight, Star, ExternalLink, Mail, Calendar, CheckCircle, GraduationCap, Sparkles, Code, Briefcase, Users, Upload
} from "lucide-react";
import websiteImg from '../img/summer kart.webp';
import blogimage from '../img/blog.webp';
import safety from '../img/ai safety.webp';
import currency from '../img/currency.webp';
// Achievement data
const achievements = [
  {
    title: "Industry Recognition Award",
    organization: "Tech Innovation Summit",
    date: "November 2023",
    description: "Recognized for contributions to open-source ML frameworks and innovative deployments in production environments.",
    link: "#",
    icon: <Award />
  },
  {
    title: "1st Place Hackathon Winner",
    organization: "Global Dev Challenge",
    date: "June 2022",
    description: "Led a team of 4 developers to create an AI-powered accessibility tool that won first place among 200+ international teams.",
    link: "#",
    icon: <Trophy />
  },
  {
    title: "Published Research Paper",
    organization: "International Journal of Computer Science",
    date: "August 2021",
    description: "Research on optimization techniques for deep learning models was published and cited in over 30 subsequent papers.",
    link: "#",
    icon: <FileText />
  },
  {
    title: "Open Source Contributor",
    organization: "Major Framework",
    date: "2020 - Present",
    description: "Core contributor with 50+ accepted pull requests improving performance and adding new features.",
    link: "#",
    icon: <Code />
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
    color: "blue"
  },
  {
    title: "Hackaton ",
    issuer: "WEB-E=-STAND",
    date: "feb 2025",
    expires: "feb 2025",
    credentialId: "WEB-E-2025-12345",
    link: "https://www.dropbox.com/scl/fi/zmbb3jv3qmw3uffiaav0l/web-e-stand.pdf?rlkey=1ixxyburv2ci7jfjtrh859fqm&st=7johk0h5&dl=0",
    color: "green"
  },
  {
    title: "TensorFlow Developer Certificate",
    issuer: "Google",
    date: "January 2022",
    expires: "N/A (Non-expiring)",
    credentialId: "TF-DEV-345678",
    link: "#",
    color: "orange"
  },
  {
    title: "Microsoft Certified: Azure DevOps Engineer Expert",
    issuer: "Microsoft",
    date: "November 2021",
    expires: "November 2024",
    credentialId: "MS-ADOE-901234",
    link: "#",
    color: "indigo"
  },
  {
    title: "Certified Kubernetes Administrator (CKA)",
    issuer: "Cloud Native Computing Foundation",
    date: "March 2021",
    expires: "March 2024",
    credentialId: "CKA-567890",
    link: "#",
    color: "purple"
  }
];

const colorMap = {
  blue: { bg: "from-blue-600/30 to-purple-600/30", tagBg: "bg-blue-900/30", text: "text-blue-300", hover: "hover:text-blue-300" },
  cyan: { bg: "from-cyan-600/30 to-blue-600/30", tagBg: "bg-cyan-900/30", text: "text-cyan-300", hover: "hover:text-cyan-300" },
  purple: { bg: "from-purple-600/30 to-blue-600/30", tagBg: "bg-purple-900/30", text: "text-purple-300", hover: "hover:text-purple-300" },
  green: { bg: "from-green-600/30 to-blue-600/30", tagBg: "bg-green-900/30", text: "text-green-300", hover: "hover:text-green-300" },
};

// Updated the project cards to allow adding an image instead of an icon
const projects = [
  {
    title: "Currency Convertor",
    description: "Currency converter quickly converts amounts between different international currencies in real-time.",
    tags: ["React", "Api", "Currency Convertor"],
    link: "https://currency-convertor-taupe-ten.vercel.app/",
    color: "blue",
    // image: require('../img/real-time-tracking.jpg').default // Fix for require with ES modules
    image: currency
  },
  {
    title: "Blog Editor Save and Draft",
    description: "Is based on your Blog editing , save draft, and published over the internet",
    tags: ["React.js", "Docker", "flask", "Django"],
    link: "https://blog-create-6huw.vercel.app/",
    color: "cyan",
    image: blogimage
  },
  {
    title: "Ai Safety Watchtower Dashboard",
    description: "Library for optimizing deep learning model performance on edge devices.",
    tags: ["React", "Typescript", "vite"],
    link: "https://ai-safety-watchtower-dashboard.vercel.app/",
    color: "purple",
    image: safety
  },
  {
    title: "Summer collection",
    description: "Zero-trust architecture implementation with real-time threat monitoring.",
    tags: ["React", "Typescript", "vite"],
    link: "https://summerkart.vercel.app/",
    color: "green",
    image: websiteImg
  }
];



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



// Enhanced Resume Preview Card with better hover effects
const ResumePreview = ({ onDownload, onUpload }) => {
  const [profileImage, setProfileImage] = useState(null);
  return (
    <div className="relative bg-gray-900/60 border border-gray-700/50 rounded-lg p-6 backdrop-blur-sm mb-8 group hover:shadow-lg hover:shadow-blue-900/30 transition-all duration-300" style={{ height: 'auto', minHeight: '300px' }}>
      <div className="absolute -top-3 -right-3 flex gap-2">
      </div>
      <div className="flex flex-col md:flex-row items-start gap-6">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white mb-2">Resume</h3>
          <p className="text-gray-300 mb-4">
          Hi Myself kuldeep Prajapati , I am recently pursuing a B.Tech Degree at Lovely Professional University in Punjab,
          i Speclised in Machine learning and Artfical Engineering and Devops
          A resume is made to present your skills, education, experiences, 
          and achievements in a clear and professional way. 
          It acts as a marketing tool that introduces you to employers, 
          helping them quickly see why you're a good fit for a job. 
          A strong resume increases your chances of getting shortlisted for interviews.</p>
          <a
            href="https://www.dropbox.com/scl/fi/azp1jegvrywvefpkwvmj3/updated-cv.pdf?rlkey=gdtqxcx3elftv4hipb386dg8x&dl=0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-gray-800 text-white border border-gray-700/50 rounded-lg shadow-sm hover:shadow-xl hover:bg-gray-700/70 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
          >
            Click Me
          </a>

        </div>
      </div>
    </div>
  );
};






// Updated FeaturedProjects component to include mobile view styling
const FeaturedProjects = () => {
  return (
    <div className="mb-12 backdrop-blur-sm bg-[#323845]/70 border border-gray-700/50 rounded-lg p-6 hover:shadow-xl hover:shadow-blue-900/20 transition-all duration-300">
      <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
        <Star className="mr-3 text-blue-400" />
        Projects
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800/60 rounded-lg overflow-hidden hover:bg-gray-800/80 transition-all duration-300 group">
            <div className="h-32 relative">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-5">
              <h4 className={`text-lg font-semibold text-white mb-2 group-hover:text-${project.color}-300 transition-colors`}>{project.title}</h4>
              <p className="text-gray-300 text-sm mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className={`px-2 py-1 bg-${project.color}-900/30 text-${project.color}-300 text-xs rounded-full`}>{tag}</span>
                ))}
              </div>
              <a href={project.link} className={`inline-flex items-center text-sm text-${project.color}-400 hover:text-${project.color}-300 transition-colors`}>
                View project <ChevronRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Fixed mismatched and missing closing tags for JSX components
const Achievements = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {achievements.map((achievement, index) => (
        <Card
          key={index}
          className="backdrop-blur-sm bg-[#323845]/70 hover:bg-[#383E4E]/90 border border-gray-700/50 hover:shadow-xl hover:shadow-blue-900/20 transform transition-all duration-500 hover:-translate-y-1 group"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <CardContent className="p-5 md:p-6">
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-start">
                <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 p-3 rounded-full group-hover:scale-105 transition-transform duration-300">
                  {/* Use the icon property */}
                  {achievement.icon}
                </div>
                <span className="text-sm text-gray-400 flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {achievement.date}
                </span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1 text-center sm:text-left">{achievement.title}</h3>
                <p className="text-yellow-400 font-medium mb-3 text-center sm:text-left">{achievement.organization}</p>
                <p className="text-gray-300 text-sm text-center sm:text-left">{achievement.description}</p>
              </div>
              <div className="mt-auto pt-2 text-center sm:text-left">
                <a
                  href={achievement.link}
                  className="inline-flex items-center text-sm text-yellow-300 hover:text-yellow-200 transition-colors group"
                >
                  View details
                  <ExternalLink className="ml-1 h-3.5 w-3.5 transform group-hover:translate-x-0.5 transition-transform duration-200" />
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

// Updated Certifications section to include mobile view styling
const Certifications = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {certifications.map((cert, index) => (
        <Card
          key={index}
          className={`backdrop-blur-sm bg-[#323845]/70 hover:bg-[#383E4E]/90 border border-gray-700/50 hover:shadow-xl hover:shadow-${cert.color}-900/20 transform transition-all duration-500 hover:-translate-y-1 group`}
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <CardContent className="p-5 relative overflow-hidden">
            <div className={`absolute top-0 right-0 w-32 h-32 bg-${cert.color}-500/5 rounded-full blur-2xl transform translate-x-10 -translate-y-10 group-hover:bg-${cert.color}-500/10 transition-all duration-500`}></div>

            <div className="flex items-start justify-between mb-4">
              <div className={`bg-gradient-to-br from-${cert.color}-500/20 to-blue-500/20 p-2.5 rounded-full group-hover:scale-105 transition-transform duration-300`}>
                <GraduationCap className={`text-${cert.color}-400 h-5 w-5`} />
              </div>
              <a
                href={cert.link}
                className={`flex items-center justify-center bg-${cert.color}-900/30 hover:bg-${cert.color}-800/40 text-${cert.color}-300 p-1.5 rounded-full transform transition-all duration-300 hover:scale-110`}
                title="Verify Certificate"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>

            <h3 className="text-md font-bold text-white mb-1 line-clamp-2">{cert.title}</h3>
            <p className={`text-${cert.color}-400 font-medium text-sm mb-3`}>{cert.issuer}</p>

            <div className="space-y-2 mt-4">
              <div className="flex justify-between items-center text-xs text-gray-400">
                <span>Issue Date</span>
                <span className="text-white">{cert.date}</span>
              </div>
              <div className="flex justify-between items-center text-xs text-gray-400">
                <span>Expiration</span>
                <span className="text-white">{cert.expires}</span>
              </div>
              <div className="flex justify-between items-center text-xs text-gray-400">
                <span>Credential ID</span>
                <span className={`text-${cert.color}-300 font-mono`}>{cert.credentialId}</span>
              </div>
            </div>
 
            <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-${cert.color}-500 to-blue-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300`}></div>
          </CardContent>
        </Card>
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

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  // Enhanced download resume function with feedback
  const handleDownloadResume = () => {
    alert("Resume download started!");
  };

  // Enhanced theme toggle function
  const toggleTheme = () => {
    const themes = ["blue", "purple", "cyan", "green"];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  // Enhanced tabs with better visual styling
  const tabs = [
    { id: "resume", label: "Resume", icon: <FileText className="h-4 w-4" /> },
    { id: "achievements", label: "Achievements", icon: <Award className="h-4 w-4" /> },
    { id: "certifications", label: "Certifications", icon: <GraduationCap className="h-4 w-4" /> },
    // { id: "projects", label: "All Projects", icon: <Briefcase className="h-4 w-4" /> }
  ];

  // Loading state UI
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#2A2F3C]">
        <div className="w-16 h-16 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <section className="py-12 md:py-20 px-4 bg-[#2A2F3C] text-gray-200 relative overflow-hidden min-h-screen">
      <AnimatedBackground />

      <div className={`max-w-5xl mx-auto relative z-10 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
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

        {activeTab === "resume" && (
          <div className="animate-fadeIn">
            <ResumePreview onDownload={handleDownloadResume} onUpload={() => alert('Upload functionality triggered!')} />
            <FeaturedProjects />
          </div>
        )}

        {activeTab === "achievements" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="backdrop-blur-sm bg-[#323845]/70 hover:bg-[#383E4E]/90 border border-gray-700/50 hover:shadow-xl hover:shadow-blue-900/20 transform transition-all duration-500 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-5 md:p-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-start">
                      <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 p-3 rounded-full group-hover:scale-105 transition-transform duration-300">
                        <Award className="text-yellow-400 h-5 w-5 md:h-6 md:w-6" />
                      </div>
                      <span className="text-sm text-gray-400 flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {achievement.date}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-white mb-1 text-center sm:text-left">{achievement.title}</h3>
                      <p className="text-yellow-400 font-medium mb-3 text-center sm:text-left">{achievement.organization}</p>
                      <p className="text-gray-300 text-sm text-center sm:text-left">{achievement.description}</p>
                    </div>

                    <div className="mt-auto pt-2 text-center sm:text-left">
                      <a
                        href={achievement.link}
                        className="inline-flex items-center text-sm text-yellow-300 hover:text-yellow-200 transition-colors group"
                      >
                        View details
                        <ExternalLink className="ml-1 h-3.5 w-3.5 transform group-hover:translate-x-0.5 transition-transform duration-200" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <div className="md:col-span-2 mt-6">
              <Card className="backdrop-blur-sm bg-gradient-to-br from-[#323845]/90 to-[#2A2F3C]/90 border border-yellow-500/20 hover:shadow-xl hover:shadow-yellow-900/10 transition-all duration-500">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="bg-yellow-500/10 p-4 rounded-full">
                      <Star className="h-10 w-10 text-yellow-400" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeTab === "certifications" && (
          <div className="animate-fadeIn">
            <Certifications />
            <div className="mt-12 bg-gradient-to-br from-[#2F3545] to-[#252A38] rounded-lg p-6 border border-gray-700/30 shadow-lg">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-32 h-32 relative group perspective">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/30 transform group-hover:rotateY-180 transition-all duration-1000 preserve-3d">
                    <div className="absolute inset-0 flex items-center justify-center backface-hidden">
                      <GraduationCap className="h-16 w-16 text-white" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center backface-hidden rotateY-180">
                      <Star className="h-16 w-16 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "projects" && (
          <div className="animate-fadeIn">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...projects, ...projects.slice(0, 2)].map((project, index) => (
                <Card
                  key={index}
                  className={`backdrop-blur-sm bg-[#323845]/70 hover:bg-[#383E4E]/90 border border-gray-700/50 hover:shadow-xl hover:shadow-${project.color}-900/20 transform transition-all duration-500 hover:-translate-y-1 group overflow-hidden`}
                >
                  <div className={`h-2 bg-gradient-to-r from-${project.color}-500 to-${project.color === 'blue' ? 'purple' : 'blue'}-500`}></div>
                  <CardContent className="p-5 relative">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`bg-${project.color}-500/10 p-2.5 rounded-full group-hover:scale-105 transition-transform duration-300`}></div>
                      <div className="flex gap-2">
                        {project.tags.slice(0, 1).map((tag, tagIndex) => (
                          <span key={tagIndex} className={`px-2 py-1 bg-${project.color}-900/30 text-${project.color}-300 text-xs rounded-full`}>{tag}</span>
                        ))}
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-300 text-sm mb-4">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(1).map((tag, tagIndex) => (
                        <span key={tagIndex} className={`px-2 py-1 bg-${project.color}-900/30 text-${project.color}-300 text-xs rounded-full`}>{tag}</span>
                      ))}
                    </div>

                    <a
                      href={project.link}
                      className={`inline-flex items-center text-sm text-${project.color}-400 hover:text-${project.color}-300 transition-colors group`}
                    >
                      View project details
                      <ChevronRight className="ml-1 h-4 w-4 transform group-hover:translate-x-0.5 transition-transform duration-200" />
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
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