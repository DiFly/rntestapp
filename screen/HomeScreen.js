import React from 'react';
import {Button, Text, View} from 'react-native';

export class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details ->"
          onPress={() =>
            this.props.navigation.navigate('Details', {
              itemId: 86,
              otherParam: 'anything you want here',
            })
          }
        />
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.push('Details')}
        />
      </View>
    );
  }
}
