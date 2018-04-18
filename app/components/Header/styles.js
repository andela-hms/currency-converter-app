import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { StyleSheet } from 'react-native';
import { StatusBar } from 'react-native';

export default EStyleSheet.create({
 container: {
   position: 'absolute',
   left: 0,
   right: 0,
   top: 0,
   '@media android': {
     paddingTop: StatusBar.currentHeight,
   },
 },

 button: {
   alignSelf: 'flex-end',
   paddingVertical: 5,
   paddingHorizontal: 20,
 },

 icon: {

 },

});
