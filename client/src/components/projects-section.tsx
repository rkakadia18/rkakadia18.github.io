import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { useState } from "react";

export function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);
  
  const projects = [
    {
      id: 1,
      title: "Balancing Trailer Pool Network",
      description: "An analytical project that used demand forecasting, location data, and telematics to improve trailer placement across cities. Focused on cutting repositioning costs, reducing idle equipment, and making sure trailers were always available where demand was highest. Combined data analysis, geospatial mapping, and cost optimization to support smarter, more efficient trailer moves.",
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      tags: ["Python", "Google OR Tools", "API", "Telematics", "Optimization", "Pulp", "Folium", "Forecasting"],
      link: "https://github.com/rkakadia18/Balancing-Trailer-Pool-Network"
    },
    {
      id: 2,
      title: "Plant Disease Detection",
      description: "Developed a plant disease detection model using convolutional neural networks (CNN) to classify leaf images into healthy or diseased categories. Incorporated confidence-based filtering to flag uncertain predictions as 'unknown' for safer decision-making. Deployed a lightweight, web-accessible tool for real-time detection.",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      tags: ["Image Classification", "CNN", "Python", "Keras", "TensorFlow", "OpenCV", "Flask"],
      link: "https://github.com/rkakadia18/Plant-Disease-Detection-Model"
    },
    {
      id: 3,
      title: "A/B Testing Panera Bread Marketing Campaign",
      description: "A digital marketing project that used A/B testing with Google Ads and Google Analytics to evaluate campaign performance. Focused on improving ad engagement through color psychology and health-focused imagery, achieving a 5.37% click-through rate and uncovering key patterns in consumer behavior.",
      image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      tags: ["A/B Testing", "Consumer Behavior", "Google Ads", "Digital Marketing"],
      link: "https://github.com/rkakadia18/A-B-Testing-Panera-Bread-Marketing-Campaign"
    },
    {
      id: 4,
      title: "Bankruptcy Prediction Modelling",
      description: "A data mining project that analyzed financial data from 8,000 firms to predict bankruptcy risk. Used advanced models like logistic regression, gradient boosting, and neural networks, achieving 94% accuracy on the validation set.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      tags: ["SAS Enterprise Miner", "Gradient Boosting", "Ensemble Models", "Neural Networks", "Regression", "Decision Trees"],
      link: "https://github.com/rkakadia18/Bankruptcy-Prediction-Modeling"
    },
    {
      id: 5,
      title: "Disaster Tweets Classification with NLP",
      description: "Built machine learning models to classify disaster related tweets using BERT, DistilBERT and LSTM models to achieve an accuracy of 82% on the test data.",
      image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      tags: ["Natural Language Processing", "Transformer Models", "BERT", "LSTM", "TensorFlow", "Keras"],
      link: "https://github.com/rkakadia18/Disaster-Tweets-Classification-with-NLP-Text-Classification-"
    },
    {
      id: 6,
      title: "Energy Investments Optimization",
      description: "An optimization project for Vermont City Electric focused on prioritizing energy-saving programs under an $800,000 budget. Developed a mixed-integer model to select cost-effective, low-carbon initiatives like smart lighting, retrofits, and renewable energy incentives.",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      tags: ["Mixed-Integer Programming", "Budget Optimization", "Energy Analytics", "Sustainability"],
      link: "https://github.com/rkakadia18/Optimizing-Energy-Investment"
    },
    {
      id: 7,
      title: "Fish Production Planning",
      description: "Developed an optimization model for fish production planning to maximize profitability while considering resource constraints, seasonal demand, and production capacity limitations.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      tags: ["Production Planning", "Linear Programming", "Resource Optimization", "Supply Chain"],
      link: "https://github.com/rkakadia18/Fish-Production-Planning"
    },
    {
      id: 8,
      title: "Portfolio Optimization for a Finance Firm",
      description: "Created a portfolio optimization model for a finance firm to maximize returns while minimizing risk through diversification strategies and efficient frontier analysis.",
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      tags: ["Portfolio Theory", "Risk Management", "Financial Modeling", "Optimization"],
      link: "https://github.com/rkakadia18/Portfolio-Optimization-for-a-Finance-Firm"
    },
    {
      id: 9,
      title: "Supermarket Sales Analysis Using Python",
      description: "Comprehensive analysis of supermarket sales data using Python to identify trends, customer behavior patterns, and revenue optimization opportunities through data visualization and statistical analysis.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      tags: ["Data Analysis", "Python", "Pandas", "Matplotlib", "Sales Analytics", "Business Intelligence"],
      link: "https://github.com/rkakadia18/Supermarket-Sales-Analysis-Using-Python"
    },
    {
      id: 10,
      title: "Predicting Diabetes Risk Using Big Data & Machine Learning",
      description: "Developed predictive models using big data techniques and machine learning algorithms to assess diabetes risk factors and provide early detection capabilities for healthcare applications.",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      tags: ["Healthcare Analytics", "Machine Learning", "Big Data", "Predictive Modeling", "Python"],
      link: "https://github.com/rkakadia18/Predicting-Diabetes-Risk-Using-Big-Data-Machine-Learning"
    },
    {
      id: 11,
      title: "Location Analysis for Subway using SQL",
      description: "Conducted a data-driven location analysis for Subway's new store in Virginia amusement parks using foot traffic, youth demographics, income distribution, and restaurant competition data. Recommended Loudoun County as the optimal location based on weighted scoring analysis.",
      image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      tags: ["SQL", "Big Query", "Location Analytics", "Weighted Scoring", "Business Intelligence"],
      link: "https://github.com/rkakadia18/Location-Analysis-for-Subway-using-SQL"
    }
  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <section id="projects" className="py-20 theme-transition bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-8 text-yellow-400 dark:text-yellow-400">
          Projects
        </h2>
        <p className="text-center mb-16 text-lg opacity-80 max-w-3xl mx-auto theme-transition">
          A comprehensive collection of my analytics and data science projects showcasing technical skills and problem-solving approach across various domains.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => (
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
                onClick={() => window.open(project.link, '_blank')}
              >
                View Project
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          ))}
        </div>

        {!showAll && projects.length > 6 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center mt-12"
          >
            <Button
              onClick={() => setShowAll(true)}
              size="lg"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              View More Projects ({projects.length - 6} more)
            </Button>
          </motion.div>
        )}

        {showAll && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center mt-12"
          >
            <Button
              onClick={() => setShowAll(false)}
              variant="outline"
              size="lg"
              className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-semibold px-8 py-3 rounded-lg transition-all duration-300"
            >
              Show Less
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}