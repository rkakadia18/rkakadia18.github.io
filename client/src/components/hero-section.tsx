import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center theme-transition bg-background">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.img
          src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400"
          alt="Rupali Kakadia professional headshot"
          className="w-64 h-64 rounded-full mx-auto mb-8 object-cover shadow-2xl"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 text-yellow-400 dark:text-yellow-400 typewriter"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Rupali Kakadia
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl mb-8 theme-transition text-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.5, duration: 0.8 }}
        >Data Analysis | Business Intelligence | Supply Chain</motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4, duration: 0.8 }}
        >
          <Button
            size="lg"
            variant="outline"
            className="px-8 py-4 font-semibold transition-all hover:scale-105 border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 dark:border-yellow-400 dark:text-yellow-400 dark:hover:bg-yellow-400 dark:hover:text-gray-900"
          >
            View Resume
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
