import React from 'react';
import {Button, Text, View, ActivityIndicator, FlatList} from 'react-native';
import {connect} from 'react-redux';

import {getItems} from '../redux/store';
import {Card} from '../components/Card';

class HomeScreenView extends React.PureComponent {
  static navigationOptions = {
    title: 'Home',
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // ToDo ERROR ON NEXT LINE
    this.props.getItems();
  }

  render() {
    const {items, loading} = this.props;

    if (loading) {
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
          data={items}
          renderItem={({item}) =>
            <Card navigation={this.props.navigation} item={item} />}
          keyExtractor={({id}, index) => id}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  items: state.items || [],
  loading: state.loading,
});

const mapDispatchToProps = {
  getItems,
};

export const HomeScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreenView);
