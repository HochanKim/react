import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

function Footer() {
  // const {language} = useContext(LanguageContext);

  return (
    <footer className="footer" style={{background : '#999', color : '#fff', height : '50px', padding : '20px 0'}}>
      <p>푸터임</p>
    </footer>
  );
}

export default Footer;