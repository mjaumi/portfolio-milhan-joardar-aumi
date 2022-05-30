import { useState } from 'react';
import './App.css';
import FullPageWrapper from './components/FullPageWrapper/FullPageWrapper';
import Header from './components/Header/Header';

function App() {
  // integration of react hooks
  const [nav, setNav] = useState('');

  return (
    <main className='App bg-primary font-poppins' data-theme='portfolio-theme' >
      <Header nav={nav} />
      <FullPageWrapper setNav={setNav} />
    </main>
  );
}

export default App;
