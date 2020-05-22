import { createSelector } from 'reselect';

const selectFilter = state => state.filter;

export const selectFilteredCollection = (collection) =>
  createSelector(
    [selectFilter],
    filter => filter.isDropDownMenuOpen
  );
