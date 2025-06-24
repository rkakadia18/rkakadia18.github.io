import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";

import purdue from "@assets/purdue.png";

import wabash from "@assets/wabash.png";

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
      title: "Data Analyst",
      company: "Wabash",
      location: "West Lafayette, IN",
      date: "Jan 2025 - May 2025",
      description: "Built a data-driven forecasting model that improved trailer placement accuracy across 30 cities and boosted efficiency by 18%. Optimized the relocation of 360 trailers, minimizing total travel distance to 7,500 miles using linear programming. Developed a real-time trailer allocation platform integrating live weather, Google Maps, and telematics data, cutting travel costs by 23%.",
      logo: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=50&h=50",
      side: "right"
    },
    {
      id: 3,
      title: "Business Operations Intern",
      company: "Caterpillar",
      location: "Peoria, IL",
      date: "2023 Summer",
      description: "Designed monthly Sales Variance reports in Tableau and Excel to track KPIs and analyze budget alignment across regions. Built an interactive Power BI dashboard that automated feedback loops for a training program, improving manager responsiveness by 20%. Supported logistics and reporting for a 500-attendee dealer event, ensuring smooth coordination and cross-functional execution.",
      logo: "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=50&h=50",
      side: "left"
    },
    {
      id: 4,
      title: "Business Analyst Intern",
      company: "Kayra Creation",
      location: "New York, NY",
      date: "2022 Summer",
      description: "Executed go-to-market strategy during global exhibitions, driving a 15% improvement in client relationships and customer service. Developed an automated CRM system using Python and WhatsApp, boosting outreach by 25%. Created a targeted outreach strategy that added 9 new B2B accounts and managed inventory using SAP MM.",
      logo: "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=50&h=50",
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
                  src={purdue}
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
              <p className="mb-4 theme-transition text-left">{experience.description}</p>
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
                  src={wabash}
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
