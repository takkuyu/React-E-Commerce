import React from 'react';
import {
  Container
} from 'reactstrap';

const Routes = ({ type }) => {

  return (
    <div className='search-filter'>
      <Container>
        <div className={`search-filter-size-wrapper ${type === 'size' ? "open" : ""}`}>
          <ul className={`search-filter-size`} >
            <li>$50 - $100</li>
            <li>$100 - $150</li>
            <li>$150 - $200</li>
            <li>$200 - $300</li>
          </ul>
        </div>

        <div className={`search-filter-color-wrapper ${type === 'color' ? "open" : ""}`}>
          <ul className={`search-filter-color`} >
            <li style={{ backgroundColor: 'rgba(0,0,0,.8)' }}></li>
            <li style={{ backgroundColor: 'white', border: '1px solid rgb(211, 212, 213)' }}></li>
            <li style={{ backgroundColor: '#802b00' }}></li>
            <li style={{ backgroundColor: '#4d79ff' }}></li>
            <li style={{ backgroundColor: '#dc3545' }}></li>
            <li style={{ backgroundColor: '#ff0' }}></li>
            <li style={{ background: 'linear-gradient(90deg,#3023ae 0,#53a0fd 47.52%,#b4ec51 100%)' }}></li>
            <li style={{ backgroundColor: '#28a745' }}></li>
          </ul>
        </div>

        <div className={`search-filter-style-wrapper ${type === 'style' ? "open" : ""}`}>
          <ul className={`search-filter-style`} >
            <li>Sneakers</li>
            <li>Active Shoes</li>
            <li>Boots</li>
            <li>New Arrivals</li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Routes;