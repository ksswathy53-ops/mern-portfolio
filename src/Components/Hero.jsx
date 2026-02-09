


import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AnimatedBlob from "./AnimationBlob";
import { FaGithub, FaLinkedin } from "react-icons/fa"; 

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-zinc-900 text-white px-6 overflow-hidden">
      {/* Floating Blobs */}
      <AnimatedBlob className="w-72 h-72 bg-indigo-500 top-20 left-10" />
      <AnimatedBlob className="w-96 h-96 bg-purple-500 top-40 right-10" />

      <motion.div
        className="z-10 text-center"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.3 } },
        }}
      >
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          className="text-5xl font-bold"
        >
          Hi, I'm <span className="text-indigo-400">Swathy K S</span>
        </motion.h1>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          className="mt-4 text-xl text-zinc-400"
        >
          MERN Stack Developer
        </motion.p>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="mt-6 flex flex-col items-center gap-4"
        >
          {/* View Projects Button */}
          <Link to="/projects">
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: "#8b5cf6", color: "#000" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="px-6 py-3 border border-indigo-500 rounded-full font-semibold text-indigo-400"
            >
              View My Work
            </motion.button>
          </Link>

          {/* Social Links */}
          <div className="flex gap-6 mt-4">
            <a
              href="https://github.com/ksswathy53-ops"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-zinc-300 hover:text-indigo-400 transition"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/swathyks-a7b8472b3/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-zinc-300 hover:text-indigo-400 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
