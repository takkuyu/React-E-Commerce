import React from 'react';
import logo from '../../img/takaya-logo-white.png';

function Footer() {
  return (
    <footer>
      <img src={logo} alt='logo' />
      <div>
        <p className='hash-tag'>#LETSWEARMODERN</p>
        <ul className='media-list'>
          <li><i className="fab fa-instagram"></i></li>
          <li><i className="fab fa-twitter"></i></li>
          <li><i className="fab fa-facebook-f"></i></li>
          <li><i className="fab fa-pinterest-p"></i></li>
        </ul>
      </div>
      <div className='footer-list'>
        <ul>
          <li className='list-title'>HELP</li>
          <li>1-778-123-4567</li>
          <li>help@takaya.ca</li>
          <li>Returns/Exchanges</li>
          <li>FAQ/Contact Us</li>
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
      </div>
      <p className='typography'>© 2020 takaya clothing Inc. All Rights Reserved. Terms, Privacy & Accessibility</p>
    </footer>
  );
}

export default Footer;