import React from 'react';
import {
  Container,
  Row
} from 'reactstrap';

function ImageGallery() {
  return (
    <Container className='landing-image-gallery-container'>

      <div className='image-gallery-left'>
        <div className='image-wrapper'>
          <div className='image'></div>
          <div className='image-content'>
            <h1>Selection</h1>
            <p>Soft & Cozy</p>
            <div className='shop-btn'>
              <p>SHOP MEN</p>
              <p>SHOP WOMEN</p>
            </div>
          </div>
        </div>
      </div>

      <div className='image-gallery-right'>
        <div className='landing-image-gallery shoes-type-new'>
          <div className='image'></div>
          <div className='inner'>
            <h1>New Arrivals</h1>
            <p>Soft & Cozy</p>
            <div className='shop-btn'>
              <p>SHOP MEN</p>
              <p>SHOP WOMEN</p>
            </div>
          </div>
        </div>
        <div className='landing-image-gallery shoes-type-sneakers'>
          <div className='inner'>
            <h1>Sneakers</h1>
            <p>Soft & Cozy</p>
            <div className='shop-btn'>
              <p>SHOP MEN</p>
              <p>SHOP WOMEN</p>
            </div>
          </div>
        </div>
        <div className='landing-image-gallery shoes-type-boots'>
          <div className='inner'>
            <h1>Boots</h1>
            <p>Soft & Breezy</p>
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