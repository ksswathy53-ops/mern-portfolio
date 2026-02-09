

import { motion } from "framer-motion";

const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js","express", "MongoDB" ];

const Skills = () => {
  return (
    <motion.section
      className="min-h-screen bg-zinc-950 text-white flex items-center justify-center px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-3xl w-full text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-8 text-indigo-400"
        >
          Skills
        </motion.h2>

        <motion.div className="grid grid-cols-3 md:grid-cols-6 gap-6 text-center">
          {skills.map((skill) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.15, rotate: 5, boxShadow: "0 0 20px #8b5cf6" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-zinc-800 p-6 px-2 rounded-full cursor-pointer"
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;

