import FilterActionTypes from './filter.types';

const INITIAL_STATE = {
  searchFilter: '',
  isModalOpen: false,
  createdFor: '',
  category: '',
  price: {
    pmin: 0,
    pmax: 0,
  },
  color: '',
  size: '',
  sum: 0,
  imageLink: ''
};

const headerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FilterActionTypes.SET_CREATED_FOR:
      return{
        ...state,
        createdFor: action.payload
      }
    case FilterActionTypes.SET_CATEGORY:
      return{
        ...state,
        category: action.payload
      }
    default:
      return state;
  }
};

export default headerReducer;
