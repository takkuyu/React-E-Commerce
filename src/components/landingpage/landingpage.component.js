import React from 'react';
import Header from '../header/header.component';
import {
  Container,
  Row
} from 'reactstrap';

function LandingMain() {
  return (
    <div className='landing-container'>
      <Header />
      <div className='landing-top'>
        <h1>DISCOVER THE WORLD<br />OF MODERN SHOES</h1>
        <div className='shop-btn'>
          <p>SHOP MEN</p>
          <p>SHOP WOMEN</p>
        </div>
      </div>
      <div className='landing-image-gallery'>
          <div className='shoes-image-gallery shoes-type-new'>
            <h1>New Arivals</h1>
            <p>Soft & Cozy</p>
            <div className='shop-btn'>
              <p>SHOP MEN</p>
              <p>SHOP WOMEN</p>
            </div>
          </div>
          <div className='shoes-image-gallery shoes-type-classic'>
            <h1>Casual</h1>
            <p>Soft & Cozy</p>
            <div className='shop-btn'>
              <p>SHOP MEN</p>
              <p>SHOP WOMEN</p>
            </div>
          </div>
          <div className='shoes-image-gallery shoes-type-boots'>
            <h1>Boots</h1>
            <p>Soft & Breezy</p>
            <div className='shop-btn'>
              <p>SHOP MEN</p>
              <p>SHOP WOMEN</p>
            </div>
          </div>
      </div>

      <div className='landing-newsletter'>
        <Container>
          <h2>Keep In Touch</h2>
          <p>subscribe to our newsletter to hear about the latest news, promotions and more</p>
          <input class='email-input' type='email' placeholder='Enter Email address' />
          <button>SIGN UP</button>
        </Container>
      </div>

      <div className='landing-partners'>
        <Container>
          <h2>Trusted Partners</h2>
          <ul>
            <li><img src='https://colorlib.com/preview/theme/footwear/images/brand-2.jpg'/></li>
            <li><img src='https://colorlib.com/preview/theme/footwear/images/brand-1.jpg'/></li>
            <li><img src='https://colorlib.com/preview/theme/footwear/images/brand-5.jpg'/></li>
            <li><img src='https://colorlib.com/preview/theme/footwear/images/brand-4.jpg'/></li>
          </ul>
        </Container>
      </div>

      <footer>
        <h3>LOGO</h3>
        <div>
          <p className='hash-tag'>#LETSWEARMODERN</p>
          <ul className='media-list'> 
            <li><i class="fab fa-instagram"></i></li>
            <li><i class="fab fa-twitter"></i></li>
            <li><i class="fab fa-facebook-f"></i></li>
            <li><i class="fab fa-pinterest-p"></i></li>
          </ul>
        </div>
        <ul>
          <li className='list-title'>HELP</li>
          <li>test text test</li>
          <li>test text test</li>
          <li>test text test</li>
          <li>test text test</li>
        </ul>
        <ul>
          <li className='list-title'>SHOP</li>
          <li>Men's Shoes</li>
          <li>Women's Shoes</li>
          <li>Socks</li>
          <li>Gift Cards</li>
        </ul>
        <ul>
          <li className='list-title'>COMPANY</li>
          <li>Our Stores</li>
          <li>Our Story</li>
          <li>Careers</li>
          <li>Partnerships</li>
        </ul>
        <p className='typography'>© 2020 Allbirds, Inc. All Rights Reserved. Terms, Privacy & Accessibility</p>
      </footer>
    </div>

  );
}

export default LandingMain;
