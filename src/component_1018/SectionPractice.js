import React, { useContext } from 'react';
import { ThemeContext } from '../context/BackgroundContext';

function Main() {
  const {color} = useContext(ThemeContext);
  const mainStyle = {
    backgroundColor : color === 'dark'?'#666' : '#fff', 
    color : color === 'dark'?'#fff' : '#000', 
    height : '80px', 
    padding : '20px 0'
  };

  return (
    <main className="main" style={mainStyle}>
      <p>현재 색상 모드 : {color}</p>
    </main>
  );
}

export default Main;