import { motion } from "motion/react";

function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}

      transition={{
        duration: 0.35,
        ease: "easeInOut",
      }}
      className="min-h-screen bg-background mt-5"
    >
      {children}
    </motion.div>
  );
}

export default PageTransition;