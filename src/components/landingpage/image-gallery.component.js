import React from 'react';
import topseller_img from '../../img/topseller.jpg';
import sneakers_img from '../../img/sneakers.jpg';
import running_img from '../../img/running.jpg';
import boots_img from '../../img/boots.jpg';


function ImageGallery() {
  return (
    <div className='image-gallery-container'>
      <div className='image-wrapper grid-topsellers'>
        <div className='image' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, .1), rgba(0, 0, 0, .1)),url(${topseller_img})` }}></div>
        <div className='image-content'>
          <h1>Top Sellers</h1>
          <p>Soft & Cozy</p>
          <div className='shop-btn'>
            <p>SHOP MEN</p>
            <p>SHOP WOMEN</p>
          </div>
        </div>
      </div>
      <div className='image-wrapper grid-sneakers'>
        <div className='image' style={{ backgroundImage: `url(${sneakers_img})` }}></div>
        <div className='image-content'>
          <h1>Sneakers</h1>
          <p>Soft & Cozy</p>
          <div className='shop-btn'>
            <p>SHOP MEN</p>
            <p>SHOP WOMEN</p>
          </div>
        </div>
      </div>
      <div className='image-wrapper grid-running'>
        <div className='image' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, .1), rgba(0, 0, 0, .1)),url(${running_img})` }}></div>
        <div className='image-content'>
          <h1>Running Shoes</h1>
          <p>Soft & Cozy</p>
          <div className='shop-btn'>
            <p>SHOP MEN</p>
            <p>SHOP WOMEN</p>
          </div>
        </div>
      </div>
      <div className='image-wrapper grid-boots'>
        <div className='image' style={{ backgroundImage: `url(${boots_img})` }}></div>
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
  );
}

export default ImageGallery;
