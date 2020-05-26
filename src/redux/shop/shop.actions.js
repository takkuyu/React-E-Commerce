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
    dispatch(fetchCollectionsStart());
    collectionRef
      .get()
      .then(snapshot => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        console.log("fetchCollectionsStartAsync")
        // filter collection by category passed from match.params.
        const collectionByCategory = collectionsMap[category];

        dispatch(fetchCollectionsSuccess({
          ...collectionByCategory,
          items: collectionByCategory.items.filter(item => item.item_gender === gender) // filter collection by gender passed from match.params.
        }));
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
