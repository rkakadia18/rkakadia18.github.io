import { motion } from "framer-motion";

import purdue from "@assets/purdue.png";

export function EducationSection() {
  const education = [
    {
      id: 1,
      school: "Purdue University",
      degrees: [
        {
          title: "Master of Science in Business Analytics & Information Management",
          period: "2021 - 2024"
        },
        {
          title: "Bachelor of Science in Supply Chain Information Analytics",
          period: "2019 - 2023"
        }
      ],
      logo: "/attached_assets/purdue_1750805573027.png"
    }
  ];

  return (
    <section id="education" className="py-20 theme-transition bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-yellow-400 dark:text-yellow-400">
          Education
        </h2>

        <div className="flex justify-center">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="border rounded-lg p-8 text-center shadow-lg theme-transition bg-card max-w-md"
            >
              <img
                src={purdue}
                alt={`${edu.school} logo`}
                className="w-20 h-20 mx-auto mb-6 rounded-full object-cover"
              />
              <h3 className="text-2xl font-bold mb-6 text-yellow-400 dark:text-yellow-400">
                {edu.school}
              </h3>
              
              <div className="space-y-4">
                {edu.degrees.map((degree, degreeIndex) => (
                  <div key={degreeIndex} className="text-left">
                    <h4 className="text-lg font-semibold mb-1 text-foreground">
                      {degree.title}
                    </h4>
                    <p className="text-sm opacity-60">{degree.period}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
