import React, { useCallback } from 'react';
import BaseButton from './components/atoms/BaseButton';

const App = () => {
  const handleClick = useCallback(() => {
    alert('click!!');
  }, []);
  return (
    <div className="App">
      <header>
        <p>This is React x Typescript template.</p>
      </header>
      <main>
        <BaseButton label="click" onClick={handleClick} />
      </main>
    </div>
  );
};

export default App;
