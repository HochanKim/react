import React, { useContext } from 'react';
import { ThemeContext } from '@emotion/react';

function Footer() {
  const {color} = useContext(ThemeContext);
  const footerStyle = {
    backgroundColor : color === 'dark'?'#666' : '#fff', 
    color : color === 'dark'?'#fff' : '#000', 
    height : '80px', 
    padding : '20px 0'
  };

  return (
    <footer className="footer" style={footerStyle}>
      <p>푸터임</p>
    </footer>
  );
}

export default Footer;