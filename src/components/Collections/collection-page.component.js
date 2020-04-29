import React from 'react';
import { Container } from 'reactstrap';
import { collectionRouter, sum, imageLink } from '../../collection-router';
import SearchFilter from './search-filter.component';
import queryString from 'query-string';


class CollectionPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchFilter: '',
      isModalOpen: false,
      gender: props.match.params.gender,
      category: props.match.params.category,
      price: {
        pmin: queryString.parse(this.props.location.search).pmin,
        pmax: queryString.parse(this.props.location.search).pmax,
      },
      color: queryString.parse(this.props.location.search).color,
      size: queryString.parse(this.props.location.search).size,
      sum: 0,
      imageLink: ''
    }
    // this.updateCollection = this.updateCollection.bind(this);
  }


  componentDidMount() {
    // console.log(imageLink)
    // console.log('didmount')
    // const params = queryString.parse(this.props.location.search)
    // console.log(params)
    this.setState({
      sum: sum,
      imageLink: imageLink
    })
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
    // console.log('render sum : ' + sum)

    const genderText = (this.props.match.params.gender === 'mens' ? "Men's" : "Women's")
    const categoryText = (this.props.match.params.category === undefined ? "Shoes" : this.props.match.params.category)

    return (
      <div className='collections-container'>

        <div className='collections-top'>
          <img src={this.state.imageLink} alt='img' />
          <div className='collections-top-content'>
            <h1>{genderText} {categoryText}</h1>
            <p>The world's most comfortable shoes for life’s everyday adventures.</p>
          </div>
        </div>

        <div className='search-bar'>
          <Container>
            <p className='search-result'>All - {this.state.sum} results</p>
            <ul>
              <li onClick={() => { this.displaysearchFilter('price') }} >Price<i className="fas fa-angle-down"></i></li>
              <li onClick={() => { this.displaysearchFilter('color') }} >Color<i className="fas fa-angle-down"></i></li>
              <li onClick={() => { this.displaysearchFilter('size') }} >Size<i className="fas fa-angle-down"></i></li>
            </ul>
          </Container>
        </div>

        <SearchFilter type={this.state.searchFilter} updateCollection={this.updateCollection} />

        <div className='collections-items-container'>
          <Container>
            <p className='search-result'>All - {this.state.sum} results</p>
            {collectionRouter(this.state.gender, this.state.category, this.state.price, this.state.size, this.state.color)}
          </Container>
        </div>
      </div>
    );

  }
};

export default CollectionPage;