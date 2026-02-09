

import Hero from "../Components/Hero";
import About from "../Components/About";
import Skills from "../Components/Skills";
import Contact from "../Components/Contact";
import ProjectsPreview from "../Components/ProjectsPreview"; // new import

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <ProjectsPreview />  
      <Contact />
    </>
  );
};

export default Home;
