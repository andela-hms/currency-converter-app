import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Button';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'KSH';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '79.74';

class Home extends Component {
  handlePressBaseCurrency = () => {
    console.log('press base');
  }

  handlePressQuoteCurrency = () => {
    console.log('press quote');
  }

  handleTextChange = (text) => {
    console.log('text change', text);
  }

  handleCurrencySwap = () => {
    console.log('currency swap')
  }

  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
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

        <ClearButton
          text="Reverse Currencies"
          onPress={this.handleCurrencySwap}
        />
      </Container>
    );
  }
}

export default Home;
