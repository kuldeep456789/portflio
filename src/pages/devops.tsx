import { useState, useEffect } from 'react';
import { 
  GitBranch, 
  Server, 
  ChevronRight, 
  Star,
  Code,
  CheckCircle,
  ExternalLink
} from 'lucide-react';

// Define the card data structure
interface DevOpsCard {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  skills: Array<{name: string, level: number}>;
  highlights: string[];
  color: string;
  gradient: string;
  accentColor: string;
  darkGradient: string;
}

// Main component
export default function DevOpsCards() {
  // Card data - only CI/CD and Container Orchestration
  const cards: DevOpsCard[] = [
    {
      id: 1,
      title: "CI/CD Pipeline Expert",
      description: "Building robust delivery pipelines with comprehensive testing and deployment strategies",
      icon: <GitBranch size={28} />,
      skills: [
        {name: "Jenkins", level: 5},
        {name: "GitHub Actions", level: 5},
        {name: "GitLab CI", level: 4},
        {name: "CircleCI", level: 4},
        {name: "ArgoCD", level: 4},
        {name: "Tekton", level: 3}
      ],
      highlights: [
        "Reduced deployment time by 70% through pipeline optimization",
        "Implemented zero-downtime deployment strategy",
        "Built comprehensive automated testing frameworks"
      ],
      color: "bg-indigo-500",
      gradient: "from-indigo-500 to-purple-600",
      accentColor: "bg-indigo-400",
      darkGradient: "from-indigo-900 to-purple-900"
    },
    {
      id: 2,
      title: "Container Orchestration",
      description: "Managing and scaling containerized applications in production environments",
      icon: <Server size={28} />,
      skills: [
        {name: "Kubernetes", level: 5},
        {name: "Docker", level: 5},
        {name: "Helm", level: 4},
        {name: "Istio/Service Mesh", level: 4},
        {name: "Docker Swarm", level: 3},
        {name: "OpenShift", level: 4}
      ],
      highlights: [
        "Designed scalable microservices architecture with Kubernetes",
        "Implemented service mesh for enhanced security and observability",
        "Reduced infrastructure costs by 40% through container optimization"
      ],
      color: "bg-blue-500",
      gradient: "from-blue-500 to-blue-700",
      accentColor: "bg-blue-400",
      darkGradient: "from-blue-900 to-indigo-900"
    }
  ];

  // State for card being expanded and animations
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [skillAnimation, setSkillAnimation] = useState<{[key: string]: boolean}>({});

  // Trigger entrance animations
  useEffect(() => {
    setIsAnimating(true);
    
    // Stagger skill animations
    const animationTimer = setTimeout(() => {
      const animations: {[key: string]: boolean} = {};
      cards.forEach(card => {
        card.skills.forEach((skill, index) => {
          setTimeout(() => {
            setSkillAnimation(prev => ({
              ...prev,
              [`${card.id}-${index}`]: true
            }));
          }, index * 100);
        });
      });
    }, 500);
    
    return () => clearTimeout(animationTimer);
  }, []);

  // Function to render skill level stars with animation
  const renderSkillLevel = (level: number, cardId: number, skillIndex: number) => {
    const isAnimated = skillAnimation[`${cardId}-${skillIndex}`];
    
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={14} 
            className={`
              ${i < level ? 'fill-current text-white' : 'text-white opacity-30'}
              transition-all duration-300 delay-75
              ${isAnimated ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}
            `}
            style={{ transitionDelay: `${i * 100}ms` }}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-sm">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-3 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600">
          Pipeline & Container Expertise
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Automating software delivery workflows and managing containerized applications at scale
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`rounded-xl overflow-hidden shadow-lg transition-all duration-500
              ${isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
              ${expandedCard === card.id ? "transform scale-105 z-10 shadow-xl" : "hover:shadow-xl"}`}
            style={{ transitionDelay: `${card.id * 150}ms` }}
          >
            {/* Card Header with Gradient & Glass Effect */}
            <div className={`bg-gradient-to-r ${card.gradient} p-6 relative overflow-hidden`}>
              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-10" />
              <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-white bg-opacity-10 blur-xl" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-black bg-opacity-10 blur-lg" />
              
              <div className="flex items-center relative z-10">
                <div className="p-3 rounded-lg bg-white bg-opacity-20 mr-4 backdrop-blur-sm shadow-glow">
                  {card.icon}
                </div>
                <div className="text-white">
                  <h3 className="text-xl font-bold mb-1">{card.title}</h3>
                  <p className="text-white text-opacity-90 text-sm">{card.description}</p>
                </div>
              </div>
            </div>
            
            {/* Card Body */}
            <div className="bg-white p-6 relative">
              {/* Border Accent */}
              <div className={`absolute left-0 top-0 w-1 h-full ${card.color}`}></div>
              
              <div className="flex justify-between items-center mb-5">
                <h4 className="font-semibold text-gray-800">Technical Skills</h4>
                <button 
                  className={`flex items-center text-sm font-medium ${card.color} text-white px-3 py-1 rounded-full transition-all duration-300 shadow-sm hover:shadow ${
                    expandedCard === card.id ? "bg-opacity-90" : ""
                  }`}
                  onClick={() => setExpandedCard(expandedCard === card.id ? null : card.id)}
                >
                  {expandedCard === card.id ? "Hide" : "Details"} 
                  <ChevronRight size={16} className={`ml-1 transition-transform duration-300 ${
                    expandedCard === card.id ? "transform rotate-90" : ""
                  }`} />
                </button>
              </div>
              
              <div className="space-y-4 mb-6">
                {card.skills.slice(0, expandedCard === card.id ? 6 : 3).map((skill, index) => (
                  <div 
                    key={index} 
                    className={`flex justify-between items-center transition-all duration-500 ${
                      skillAnimation[`${card.id}-${index}`] ? "opacity-100" : "opacity-0 translate-y-2"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <span className="text-gray-700 flex-1 font-medium">{skill.name}</span>
                    <div className="ml-2 px-2 py-1 rounded-md bg-gradient-to-r from-gray-800 to-gray-900">
                      {renderSkillLevel(skill.level, card.id, index)}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Expand or Show highlights */}
              {expandedCard === card.id ? (
                <div className="pt-4 border-t border-gray-100 animate-fadeIn">
                  <h5 className="font-semibold text-gray-800 mb-3">Project Highlights</h5>
                  <div className="space-y-3">
                    {card.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle size={16} className={`${card.color.replace('bg-', 'text-')} mt-1 mr-2 flex-shrink-0`} />
                        <p className="text-sm text-gray-700">{highlight}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-4 flex justify-end">
                    <a 
                      href="#" 
                      className={`inline-flex items-center text-sm font-medium ${card.color.replace('bg-', 'text-')}`}
                    >
                      View detailed experience
                      <ExternalLink size={14} className="ml-1" />
                    </a>
                  </div>
                </div>
              ) : (
                <div className={`h-1 w-full mt-2 rounded-full bg-gradient-to-r ${card.gradient} opacity-75`}></div>
              )}
            </div>
          </div>
        ))}
      </div>
      
      {/* Add CSS for grid pattern and other effects */}
      <style>{`
        .bg-grid-pattern {
          background-image: linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }
        
        .shadow-glow {
          box-shadow: 0 0 15px rgba(255,255,255,0.15);
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}