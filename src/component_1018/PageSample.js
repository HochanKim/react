import React from 'react';
import HeaderSample from './HeaderSample';
import MainSample from './MainSample';
import FooterSample from './FooterSample';

function Page() {
  return (
    <div className="page">
      <HeaderSample />
      <MainSample />
      <FooterSample />
    </div>
  );
}

export default Page;