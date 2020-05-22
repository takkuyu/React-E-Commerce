import { createSelector } from 'reselect';
import FilerTypes from './filter.types'

const selectShop = state => state.shop;
const selectFilter = state => state.shop.filter;


export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections =>
    collections ? Object.keys(collections).map(key => collections[key]) : []
);

// export const selectCollectionByGender = (category, gender) => createSelector(
//   [selectCollections],
//   collections =>
//     collections ? filterItemsByGender(collections[category], gender) : []
// );

export const selectFilteredCollection = (category, gender) =>
  createSelector(
    [selectCollections, selectFilter],

    (collections, filter) => {
      if (collections) {
        // if(!filter) return filterItemsByGender(collections[category], gender);

        const collection = filterItemsByGender(collections[category], gender);

        switch (filter.type) {
          case FilerTypes.FILTER_COLOR:
            return { ...collection, items: collection.items.filter(item => item.color === filter.data) }
          case FilerTypes.FILTER_SIZE:
            return { ...collection, items: collection.items.filter(item => item.size.indexOf(Number(filter.data)) !== -1) }
          case FilerTypes.FILTER_PRICE:
            return { ...collection, items: collection.items.filter(item => Number(filter.data.pmin) <= item.price && item.price <= Number(filter.data.pmax)) }
          default:
            return collection
        }
      }

      return null
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

function filterItemsByGender(collection, gender) {
  const itemsFilteredByGender = collection.items.filter(item => item.item_gender === gender)

  return { ...collection, items: itemsFilteredByGender }
}