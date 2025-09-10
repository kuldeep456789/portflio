import { useState } from 'react';
import { Brain, Image, Code, MessageSquare, BarChart2, Database, ChevronRight, ChevronDown, 
  Monitor, ExternalLink, Eye, Lock, Cpu } from 'lucide-react';

export default function ModernAIPortfolioCards() {
  const [expandedSections, setExpandedSections] = useState({
    ml: null,
    cv: null,
    nlp: null
  });
  
  const [activeCard, setActiveCard] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const toggleSection = (card, section) => {
    setExpandedSections(prev => ({
      ...prev,
      [card]: prev[card] === section ? null : section
    }));
  };

  const handleCardClick = (card) => {
    setActiveCard(card === activeCard ? null : card);
  };

  return (
    <div className="bg-gray-100 p-8 min-h-screen">
      <div className="max-w-6xl mx-auto mb-8">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-2">AI Engineering Portfolio</h1>
        <p className="text-gray-600 text-center text-lg">Specialized expertise in machine learning, computer vision, and NLP</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Machine Learning Card */}
        <div 
          className={`bg-white rounded-2xl overflow-hidden transition-all duration-300 transform 
            ${hoveredCard === 'ml' ? 'scale-105' : ''} 
            ${activeCard === 'ml' ? 'ring-4 ring-blue-400 shadow-2xl' : 'shadow-lg hover:shadow-xl'}`}
          onMouseEnter={() => setHoveredCard('ml')}
          onMouseLeave={() => setHoveredCard(null)}
          onClick={() => handleCardClick('ml')}
        >
          <div className="bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700 p-6 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-indigo-300 opacity-20 rounded-full -ml-8 -mb-8"></div>
            
            <div className="flex items-center space-x-3 relative z-10">
              <div className="bg-white bg-opacity-20 p-2 rounded-lg">
                <Brain size={24} />
              </div>
              <h2 className="text-xl font-bold">Machine Learning</h2>
            </div>
            <p className="mt-2 text-blue-100 text-sm">Training computers to learn patterns</p>
          </div>
          
          <div className="p-6 space-y-4">
            <div 
              className={`bg-white border border-gray-100 rounded-xl p-4 shadow-sm transition-all duration-300
                ${expandedSections.ml === 'supervised' ? 'bg-blue-50' : 'hover:bg-blue-50'}`}
            >
              <div 
                className="flex items-center justify-between cursor-pointer" 
                onClick={(e) => {
                  e.stopPropagation();
                  toggleSection('ml', 'supervised');
                }}
              >
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Database className="text-blue-600" size={18} />
                  </div>
                  <h3 className="font-medium text-gray-800">Supervised Learning</h3>
                </div>
                <div className={`p-1 rounded-full transition-colors duration-300 ${expandedSections.ml === 'supervised' ? 'bg-blue-100' : 'bg-gray-100'}`}>
                  {expandedSections.ml === 'supervised' ? 
                    <ChevronDown size={16} className="text-blue-600" /> : 
                    <ChevronRight size={16} className="text-gray-600" />
                  }
                </div>
              </div>
              
              {expandedSections.ml === 'supervised' && (
                <div className="mt-3 ml-12 text-sm text-gray-600 space-y-2 animate-fadeIn">
                  <p className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                    <span>Decision Trees & Random Forests</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                    <span>Support Vector Machines</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                    <span>XGBoost & Gradient Boosting</span>
                  </p>
                </div>
              )}
            </div>

            <div 
              className={`bg-white border border-gray-100 rounded-xl p-4 shadow-sm transition-all duration-300
                ${expandedSections.ml === 'unsupervised' ? 'bg-blue-50' : 'hover:bg-blue-50'}`}
            >
              <div 
                className="flex items-center justify-between cursor-pointer" 
                onClick={(e) => {
                  e.stopPropagation();
                  toggleSection('ml', 'unsupervised');
                }}
              >
                <div className="flex items-center space-x-3">
                  <div className="bg-indigo-100 p-2 rounded-lg">
                    <BarChart2 className="text-indigo-600" size={18} />
                  </div>
                  <h3 className="font-medium text-gray-800">Unsupervised Learning</h3>
                </div>
                <div className={`p-1 rounded-full transition-colors duration-300 ${expandedSections.ml === 'unsupervised' ? 'bg-blue-100' : 'bg-gray-100'}`}>
                  {expandedSections.ml === 'unsupervised' ? 
                    <ChevronDown size={16} className="text-blue-600" /> : 
                    <ChevronRight size={16} className="text-gray-600" />
                  }
                </div>
              </div>
              
              {expandedSections.ml === 'unsupervised' && (
                <div className="mt-3 ml-12 text-sm text-gray-600 space-y-2 animate-fadeIn">
                  <p className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                    <span>K-means & Hierarchical Clustering</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                    <span>Principal Component Analysis</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                    <span>t-SNE & Dimensionality Reduction</span>
                  </p>
                </div>
              )}
            </div>

            <div className="pt-4 mt-2 border-t border-gray-200">
              <div className="flex flex-wrap gap-2">
                <span className="text-xs font-medium inline-flex items-center py-1.5 px-3 rounded-full text-blue-700 bg-blue-100">
                  <Cpu size={12} className="mr-1" />
                  TensorFlow
                </span>
                <span className="text-xs font-medium inline-flex items-center py-1.5 px-3 rounded-full text-indigo-700 bg-indigo-100">
                  <Cpu size={12} className="mr-1" />
                  PyTorch
                </span>
                <span className="text-xs font-medium inline-flex items-center py-1.5 px-3 rounded-full text-purple-700 bg-purple-100">
                  <Cpu size={12} className="mr-1" />
                  Scikit-learn
                </span>
              </div>
            </div>
            
            <button className="w-full mt-2 flex items-center justify-center space-x-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors duration-300">
              <span>View Projects</span>
              <ExternalLink size={14} />
            </button>
          </div>
        </div>

        {/* Computer Vision Card */}
        <div 
          className={`bg-white rounded-2xl overflow-hidden transition-all duration-300 transform 
            ${hoveredCard === 'cv' ? 'scale-105' : ''} 
            ${activeCard === 'cv' ? 'ring-4 ring-green-400 shadow-2xl' : 'shadow-lg hover:shadow-xl'}`}
          onMouseEnter={() => setHoveredCard('cv')}
          onMouseLeave={() => setHoveredCard(null)}
          onClick={() => handleCardClick('cv')}
        >
          <div className="bg-gradient-to-br from-green-500 via-green-600 to-teal-700 p-6 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-teal-300 opacity-20 rounded-full -ml-8 -mb-8"></div>
            
            <div className="flex items-center space-x-3 relative z-10">
              <div className="bg-white bg-opacity-20 p-2 rounded-lg">
                <Eye size={24} />
              </div>
              <h2 className="text-xl font-bold">Computer Vision</h2>
            </div>
            <p className="mt-2 text-green-100 text-sm">Teaching machines to see</p>
          </div>
          
          <div className="p-6 space-y-4">
            <div 
              className={`bg-white border border-gray-100 rounded-xl p-4 shadow-sm transition-all duration-300
                ${expandedSections.cv === 'opencv' ? 'bg-green-50' : 'hover:bg-green-50'}`}
            >
              <div 
                className="flex items-center justify-between cursor-pointer" 
                onClick={(e) => {
                  e.stopPropagation();
                  toggleSection('cv', 'opencv');
                }}
              >
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Code className="text-green-600" size={18} />
                  </div>
                  <h3 className="font-medium text-gray-800">OpenCV2 Mastery</h3>
                </div>
                <div className={`p-1 rounded-full transition-colors duration-300 ${expandedSections.cv === 'opencv' ? 'bg-green-100' : 'bg-gray-100'}`}>
                  {expandedSections.cv === 'opencv' ? 
                    <ChevronDown size={16} className="text-green-600" /> : 
                    <ChevronRight size={16} className="text-gray-600" />
                  }
                </div>
              </div>
              
              {expandedSections.cv === 'opencv' && (
                <div className="mt-3 ml-12 text-sm text-gray-600 space-y-2 animate-fadeIn">
                  <p className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                    <span>Video Analysis & Processing</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                    <span>Camera Calibration</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                    <span>3D Reconstruction</span>
                  </p>
                </div>
              )}
            </div>

            <div 
              className={`bg-white border border-gray-100 rounded-xl p-4 shadow-sm transition-all duration-300
                ${expandedSections.cv === 'objdetect' ? 'bg-green-50' : 'hover:bg-green-50'}`}
            >
              <div 
                className="flex items-center justify-between cursor-pointer" 
                onClick={(e) => {
                  e.stopPropagation();
                  toggleSection('cv', 'objdetect');
                }}
              >
                <div className="flex items-center space-x-3">
                  <div className="bg-teal-100 p-2 rounded-lg">
                    <Monitor className="text-teal-600" size={18} />
                  </div>
                  <h3 className="font-medium text-gray-800">Object Detection</h3>
                </div>
                <div className={`p-1 rounded-full transition-colors duration-300 ${expandedSections.cv === 'objdetect' ? 'bg-green-100' : 'bg-gray-100'}`}>
                  {expandedSections.cv === 'objdetect' ? 
                    <ChevronDown size={16} className="text-green-600" /> : 
                    <ChevronRight size={16} className="text-gray-600" />
                  }
                </div>
              </div>
              
              {expandedSections.cv === 'objdetect' && (
                <div className="mt-3 ml-12 text-sm text-gray-600 space-y-2 animate-fadeIn">
                  <p className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-teal-500 rounded-full"></span>
                    <span>YOLO & SSD Models</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-teal-500 rounded-full"></span>
                    <span>Faster R-CNN</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-teal-500 rounded-full"></span>
                    <span>Face Detection & Recognition</span>
                  </p>
                </div>
              )}
            </div>

            <div className="pt-4 mt-2 border-t border-gray-200">
              <div className="flex flex-wrap gap-2">
                <span className="text-xs font-medium inline-flex items-center py-1.5 px-3 rounded-full text-green-700 bg-green-100">
                  <Cpu size={12} className="mr-1" />
                  OpenCV2
                </span>
                <span className="text-xs font-medium inline-flex items-center py-1.5 px-3 rounded-full text-teal-700 bg-teal-100">
                  <Cpu size={12} className="mr-1" />
                  CUDA
                </span>
                <span className="text-xs font-medium inline-flex items-center py-1.5 px-3 rounded-full text-emerald-700 bg-emerald-100">
                  <Cpu size={12} className="mr-1" />
                  MediaPipe
                </span>
              </div>
            </div>
            
            <button className="w-full mt-2 flex items-center justify-center space-x-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-colors duration-300">
              <span>View Projects</span>
              <ExternalLink size={14} />
            </button>
          </div>
        </div>

        {/* NLP Card */}
        <div 
          className={`bg-white rounded-2xl overflow-hidden transition-all duration-300 transform 
            ${hoveredCard === 'nlp' ? 'scale-105' : ''} 
            ${activeCard === 'nlp' ? 'ring-4 ring-purple-400 shadow-2xl' : 'shadow-lg hover:shadow-xl'}`}
          onMouseEnter={() => setHoveredCard('nlp')}
          onMouseLeave={() => setHoveredCard(null)}
          onClick={() => handleCardClick('nlp')}
        >
          <div className="bg-gradient-to-br from-purple-500 via-purple-600 to-pink-700 p-6 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-pink-300 opacity-20 rounded-full -ml-8 -mb-8"></div>
            
            <div className="flex items-center space-x-3 relative z-10">
              <div className="bg-white bg-opacity-20 p-2 rounded-lg">
                <MessageSquare size={24} />
              </div>
              <h2 className="text-xl font-bold">Natural Language Processing</h2>
            </div>
            <p className="mt-2 text-purple-100 text-sm">Understanding human language</p>
          </div>
          
          <div className="p-6 space-y-4">
            <div 
              className={`bg-white border border-gray-100 rounded-xl p-4 shadow-sm transition-all duration-300
                ${expandedSections.nlp === 'models' ? 'bg-purple-50' : 'hover:bg-purple-50'}`}
            >
              <div 
                className="flex items-center justify-between cursor-pointer" 
                onClick={(e) => {
                  e.stopPropagation();
                  toggleSection('nlp', 'models');
                }}
              >
                <div className="flex items-center space-x-3">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <Brain className="text-purple-600" size={18} />
                  </div>
                  <h3 className="font-medium text-gray-800">Language Models</h3>
                </div>
                <div className={`p-1 rounded-full transition-colors duration-300 ${expandedSections.nlp === 'models' ? 'bg-purple-100' : 'bg-gray-100'}`}>
                  {expandedSections.nlp === 'models' ? 
                    <ChevronDown size={16} className="text-purple-600" /> : 
                    <ChevronRight size={16} className="text-gray-600" />
                  }
                </div>
              </div>
              
              {expandedSections.nlp === 'models' && (
                <div className="mt-3 ml-12 text-sm text-gray-600 space-y-2 animate-fadeIn">
                  <p className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                    <span>BERT & RoBERTa</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                    <span>Transformer Architecture</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                    <span>GPT & LLM Fine-tuning</span>
                  </p>
                </div>
              )}
            </div>

            <div 
              className={`bg-white border border-gray-100 rounded-xl p-4 shadow-sm transition-all duration-300
                ${expandedSections.nlp === 'applications' ? 'bg-purple-50' : 'hover:bg-purple-50'}`}
            >
              <div 
                className="flex items-center justify-between cursor-pointer" 
                onClick={(e) => {
                  e.stopPropagation();
                  toggleSection('nlp', 'applications');
                }}
              >
                <div className="flex items-center space-x-3">
                  <div className="bg-pink-100 p-2 rounded-lg">
                    <Lock className="text-pink-600" size={18} />
                  </div>
                  <h3 className="font-medium text-gray-800">NLP Applications</h3>
                </div>
                <div className={`p-1 rounded-full transition-colors duration-300 ${expandedSections.nlp === 'applications' ? 'bg-purple-100' : 'bg-gray-100'}`}>
                  {expandedSections.nlp === 'applications' ? 
                    <ChevronDown size={16} className="text-purple-600" /> : 
                    <ChevronRight size={16} className="text-gray-600" />
                  }
                </div>
              </div>
              
              {expandedSections.nlp === 'applications' && (
                <div className="mt-3 ml-12 text-sm text-gray-600 space-y-2 animate-fadeIn">
                  <p className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-pink-500 rounded-full"></span>
                    <span>Text Summarization</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-pink-500 rounded-full"></span>
                    <span>Machine Translation</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-pink-500 rounded-full"></span>
                    <span>Chatbot Development</span>
                  </p>
                </div>
              )}
            </div>

            <div className="pt-4 mt-2 border-t border-gray-200">
              <div className="flex flex-wrap gap-2">
                <span className="text-xs font-medium inline-flex items-center py-1.5 px-3 rounded-full text-purple-700 bg-purple-100">
                  <Cpu size={12} className="mr-1" />
                  spaCy
                </span>
                <span className="text-xs font-medium inline-flex items-center py-1.5 px-3 rounded-full text-pink-700 bg-pink-100">
                  <Cpu size={12} className="mr-1" />
                  NLTK
                </span>
                <span className="text-xs font-medium inline-flex items-center py-1.5 px-3 rounded-full text-indigo-700 bg-indigo-100">
                  <Cpu size={12} className="mr-1" />
                  Hugging Face
                </span>
              </div>
            </div>
            
            <button className="w-full mt-2 flex items-center justify-center space-x-1 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg transition-colors duration-300">
              <span>View Projects</span>
              <ExternalLink size={14} />
            </button>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}