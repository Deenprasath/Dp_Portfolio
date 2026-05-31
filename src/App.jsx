import React, { useState, useEffect } from 'react';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Internships from './components/Internships';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Education from './components/Education';
import GitHub from './components/GitHub';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen onFinished={() => setIsLoading(false)} />;
  }

  return (
    <div className="bg-[#0A0A0A] text-white selection:bg-[#8B5CF6]/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Internships />
        <Projects />
        <Achievements />
        <Education />
        <GitHub />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
