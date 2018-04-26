import React from 'react';
import EstyleSheet from 'react-native-extended-stylesheet';
import Home from './screens/Home';

import CurrencyList from './screens/CurrencyList';

EstyleSheet.build({
  $primaryBlue: "#4F6D7A",
  $white: "#fff",
  $border: "#E2E2E2",
  $inputText: "#797979",
  $lightgrey: "#F0F0F0",
  $darkText: "#343434",
})
export default () => <CurrencyList />;
