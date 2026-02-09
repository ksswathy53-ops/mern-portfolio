import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";

const ProjectsPreview = () => {
  return (
    <section className="min-h-screen bg-zinc-900 text-white p-10">
      <h2 className="text-4xl font-bold text-center text-indigo-400 mb-12">
        Featured Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.slice(0, 3).map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ scale: 1.05 }}
            className="bg-zinc-800 p-6 rounded-xl"
          >
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-zinc-400 text-sm mb-4">
              {project.description}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link
          to="/projects"
          className="inline-block px-6 py-3 border border-indigo-500 rounded-full text-indigo-400 hover:bg-indigo-500 hover:text-black transition"
        >
          View All Projects
        </Link>
      </div>
    </section>
  );
};

export default ProjectsPreview;
