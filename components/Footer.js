import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';

const Footer = ({getStarted}) => {
  const handlePress = () => {
    getStarted();
  };
  return (
    <View style={styles.conatiner}>
      <Text style={styles.header}>Get started with your training</Text>
      <Text style={styles.text}>Sign in with an account</Text>
      <TouchableOpacity onPress={handlePress} style={styles.button}>
        <Text style={styles.buttonText}>Get Started</Text>
        <FontAwesomeIcon icon={faAngleRight} size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  conatiner: {
    flex: 0.5,
    backgroundColor: 'white',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  header: {
    fontSize: 30,
    textAlign: 'left',
    paddingTop: 20,
    paddingLeft: 20,
  },
  text: {
    fontSize: 18,
    paddingLeft: 20,
    color: '#99a8b2',
  },
  button: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#f05454',
    width: 180,
    height: 50,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#1c2b2d',
    right: 20,
    bottom: 50,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    marginRight: 10,
  },
});
