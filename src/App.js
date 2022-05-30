import './App.css';
import FullPageWrapper from './components/FullPageWrapper/FullPageWrapper';
import Header from './components/Header/Header';

function App() {
  return (
    <main className='App bg-primary font-poppins' data-theme='portfolio-theme' >
      <Header />
      <FullPageWrapper />
    </main>
  );
}

export default App;
