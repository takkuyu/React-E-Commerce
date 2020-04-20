import React from 'react';
import '../../css/objects/_landingpage.scss';
import Header from '../header/header.component';

function LandingMain() {
  return (
    <div className='landing-container'>
      <div className='landing-top'>
        <Header />
        <div className="landing-top-container">
          <h1>Lorem Ipsum is simply dummy text</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <button>SHOP NOW</button>
        </div>
      </div>
      <div className='landing-center'>

      </div>


    </div>

  );
}

export default LandingMain;