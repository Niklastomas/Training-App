import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Trainig Tracker</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flex: 0.15,
    backgroundColor: '#1aa6b7',
    justifyContent: 'center',
    alignContent: 'center',
    borderBottomWidth: 4,
    borderBottomColor: '#ff414d',
  },
  text: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
  },
});
