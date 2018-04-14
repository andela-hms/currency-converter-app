import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight, TextInput } from 'react-native';

import styles from './styles';

const InputWithButton = (onPress, buttonText, editable) => (
  <View style={styles.container}>
     <TouchableHighlight
       style={styles.buttonContainer}
     >
       <Text style={styles.buttonText}></Text>
     </TouchableHighlight>
     <View style={styles.separator} />
     <TextInput style={styles.input} />
   </View>
);

InputWithButton.PropTypes = {
  onPress: PropTypes.func,
  buttonText: PropTypes.string,
  editable: PropTypes.bool,
}

export default InputWithButton;
