import {GET_ITEMS, GET_ITEMS_FULFILLED, GET_ITEMS_REJECTED} from './const';

export const fetchData = bool => {
  return {
    type: GET_ITEMS,
    payload: bool,
  };
}

export const fetchDataFulfilled = data => {
  return {
    type: GET_ITEMS_FULFILLED,
    payload: data,
    loading: false,
  };
}

export const fetchDataRejected = error => {
  return {
    type: GET_ITEMS_REJECTED,
    payload: error,
    loading: false,
  };
}
