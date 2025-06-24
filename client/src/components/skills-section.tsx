import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function SkillsSection() {
  const [activeTab, setActiveTab] = useState<"skills" | "certifications">("skills");

  const skillsData = [
    {
      category: "Visualizations & BI",
      skills: ["Tableau", "PowerBI", "Looker Studio", "Matplotlib", "Seaborn", "SAS", "SimQuick", "EDA"]
    },
    {
      category: "Programming & Modeling",
      skills: ["Python", "R", "SQL", "PySpark", "TensorFlow", "HiveQL"]
    },
    {
      category: "Big Data & Cloud",
      skills: ["MongoDB", "BigQuery", "Azure", "AWS", "GCP", "VS Code", "Docker", "Github", "Databricks", "Hadoop"]
    },
    {
      category: "Business CRM & ERP",
      skills: ["Excel (@Risk, Solver, VBA, PivotTables)", "JIRA", "Project management", "A/B Testing", "Hypothesis Testing"]
    }
  ];

  const certificationsData = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      url: "https://www.credly.com/badges/77c327a0-81d6-4f32-8035-ccac66321445/linked_in_profile"
    },
    {
      title: "Tableau Desktop Specialist",
      issuer: "Tableau",
      url: "https://www.credly.com/badges/e63d4ba5-c63a-4a92-9627-9d55fd3d2cd3/linked_in_profile"
    },
    {
      title: "Microsoft Certified Azure Fundamentals",
      issuer: "Microsoft",
      url: "https://learn.microsoft.com/en-us/users/kakadiarupalivinod-4499/transcript/vmpjnf3joroqlk6"
    },
    {
      title: "Microsoft Certified Azure AI Fundamentals",
      issuer: "Microsoft",
      url: "https://www.credly.com/badges/f832999f-69ab-4bc8-b13c-8113c36c3ea6/linked_in_profile"
    },
    {
      title: "Associate Certified Analytical Professional",
      issuer: "Institute for Operations Research and the Management Sciences (INFORMS)"
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
                  <p className="text-sm opacity-75 mb-4">{cert.issuer}</p>
                  {cert.url && (
                    <Button
                      onClick={() => window.open(cert.url, '_blank')}
                      variant="outline"
                      size="sm"
                      className="bg-yellow-400 text-gray-900 hover:bg-yellow-500 border-yellow-400 hover:border-yellow-500"
                    >
                      View Certificate
                    </Button>
                  )}
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
