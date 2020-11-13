import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const LoginView = () => {
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.loginText}>Login</Text>
        <TextInput style={styles.input} placeholder="Enter Username" />
        <TextInput
          style={styles.input}
          placeholder="Enter Password"
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default LoginView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d9ecf2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    flex: 0.7,
    backgroundColor: '#1aa6b7',
    height: 300,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: '#ff414d',
  },
  input: {
    height: 40,
    width: 300,
    borderColor: '#d9ecf2',
    borderWidth: 1,
    marginTop: 20,
    color: 'white',
    padding: 10,
  },
  loginText: {
    fontSize: 30,
    color: 'white',
  },
  button: {
    marginTop: 20,
    borderRadius: 20,
    backgroundColor: '#ff414d',
    height: 40,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#d9ecf2',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
