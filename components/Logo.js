import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Logo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.bigText}>NT</Text>
      <Text style={styles.smallText}>Training Tracker</Text>
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: 250,
    width: 250,
    borderRadius: 200,
    backgroundColor: '#1c2b2d',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderWidth: 3,
    borderColor: 'white',
  },
  bigText: {
    color: 'white',
    fontSize: 58,
    textAlign: 'center',
  },
  smallText: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  },
});
