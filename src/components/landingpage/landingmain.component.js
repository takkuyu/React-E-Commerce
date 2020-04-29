import React from 'react';
import ImageGallery from './image-gallery.component';
import logo from '../../img/takaya-logo.png';
import {
  Container
} from 'reactstrap';
import new_arrivals_img from '../../img/new-arrivals.jpg';

function LandingMain() {
  return (
    <div className='landing-container'>

      <div className='landing-top'>
        <h1>DISCOVER THE WORLD<br />OF MODERN SHOES</h1>
        <div className='shop-btn'>
          <p>SHOP MEN</p>
          <p>SHOP WOMEN</p>
        </div>
      </div>

      <div className='landing-about'>
        <Container>
          <img src={logo} alt='logo' />
          <p>
            It started with a simple idea: Create quality, well-designed products that I wanted myself.
        </p>
        </Container>
      </div>

      <ImageGallery />

      <div className='image-gallery-container extra-image'>
        <div className='image-wrapper new-arrivals'>
          <div className='image' style={{ backgroundImage: ` url(${new_arrivals_img})` }}></div>
          <div className='image-content'>
            <h1>New Arrivals</h1>
            <p>Soft & Cozy</p>
          </div>
        </div>
      </div>

      <div className='landing-newsletter'>
        <Container>
          <h2>Keep In Touch</h2>
          <p>subscribe to our newsletter to hear about the latest news, promotions and more</p>
          <div className='subscribe-wrapper'>
            <input className='email-input' type='email' placeholder='Enter Email address' />
            <button>SIGN UP</button>
          </div>
        </Container>
      </div>

      <div className='landing-partners'>
        <Container>
          <h2>Trusted Partners</h2>
          <ul>
            <li><img src='https://colorlib.com/preview/theme/footwear/images/brand-2.jpg' alt=''/></li>
            <li><img src='https://colorlib.com/preview/theme/footwear/images/brand-1.jpg' alt=''/></li>
            <li><img src='https://colorlib.com/preview/theme/footwear/images/brand-5.jpg' alt=''/></li>
            <li><img src='https://colorlib.com/preview/theme/footwear/images/brand-4.jpg' alt=''/></li>
          </ul>
        </Container>
      </div>
    </div>

  );
}

export default LandingMain;