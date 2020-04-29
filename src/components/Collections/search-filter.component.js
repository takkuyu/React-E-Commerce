import React from 'react';
import {
  Container
} from 'reactstrap';
// import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

const SearchFilter = (props) => {

  let param = '';
  if (props.location.search !== '') {
    // console.log('params')
    param = props.location.search.slice(1) + '&'
  }

  return (
    <div className='search-filter'>
      <Container>
        <div className={`search-filter-size-wrapper ${props.type === 'price' ? "open" : ""}`}>
          <ul className={`search-filter-size`} >
            <li onClick={() => props.history.push({ pathname: props.location.pathname, search: `?${param}pmin=50&pmax=100`, })} >$50 - $100</li>
            <li onClick={() => props.history.push({ pathname: props.location.pathname, search: `?${param}pmin=100&pmax=150`, })}>$100 - $150</li>
            <li onClick={() => props.history.push({ pathname: props.location.pathname, search: `?${param}pmin=150&pmax=200`, })}>$150 - $200</li>
            <li onClick={() => props.history.push({ pathname: props.location.pathname, search: `?${param}pmin=200&pmax=300`, })}>$200 - $300</li>
          </ul>
        </div>

        <div className={`search-filter-color-wrapper ${props.type === 'color' ? "open" : ""}`}>
          <ul className={`search-filter-color`} >
            <li onClick={() => props.history.push({ pathname: props.location.pathname, search: `?${param}color=black`, })} style={{ backgroundColor: 'rgba(0,0,0,.8)' }}></li>
            <li onClick={() => props.history.push({ pathname: props.location.pathname, search: `?${param}color=white`, })} style={{ backgroundColor: 'white', border: '1px solid rgb(211, 212, 213)' }}></li>
            <li onClick={() => props.history.push({ pathname: props.location.pathname, search: `?${param}color=brown`, })} style={{ backgroundColor: '#802b00' }}></li>
            <li onClick={() => props.history.push({ pathname: props.location.pathname, search: `?${param}color=blue`, })} style={{ backgroundColor: '#4d79ff' }}></li>
            <li onClick={() => props.history.push({ pathname: props.location.pathname, search: `?${param}color=red`, })} style={{ backgroundColor: '#dc3545' }}></li>
            <li onClick={() => props.history.push({ pathname: props.location.pathname, search: `?${param}color=yellow`, })} style={{ backgroundColor: '#ff0' }}></li>
            <li onClick={() => props.history.push({ pathname: props.location.pathname, search: `?${param}color=multi`, })} style={{ background: 'linear-gradient(90deg,#3023ae 0,#53a0fd 47.52%,#b4ec51 100%)' }}></li>
            <li onClick={() => props.history.push({ pathname: props.location.pathname, search: `?${param}color=green`, })} style={{ backgroundColor: '#28a745' }}></li>
          </ul>
        </div>

        <div className={`search-filter-style-wrapper ${props.type === 'size' ? "open" : ""}`}>
          <ul className={`search-filter-style`} >

            <li onClick={() => props.history.push({ pathname: props.location.pathname, search: `?${param}size=8` })} >8</li>
            <li onClick={() => props.history.push({ pathname: props.location.pathname, search: `?${param}size=9` })} >9</li>
            <li onClick={() => props.history.push({ pathname: props.location.pathname, search: `?${param}size=10` })} >10</li>
            <li onClick={() => props.history.push({ pathname: props.location.pathname, search: `?${param}size=11` })} >11</li>
            <li onClick={() => props.history.push({ pathname: props.location.pathname, search: `?${param}size=12` })} >12</li>
            <li onClick={() => props.history.push({ pathname: props.location.pathname, search: `?${param}size=13` })} >13</li>
            <li onClick={() => props.history.push({ pathname: props.location.pathname, search: `?${param}size=14` })} >14</li>
            {/* <li onClick={() => props.updateCollection(100)} >12</li>
            <li onClick={() => props.updateCollection(100)} >13</li>
            <li onClick={() => props.updateCollection(100)} >14</li> */}
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default withRouter(SearchFilter);