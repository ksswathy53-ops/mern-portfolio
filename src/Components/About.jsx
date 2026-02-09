


import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="min-h-screen bg-zinc-950 text-white flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-3xl text-center"
      >
        <h2 className="text-4xl font-bold mb-6 text-indigo-400">
          About Me
        </h2>

        <p className="text-zinc-300 text-lg leading-relaxed">
          I'm a{" "}
          <span className="text-indigo-400 font-semibold">
            MERN Stack Developer
          </span>{" "}
          who loves building{" "}
          <span className="text-indigo-400 font-semibold">
            modern, scalable, and user-friendly
          </span>{" "}
          web applications. I enjoy turning ideas into real products using clean
          code, responsive design, and smooth animations.
        </p>

        <p className="text-zinc-400 text-lg leading-relaxed mt-4">
          I have experience working on{" "}
          <span className="text-white font-medium">
            full-stack applications
          </span>{" "}
          involving authentication, REST APIs, databases, and interactive UI
          experiences. I'm always eager to learn, improve my problem-solving
          skills, and contribute to meaningful projects.
        </p>

        {/* Highlights */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {[
            "MERN Stack",
            "Clean Code",
            "Responsive Design",
            "Framer Motion",
            "REST APIs",
          ].map((item) => (
            <span
              key={item}
              className="px-4 py-2 text-sm rounded-full bg-zinc-800 text-zinc-300"
            >
              {item}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
