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

export const openDropDownMenu = (gender) => ({
  type: HeaderActionTypes.OPEN_DROP_DOWN_MENU,
  payload: gender
});

export const toggleExtraDropDownMenu = (gender) => ({
  type: HeaderActionTypes.TOGGLE_EXTRA_DROP_DOWN_MENU,
  payload: gender
});

export const closeAllDropDownMenu = () => ({
  type: HeaderActionTypes.CLOSE_ALL_DROP_DOWN_MENU
});