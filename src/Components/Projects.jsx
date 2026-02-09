

import { motion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import { projects } from "../data/projects";

const Projects = () => {
  const navigate = useNavigate(); 

  return (
    <motion.section
      className="min-h-screen bg-zinc-900 text-white p-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Back to Home Button */}
      <Link to="/">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mb-10 px-4 py-2 border border-indigo-500 rounded-full text-indigo-400"
        >
           Back to Home
        </motion.button>
      </Link>

      <h2 className="text-4xl font-bold text-center text-indigo-400 mb-12">
        My Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ y: -5, boxShadow: "0 0 20px #8b5cf6" }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-zinc-800 rounded-xl p-6 cursor-pointer"
            onClick={() => navigate(`/projects/${project.id}`)} 
          >
            {/* Project Title */}
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>

            {/* Tech Stack  */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{ scale: 1.2, backgroundColor: "#8b5cf6", color: "#fff" }}
                  className="text-xs px-3 py-1 bg-zinc-700 rounded-full"
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            {/*  Description */}
            <p className="text-zinc-400 text-sm">
              {project.description.length > 60
                ? project.description.slice(0, 60) + "..."
                : project.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
