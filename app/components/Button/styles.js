import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { StyleSheet } from 'react-native';

export default EStyleSheet.create({
  container: {
    alignItems: 'center',
  },

  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  icon: {
    width: 19,
    marginRight: 11,
  },

  text: {
    color: '$white',
    fontSize: 14,
    fontWeight: '300',
    paddingVertical: 20,
  }
});
