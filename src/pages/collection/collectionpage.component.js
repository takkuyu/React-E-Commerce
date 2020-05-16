import React from 'react';
import { Container } from 'reactstrap';
import { collectionRouter, sum, imageLink } from '../../collection-router';
import SearchFilter from '../../components/collections/search-filter.component';
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
    console.log(this.props.match)
    // this.updateCollection = this.updateCollection.bind(this);
  }

  componentDidMount() {
    // console.log(this.props.location.search)
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

  clearFilter(type) {
    const param = queryString.parse(this.props.location.search);
    // console.log(param)
    switch (type) {
      case 'price':
        delete param.pmin
        delete param.pmax
        this.props.history.push({ pathname: this.props.location.pathname, search: queryString.stringify(param) })
        break;
      case 'color':
        delete param.color
        this.props.history.push({ pathname: this.props.location.pathname, search: queryString.stringify(param) })
        break;
      case 'size':
        delete param.size
        this.props.history.push({ pathname: this.props.location.pathname, search: queryString.stringify(param) })
        break;
      case 'all':
        this.props.history.push({ pathname: this.props.location.pathname, search: '' })
        break;
      default:
        break;
    }
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  getCategoryTitle(category) {
    switch (category) {
      case "topsellers":
        return "Top Sellers"
      case "new":
        return "New Arrivals"
      case undefined:
        return "Shoes"
      default:
        return this.capitalizeFirstLetter(category)
    }
  }

  render() {
    const genderText = (this.props.match.params.gender === 'mens' ? "Men's" : "Women's")
    const categoryText = this.getCategoryTitle(this.props.match.params.category);
    const categorySummary = "The world's most comfortable shoes for life’s everyday adventures.";
    const clearFilterBtn = (this.props.location.search !== '' ? <button onClick={() => { this.clearFilter('all') }} className='clearFilterBtn'>CLEAR FILTERS</button> : <div></div>)

    return (
      <div className='collections-container'>

        <div className='collections-top'>
          <img src={this.state.imageLink} alt='img' />
          <div className='collections-top-content'>
            <h1>{genderText} {categoryText}</h1>
            <p>{categorySummary}</p>
          </div>
        </div>

        <div className='search-bar'>
          <Container>
            <p className='search-result'>All - {this.state.sum} results</p>
            {clearFilterBtn}
            <ul>
              {
                this.state.price.pmin !== undefined && this.state.price.pmax !== undefined ?
                  <li onClick={() => { this.clearFilter('price') }} >${this.state.price.pmin} - ${this.state.price.pmax}<i className="fas fa-times"></i></li>
                  :
                  <li onClick={() => { this.displaysearchFilter('price') }} >Price<i className="fas fa-angle-down"></i></li>
              }
              {
                this.state.color !== undefined ?
                  <li onClick={() => { this.clearFilter('color') }} >{this.state.color}<i className="fas fa-times"></i></li>
                  :
                  <li onClick={() => { this.displaysearchFilter('color') }} >Color<i className="fas fa-angle-down"></i></li>
              }
              {
                this.state.size !== undefined ?
                  <li onClick={() => { this.clearFilter('size') }} >{this.state.size}<i className="fas fa-times"></i></li>
                  :
                  <li onClick={() => { this.displaysearchFilter('size') }} >Size<i className="fas fa-angle-down"></i></li>
              }
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