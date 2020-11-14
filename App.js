import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import auth from '@react-native-firebase/auth';
import LandingView from './views/LandingView';
import LoginView from './views/LoginView';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  const handlePress = () => {
    auth()
      .createUserWithEmailAndPassword('admin@example.com', 'hejhej321')
      .then(() => console.log('User created'))
      .catch((err) => console.log(err));
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={LandingView} />
        <Stack.Screen name="Login" component={LoginView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f6f8b',
  },
});
