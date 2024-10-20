import React, { useState } from 'react';
import PagePractice from './component_1018/PagePractice';
import { ThemeContext } from './context/BackgroundContext';

function App() {
  const {color, setColor} = useState('light');

  return (
      <ThemeContext.Provider value={{color, setColor}}>
        <div className={`app ${color}`}>
          <PagePractice></PagePractice>
        </div>
      </ThemeContext.Provider>
  );
}

export default App;

