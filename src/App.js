import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <main className='App bg-primary min-h-screen font-poppins' data-theme='portfolio-theme' >
      <Header />
      <Hero />
      <About />
    </main>
  );
}

export default App;
