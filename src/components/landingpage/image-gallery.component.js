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
          <div className='image' style={{backgroundImage: `url(https://images.unsplash.com/photo-1581088293793-0e9f1cae5bed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1363&q=80)`}}></div>
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
            <h1>Sneakers</h1>
            <p>Soft & Cozy</p>
            <div className='shop-btn'>
              <p>SHOP MEN</p>
              <p>SHOP WOMEN</p>
            </div>
          </div>
        </div>
        <div className='image-wrapper'>
          <div className='image' style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, .1), rgba(0, 0, 0, .1)),url(https://images.unsplash.com/photo-1580893172996-6c3dc081d600?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1338&q=80)`}}></div>
          <div className='image-content'>
            <h1>Running Shoes</h1>
            <p>Soft & Cozy</p>
            <div className='shop-btn'>
              <p>SHOP MEN</p>
              <p>SHOP WOMEN</p>
            </div>
          </div>
        </div>
        {/* <div className='image-wrapper'>
          <div className='image' style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, .1), rgba(0, 0, 0, .1)), url(https://images.unsplash.com/photo-1546367564-ade1880f8921?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80)`}}></div>
          <div className='image-content'>
            <h1>Boots</h1>
            <p>Soft & Cozy</p>
            <div className='shop-btn'>
              <p>SHOP MEN</p>
              <p>SHOP WOMEN</p>
            </div>
          </div>
        </div> */}

      </div>
    </Container>
  );
}

export default ImageGallery;