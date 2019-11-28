const initialState = {
  items: [],
  loading: true,
  errorMessage: '',
}

const GET_ITEMS = 'GET_ITEMS';
const GET_ITEMS_FULFILLED = 'GET_ITEMS_FULFILLED';
const GET_ITEMS_REJECTED = 'GET_ITEMS_REJECTED';

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

export const fetchData = (bool) => {
  return {
    type: GET_ITEMS,
    payload: bool,
  };
}

export const fetchDataFulfilled = (data) => {
  return {
    type: GET_ITEMS_FULFILLED,
    payload: data,
    loading: false,
  };
}

export const fetchDataRejected = (error) => {
  return {
    type: GET_ITEMS_REJECTED,
    payload: error,
    loading: false,
  };
}
