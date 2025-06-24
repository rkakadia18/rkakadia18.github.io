import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "LLM Analytics and Evaluation",
      description: "Evaluation of Large Language Model generations by hallucination detection, topic modeling, sentiment analysis",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      tags: ["Python", "OpenAI API", "LangChain", "NLTK", "Scikit-Learn", "Transformers", "LLM", "Patronus"]
    },
    {
      id: 2,
      title: "Music & Mental Health",
      description: "Analyzed relationship between music listening habits and mental health indicators using machine learning",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      tags: ["Python", "Scikit-learn", "TensorFlow", "Databricks", "Spark", "ML", "Data Processing"]
    },
    {
      id: 3,
      title: "E-Commerce Analytics",
      description: "Deep analysis of Brazilian E-Commerce data to uncover sales patterns, customer behavior, and logistics insights",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      tags: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter", "Data Analysis", "Visualization"]
    },
    {
      id: 4,
      title: "Supply Chain Optimization",
      description: "Developed optimization algorithms for warehouse operations and transportation routing using operations research techniques",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      tags: ["Python", "OR-Tools", "NetworkX", "Optimization", "Operations Research", "Logistics"]
    },
    {
      id: 5,
      title: "Predictive Maintenance System",
      description: "Built machine learning models to predict equipment failures and optimize maintenance schedules using IoT sensor data",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      tags: ["Python", "TensorFlow", "Time Series", "IoT", "Anomaly Detection", "Deep Learning"]
    }
  ];

  return (
    <section id="projects" className="py-20 theme-transition bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-8 text-yellow-400 dark:text-yellow-400">
          Featured Projects
        </h2>
        <p className="text-center mb-16 text-lg opacity-80 max-w-3xl mx-auto theme-transition">A selection of my analytics projects showcasing my technical skills and problem-solving approach.</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="project-card border rounded-xl p-6 shadow-lg theme-transition bg-card"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />

              <h3 className="text-xl font-semibold mb-2 text-yellow-400 dark:text-yellow-400">
                {project.title}
              </h3>
              
              <p className="mb-4 opacity-75 theme-transition text-sm">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="px-2 py-1 text-xs"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              <Button
                variant="ghost"
                size="sm"
                className="flex items-center text-sm hover:opacity-80 transition-opacity p-0 h-auto"
              >
                View Project
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
