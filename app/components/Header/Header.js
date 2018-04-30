import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const Header = ({ onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <View style={styles.container}>
        <Image resizeMode="contain" style={styles.icon} source={require('./images/gear.png')} />
    </View>
  </TouchableOpacity>
);

Header.PropTypes = {
  onPress: PropTypes.func,
}

export default Header;
