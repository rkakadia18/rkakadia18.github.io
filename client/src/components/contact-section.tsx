import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, FileText } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 theme-transition bg-background">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8 text-yellow-400 dark:text-yellow-400">
          Let's Connect
        </h2>
        <p className="text-lg mb-12 opacity-80 theme-transition">If you’re into problem solving, card games, Cessnas, or just here for a good conversation — let’s chat!</p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center space-x-8 flex-wrap gap-4"
        >
          <Button
            variant="outline"
            size="lg"
            className="flex items-center space-x-2 px-6 py-3 hover:scale-105 transition-transform theme-transition"
            asChild
          >
            <a href="mailto:kakadiarupa@gmail.com">
              <Mail className="w-5 h-5" />
              <span>Email</span>
            </a>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="flex items-center space-x-2 px-6 py-3 hover:scale-105 transition-transform theme-transition"
            asChild
          >
            <a href="https://www.linkedin.com/in/rupalikakadia/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="flex items-center space-x-2 px-6 py-3 hover:scale-105 transition-transform theme-transition"
            asChild
          >
            <a href="https://github.com/rkakadia18" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="flex items-center space-x-2 px-6 py-3 hover:scale-105 transition-transform theme-transition"
            asChild
          >
            <a href="https://medium.com/@kakadiarupa" target="_blank" rel="noopener noreferrer">
              <FileText className="w-5 h-5" />
              <span>Medium</span>
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
