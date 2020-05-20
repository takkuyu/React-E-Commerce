import HeaderActionTypes from './header.types';

export const toggleDropDownMenu = () => ({
  type: HeaderActionTypes.TOGGLE_DROPDOWN_MENU
});

export const toggleExtraMenu = () => ({
  type: HeaderActionTypes.TOGGLE_EXTRA_MENU
});

export const setGender = (gender) => ({
  type: HeaderActionTypes.SET_GENDER,
  payload: gender
});