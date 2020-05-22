import ShopActionTypes from './shop.types';

const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: undefined,
  filter: {
    type: '',
    data: 0,
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
    case ShopActionTypes.SET_COLLECTION_FILTER:
      return {
        ...state,
        filter: action.payload
      };
    case ShopActionTypes.SET_COLOR_FILTER:
      return {
        ...state,
        color: action.payload
      };
    default:
      return state;
  }
};

export default shopReducer;
