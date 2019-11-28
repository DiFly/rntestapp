import React from 'react';
import {Text, Button, View} from 'react-native';

export class SuperDetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'SUPER Details',
  };
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>SUPER Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.push('Details')}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.popToTop()}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}
