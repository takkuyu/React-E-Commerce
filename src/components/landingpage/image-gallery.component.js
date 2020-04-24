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
        <div className='image-wrapper'>
          <div className='image' style={{backgroundImage: 'url(https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80)'}}></div>
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
          <div className='image' style={{backgroundImage: 'url(https://images.unsplash.com/photo-1532471965572-092fb677a6a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80)'}}></div>
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
          <div className='image' style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, .1), rgba(0, 0, 0, .1)), url(https://images.unsplash.com/photo-1481729379561-01e43a3e1ed4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1436&q=80)'}}></div>
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