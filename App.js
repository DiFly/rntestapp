import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {DetailsScreen} from './screen/DetailsScreen';
import {HomeScreen} from './screen/HomeScreen';
import {SuperDetailsScreen} from './screen/SuperDetailsScreen';

import {Provider} from 'react-redux';
import store from './redux/store';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: {
      screen: DetailsScreen,
    },
    SuperDetails: SuperDetailsScreen,
  },
  {
    initialRouteName: 'Home',
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
