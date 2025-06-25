import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Balancing Trailer Pool Network",
      description: "An analytical project that used demand forecasting, location data, and telematics to improve trailer placement across cities. Focused on cutting repositioning costs, reducing idle equipment, and making sure trailers were always available where demand was highest. Combined data analysis, geospatial mapping, and cost optimization to support smarter, more efficient trailer moves.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      tags: ["Python", "Google OR Tools", "API", "Telematics", "Optimization", "Pulp", "Folium", "Forecasting"]
    },
    {
      id: 2,
      title: "Plant Disease Detection",
      description: "Developed a plant disease detection model using convolutional neural networks (CNN) to classify leaf images into healthy or diseased categories. Incorporated confidence-based filtering to flag uncertain predictions as 'unknown' for safer decision-making.Deployed a lightweight, web-accessible tool for real-time detection",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      tags: ["Image Classification", "CNN", "Python (Keras, TensorFlow, OpenCV)", "Web Deployment (Flask, HTML, JavaScript)", "Model Evaluation (Precision, Recall, Confidence Scores)"]
    },
    {
      id: 3,
      title: "A/B Testing Panera Bread Marketing Campaign",
      description: "A digital marketing project that used A/B testing with Google Ads and Google Analytics to evaluate campaign performance. Focused on improving ad engagement through color psychology and health-focused imagery, achieving a 5.37% click-through rate and uncovering key patterns in consumer behavior.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      tags: ["A/B Testing", "Consumer Behavious", "Google Ads", "Digital Marketing"]
    },
    {
      id: 4,
      title: "Bankruptcy Prediction Modelling",
      description: "A data mining project that analyzed financial data from 8,000 firms to predict bankruptcy risk. Used advanced models like logistic regression, gradient boosting, and neural networks, achieving 94% accuracy on the validation set.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      tags: ["SAS Enterprise Miner", "Gradient Boosting", "Ensemble Models", "Neural Networks", "Regression", "Decision Trees", "Feature Engineering"]
    },
    {
      id: 5,
      title: "Disaster Tweets Classification with NLP (Text Classification)",
      description: "Built machine learning models to classify disaster related tweets using a Bert, Distilbert and LSTM models to achieve an accuracy of 82% on the test data.",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      tags: ["Natural Language Processing (NLP)", "Transformer Models", "Tokenization", "LSTM","TensorFlow", "Keras"]
    },
    {
      id: 6,
      title: "Energy Investments Optimization",
      description: "An optimization project for Vermont City Electric focused on prioritizing energy-saving programs under an $800,000 budget. Developed a mixed-integer model to select cost-effective, low-carbon initiatives like smart lighting, retrofits, and renewable energy incentives. Balanced financial limits with sustainability goals, creating a data-backed investment plan that reduced both costs and carbon emissions.",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      tags: ["Mixed-Integer Programming", "Budget Optimization", "Energy Analytics", "Sustainability", "Cost-Benefit Analysis"]
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
