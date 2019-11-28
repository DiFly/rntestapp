import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
import {fetchData, fetchDataFulfilled, fetchDataRejected} from './reducer';

export const getItems = () => {
  return async dispatch => {
    try {
      const itemsPromise = await fetch(
        'https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0',
      );
      dispatch(fetchData(true));
      const items = await itemsPromise.json();
      console.log('items-----------', items);
      dispatch(fetchDataFulfilled(items.results));
    } catch (error) {
      console.log('Getting Items Error---------', error);
      dispatch(fetchDataRejected(error));
    }
  };
};
