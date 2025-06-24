import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";

export function ExperienceSection() {
  const experiences = [
    {
      id: 1,
      title: "Research Assistant",
      company: "Purdue University",
      location: "West Lafayette, IN",
      date: "August 2024 - Now",
      description: "Cleaned and transformed large-scale financial data from Compustat using Python to support capital structure research. Digged into how companies make real-world decisions about debt and financing.",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=50&h=50",
      side: "left"
    },
    {
      id: 2,
      title: "Logistics Engineering Intern",
      company: "Penske Logistics (3PL for Starbucks)",
      location: "Seattle, WA",
      date: "2022",
      description: "Optimized warehouse operations and improved order picking efficiency",
      logo: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=50&h=50",
      side: "right"
    },
    {
      id: 3,
      title: "Technical Program Management Intern",
      company: "Microsoft",
      location: "Redmond, WA",
      date: "2023 Summer",
      description: "Learned Hardware Testing procedures and coordinated Hardware Test Management for Azure",
      logo: "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=50&h=50",
      side: "left"
    }
  ];

  return (
    <section id="experience" className="py-20 theme-transition bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-yellow-400 dark:text-yellow-400">
          Work Experience
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-yellow-400 dark:bg-yellow-400" />

          {experiences.map((experience, index) => (
            <TimelineItem key={experience.id} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ experience, index }: { experience: any; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="timeline-item flex items-center mb-16 relative"
    >
      {/* Timeline dot */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-yellow-400 border-4 border-background dark:bg-yellow-400 dark:border-background z-10" />
      {experience.side === "left" ? (
        <>
          <div className="w-1/2 pr-8 text-right">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
              className="border rounded-lg p-6 shadow-lg theme-transition bg-card"
            >
              <div className="flex items-center justify-end mb-4">
                <img
                  src={experience.logo}
                  alt={`${experience.company} logo`}
                  className="w-12 h-12 rounded-lg mr-4 object-cover"
                />
                <div>
                  <h3 className="text-xl font-semibold text-yellow-400 dark:text-yellow-400">
                    {experience.title}
                  </h3>
                  <p className="opacity-75">{experience.company}</p>
                </div>
              </div>
              <p className="mb-4 theme-transition text-center">{experience.description}</p>
              <div className="flex items-center justify-end text-sm opacity-75 space-x-4">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{experience.location}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span className="text-right">{experience.date}</span>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="w-1/2 pl-8" />
        </>
      ) : (
        <>
          <div className="w-1/2 pr-8" />
          <div className="w-1/2 pl-8">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
              className="border rounded-lg p-6 shadow-lg theme-transition bg-card"
            >
              <div className="flex items-center mb-4">
                <img
                  src={experience.logo}
                  alt={`${experience.company} logo`}
                  className="w-12 h-12 rounded-lg mr-4 object-cover"
                />
                <div>
                  <h3 className="text-xl font-semibold text-yellow-400 dark:text-yellow-400">
                    {experience.title}
                  </h3>
                  <p className="opacity-75">{experience.company}</p>
                </div>
              </div>
              <p className="mb-4 theme-transition">{experience.description}</p>
              <div className="flex items-center text-sm opacity-75 space-x-4">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{experience.location}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{experience.date}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </motion.div>
  );
}
