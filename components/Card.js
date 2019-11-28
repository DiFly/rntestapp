import React, {Component} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

export class Card extends Component {
  render() {
    let pic = {
      uri: this.props.item.urls.small,
    };
    return (
      <View>
        <TouchableOpacity
          underlayColor="white"
          onPress={() =>
            this.props.navigation.navigate('Details', this.props.item)
          }>
          <Image source={pic} style={{width: 193, height: 110}} />
          <Text>{this.props.item.user.name}</Text>
          <Text>{this.props.item.alt_description}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
