import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Logo from './Logo';

const Header = () => {
  return (
    <View style={styles.header}>
      <Logo />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: '#1f6f8b',
    justifyContent: 'center',
  },
});
