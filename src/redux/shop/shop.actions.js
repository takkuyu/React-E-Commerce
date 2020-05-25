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

// export const fetchCollectionsStartAsync = () => {
//   return dispatch => {
//     const collectionRef = firestore.collection('collections');
//     dispatch(fetchCollectionsStart());

//     collectionRef
//       .get()
//       .then(snapshot => {
//         const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
//         console.log(collectionsMap)
//         dispatch(fetchCollectionsSuccess(collectionsMap));
//       })
//       .catch(error => dispatch(fetchCollectionsFailure(error.message)));
//   };
// };

export const setCollectionFilter = filter => ({
  type: ShopActionTypes.SET_COLLECTION_FILTER,
  payload: filter
});

export const setColorFilter = color => ({
  type: ShopActionTypes.SET_COLOR_FILTER,
  payload: color
});

export const setCollection = (category, gender) => ({
  type: ShopActionTypes.SET_COLLECTION,
  payload: { category, gender }
});

function filterItemsByGender(collection, gender) {
  const itemsFilteredByGender = collection.items.filter(item => item.item_gender === gender)

  return { ...collection, items: itemsFilteredByGender }
}