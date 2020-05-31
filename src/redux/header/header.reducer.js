import HeaderActionTypes from './header.types';

const INITIAL_STATE = {
  isDropDownMenuOpen: false,
  isExtraMenuOpen: false,
  headerGender: ''
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
    case HeaderActionTypes.SET_HEADER_GENDER:
      return {
        ...state,
        headerGender: action.payload
      };
    case HeaderActionTypes.OPEN_DROP_DOWN_MENU:
      return {
        ...state,
        headerGender: (state.headerGender === action.payload ? '' : action.payload),
        isDropDownMenuOpen: (state.headerGender !== action.payload ? true : !state.isDropDownMenuOpen)
      }
    case HeaderActionTypes.TOGGLE_EXTRA_DROP_DOWN_MENU:
      return {
        ...state,
        headerGender: action.payload,
        isExtraMenuOpen: !state.isExtraMenuOpen
      }
    case HeaderActionTypes.CLOSE_ALL_DROP_DOWN_MENU:
      return INITIAL_STATE
    default:
      return state;
  }
};

export default headerReducer;
