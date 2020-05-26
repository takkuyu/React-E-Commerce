import { createSelector } from 'reselect';

const selectShop = state => state.shop;
const selectFilter = state => state.shop.filter; //@TODO: may not need this ?


export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionFilter = createSelector(
  [selectFilter],
  filter => filter
);

export const selectFilteredCollection = createSelector(
  [selectCollections, selectFilter],
  (collections, filter) => {
    // console.log('filter')
    if (!collections) return null;

    if (filter) {
      const { price, color, size } = filter;
      let { items } = collections;
      // console.log(size)

      if (price) {
        items = items.filter(item => (price.pmin <= item.price && item.price <= price.pmax));
      }
      if (color) {
        items = items.filter(item => item.color === color);
      }
      if (size) {
        items = items.filter(item => item.size.indexOf(size) !== -1);
      }

      return { ...collections, items: items }
    }

    return collections
  }
);

export const selectCollectionCount = createSelector(
  [selectFilteredCollection],
  collection => collection.items.length
);

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  shop => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
  [selectShop],
  shop => !!shop.collections
);

export const selectCurrentFilter = createSelector(
  [selectShop],
  shop => shop.currentFilter
);