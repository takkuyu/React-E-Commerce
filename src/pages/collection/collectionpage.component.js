import React from 'react';
import { Container } from 'reactstrap';
import SearchFilter from '../../components/collections/search-filter.component';
import Category from '../../components/collections/collection-category';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectFilteredCollection, selectCollectionFilter, selectCollectionCount, selectCurrentFilter, selectGender } from '../../redux/shop/shop.selectors'
import { setColorFilter, setPriceFilter, setSizeFilter, clearAllFilters, toggleFilterMenu } from '../../redux/shop/shop.actions'


const CollectionPage = ({ filter, setSizeFilter, setColorFilter, setPriceFilter, clearAllFilters, results, toggleFilterMenu, currentFilter, gender, collection }) => {

  const title = (collection.length > 1 ? "Shoes" : collection[0].title);
  const summary = (collection.length > 1 ? "Get the latest assortment of shoes online today." : collection[0].summary);
  const collectionImage = (collection.length > 1 ? "https://i.ibb.co/4tnd427/sneakers-02.jpg" : (gender === 'mens' ? collection[0].imageUrl.men : collection[0].imageUrl.women));
  const genderText = (gender === 'mens' ? "Men's" : "Women's");
  const { price, color, size } = filter;

  return (
    <div className='collections-container'>

      <div className='collections-top'>
        <img src={collectionImage} alt='collection image' />
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
                <li onClick={() => { toggleFilterMenu('price') }} >Price<i className="fas fa-angle-down"></i></li>
            }
            {
              color ?
                <li onClick={() => { setColorFilter('') }} >{color}<i className="fas fa-times"></i></li>
                :
                <li onClick={() => { toggleFilterMenu('color') }} >Color<i className="fas fa-angle-down"></i></li>
            }
            {
              size ?
                <li onClick={() => { setSizeFilter(0) }} >{size}<i className="fas fa-times"></i></li>
                :
                <li onClick={() => { toggleFilterMenu('size') }} >Size<i className="fas fa-angle-down"></i></li>
            }
          </ul>
        </Container>
      </div>
      <SearchFilter currentFilter={currentFilter} setColorFilter={setColorFilter} setPriceFilter={setPriceFilter} setSizeFilter={setSizeFilter} />
      <div className='collections-items-container'>
        <Container>
          <p className='search-result'>All - {results} results</p>
          {
            collection.map((collection, index) => <Category key={index} collection={collection}/>)
          }
        </Container>
      </div>
    </div>
  );

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
  toggleFilterMenu: (filter) => dispatch(toggleFilterMenu(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionPage);