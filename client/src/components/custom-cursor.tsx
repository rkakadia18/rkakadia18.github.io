import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <motion.div
      className="custom-cursor border-yellow-400 dark:border-yellow-400"
      animate={{
        x: mousePosition.x - 10,
        y: mousePosition.y - 10,
      }}
      transition={{
        type: "spring",
        damping: 30,
        stiffness: 500,
        mass: 0.5,
      }}
    />
  );
}
