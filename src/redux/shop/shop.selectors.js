import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections =>
    collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectCollections],
    collections => (collections ? collections[collectionUrlParam] : null)
  );

// export const selectCollectionTitle = collectionUrlParam =>
//   createSelector(
//     [selectCollections],
//     collections => (collections ? collections[collectionUrlParam].title : null)
//   );

// export const selectCollectionByCategoryAndGender = (category, gender) =>
//   createSelector(
//     [selectCollections],
//     collections =>
//       collections ? collections[category].items.filter(item => item.item_gender === gender) : null
//   );

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  shop => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
  [selectShop],
  shop => !!shop.collections
);
