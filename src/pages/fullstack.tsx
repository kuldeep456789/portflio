import { useState } from 'react';
import { Code, Database, Server, Layout, ChevronRight, Star } from 'lucide-react';

// Define the card data structure
interface SkillCard {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  skills: Array<{name: string, level: number}>;
  color: string;
  gradient: string;
  accentColor: string;
}

// Main component
export default function ResumeCards() {
  // Card data
  const cards: SkillCard[] = [
    {
      id: 1,
      title: "Frontend Development Specialist",
      description: "Proficient in building responsive, accessible user interfaces with modern JavaScript frameworks",
      icon: <Code size={28} />,
      skills: [
        {name: "React/Vue/Angular", level: 5},
        {name: "HTML5, CSS3, Sass/SCSS", level: 5},
        {name: "Responsive design", level: 4},
        {name: "UI/UX implementation", level: 4},
        {name: "State management", level: 5},
        {name: "Performance optimization", level: 4}
      ],
      color: "bg-blue-500",
      gradient: "from-blue-500 to-indigo-600",
      accentColor: "bg-blue-400"
    },
    {
      id: 2,
      title: "Backend Solution Architect",
      description: "Experienced in designing and implementing scalable server-side applications and RESTful APIs",
      icon: <Server size={28} />,
      skills: [
        {name: "Node.js/Express", level: 5},
        {name: "Python/Django/Flask", level: 4},
        {name: "Java/Spring Boot", level: 4},
        {name: "API development", level: 5},
        {name: "Database design", level: 4},
        {name: "Auth & security", level: 5}
      ],
      color: "bg-emerald-500",
      gradient: "from-emerald-500 to-green-600",
      accentColor: "bg-emerald-400"
    },
    {
      id: 3,
      title: "Database & Infrastructure Expert",
      description: "Skilled in database management, cloud deployment, and CI/CD implementation",
      icon: <Database size={28} />,
      skills: [
        {name: "SQL & NoSQL databases", level: 5},
        {name: "AWS/Azure/GCP", level: 4},
        {name: "Docker & Kubernetes", level: 4},
        {name: "CI/CD pipelines", level: 5},
        {name: "Infrastructure as Code", level: 4},
        {name: "Performance tuning", level: 4}
      ],
      color: "bg-purple-500",
      gradient: "from-purple-500 to-violet-600",
      accentColor: "bg-purple-400"
    },
    {
      id: 4,
      title: "Full-Cycle Project Developer",
      description: "End-to-end project experience from requirements gathering to deployment and maintenance",
      icon: <Layout size={28} />,
      skills: [
        {name: "Agile methodology", level: 5},
        {name: "Version control (Git)", level: 5},
        {name: "Test-driven development", level: 4},
        {name: "System architecture", level: 4},
        {name: "Team collaboration", level: 5},
        {name: "Technical documentation", level: 4}
      ],
      color: "bg-amber-500",
      gradient: "from-amber-500 to-orange-600",
      accentColor: "bg-amber-400"
    }
  ];

  // State for card being expanded
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  // Function to render skill level stars
  const renderSkillLevel = (level: number) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={12} 
            className={`${i < level ? 'fill-current text-white' : 'text-white opacity-30'}`} 
          />
        ))}
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto p-8 bg-gray-50 rounded-xl">
      <h2 className="text-4xl font-bold text-gray-800 mb-2 text-center">Full Stack Development</h2>
      <p className="text-gray-600 text-center mb-12 text-lg">Technical expertise and professional capabilities</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`rounded-xl overflow-hidden shadow-lg transition-all duration-300 ${
              expandedCard === card.id ? "transform scale-105 z-10" : "hover:shadow-xl"
            }`}
          >
            {/* Card Header with Gradient */}
            <div className={`bg-gradient-to-r ${card.gradient} p-5 text-white`}>
              <div className="flex items-center">
                <div className="p-3 rounded-lg bg-white bg-opacity-20 backdrop-blur-sm mr-4">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold">{card.title}</h3>
              </div>
              <p className="mt-3 text-white text-opacity-90 font-light">{card.description}</p>
            </div>
            
            {/* Card Body */}
            <div className="bg-white p-5">
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-semibold text-gray-700">Core Skills</h4>
                <button 
                  className={`flex items-center text-sm font-medium ${card.color} text-white px-3 py-1 rounded-full transform transition-transform duration-300 ${
                    expandedCard === card.id ? "rotate-90" : ""
                  }`}
                  onClick={() => setExpandedCard(expandedCard === card.id ? null : card.id)}
                >
                  Details <ChevronRight size={16} className="ml-1" />
                </button>
              </div>
              
              <div className="space-y-3">
                {card.skills.slice(0, expandedCard === card.id ? 6 : 3).map((skill, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-700 flex-1">{skill.name}</span>
                    <div className="ml-2">
                      {renderSkillLevel(skill.level)}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Bottom accent bar */}
              <div className={`h-1 w-full mt-5 rounded-full ${card.accentColor}`}></div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Bottom badge */}
      <div className="flex justify-center mt-12">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-200 text-gray-700 text-sm">
          <span className="font-medium">Full Stack Developer</span>
          <div className="w-2 h-2 rounded-full bg-green-500 ml-2 mr-1"></div>
          <span>Available for hire</span>
        </div>
      </div>
    </div>
  );
}