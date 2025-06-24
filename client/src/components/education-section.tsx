import { motion } from "framer-motion";

export function EducationSection() {
  const education = [
    {
      id: 1,
      degree: "Master of Science in Data Science",
      school: "University of Washington",
      period: "2022 - 2024",
      focus: "Machine Learning, Statistics, Data Mining",
      logo: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
    },
    {
      id: 2,
      degree: "Bachelor of Engineering",
      school: "Mumbai University",
      period: "2018 - 2022",
      focus: "Computer Science, Mathematics",
      logo: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
    }
  ];

  return (
    <section id="education" className="py-20 theme-transition bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-yellow-400 dark:text-yellow-400">
          Education
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="border rounded-lg p-8 text-center shadow-lg theme-transition bg-card"
            >
              <img
                src={edu.logo}
                alt={`${edu.school} logo`}
                className="w-20 h-20 mx-auto mb-4 rounded-full object-cover"
              />
              <h3 className="text-xl font-semibold mb-2 text-yellow-400 dark:text-yellow-400">
                {edu.degree}
              </h3>
              <p className="opacity-75 mb-2">{edu.school}</p>
              <p className="text-sm opacity-60 mb-4">{edu.period}</p>
              <p className="text-sm opacity-75">Focus: {edu.focus}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
