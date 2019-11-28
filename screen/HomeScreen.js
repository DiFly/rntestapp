import React from 'react';
import {View, ActivityIndicator, FlatList, StyleSheet} from 'react-native';
import {Card} from '../components/Card';

export class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  constructor(props) {
    super(props);
    this.state = {isLoading: true};
  }

  componentDidMount() {
    const API_URL =
      'https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0';

    return fetch(API_URL)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
            isLoading: false,
            dataSource: responseJson,
        }, function(){
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    if (this.state.isLoading){
      return (
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={style.backGray}>
        {/*<Button*/}
        {/*  title="Go to Details ->"*/}
        {/*  onPress={() =>*/}
        {/*    this.props.navigation.navigate('Details', {*/}
        {/*      itemId: 86,*/}
        {/*      otherParam: 'anything you want here',*/}
        {/*    })*/}
        {/*  }*/}
        {/*/>*/}
        {/*<Button*/}
        {/*  title="Go to Details... again"*/}
        {/*  onPress={() => this.props.navigation.push('Details')}*/}
        {/*/>*/}

        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) =>
            <Card navigation={this.props.navigation} item={item} style={style.mb5} /> }
          keyExtractor={({id}, index) => id}
        />
      </View>
    );
  }
}

const style = StyleSheet.create({
  backGray: {
    backgroundColor: 'gray',
  },
  mb5: {
    marginBottom: '15px',
  },
});
