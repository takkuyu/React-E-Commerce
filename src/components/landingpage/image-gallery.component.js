import React from 'react';
import {
  Container,
} from 'reactstrap';
import new_arrivals_img from '../../img/new-arrivals.jpg';
import sneakers_img from '../../img/sneakers.jpg';
import boots_img from '../../img/boots.jpg';
import topseller_img from '../../img/topseller.jpg';

function ImageGallery() {
  return (
    <Container className='landing-image-gallery-container'>

      <div className='image-gallery-left'>
        <div className='image-wrapper'>
          <div className='image' style={{backgroundImage: `url(${topseller_img})`}}></div>
          <div className='image-content'>
            <h1>Top Sellers</h1>
            <p>Soft & Cozy</p>
            <div className='shop-btn'>
              <p>SHOP MEN</p>
              <p>SHOP WOMEN</p>
            </div>
          </div>
        </div>
      </div>

      <div className='image-gallery-right'>
        <div className='image-wrapper'>
          <div className='image' style={{backgroundImage: `url(${new_arrivals_img})`}}></div>
          <div className='image-content'>
            <h1>New Arrivals</h1>
            <p>Soft & Cozy</p>
            <div className='shop-btn'>
              <p>SHOP MEN</p>
              <p>SHOP WOMEN</p>
            </div>
          </div>
        </div>
        <div className='image-wrapper'>
          <div className='image' style={{backgroundImage: `url(${sneakers_img})`}}></div>
          <div className='image-content'>
            <h1>Sneakers</h1>
            <p>Soft & Cozy</p>
            <div className='shop-btn'>
              <p>SHOP MEN</p>
              <p>SHOP WOMEN</p>
            </div>
          </div>
        </div>
        <div className='image-wrapper'>
          <div className='image' style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, .1), rgba(0, 0, 0, .1)), url(${boots_img})`}}></div>
          <div className='image-content'>
            <h1>Boots</h1>
            <p>Soft & Cozy</p>
            <div className='shop-btn'>
              <p>SHOP MEN</p>
              <p>SHOP WOMEN</p>
            </div>
          </div>
        </div>

      </div>
    </Container>
  );
}

export default ImageGallery;