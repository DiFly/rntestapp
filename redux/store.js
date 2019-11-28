import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

import reducer from './reducer';
import {fetchData, fetchDataFulfilled, fetchDataRejected} from './reducer';

const API_URL =
  'https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0';

const store = createStore (
  reducer,
  applyMiddleware(thunk)
);
export default store;

export const getItems = () => {
  return dispatch => {
    dispatch(fetchData(true));
    axios
      .get(API_URL)
      .then(res => {
        dispatch(fetchDataFulfilled(res.data.results));
      })
      .catch(err => dispatch(fetchDataRejected(err)));
  };
};
