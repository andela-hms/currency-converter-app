import React from 'react';
import EstyleSheet from 'react-native-extended-stylesheet';
import Home from './screens/Home';

import Themes from './screens/Themes';

EstyleSheet.build({
  $primaryBlue: "#4F6D7A",
  $primaryOrange: "#D57A66",
  $primaryGreen: "#00BD9D",
  $primaryPurple: "#9E768F",

  $white: "#fff",
  $border: "#E2E2E2",
  $inputText: "#797979",
  $lightgrey: "#F0F0F0",
  $darkText: "#343434",
})
export default () => <Themes />;
