import React, { useContext } from 'react';
import { BackgroundContext } from '../context/BackgroundContext';

function Header() {
  const { color } = useContext(BackgroundContext);

  return (
    <header className="header">
      <div style={{background : '#000', color : '#fff', height : '200px', padding : '20px 0'}}>
        <h1>context 실습</h1>
        <button>테마변경</button>
      </div>
    </header>
  );
}
export default Header;