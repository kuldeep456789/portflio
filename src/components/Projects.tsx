import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "ML Image Classification",
    description: "Deep learning model for image classification using TensorFlow",
    technologies: ["Python", "TensorFlow", "Docker"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "DevOps Pipeline",
    description: "Automated CI/CD pipeline with Kubernetes deployment",
    technologies: ["Jenkins", "Kubernetes", "AWS"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Carrier Recommendations",
    description: "Real-time analytics dashboard with React and Node.js",
    technologies: ["React.js", "Node.js", "Typescript", "css"],
    github: "https://github.com/kuldeep456789/Career-Recommendations",
    demo: "https://career-recommendations.vercel.app/",
  },
  {
    title: "Cloude ",
    description: "Real-time analytics dashboard with React and Node.js",
    technologies: ["React", "Node.js", "MongoDB"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
];

const Projects = () => {
  return (
    <section className="py-12 md:py-20 px-4 bg-[#1A1F2C] relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl animate-pulse -top-48 -left-24" />
        <div className="absolute w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl animate-pulse bottom-0 right-0" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-white">Majar Projects</h2>
        <Carousel className="w-full max-w-3xl mx-auto">
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem key={index}>
                <Card className="bg-gray-800/80 backdrop-blur-sm text-white border-none">
                  <CardContent className="p-4 md:p-6">
                    <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">{project.title}</h3>
                    <p className="text-gray-300 mb-4 text-sm md:text-base">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary/20 backdrop-blur-sm rounded-full text-primary text-xs md:text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-3 md:gap-4">
                      <Button
                        variant="outline"
                        className="gap-2 hover:scale-105 transition-transform text-sm md:text-base border-green-500 text-green-400 hover:bg-green-900/20"
                      >
                        <Github size={16} />
                        Code
                      </Button>
                      <Button className="gap-2 hover:scale-105 transition-transform text-sm md:text-base">
                        <Code size={16} />
                        Live Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-white hidden md:flex" />
          <CarouselNext className="text-white hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default Projects;
