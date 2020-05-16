import React from 'react';
import {
  Container
} from 'reactstrap';
import women_topsellers_img from '../../img/women-all.jpg';
import women_newarrivals_img from '../../img/women-running.jpg';
import men_topsellers_img from '../../img/topseller.jpg';
import men_newarrivals_img from '../../img/new-arrivals.jpg';
import { Link } from 'react-router-dom';


function HeaderDropDownMenu({ hideModal, handleSlideList, gender, slideModal }) {

  const genderRoute = (gender === 'Men' ? 'mens' : 'women');
  const topsellersImage = (gender === 'Men' ? men_topsellers_img : women_topsellers_img)
  const newArrivalsImage = (gender === 'Men' ? men_newarrivals_img : women_newarrivals_img)
  const slideList = (slideModal ?
    <ul className="slide-list">
      <li className='title' onClick={() => handleSlideList('')}><i className="fas fa-chevron-left"></i>{gender}</li>
      <li className="link-list"><Link to={`/collections/${genderRoute}`} onClick={hideModal}>View All</Link></li>
      <li className="link-list"><Link to={`/collections/${genderRoute}/sneakers`} onClick={hideModal}>Sneakers</Link></li>
      <li className="link-list"><Link to={`/collections/${genderRoute}/running`} onClick={hideModal}>Running Shoes</Link></li>
      <li className="link-list"><Link to={`/collections/${genderRoute}/boots`} onClick={hideModal}>Boots</Link></li>
      <li className="link-list"><Link to='/collections/new' onClick={hideModal}>New Arrivals</Link></li>
      <li className="link-list"><Link to='/collections/new' onClick={hideModal}>Top Sellers</Link></li>
    </ul>
    :
    ''
  );

  return (
    <div className="header_dropdown">

      <nav className='header_dropdown-mobile'>
        <ul>
          <li className='gender' onClick={() => handleSlideList('Men')}>Men<i className="fas fa-chevron-right"></i></li>
          <li className='gender' onClick={() => handleSlideList('Women')}>Women<i className="fas fa-chevron-right"></i></li>
          <li className="link-list"><Link to='/account/login' onClick={hideModal}>Account<i className="far fa-user"></i></Link></li>
          <li>Help<i className="far fa-question-circle"></i></li>
        </ul>
        {slideList}
      </nav>

      <nav className='header_dropdown-desktop'>
        <Container>
          <div className='header_dropdown-main'>
            <div className="header_dropdown-shoes">
              <p>SHOES</p>
              <ul>
                <li><Link to={`/collections/${genderRoute}`} onClick={hideModal}>View All</Link></li>
                <li><Link to={`/collections/${genderRoute}/sneakers`} onClick={hideModal}>Sneakers</Link></li>
                <li><Link to={`/collections/${genderRoute}/running`} onClick={hideModal}>Running Shoes</Link></li>
                <li><Link to={`/collections/${genderRoute}/boots`} onClick={hideModal}>Boots</Link></li>
                <li><Link to={`/collections/${genderRoute}/new`} onClick={hideModal}>New Arrivals</Link></li>
              </ul>
            </div>
            <div className="header_dropdown-collections">
              <p>COLLECTIONS</p>
              <ul>
                <li className='collection-item' style={{ backgroundImage: `url(${topsellersImage})` }} ><Link to={`/collections/${genderRoute}/topsellers`} onClick={hideModal}>TOP SELLERS</Link></li>
                <li className='collection-item' style={{ backgroundImage: `url(${newArrivalsImage})` }}><Link to={`/collections/${genderRoute}/new`} onClick={hideModal}>NEW ARRIVALS</Link></li>
              </ul>
            </div>
          </div>
        </Container>
      </nav>
      <div className='blanket' onClick={hideModal}></div>
    </div>
  );
}

export default HeaderDropDownMenu;