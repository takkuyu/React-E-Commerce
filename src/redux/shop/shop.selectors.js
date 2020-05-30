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

// export const selectFilteredItems = (items) =>
//   createSelector(
//     [selectFilter],
//     (filter) => {
//       console.log('filter')

//       if (filter) {
//         const { price, color, size } = filter;

//         if (price) {
//           items = items.filter(item => (price.pmin <= item.price && item.price <= price.pmax));
//         }
//         if (color) {
//           items = items.filter(item => item.color === color);
//         }
//         if (size) {
//           items = items.filter(item => item.size.indexOf(size) !== -1);
//         }

//         return items
//       }

//       return items
//     }
//   );

// export const selectFilteredCollection = createSelector(
//   [selectCollections, selectFilter],
//   (collections, filter) => {
//     // console.log('filter')
//     if (!collections) return null;

//     if (filter) {
//       const { price, color, size } = filter;
//       let { items } = collections;
//       // console.log(size)

//       if (price) {
//         items = items.filter(item => (price.pmin <= item.price && item.price <= price.pmax));
//       }
//       if (color) {
//         items = items.filter(item => item.color === color);
//       }
//       if (size) {
//         items = items.filter(item => item.size.indexOf(size) !== -1);
//       }

//       return { ...collections, items: items }
//     }

//     return collections
//   }
// );


export const selectFilteredCollection = createSelector(
  [selectCollections, selectFilter],
  (collections, filter) => {

    if (filter) {
      const { items } = collections;

      if (!Array.isArray(collections.items)) return {
        ...collections,
        items: {
          sneakers: filterItemsByFilters(items.sneakers, filter),
          runningshoes: filterItemsByFilters(items.runningshoes, filter),
          boots: filterItemsByFilters(items.boots, filter),
        }
      }

      return { ...collections, items: filterItemsByFilters(items, filter) }
    }

    return collections
  }
);

export const selectItemAndRecommendations = id =>
  createSelector(
    [selectCollections],
    (collections) => {
      console.log(collections)
      const item = collections.items.filter(item => item.id === Number(id))[0];
      const pmin = item.price - 50;
      const pmax = item.price + 50;
      const recommendations = collections.items.filter(item => item.id !== Number(id) && item.price <= pmax && item.price >= pmin)
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
  (collection) => {
    const { items } = collection

    if (!Array.isArray(collection.items)) return items.sneakers.length + items.runningshoes.length + items.boots.length;

    return items.length
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