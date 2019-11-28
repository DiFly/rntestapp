import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {DetailsScreen} from './screen/DetailsScreen';
import {HomeScreen} from './screen/HomeScreen';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: {
      screen: DetailsScreen,
    },
  },
  {
    initialRouteName: 'Home',
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
