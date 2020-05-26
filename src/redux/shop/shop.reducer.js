import ShopActionTypes from './shop.types';
import FilerTypes from './filter.types'

const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: undefined,
  currentFilter: '',
  filter: {
    color: '',
    price: 0,
    size: 0
  },
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true
      };
    case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload
      };
    case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };
    case ShopActionTypes.SET_COLOR_FILTER:
      return {
        ...state,
        currentFilter: action.payload ? '' : state.currentFilter,
        filter: { ...state.filter, color: action.payload },
      };
    case ShopActionTypes.SET_PRICE_FILTER:
      return {
        ...state,
        currentFilter: action.payload ? '' : state.currentFilter,
        filter: { ...state.filter, price: action.payload },
      };
    case ShopActionTypes.SET_SIZE_FILTER:
      return {
        ...state,
        currentFilter: action.payload ? '' : state.currentFilter,
        filter: { ...state.filter, size: action.payload },
      };
    case ShopActionTypes.CLEAR_ALL_FILTERS:
      return {
        ...state,
        currentFilter: '',
        filter: INITIAL_STATE.filter,
      };
    case ShopActionTypes.TOGGLE_FILTER_MENU:
      return {
        ...state,
        currentFilter: (action.payload === state.currentFilter ? '' : action.payload)
      };
    default:
      return state;
  }
};

export default shopReducer;
