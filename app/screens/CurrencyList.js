import React, { Component } from 'react';
import { Text, FlatList, View, StatusBar } from 'react-native';

import currencies from '../data/currencies';
import { ListItem, Separator } from '../components/List';

import PropTypes from 'prop-types';

const TEMP_CURRENT_CURRENCY = 'CAD';

class CurrencyList extends Component {
  static PropTypes = {
    navigation: PropTypes.object,
  }

  _handlePress = () => {
    this.props.navigation.goBack(null);
  };

  render () {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="default" translucent={false} />
        <FlatList
          data={currencies}
          renderItem={({ item }) => (
            <ListItem
              text={item}
              selected={item === TEMP_CURRENT_CURRENCY}
              onPress={this._handlePress}
              checkmark={true}
            />
          )}
          keyExtractor={ item => item }
          ItemSeparatorComponent={Separator}
        />
      </View>
    );
  }
}

export default CurrencyList;
