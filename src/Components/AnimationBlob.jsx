import { motion } from "framer-motion";

const blobVariants = {
  float: {
    y: [0, -20, 0],
    x: [0, 20, 0],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
  },
};

const AnimatedBlob = ({ className }) => {
  return (
    <motion.div
      className={`absolute rounded-full opacity-30 blur-3xl ${className}`}
      variants={blobVariants}
      animate="float"
    />
  );
};

export default AnimatedBlob;
