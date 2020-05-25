import { createSelector } from 'reselect';
import FilerTypes from './filter.types'
import queryString from 'query-string';

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


// export const selectFilteredCollection = (search) =>
//   createSelector(
//     [selectCollections, selectFilter],

//     (collections, filter) => {
//       if (collections) {
//         // if(!filter) return filterItemsByGender(collections[category], gender);

//         // const collection = filterItemsByGender(collections[category], gender);
//         // console.table(collections.items)
//         console.log(queryString.parse(search))
//         const {pmin, pmax, color, size} = queryString.parse(search);

//         // console.log(pmin, pmax)
//         switch (filter.type) {
//           case FilerTypes.FILTER_COLOR:
//             return { ...collections, items: collections.items.filter(item => item.color === filter.data) }
//           case FilerTypes.FILTER_SIZE:
//             return { ...collections, items: collections.items.filter(item => item.size.indexOf(Number(filter.data)) !== -1) }
//           case FilerTypes.FILTER_PRICE:
//             return { ...collections, items: collections.items.filter(item => Number(filter.data.pmin) <= item.price && item.price <= Number(filter.data.pmax)) }
//           default:
//             return collections
//         }
//       }

//       return null
//     }
//   );
export const selectFilteredCollection = (search) =>
  createSelector(
    [selectCollections],
    (collections) => {
      console.log('filter')
      if (!collections) return null;

      if (search) {
        const { pmin, pmax, color, size } = queryString.parse(search);
        let { items } = collections;

        if (pmin !== undefined && pmax !== undefined) {
          items = items.filter(item => (Number(pmin) <= item.price && item.price <= Number(pmax)));
        }
        if (color !== undefined) {
          items = items.filter(item => item.color === color);
        }
        if (size !== undefined) {
          items = items.filter(item => item.size.indexOf(Number(size)) !== -1);
        }

        return { ...collections, items: items }
      }

      return collections
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

// function filterItemsByGender(collection, gender) {
//   const itemsFilteredByGender = collection.items.filter(item => item.item_gender === gender)

//   return { ...collection, items: itemsFilteredByGender }
// }
