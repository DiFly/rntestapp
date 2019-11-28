import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';

export class Card extends Component {
  render() {
    let pic = {
      uri:
        'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
    }
    return (
      <View>
        <Image source={pic} style={{width: 193, height: 110}} />
        <Text>Simple Text</Text>
      </View>
    );
  }
}
