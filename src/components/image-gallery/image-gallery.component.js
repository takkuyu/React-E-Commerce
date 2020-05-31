import React from 'react';
import topseller_img from '../../img/topseller.jpg';
import sneakers_img from '../../img/sneakers.jpg';
import running_img from '../../img/running.jpg';
import boots_img from '../../img/boots.jpg';
import new_arrivals_img from '../../img/new-arrivals.jpg';
import { Link } from 'react-router-dom';


function ImageGallery() {
  return (
    <div className='image_gallery'>
      <div className='image_gallery-outer'>

        <div className="image_gallery-inner grid">
          <div className='image-wrapper grid-topsellers'>
            <div className='image' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, .1), rgba(0, 0, 0, .1)),url(${topseller_img})` }}></div>
            <div className='image-content'>
              <h1>Top Sellers</h1>
              <p>Best &amp; Popular</p>
              <div className='shop-btn'>
                <p><Link className="white_link" to="/shop/mens/topsellers">SHOP MEN</Link></p>
                <p><Link className="white_link" to="/shop/women/topsellers">SHOP WOMEN</Link></p>
              </div>
            </div>
          </div>
          <div className='image-wrapper grid-sneakers'>
            <div className='image' style={{ backgroundImage: `url(${sneakers_img})` }}></div>
            <div className='image-content'>
              <h1>Sneakers</h1>
              <p>Soft &amp; Cozy</p>
              <div className='shop-btn'>
                <p><Link className="white_link" to="/shop/mens/sneakers">SHOP MEN</Link></p>
                <p><Link className="white_link" to="/shop/women/sneakers">SHOP WOMEN</Link></p>
              </div>
            </div>
          </div>
          <div className='image-wrapper grid-running'>
            <div className='image' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, .1), rgba(0, 0, 0, .1)),url(${running_img})` }}></div>
            <div className='image-content'>
              <h1>Running Shoes</h1>
              <p>Light &amp; Soft</p>
              <div className='shop-btn'>
                <p><Link className="white_link" to="/shop/mens/runningshoes">SHOP MEN</Link></p>
                <p><Link className="white_link" to="/shop/women/runningshoes">SHOP WOMEN</Link></p>
              </div>
            </div>
          </div>
          <div className='image-wrapper grid-boots'>
            <div className='image' style={{ backgroundImage: `url(${boots_img})` }}></div>
            <div className='image-content'>
              <h1>Boots</h1>
              <p>Durable &amp; Cozy</p>
              <div className='shop-btn'>
                <p><Link className="white_link" to="/shop/mens/boots">SHOP MEN</Link></p>
                <p><Link className="white_link" to="/shop/women/boots">SHOP WOMEN</Link></p>
              </div>
            </div>
          </div>
        </div>

        <div className='image_gallery-inner'>
          <div className='image-wrapper new-arrivals'>
            <div className='image' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, .2), rgba(0, 0, 0, .2)),  url(${new_arrivals_img})` }}></div>
            <div className='image-content'>
              <h1>New Arrivals</h1>
              <p>Trendy &amp; Unique</p>
              <div className='shop-btn'>
                <p><Link className="white_link" to="/shop/mens/newarrivals">SHOP MEN</Link></p>
                <p><Link className="white_link" to="/shop/women/newarrivals">SHOP WOMEN</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default ImageGallery;
