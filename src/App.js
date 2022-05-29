import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <main className='App bg-primary min-h-screen font-poppins' data-theme='portfolio-theme'>
      <Header />
      <Hero />
    </main>
  );
}

export default App;
