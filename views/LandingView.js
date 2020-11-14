import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Footer from '../components/Footer';
import Header from '../components/Header';

const LandingView = ({navigation}) => {
  const getStarted = () => {
    navigation.navigate('Login');
  };
  return (
    <View style={styles.container}>
      <Header />
      <Footer getStarted={getStarted} />
    </View>
  );
};

export default LandingView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f6f8b',
  },
});
