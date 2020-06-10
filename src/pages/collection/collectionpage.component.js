import React from 'react';
import { Container } from 'reactstrap';
import SearchFilter from '../../components/collections/search-filter.component';
import Category from '../../components/collections/collection-category';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectFilteredCollection, selectCollectionFilter, selectCollectionCount, selectCurrentFilter, selectGender } from '../../redux/shop/shop.selectors'
import { setColorFilter, setPriceFilter, setSizeFilter, clearAllFilters, toggleFilterMenu, refreshFilters } from '../../redux/shop/shop.actions'


class CollectionPage extends React.Component {

  componentWillUnmount(){
    console.log('will unmount')
    this.props.refreshFilters()
  }

  render() {
    console.log('colleCollectionPage render')

    const { filter, setSizeFilter, setColorFilter, setPriceFilter, clearAllFilters, results, toggleFilterMenu, currentFilter, gender, collection } = this.props;
    const title = (collection.length > 1 ? "Shoes" : collection[0].title);
    const summary = (collection.length > 1 ? "Get the latest assortment of shoes online today." : collection[0].summary);
    const collectionImage = (collection.length > 1 ?
      (gender === 'mens' ? "https://i.ibb.co/4tnd427/sneakers-02.jpg" : "https://i.ibb.co/nfWbqkS/women-all.jpg")
      :
      (gender === 'mens' ? collection[0].imageUrl.men : collection[0].imageUrl.women)
    );
    const genderText = (gender === 'mens' ? "Men's" : "Women's");
    const { price, color, size } = filter;

    return (
      <div className='collections-container'>

        <div className='collections-top'>
          <img src={collectionImage} alt='collection' />
          <div className='collections-top-content'>
            <h1>{genderText} {title}</h1>
            <p>{summary}</p>
          </div>
        </div>

        <div className='search-bar'>
          <Container>
            <p className='search-result'>All - {results} results</p>
            {
              filter.color || filter.price || filter.size ? <button onClick={clearAllFilters} className='clearFilterBtn'>CLEAR FILTERS</button> : <></>
            }
            <ul>
              {
                price ?
                  <li onClick={() => { setPriceFilter(0) }} >${price.pmin} - ${price.pmax}<i className="fas fa-times"></i></li>
                  :
                  <li onClick={() => { toggleFilterMenu('price') }} className={currentFilter === 'price' ? 'active' : ''} >Price<i className="fas fa-angle-down"></i></li>
              }
              {
                color ?
                  <li onClick={() => { setColorFilter('') }} >{color}<i className="fas fa-times"></i></li>
                  :
                  <li onClick={() => { toggleFilterMenu('color') }} className={currentFilter === 'color' ? 'active' : ''} >Color<i className="fas fa-angle-down"></i></li>
              }
              {
                size ?
                  <li onClick={() => { setSizeFilter(0) }} >{size}<i className="fas fa-times"></i></li>
                  :
                  <li onClick={() => { toggleFilterMenu('size') }} className={currentFilter === 'size' ? 'active' : ''} >Size<i className="fas fa-angle-down"></i></li>
              }
            </ul>
          </Container>
        </div>
        <SearchFilter currentFilter={currentFilter} setColorFilter={setColorFilter} setPriceFilter={setPriceFilter} setSizeFilter={setSizeFilter} />
        <div className='collections-items-container'>
          <Container>
            <p className='search-result'>All - {results} results</p>
            {
              collection.map((col, index) =>
                <Category key={index} collection={col} isOverviewPage={collection.length > 1 ? true : false} />
              )
            }
          </Container>
        </div>
      </div>
    );
  }

};

const mapStateToProps = createStructuredSelector({
  collection: selectFilteredCollection,
  filter: selectCollectionFilter,
  results: selectCollectionCount,
  currentFilter: selectCurrentFilter,
  gender: selectGender,
});

const mapDispatchToProps = dispatch => ({
  setColorFilter: (color) => dispatch(setColorFilter(color)),
  setPriceFilter: (price) => dispatch(setPriceFilter(price)),
  setSizeFilter: (size) => dispatch(setSizeFilter(size)),
  clearAllFilters: () => dispatch(clearAllFilters()),
  refreshFilters: () => dispatch(refreshFilters()),
  toggleFilterMenu: (filter) => dispatch(toggleFilterMenu(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionPage);