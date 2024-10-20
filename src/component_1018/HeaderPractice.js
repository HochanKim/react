import React, { useContext } from 'react';
import { ThemeContext } from '../context/BackgroundContext';

function Header() {
  const {color, setColor} = useContext(ThemeContext);
  const headerStyle = {
    backgroundColor : color === 'dark'?'#333' : '#fff', 
    color : color === 'dark'?'#fff' : '#000', 
    height : '200px', 
    padding : '20px 0'
  };

  return (
    <header className="header">
      <div style={headerStyle}>
        <h1>context 실습</h1>
        <button onClick={
          () => setColor(color === 'light'?'dark' : 'light') 
          }>
          테마변경
        </button>
      </div>
    </header>
  );
}
export default Header;