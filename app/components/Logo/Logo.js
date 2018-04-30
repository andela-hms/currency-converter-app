import React, { Component } from 'react';
import { View, Image, ImageBackground, Text, Keyboard, Animated } from 'react-native';

import styles from './styles';

const ANIMATION_DURATION = 250;

class Logo extends Component {
  constructor (props) {
    super(props);

    this.containerImageWidth = new Animated.Value(styles.$largeContainerSize);
    this.imageWidth = new Animated.Value(styles.$largeImageSize);
  }
  
  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardWillShow', this.keyboardDidShow);
    this.keyboardDidHideListener = Keyboard.addListener('keyboardWillHide', this.keyboardDidHide);
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  keyboardDidShow = () => {
    console.log('keyboard did show');
    Animated.timing(this.containerImageWidth, {
      toValue: styles.$smallContainerSize,
      duration: ANIMATION_DURATION
    }).start();
  };

  keyboardDidHide = () => {
    console.log('keyboard did hide');
  };

  render () {
    const containerImageStyle = [
      styles.containerImage,
      { width: this.containerImageWidth, height: this.containerImageWidth},
    ];

    const imageStyle = [
      styles.logo,
      { width: this.imageWidth },
    ];

    return (
      <Animated.View style={styles.container}>
        <ImageBackground
          resizeMode='contain'
          style={containerImageStyle}
          source={require('./images/background.png')}
        >
          <Image
            resizeMode='contain'
            style={imageStyle}
            source={require('./images/logo.png')}
          />
        </ImageBackground>
        <Text style={ styles.text }>Currency Converter</Text>
      </Animated.View>
    );
  }
}

export default Logo;
