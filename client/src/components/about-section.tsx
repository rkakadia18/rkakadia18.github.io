import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function AboutSection() {
  const [activeTab, setActiveTab] = useState<"professional" | "personal">("professional");

  const professionalContent = {
    text: [
      "I'm a passionate data scientist with expertise in machine learning, analytics, and business intelligence. With experience at leading companies like Tesla and Microsoft, I specialize in transforming complex data into actionable insights.",
      "My technical skills span across Python, R, SQL, and various machine learning frameworks. I enjoy solving challenging problems and building scalable data solutions that drive business value.",
      "I'm always eager to take on new challenges and collaborate with teams to deliver innovative data-driven solutions."
    ],
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=400"
  };

  const personalContent = {
    text: [
      "Outside of work, I'm an avid traveler and photography enthusiast. I love exploring new cultures and capturing beautiful moments through my lens.",
      "I'm passionate about continuous learning and often spend my free time reading about emerging technologies, practicing yoga, and experimenting with new recipes in the kitchen.",
      "I believe in maintaining a healthy work-life balance and enjoy hiking, reading fiction novels, and spending quality time with family and friends."
    ],
    image: "https://images.unsplash.com/photo-1494790108755-2616b5f2d93c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=400"
  };

  const activeContent = activeTab === "professional" ? professionalContent : personalContent;

  return (
    <section id="about" className="py-20 theme-transition bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-yellow-400 dark:text-yellow-400">
          About Me
        </h2>

        <div className="flex justify-center mb-8">
          <div className="flex rounded-lg border p-1">
            <Button
              variant={activeTab === "professional" ? "default" : "ghost"}
              onClick={() => setActiveTab("professional")}
              className={`px-6 py-2 rounded-md transition-all ${
                activeTab === "professional"
                  ? "bg-yellow-400 text-gray-900 dark:bg-yellow-400 dark:text-gray-900"
                  : ""
              }`}
            >
              Professional
            </Button>
            <Button
              variant={activeTab === "personal" ? "default" : "ghost"}
              onClick={() => setActiveTab("personal")}
              className={`px-6 py-2 rounded-md transition-all ${
                activeTab === "personal"
                  ? "bg-yellow-400 text-gray-900 dark:bg-yellow-400 dark:text-gray-900"
                  : ""
              }`}
            >
              Personal
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            key={activeTab + "-image"}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-1"
          >
            <img
              src={activeContent.image}
              alt={`Rupali Kakadia ${activeTab} photo`}
              className="w-80 h-96 rounded-2xl object-cover shadow-xl mx-auto"
            />
          </motion.div>

          <motion.div
            key={activeTab + "-content"}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2"
          >
            {activeContent.text.map((paragraph, index) => (
              <p key={index} className="text-lg mb-6 theme-transition text-foreground">
                {paragraph}
              </p>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
