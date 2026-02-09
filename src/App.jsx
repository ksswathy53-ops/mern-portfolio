

import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import ProjectsPage from "./pages/ProjectsPage";
import { useLocation } from "react-router-dom";
import ScrollProgress from "./Components/ScrollProgress";
import ProjectDetailsPage from "./Components/ProjectDetailsPage";

const App = () => {
  const location = useLocation();

  return (
    <>
     
      <div className="min-h-screen bg-zinc-900 overflow-x-hidden">
        <ScrollProgress />

        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:id" element={<ProjectDetailsPage />} />
          </Routes>
        </AnimatePresence>
      </div>
    </>
  );
};

export default App;




