import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faUserPlus} from '@fortawesome/free-solid-svg-icons';
import React, {useState} from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import auth from '@react-native-firebase/auth';

const RegisterView = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    if (email.length > 0 && password.length > 0) {
      if (password === confirmPassword) {
        auth()
          .createUserWithEmailAndPassword(email.trim(), password)
          .then(() => console.log('Succesfully created user!'))
          .catch((err) => Alert.alert(err.message));
      } else {
        Alert.alert('Passwords must match!');
      }
    } else {
      Alert.alert('Enter email and password');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Register</Text>
        <FontAwesomeIcon icon={faUserPlus} size={40} color="white" />
      </View>
      <View style={styles.footer}>
        <View style={styles.form}>
          <Text style={styles.formText}>Email</Text>
          <TextInput
            style={styles.formInput}
            textContentType="emailAddress"
            autoCapitalize="none"
            value={email}
            onChangeText={(text) => setEmail(text)}
            placeholder="Enter email"
          />
          <Text style={styles.formText}>Password</Text>
          <TextInput
            style={styles.formInput}
            value={password}
            textContentType="password"
            autoCapitalize="none"
            onChangeText={(text) => setPassword(text)}
            placeholder="Enter password"
            secureTextEntry={true}
          />

          <Text style={styles.formText}>Confirm password</Text>
          <TextInput
            style={styles.formInput}
            value={confirmPassword}
            textContentType="password"
            autoCapitalize="none"
            onChangeText={(text) => setConfirmPassword(text)}
            placeholder="Enter password"
            secureTextEntry={true}
          />

          <TouchableOpacity
            onPress={handleRegister}
            style={styles.buttonRegister}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default RegisterView;

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

  buttonRegister: {
    backgroundColor: '#1f6f8b',
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
