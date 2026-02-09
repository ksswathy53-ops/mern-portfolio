



import { motion } from "framer-motion";
import { itemFade, staggerContainer } from "../animations";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <motion.section
      className="min-h-screen bg-zinc-950 text-white flex flex-col items-center justify-center px-6 py-10"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div variants={itemFade} className="max-w-xl w-full text-center">
        <h2 className="text-4xl font-bold mb-4 text-indigo-400">Contact Me</h2>
        <p className="text-zinc-400 mb-6">
          Have a project or want to collaborate? Let’s talk.
        </p>

        {/* Demo Form */}
        <form className="space-y-4">
          {["Your Name", "Your Email", "Your Message"].map((placeholder, i) =>
            i < 2 ? (
              <motion.input
                key={placeholder}
                variants={itemFade}
                type={i === 1 ? "email" : "text"}
                placeholder={placeholder}
                className="w-full p-3 rounded-md bg-zinc-800 text-white outline-none focus:ring-2 focus:ring-indigo-500"
              />
            ) : (
              <motion.textarea
                key={placeholder}
                variants={itemFade}
                placeholder={placeholder}
                rows="4"
                className="w-full p-3 rounded-md bg-zinc-800 text-white outline-none focus:ring-2 focus:ring-indigo-500"
              />
            )
          )}

          <motion.button
            variants={itemFade}
            whileHover={{ scale: 1.05, backgroundColor: "#8b5cf6", color: "#000" }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 bg-indigo-500 rounded-md font-semibold text-black"
          >
            Send Message (Demo)
          </motion.button>
        </form>

        {/* Direct Contact Info */}
        <motion.div
          variants={itemFade}
          className="mt-6 flex flex-col items-center gap-3 text-zinc-300"
        >
          <a
            href="mailto: ksswathy53@gmail.com"
            className="flex items-center gap-2 hover:text-indigo-400 transition"
          >
            <FaEnvelope />
              ksswathy53@gmail.com
          </a>

          <div className="flex gap-6 mt-2">
            <a
              href="https://github.com/ksswathy53-ops"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-indigo-400 transition"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/swathyks-a7b8472b3/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-indigo-400 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>

        {/* Small Note */}
        <p className="mt-4 text-xs text-zinc-500">
          *Contact form is for demo purposes. Please reach out via email or LinkedIn.
        </p>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
