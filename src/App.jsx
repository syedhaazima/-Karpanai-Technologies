import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Courses from './pages/Courses';
import CourseDetails from './pages/CourseDetails';
import RoboticsCourse from './pages/RoboticsCourse';
import DroneCourse from './pages/DroneCourse';
import AICreatorCourse from './pages/AICreatorCourse';
import IoTElectronicsCourse from './pages/IoTElectronicsCourse';
import ComputerVisionCourse from './pages/ComputerVisionCourse';
import SpaceSatelliteCourse from './pages/SpaceSatelliteCourse';
import About from './pages/AboutVisual';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import './styles/global.css';
import './styles/Theme.css';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/"                  element={<Home />} />
        <Route path="/courses"           element={<Courses />} />
        <Route path="/courses/ai-robotics" element={<RoboticsCourse />} />
        <Route path="/courses/drone-technology" element={<DroneCourse />} />
        <Route path="/courses/ai-creator-lab" element={<AICreatorCourse />} />
        <Route path="/courses/iot-electronics" element={<IoTElectronicsCourse />} />
        <Route path="/courses/computer-vision" element={<ComputerVisionCourse />} />
        <Route path="/courses/space-satellite-technology" element={<SpaceSatelliteCourse />} />
        <Route path="/courses/:slug"     element={<CourseDetails />} />
        <Route path="/about"             element={<About />} />
        <Route path="/contact"           element={<Contact />} />
        <Route path="*"                  element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main>
        <AnimatedRoutes />
      </main>
      <Footer />
    </BrowserRouter>
  );
}
