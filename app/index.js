import React from 'react';
import EstyleSheet from 'react-native-extended-stylesheet';
import Home from './screens/Home';

EstyleSheet.build({
  $primaryBlue: "#4F6D7A",
  $white: "#fff",
})
export default () => <Home />;
