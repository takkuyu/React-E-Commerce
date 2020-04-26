import React from 'react';
import {
  Container
} from 'reactstrap';
import MensSneakers from './Mens/mens-sneakers';
import SearchFilter from './search-filter.component'

class Mens extends React.Component {

  constructor() {
    super();
    this.state = {
      searchFilter: '',
      isModalOpen: false
    }
  }

  displaysearchFilter(type) {
    if (this.state.searchFilter !== type && this.state.isModalOpen) {
      this.setState({
        searchFilter: type
      })
      return
    }

    if (this.state.searchFilter === type) {
      this.setState({
        searchFilter: '',
        isModalOpen: false
      })
      return
    }
    this.setState({
      searchFilter: type,
      isModalOpen: true
    })
  }

  render() {
    return (
      <div className='collections-container'>

        <div className='collections-top'>
          <img src="https://images.unsplash.com/photo-1556774687-0e2fdd0116c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80" alt='img' />
          <div className='collections-top-content'>
            <h1>Men's Shoes</h1>
            <p>The world's most comfortable shoes for life’s everyday adventures.</p>
          </div>
        </div>

        <div className='search-bar'>
          <Container>
            <p className='search-result'>All - 80 results</p>
            <ul>
              <li onClick={() => { this.displaysearchFilter('size') }}>Size<i className="fas fa-angle-down"></i></li>
              <li onClick={() => { this.displaysearchFilter('color') }}>Color<i className="fas fa-angle-down"></i></li>
              <li onClick={() => { this.displaysearchFilter('style') }}>Style<i className="fas fa-angle-down"></i></li>
            </ul>
          </Container>
        </div>

        <SearchFilter type={this.state.searchFilter} />

        <div className='collections-items-container'>
          {/* <Container> */}
          <p className='search-result'>All - 80 results</p>
          <MensSneakers />
          {/* </Container> */}
        </div>
      </div>
    );

  }
};

export default Mens;