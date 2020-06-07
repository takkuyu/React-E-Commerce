import ShopActionTypes from './shop.types';
import {
  firestore,
  convertCollectionsSnapshotToMap
} from '../../firebase/firebase.utils';

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = collectionsMap => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
});

export const fetchCollectionsFailure = errorMessage => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
});

export const fetchCollectionsStartAsync = (category, gender) => {
  return dispatch => {
    const collectionRef = firestore.collection('collections');
    console.log('will fetchCollectionsStart')
    dispatch(fetchCollectionsStart());
    collectionRef
      .get()
      .then(snapshot => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);

        // filter collections by category passed from match.params.category.
        if (category === undefined) {
          const collectionsFilteredByGender = collectionsMap.map(collection => ({
            ...collection,
            items: collection.items.filter(item => item.item_gender === gender)
          }))
          dispatch(fetchCollectionsSuccess(collectionsFilteredByGender));
        } else {
          const collectionFilteredByCategory = collectionsMap.filter(collection => collection.routeName === category)[0];
          console.log('will fetchCollectionsSuccess')
          dispatch(fetchCollectionsSuccess(
            [{
              ...collectionFilteredByCategory,
              items: collectionFilteredByCategory.items.filter(item => item.item_gender === gender) // filter collection by gender passed from match.params.gedner.
            }]
          ));
        }
      })
      .catch(error => dispatch(fetchCollectionsFailure(error.message)));
  };
};

export const setColorFilter = color => ({
  type: ShopActionTypes.SET_COLOR_FILTER,
  payload: color
});

export const setPriceFilter = price => ({
  type: ShopActionTypes.SET_PRICE_FILTER,
  payload: price
});

export const setSizeFilter = size => ({
  type: ShopActionTypes.SET_SIZE_FILTER,
  payload: size
});

export const clearAllFilters = () => ({
  type: ShopActionTypes.CLEAR_ALL_FILTERS,
});

export const toggleFilterMenu = (filter) => ({
  type: ShopActionTypes.TOGGLE_FILTER_MENU,
  payload: filter
});

export const setGender = gender => ({
  type: ShopActionTypes.SET_GENDER,
  payload: gender
});

export const setCategory = category => ({
  type: ShopActionTypes.SET_CATEGORY,
  payload: category
});

export const refreshCollections = () => ({
  type: ShopActionTypes.REFRESH_COLLECTIONS,
});