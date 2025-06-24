import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function SkillsSection() {
  const [activeTab, setActiveTab] = useState<"skills" | "certifications">("skills");

  const skillsData = [
    {
      category: "Data Tools",
      skills: ["Python", "R", "SQL", "Pandas", "NumPy"]
    },
    {
      category: "Modeling",
      skills: ["Scikit-Learn", "TensorFlow", "PyTorch", "XGBoost"]
    },
    {
      category: "Big Data",
      skills: ["Spark", "Hadoop", "Kafka", "Databricks"]
    },
    {
      category: "ERP/CRM",
      skills: ["Salesforce", "SAP", "Tableau", "Power BI"]
    }
  ];

  const certificationsData = [
    {
      title: "AWS Certified Data Analytics",
      issuer: "Amazon Web Services"
    },
    {
      title: "Google Cloud Professional Data Engineer",
      issuer: "Google Cloud"
    },
    {
      title: "Microsoft Azure Data Scientist Associate",
      issuer: "Microsoft"
    }
  ];

  return (
    <section id="skills" className="py-20 theme-transition bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-yellow-400 dark:text-yellow-400">
          Skills & Certifications
        </h2>

        <div className="flex justify-center mb-12">
          <div className="flex rounded-lg border p-1">
            <Button
              variant={activeTab === "skills" ? "default" : "ghost"}
              onClick={() => setActiveTab("skills")}
              className={`px-6 py-2 rounded-md transition-all ${
                activeTab === "skills"
                  ? "bg-yellow-400 text-gray-900 dark:bg-yellow-400 dark:text-gray-900"
                  : ""
              }`}
            >
              Skills
            </Button>
            <Button
              variant={activeTab === "certifications" ? "default" : "ghost"}
              onClick={() => setActiveTab("certifications")}
              className={`px-6 py-2 rounded-md transition-all ${
                activeTab === "certifications"
                  ? "bg-yellow-400 text-gray-900 dark:bg-yellow-400 dark:text-gray-900"
                  : ""
              }`}
            >
              Certifications
            </Button>
          </div>
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {activeTab === "skills" ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {skillsData.map((category, index) => (
                <div key={category.category}>
                  <h3 className="text-xl font-semibold mb-4 text-yellow-400 dark:text-yellow-400">
                    {category.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="skill-pill px-3 py-1 text-sm hover:scale-105"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certificationsData.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="border rounded-lg p-6 text-center theme-transition"
                >
                  <h3 className="font-semibold mb-2 text-yellow-400 dark:text-yellow-400">
                    {cert.title}
                  </h3>
                  <p className="text-sm opacity-75">{cert.issuer}</p>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
