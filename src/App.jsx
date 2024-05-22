import { useState } from 'react';
import './App.css';
import ActionBoard from './components/gameScreen/ActionBoard/ActionBoard';
import Header from './components/Header/Header';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <h1>DIGI KENO</h1>
      <ActionBoard />
    </>
  );
}

export default App;
