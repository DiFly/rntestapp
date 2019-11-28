import React from 'react';
import {Button, Text, View, ActivityIndicator, FlatList} from 'react-native';
import {connect} from 'react-redux';

import {getItems} from '../redux/store';
import {Card} from '../components/Card';

export class HomeScreen extends React.PureComponent {
  static navigationOptions = {
    title: 'Home',
  };

  constructor(props) {
    super(props);
    // this.state = {isLoading: true};
  }

  componentDidMount() {
    // const API_URL =
    //   'https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0';
    //
    // return fetch(API_URL)
    //   .then(response => response.json())
    //   .then(responseJson => {
    //     this.setState({
    //         isLoading: false,
    //         dataSource: responseJson,
    //     }, function(){
    //     });
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });
    // ToDo ERROR ON NEXT LINE
    this.props.getItems();
  }

  render() {
    // if (this.state.isLoading){
    //   return (
    //     <View style={{flex: 1, padding: 20}}>
    //       <ActivityIndicator />
    //     </View>
    //   );
    // }

    const {items, loading} = this.props;

    if (!loading) {
      return (
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
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

        <FlatList
          // data={this.state.dataSource}
          data={this.state.items}
          renderItem={({item}) =>
            <Card navigation={this.props.navigation} item={item} />}
          keyExtractor={({id}, index) => id}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  items: state.items,
  loading: state.loading,
});

const mapDispatchToProps = {
  getItems,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen);
