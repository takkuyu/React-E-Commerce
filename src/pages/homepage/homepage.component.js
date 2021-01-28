import React from 'react';
import ImageGallery from '../../components/image-gallery/image-gallery.component';
import logo from '../../img/takaya-logo.png';
import heroImgBg from '../../img/hero-bg1.jpg';
import nike from '../../img/nike.jpg';
import adidas from '../../img/adidas.jpg';
import newbalance from '../../img/newbalance.jpg';
import underarmour from '../../img/underarmour.jpg';
import { Link } from 'react-router-dom';

const Homepage = () => (
  <div className='homepage'>
    <div className='homepage_top' style={{ backgroundImage: `url(${heroImgBg})` }}>
      <h1 className="homepage_top-heading">DISCOVER THE WORLD<br />OF MODERN SHOES</h1>
      <div className='shop-btn'>
        <p><Link className="white_link" to="/shop/mens">SHOP MEN</Link></p>
        <p><Link className="white_link" to="/shop/women">SHOP WOMEN</Link></p>
      </div>
    </div>
    <div className='homepage_about container'>
      <img src={logo} alt='logo' />
      <p>It started with a simple idea: Create quality, well-designed products that I wanted myself. </p>
    </div>
    <div className="homepage_image_gallery">
      <ImageGallery />
    </div>
    <div className='homepage_newsletter container'>
      <h2 className="subheading">Keep In Touch</h2>
      <p>subscribe to our newsletter to hear about the latest news, promotions and more</p>
      <div className='homepage_newsletter-subscribe'>
        <input className='email-field' type='email' placeholder='Enter Email address' />
        <button onClick={() => alert('Thank you for subscribing !')}>SIGN UP</button>
      </div>
    </div>
    <div className='homepage_partners container'>
      <h2 className="subheading">Our Trusted Partners</h2>
      <ul>
        <li><img src={nike} alt='nike' /></li>
        <li><img src={adidas} alt='adidas' /></li>
        <li><img src={newbalance} alt='newbalance' /></li>
        <li><img src={underarmour} alt='underarmour' /></li>
      </ul>
    </div>
  </div>
);

export default Homepage;
