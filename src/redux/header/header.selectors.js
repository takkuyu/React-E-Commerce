import { createSelector } from 'reselect';

const selectHeader = state => state.header;

export const selectHeaderMenuOpen = createSelector(
  [selectHeader],
  header => header.isDropDownMenuOpen
);

export const selectHeaderExtraMenuOpen = createSelector(
  [selectHeader],
  header => header.isExtraMenuOpen
);

export const selectHeaderGender = createSelector(
  [selectHeader],
  header => header.headerGender
);

