import React, {Component} from 'react';
import {Image, Text, TouchableOpacity, View, StyleSheet} from 'react-native';

export class Card extends Component {
  render() {
    let pic = {
      uri: this.props.item.urls.small,
    };
    return (
      <View style={styles.backWhite}>
        <TouchableOpacity
          underlayColor="white"
          onPress={() =>
            this.props.navigation.navigate('Details', this.props.item)
          }>
          <Image source={pic} style={{flex: 1, height: 150}} />
          <Text style={{padding: 10}}>{this.props.item.user.name}</Text>
          <Text style={{padding: 10}}>{this.props.item.alt_description}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fullCover: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  backWhite: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  },
});
