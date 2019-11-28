import React from 'react';
import {Text, Button, View, Image} from 'react-native';

export class DetailsScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.getParam('otherParam', 'A nested Details Screeen'),
    };
  };
  render() {
    const {navigation} = this.props;
    let pic = {
      uri: navigation.getParam('urls').full,
    }

    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Details Screen</Text>
        <Image source={pic} style={{minWidth: 400, minHeight: 400}} />
        <Text>
          url to image: {navigation.getParam('urls').full.toString()}
        </Text>
        <Text>
          itemId: {JSON.stringify(navigation.getParam('itemId', 'NO-ID'))}
        </Text>
        <Text>
          otherParam:
          {JSON.stringify(navigation.getParam('otherParam', 'default value'))}
        </Text>
        <Button
          title="Go to Details... again"
          onPress={() =>
            this.props.navigation.push('Details', {
              itemId: Math.floor(Math.random() * 100),
          })}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go to SUPER DETAILS"
          onPress={() => this.props.navigation.navigate('SuperDetails')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}
