import React from 'react';
import {Text, Button, View, Image, StyleSheet} from 'react-native';

export class DetailsScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.getParam('alt_description', 'Nested Details Screen'),
    };
  };
  render() {
    const {navigation} = this.props;
    let pic = {
      uri: navigation.getParam('urls')
        ? navigation.getParam('urls').full.toString()
        : 'https://sterlingcomputers.com/wp-content/themes/Sterling/images/no-image-found-360x260.png',
    }

    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Details Screen</Text>
        <Image source={pic} style={styles.fullCover} />
        <Text>
          url to image: {navigation.getParam('urls') ? navigation.getParam('urls').full.toString() : 'NO IMG URL'}
        </Text>
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
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
});
