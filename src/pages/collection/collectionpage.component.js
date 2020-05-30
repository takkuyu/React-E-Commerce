import React from 'react';
import { Container } from 'reactstrap';
import SearchFilter from '../../components/collections/search-filter.component';
import Category from '../../components/collections/collection-category';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectFilteredCollection, selectCollectionFilter, selectCollectionCount, selectCurrentFilter } from '../../redux/shop/shop.selectors'
import { setColorFilter, setPriceFilter, setSizeFilter, clearAllFilters, toggleFilterMenu } from '../../redux/shop/shop.actions'


// function capitalizeFirstLetter(string) {
//   return string.charAt(0).toUpperCase() + string.slice(1);
// }

// function getCategoryTitle(category) {
//   switch (category) {
//     case "topsellers":
//       return "Top Sellers"
//     case "new":
//       return "New Arrivals"
//     case undefined:
//       return "Shoes"
//     default:
//       return this.capitalizeFirstLetter(category)
//   }
// }

const CollectionPage = ({ filter, setSizeFilter, setColorFilter, setPriceFilter, clearAllFilters, results, toggleFilterMenu, currentFilter, gender, collection }) => {

  const { title, routeName, items, summary, imageUrl } = collection;
  const { price, color, size } = filter
  const genderText = (gender === 'mens' ? "Men's" : "Women's")
  const collectionImage = (gender === 'mens' ? imageUrl.men : imageUrl.women)
  // const categoryText = this.getCategoryTitle(this.props.match.params.category);
  return (
    <div className='collections-container'>

      <div className='collections-top'>
        <img src={collectionImage} alt='img' />
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
            routeName === undefined ?
              <>
                <Category
                  categoryTitle={"Sneakers"}
                  categoryItems={items.sneakers} />
                <Category
                  categoryTitle={"Running Shoes"}
                  categoryItems={items.runningshoes} />
                <Category
                  categoryTitle={"Boots"}
                  categoryItems={items.boots} />
              </>
              :
              <Category categoryItems={items} />
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
});

const mapDispatchToProps = dispatch => ({
  setColorFilter: (color) => dispatch(setColorFilter(color)),
  setPriceFilter: (price) => dispatch(setPriceFilter(price)),
  setSizeFilter: (size) => dispatch(setSizeFilter(size)),
  clearAllFilters: () => dispatch(clearAllFilters()),
  toggleFilterMenu: (filter) => dispatch(toggleFilterMenu(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionPage);