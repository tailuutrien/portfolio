import { BrowserRouter, Routes, Route } from 'react-router';
import Homepage from './pages/Homepage';
import Resume from './pages/Resume';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
