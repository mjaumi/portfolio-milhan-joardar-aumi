import { useState } from 'react';
import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import SplashScreen from './components/SplashScreen/SplashScreen';
import Services from './components/Services/Services';
import Expertise from './components/Expertise/Expertise';
import Blogs from './components/Blogs/Blogs';
import Footer from './components/Footer/Footer';
import Projects from './components/Projects/Projects';
import Experiences from './components/Experiences/Experiences';
import Contact from './components/Contact/Contact';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  // integration of react hooks here
  const [hasSplashAnimFinished, setHasSplashAnimFinished] = useState(false);
  const [currentSection, setCurrentSection] = useState('');

  return (
    <main className='App bg-primary font-poppins' data-theme='portfolio-theme' >
      <SplashScreen
        hasSplashAnimFinished={hasSplashAnimFinished}
        setHasSplashAnimFinished={setHasSplashAnimFinished}
      />
      <Header
        currentSection={currentSection}
        hasSplashAnimFinished={hasSplashAnimFinished}
      />
      <Hero
        hasSplashAnimFinished={hasSplashAnimFinished}
        setCurrentSection={setCurrentSection}
      />
      <About setCurrentSection={setCurrentSection} />
      <Experiences setCurrentSection={setCurrentSection} />
      <Services setCurrentSection={setCurrentSection} />
      <Expertise setCurrentSection={setCurrentSection} />
      <Projects setCurrentSection={setCurrentSection} />
      <Blogs setCurrentSection={setCurrentSection} />
      <Contact setCurrentSection={setCurrentSection} />
      <Footer hasSplashAnimFinished={hasSplashAnimFinished} />
      <ToastContainer position='bottom-center' theme='dark' />
    </main>
  );
}

export default App;
