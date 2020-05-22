import FilterActionTypes from './filter.types';

export const setCreatedFor = (gender) => ({
  type: FilterActionTypes.SET_CREATED_FOR,
  payload: gender
});

export const setCategory = (category) => ({
  type: FilterActionTypes.SET_CATEGORY,
  payload: category
});
