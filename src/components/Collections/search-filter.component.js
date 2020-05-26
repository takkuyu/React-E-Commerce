import React from 'react';
import { Container } from 'reactstrap';

const SearchFilter = ({ currentFilter, setPriceFilter, setColorFilter, setSizeFilter }) => {

  return (
    <div className='search-filter'>
      <Container>
        <div className={`search-filter-size-wrapper ${currentFilter === 'price' ? "open" : ""}`}>
          <ul className={`search-filter-price`} >
            <li onClick={() => setPriceFilter({ pmin: 50, pmax: 100 })} >$50 - $100</li>
            <li onClick={() => setPriceFilter({ pmin: 100, pmax: 150 })} >$100 - $150</li>
            <li onClick={() => setPriceFilter({ pmin: 150, pmax: 200 })}>$150 - $200</li>
            <li onClick={() => setPriceFilter({ pmin: 200, pmax: 300 })}>$200 - $300</li>
          </ul>
        </div>

        <div className={`search-filter-color-wrapper ${currentFilter === 'color' ? "open" : ""}`}>
          <ul className={`search-filter-color`} >
            <li onClick={() => setColorFilter('black')} style={{ backgroundColor: 'rgba(0,0,0,.8)' }}></li>
            <li onClick={() => setColorFilter('white')} style={{ backgroundColor: 'white', border: '1px solid rgb(211, 212, 213)' }}></li>
            <li onClick={() => setColorFilter('brown')} style={{ backgroundColor: '#802b00' }}></li>
            <li onClick={() => setColorFilter('blue')} style={{ backgroundColor: '#4d79ff' }}></li>
            <li onClick={() => setColorFilter('red')} style={{ backgroundColor: '#dc3545' }}></li>
            <li onClick={() => setColorFilter('yellow')} style={{ backgroundColor: '#ff0' }}></li>
            <li onClick={() => setColorFilter('multi')} style={{ background: 'linear-gradient(90deg,#3023ae 0,#53a0fd 47.52%,#b4ec51 100%)' }}></li>
            <li onClick={() => setColorFilter('green')} style={{ backgroundColor: '#28a745' }}></li>
          </ul>
        </div>

        <div className={`search-filter-size-wrapper ${currentFilter === 'size' ? "open" : ""}`}>
          <ul className={`search-filter-size`} >
            <li onClick={() => setSizeFilter(8)} >8</li>
            <li onClick={() => setSizeFilter(9)} >9</li>
            <li onClick={() => setSizeFilter(10)} >10</li>
            <li onClick={() => setSizeFilter(11)} >11</li>
            <li onClick={() => setSizeFilter(12)} >12</li>
            <li onClick={() => setSizeFilter(13)} >13</li>
            <li onClick={() => setSizeFilter(14)} >14</li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default SearchFilter;