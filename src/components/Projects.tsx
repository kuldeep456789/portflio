import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import websiteImg from '../img/summer kart.webp';
import blogimage from '../img/blog.webp';
import safety from '../img/ai safety.webp';
import currency from '../img/currency.webp';

const projects = [
  {
    title: "Currency Convertor quickly converts amounts between different currencies",
    link: "https://currency-convertor-taupe-ten.vercel.app/",
    image: currency
  },
  {
    title: "Blog Editor Save and Draft based on your Blog editing experience",
    link: "https://blog-create-6huw.vercel.app/",
    image: blogimage
  },
  {
    title: "Ai Safety Watchtower Dashboard for optimizing model performance",
    link: "https://ai-safety-watchtower-dashboard.vercel.app/",
    image: safety
  },
  {
    title: "Summer collection implementation with zero-trust architecture",
    link: "https://summerkart.vercel.app/",
    image: websiteImg
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-[#0B0D11] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl font-medium text-white mb-16 text-center">Featured Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => window.open(project.link, '_blank')}
            >
              <div className="aspect-[16/10] overflow-hidden rounded-[24px] mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="space-y-4 px-1">
                <h3 className="text-xl md:text-2xl font-semibold text-white leading-snug group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <div className="pt-1">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#E5E7EB] text-sm md:text-base font-medium hover:opacity-100 opacity-90 transition-all gap-1 group/link"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span className="border-b border-transparent group-hover/link:border-[#E5E7EB] pb-0.5 transition-all">
                      View Project
                    </span>
                    <ChevronRight className="w-4 h-4 mt-0.5 transform group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
