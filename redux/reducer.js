import {GET_ITEMS, GET_ITEMS_FULFILLED, GET_ITEMS_REJECTED} from './const';

const initialState = {
  items: [],
  loading: true,
  errorMessage: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ITEMS:
      return {...state, loading: action.payload};
    case GET_ITEMS_FULFILLED:
      return {...state, items: action.payload, loading: action.loading};
    case GET_ITEMS_REJECTED:
      return {...state, errorMessage: action.payload, loading: action.loading};
    default:
      return state;
  }
};

export default reducer;
