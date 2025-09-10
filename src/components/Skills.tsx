import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useState, useEffect, useRef } from "react";
import { Database, Server, Code, ArrowRight, Zap } from "lucide-react";

const skills = {
  "Machine Learning": [
    { name: "TensorFlow", level: 90, color: "bg-blue-500" },
    { name: "PyTorch", level: 85, color: "bg-orange-500" },
    { name: "Scikit-learn", level: 95, color: "bg-green-500" },
  ],
  "DevOps": [
    { name: "Docker", level: 92, color: "bg-blue-400" },
    { name: "Kubernetes", level: 88, color: "bg-blue-600" },
    { name: "CI/CD", level: 90, color: "bg-green-400" },
  ],
  "Full Stack": [
    { name: "React", level: 95, color: "bg-cyan-400" },
    { name: "Node.js", level: 88, color: "bg-green-500" },
    { name: "Python", level: 92, color: "bg-blue-500" },
  ],
};

// Map categories to their icons
const categoryIcons = {
  "Machine Learning": <Database className="h-6 w-6" />,
  "DevOps": <Server className="h-6 w-6" />,
  "Full Stack": <Code className="h-6 w-6" />
};

// Add a color map for progress bar backgrounds
const colorMap = {
  "bg-blue-500": "#3b82f6",
  "bg-orange-500": "#f59e42",
  "bg-green-500": "#22c55e",
  "bg-blue-400": "#60a5fa",
  "bg-blue-600": "#2563eb",
  "bg-green-400": "#4ade80",
  "bg-cyan-400": "#22d3ee",
};

const Skills = () => {
  const [visibleSkills, setVisibleSkills] = useState({});
  const [activeCategory, setActiveCategory] = useState(null);
  const sectionRef = useRef(null);

  // Initialize progress animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // When section is visible, animate in each category with a delay
          Object.keys(skills).forEach((category, index) => {
            setTimeout(() => {
              setVisibleSkills(prev => ({
                ...prev,
                [category]: true
              }));
            }, index * 300);
          });
          
          // Set the first category as active after everything is visible
          setTimeout(() => {
            setActiveCategory(Object.keys(skills)[0]);
          }, Object.keys(skills).length * 300);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Function to get skill level class for different gradient colors
  const getProgressStyle = (level, color) => {
    return {
      width: `${level}%`,
      transition: "width 1.5s ease-out",
      background: colorMap[color] || "#fff"
    };
  };

  return (
    <section 
      ref={sectionRef} 
      className="py-16 md:py-24 px-4 relative overflow-hidden bg-gradient-to-b from-[#1A1F2C] to-[#262f40]"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse top-0 left-0" />
        <div className="absolute w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow bottom-0 right-0" />
        <div className="absolute w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float opacity-70 top-1/2 left-1/3" />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section header with animated underline */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 inline-block relative">
            Technical Expertise
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent transform scale-x-0 animate-expand-line" />
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            My professional journey has equipped me with expertise across multiple domains, 
            enabling me to build comprehensive solutions.
          </p>
        </div>

        {/* Category selection tabs */}
        <div className="flex justify-center mb-8 overflow-x-auto gap-2 md:gap-4 pb-2">
          {Object.keys(skills).map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-all duration-300 ${
                activeCategory === category 
                  ? "bg-primary text-white shadow-lg shadow-primary/20 scale-105" 
                  : "bg-white/10 text-gray-300 hover:bg-white/20"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              <span className={`transition-colors duration-300 ${activeCategory === category ? "text-white" : "text-primary"}`}>
                {categoryIcons[category]}
              </span>
              <span>{category}</span>
              {activeCategory === category && <Zap size={16} className="animate-pulse" />}
            </button>
          ))}
        </div>

        {/* Main card container with 3D effect */}
        <div className="perspective-1000">
          <div 
            className="transform transition-transform duration-700 preserve-3d relative"
            style={{ transform: `rotateY(${Object.keys(skills).indexOf(activeCategory) * 5}deg)` }}
          >
            {/* Active category card with skills */}
            {activeCategory && (
              <Card className="backdrop-blur-md bg-white/10 border border-white/20 shadow-xl transform transition-all duration-500">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-lg bg-primary/20 text-primary">
                        {categoryIcons[activeCategory]}
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-white">{activeCategory}</h3>
                    </div>
                    <div className="text-sm text-gray-400">
                      {skills[activeCategory].length} skills
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    {skills[activeCategory].map((skill, index) => (
                      <div 
                        key={skill.name} 
                        className="hover:translate-x-1 transition-all duration-300"
                        style={{ 
                          animationDelay: `${index * 200}ms`,
                          opacity: visibleSkills[activeCategory] ? 1 : 0,
                          transform: visibleSkills[activeCategory] ? "translateY(0)" : "translateY(20px)",
                          transition: "opacity 0.5s ease, transform 0.5s ease"
                        }}
                      >
                        <div className="flex justify-between mb-2 items-center">
                          <div className="flex items-center gap-2">
                            <ArrowRight size={14} className="text-primary" />
                            <span className="font-medium text-white">{skill.name}</span>
                          </div>
                          <span className="text-sm text-gray-300 font-mono">{skill.level}%</span>
                        </div>
                        
                        {/* Custom progress bar with gradient */}
                        <div className="h-2 w-full bg-gray-700/50 rounded-full overflow-hidden">
                          <div 
                            className="h-full rounded-full"
                            style={{
                              ...getProgressStyle(
                                visibleSkills[activeCategory] ? skill.level : 0,
                                skill.color
                              )
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
      
      {/* CSS for custom animations and patterns */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.05); opacity: 0.9; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-10px) translateX(10px); }
          50% { transform: translateY(0) translateX(20px); }
          75% { transform: translateY(10px) translateX(10px); }
        }
        
        @keyframes expand-line {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 8s infinite;
        }
        
        .animate-float {
          animation: float 15s infinite ease-in-out;
        }
        
        .animate-expand-line {
          animation: expand-line 1s forwards 0.5s;
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .preserve-3d {
          transform-style: preserve-3d;
        }
        
        .bg-grid-pattern {
          background-image: linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>
    </section>
  );
};

export default Skills;