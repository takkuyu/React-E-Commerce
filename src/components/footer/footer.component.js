import React from 'react';

function Footer() {
  return (
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
  );
}

export default Footer;