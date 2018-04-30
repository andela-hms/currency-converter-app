import React, { Component } from 'react';
import { View, StatusBar, KeyboardAvoidingView } from 'react-native';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Button';
import { LastConverted } from '../components/Text';
import { Header } from '../components/Header';
import PropTypes from 'prop-types';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'KSH';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '79.74';
const TEMP_CONVERSION_RATE = 0.7974;
const TEMP_CONVERSION_DATE = new Date();

class Home extends Component {
  static PropTypes = {
    navigation: PropTypes.object,
  }

  handlePressBaseCurrency = () => {
    console.log('press base');
    this.props.navigation.navigate('CurrencyList', { title: 'Base Currency' });
  }

  handlePressQuoteCurrency = () => {
    console.log('press quote');
    this.props.navigation.navigate('CurrencyList',  { title: 'Quote Currency' });
  }

  handleTextChange = (text) => {
    console.log('text change', text);
  }

  handleCurrencySwap = () => {
    console.log('currency swap');
  }

  _handleOptionsPress = () => {
    console.log('handle Options Press');
    this.props.navigation.navigate('Options');
  }

  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />

        <Header
          onPress={this._handleOptionsPress}
        />

        <KeyboardAvoidingView behavior="padding">
          <Logo />

          <InputWithButton
            buttonText={TEMP_BASE_CURRENCY}
            onPress={this.handlePressQuoteCurrency}
            defaultValue={TEMP_BASE_PRICE}
            keyboardType="numeric"
            onTextChange={this.handleTextChange}
          />

          <InputWithButton
            buttonText={TEMP_QUOTE_CURRENCY}
            editable={false}
            onPress={this.handlePressBaseCurrency}
            defaultValue={TEMP_QUOTE_PRICE}
          />

          <LastConverted
            date={TEMP_CONVERSION_DATE}
            base={TEMP_BASE_CURRENCY}
            quote={TEMP_QUOTE_CURRENCY}
            conversionRate={TEMP_CONVERSION_RATE}
          />

          <ClearButton
            text="Reverse Currencies"
            onPress={this.handleCurrencySwap}
          />
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

export default Home;
