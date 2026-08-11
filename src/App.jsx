import {
  HashRouter,
  Routes,
  Route,
  useLocation,
} from "react-router";

import { AnimatePresence } from "motion/react";

import Homepage from "./pages/Homepage";
import Resume from "./pages/Resume";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import BackToTop from "./components/BackToTop";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Homepage />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <HashRouter>
      <Navbar />
      <ScrollToTop />

      <main className="mt-3 min-h-screen bg-background mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-15">
        <AnimatedRoutes />
      </main>

      <BackToTop />
    </HashRouter>
  );
}

export default App;