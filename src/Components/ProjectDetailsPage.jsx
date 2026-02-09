


import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";
import { motion } from "framer-motion";

const ProjectDetailsPage = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Project not found.
      </div>
    );
  }

  return (
    <motion.section
      className="min-h-screen bg-zinc-900 text-white p-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Link
        to="/projects"
        className="inline-block mb-6 px-4 py-2 border border-indigo-500 rounded-full text-indigo-400 hover:bg-indigo-500 hover:text-black transition"
      >
         Back to Projects
      </Link>

      <h2 className="text-4xl font-bold text-indigo-400 mb-4">
        {project.title}
      </h2>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="text-xs px-3 py-1 bg-zinc-700 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Description */}
      <p className="text-zinc-300 text-lg mb-6">
        {project.description}
      </p>

      {/* GitHub */}
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mr-6 text-indigo-400 hover:underline"
        >
          GitHub Repository
        </a>
      )}

      {/*  PDF Case Study Button */}
      {project.pdf && (
        <a
          href={project.pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2 bg-indigo-500 rounded-lg hover:bg-indigo-600 transition"
        >
          View Case Study
        </a>
      )}
    </motion.section>
  );
};

export default ProjectDetailsPage;
