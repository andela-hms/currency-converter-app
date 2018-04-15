import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { StyleSheet } from 'react-native';

const INPUT_HEIGHT = 48;
const BORDER_RADIUS = 4;

export default EStyleSheet.create({
  $buttonBackgroundColorBase: '$white',
  $buttonBackgroundColorModifier: 0.1,

  container: {
    backgroundColor: '$white',
    width: '90%',
    height: INPUT_HEIGHT,
    borderRadius: BORDER_RADIUS,
    flexDirection: 'row',
    marginVertical: 11,
  },

  containerDisabled: {
    backgroundColor: '$lightgrey',
  },

  buttonContainer: {
    height: INPUT_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '$white',
    borderTopLeftRadius: BORDER_RADIUS,
    borderBottomRightRadius: BORDER_RADIUS,
  },

  buttonText: {
    fontSize: 20,
    fontWeight: '600',
    paddingHorizontal: 16,
    color: '$primaryBlue',
  },

  input: {
    height: INPUT_HEIGHT,
    flex: 1,
    fontSize: 18,
    paddingHorizontal: 8,
    color: '$inputText',

  },

  separator: {
    height: INPUT_HEIGHT,
    width: StyleSheet.harlineWidth,
    backgroundColor: '$border',
  },

});
