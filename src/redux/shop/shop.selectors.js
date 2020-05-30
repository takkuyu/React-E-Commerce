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

    if (filter) {
      return collections.map(collection => ({
        ...collection,
        items: filterItemsByFilters(collection.items, filter),
      }))
    }

    return collections
  }
);

export const selectItemAndRecommendations = id =>
  createSelector(
    [selectCollections],
    (collection) => {
      const item = collection[0].items.filter(item => item.id === Number(id))[0];
      const pmin = item.price - 50;
      const pmax = item.price + 50;
      const recommendations = collection[0].items.filter(item => item.id !== Number(id) && item.price <= pmax && item.price >= pmin)
      return { item, recommendations }
    }
  );

function filterItemsByFilters(items, filter) {
  const { price, color, size } = filter;

  if (price) {
    items = items.filter(item => (price.pmin <= item.price && item.price <= price.pmax));
  }
  if (color) {
    items = items.filter(item => item.color === color);
  }
  if (size) {
    items = items.filter(item => item.size.indexOf(size) !== -1);
  }

  return items
}

export const selectCollectionCount = createSelector(
  [selectFilteredCollection],
  (collections) => {
    let count = 0;
    collections.forEach(collection => {
      count = count + collection.items.length
    })
    return count
  }
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

export const selectGender = createSelector(
  [selectShop],
  shop => shop.gender
);

export const selectCategory = createSelector(
  [selectShop],
  shop => shop.category
);