import React from 'react';
import {
  Container
} from 'reactstrap';
import women_shoes_1 from '../../img/women-all.jpg';
import women_shoes_2 from '../../img/women-running.jpg';
import new_arrivals_img from '../../img/new-arrivals.jpg';
import topseller_img from '../../img/topseller.jpg';
import { Link } from 'react-router-dom';


function HeaderModal({ hideModal, gender }) {
  const genderRoute = (gender === 'Men' ? 'mens' : 'women');

  return (
    <div id='modal' className="header-modal-container">

      <nav className='mobile-modal-wrapper'>
        <ul>
          <li className='men-list'>
            MEN
            <i className="fas fa-chevron-right"></i>
          </li>
          <li className='women-list'>
            WOMEN
            <i className="fas fa-chevron-right"></i>
          </li>
          <li>STORES</li>
          <li>Account</li>
          <li>Help</li>
        </ul>
      </nav>

      <nav className='desktop-modal-wrapper'>
        <Container>
          <div className='modal-list'>
            <ul>
              <li className='list-title'>SHOES</li>
              <li><Link to={`/collections/${genderRoute}`} onClick={hideModal}>View All</Link></li>
              <li><Link to={`/collections/${genderRoute}/sneakers`} onClick={hideModal}>Sneakers</Link></li>
              <li><Link to={`/collections/${genderRoute}/running`} onClick={hideModal}>Running Shoes</Link></li>
              <li><Link to={`/collections/${genderRoute}/boots`} onClick={hideModal}>Boots</Link></li>
              <li><Link to='/collections/new' onClick={hideModal}>New Arrivals</Link></li>
            </ul>
            <ul>
              <li className='list-title'>SOCKS</li>
              <li>Short</li>
              <li>Tall</li>
            </ul>
            <ul className='collections'>
              <li className='list-title'>COLLECTIONS</li>
              {
                gender === 'Men' ?
                  <div className='collection-item-wrapper'>

                    <li className='collection-item' style={{ backgroundImage: `url(${topseller_img})` }}>TOP SELLERS</li>
                    <li className='collection-item' style={{ backgroundImage: `url(${new_arrivals_img})` }}>NEW ARRIVALS</li>
                  </div>

                  :
                  <div className='collection-item-wrapper'>

                    <li className='collection-item' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, .2), rgba(0, 0, 0, .2)),url(${women_shoes_1})` }}>TOP SELLERS</li>
                    <li className='collection-item' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, .2), rgba(0, 0, 0, .2)),url(${women_shoes_2})` }}>NEW ARRIVALS</li>
                  </div>

              }
            </ul>
          </div>
        </Container>
      </nav>
      <div className='blanket' onClick={hideModal}></div>

    </div>
  );
}

export default HeaderModal;