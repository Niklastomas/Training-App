import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import auth from '@react-native-firebase/auth';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHeart, faSquare} from '@fortawesome/free-solid-svg-icons';
import Header from './components/Header';
import LoginView from './views/LoginView';

const App = () => {
  const handlePress = () => {
    auth()
      .createUserWithEmailAndPassword('admin@example.com', 'hejhej321')
      .then(() => console.log('User created'))
      .catch((err) => console.log(err));
  };

  return (
    <View style={styles.container}>
      <Header />
      <LoginView />

      {/* <FontAwesomeIcon icon={faSquare} />
      <Text>Favorite beverage: </Text>
      <FontAwesomeIcon icon={faHeart} color="red" size={48} /> */}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
