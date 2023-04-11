import { useState } from 'react';
import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import SplashScreen from './components/SplashScreen/SplashScreen';
import Services from './components/Services/Services';

function App() {
  // integration of react hooks here
  const [hasSplashAnimFinished, setHasSplashAnimFinished] = useState(false);

  return (
    <main className='App bg-primary min-h-screen font-poppins' data-theme='portfolio-theme' >
      <SplashScreen
        hasSplashAnimFinished={hasSplashAnimFinished}
        setHasSplashAnimFinished={setHasSplashAnimFinished}
      />
      <Header hasSplashAnimFinished={hasSplashAnimFinished} />
      <Hero hasSplashAnimFinished={hasSplashAnimFinished} />
      <About />
      <Services />
    </main>
  );
}

export default App;
