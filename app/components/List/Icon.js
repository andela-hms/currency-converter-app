import React from 'react';
import { View, Image } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const Icon = ({ checkmark, visible}) => {
  const IconStyles = [styles.icon];
  if (visible) {
    IconStyles.push(styles.iconVisible);
  }

  return (
    <View style={IconStyles}>
      { checkmark ? <Image style={styles.checkIcon} resizeMode="contain" source={require('./images/check.png')} /> : null }
    </View>
  );
};

Icon.PropTypes = {
  checkmark: PropTypes.bool,
  visible: PropTypes.bool,
}
export default Icon;
