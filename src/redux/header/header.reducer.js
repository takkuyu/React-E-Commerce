import HeaderActionTypes from './header.types';

const INITIAL_STATE = {
  isDropDownMenuOpen: false,
  isExtraMenuOpen: false,
  gender: ''
};

const headerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HeaderActionTypes.TOGGLE_DROPDOWN_MENU:
      return {
        ...state,
        isDropDownMenuOpen: !state.isDropDownMenuOpen
      };
    case HeaderActionTypes.TOGGLE_EXTRA_MENU:
      return {
        ...state,
        isExtraMenuOpen: !state.isExtraMenuOpen
      };
    case HeaderActionTypes.SET_GENDER:
      return {
        ...state,
        gender: action.payload
      };
    default:
      return state;
  }
};

export default headerReducer;
