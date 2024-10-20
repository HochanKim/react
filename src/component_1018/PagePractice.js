import React from 'react';
import HeaderPractice from './HeaderPractice';
import SectionPractice from './SectionPractice';
import FooterPractice from './FooterPractice';

function Page() {
  const pageStyle = {
    textAlign : 'center'
  }
  return (
    <div className="page" style={pageStyle}>
      <HeaderPractice />
      <SectionPractice />
      <FooterPractice />
    </div>
  );
}

export default Page;