import React from 'react';
import {View, ActivityIndicator, FlatList, StyleSheet} from 'react-native';
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
      <View style={style.backGray}>
        <FlatList
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

const style = StyleSheet.create({
  backGray: {
    backgroundColor: 'gray',
  },
});
