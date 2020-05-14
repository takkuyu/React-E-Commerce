import React from 'react';
import ImageGallery from '../../components/image-gallery/image-gallery.component';
import logo from '../../img/takaya-logo.png';
import hero_bg1 from '../../img/hero-bg1.jpg';
import hero_bg2 from '../../img/hero-bg2.jpg';
import hero_bg3 from '../../img/hero-bg3.jpg';

class Homepage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hero_bg: ''
    }
  }

  componentDidMount() {
    const hero_imgs = [hero_bg1, hero_bg2, hero_bg3];
    const randomNum = Math.floor(Math.random() * 3);
    this.setState({ hero_bg: hero_imgs[randomNum] })
  }

  render() {
    return (
      <div className='homepage'>

        <div className='homepage_top' style={{ backgroundImage: `url(${this.state.hero_bg})` }}>
          <h1 className="homepage_top-heading">DISCOVER THE WORLD<br />OF MODERN SHOES</h1>
          <div className='shop-btn'>
            <p>SHOP MEN</p>
            <p>SHOP WOMEN</p>
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
              <button onClick={()=> alert('Thank you for subscribing !')}>SIGN UP</button>
            </div>
        </div>

        <div className='homepage_partners container'>
          <h2 className="subheading">Trusted Partners</h2>
          <ul>
            <li><img src='https://colorlib.com/preview/theme/footwear/images/brand-2.jpg' alt='' /></li>
            <li><img src='https://colorlib.com/preview/theme/footwear/images/brand-1.jpg' alt='' /></li>
            <li><img src='https://colorlib.com/preview/theme/footwear/images/brand-5.jpg' alt='' /></li>
            <li><img src='https://colorlib.com/preview/theme/footwear/images/brand-4.jpg' alt='' /></li>
          </ul>
        </div>
      </div>

    );

  }
}

export default Homepage;
