import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSignInAlt, faUser} from '@fortawesome/free-solid-svg-icons';
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
      <View style={styles.header}>
        <Text style={styles.headerText}>Login</Text>
        <FontAwesomeIcon icon={faSignInAlt} size={40} color="white" />
      </View>
      <View style={styles.footer}>
        <View style={styles.form}>
          <Text style={styles.formText}>Username</Text>
          <TextInput style={styles.formInput} placeholder="Enter username" />
          <Text style={styles.formText}>Password</Text>
          <TextInput
            style={styles.formInput}
            placeholder="Enter password"
            secureTextEntry={true}
          />
          <TouchableOpacity style={styles.buttonLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonRegister}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default LoginView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f6f8b',
  },
  header: {
    flex: 0.3,
    backgroundColor: '#1f6f8b',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  footer: {
    flex: 0.7,
    backgroundColor: 'white',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 30,
    fontStyle: 'italic',
    margin: 10,
  },
  form: {
    marginTop: 50,
  },
  formText: {
    marginTop: 10,
  },
  formInput: {
    width: 300,
    borderBottomWidth: 2,
    borderColor: '#99a8b2',
    marginBottom: 20,
    padding: 0,
  },
  buttonLogin: {
    backgroundColor: '#1f6f8b',
    height: 40,
    justifyContent: 'center',
    borderRadius: 20,
    marginTop: 20,
  },
  buttonRegister: {
    backgroundColor: '#99a8b2',
    height: 40,
    justifyContent: 'center',
    borderRadius: 20,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});
