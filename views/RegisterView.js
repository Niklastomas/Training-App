import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCheck, faUserPlus} from '@fortawesome/free-solid-svg-icons';
import React, {useEffect, useState} from 'react';
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
  const [email, setEmail] = useState({
    value: '',
    validation: false,
  });
  const [password, setPassword] = useState({
    value: '',
    validation: false,
  });
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    if (email.value.length > 0 && email.value.includes('@')) {
      setEmail((prevValue) => {
        return {
          ...prevValue,
          validation: true,
        };
      });
    } else {
      setEmail((prevValue) => {
        return {
          ...prevValue,
          validation: false,
        };
      });
    }

    if (
      password.value.length > 0 &&
      confirmPassword.length > 0 &&
      password.value === confirmPassword
    ) {
      setPassword((prevValue) => {
        return {
          ...prevValue,
          validation: true,
        };
      });
    } else {
      setPassword((prevValue) => {
        return {
          ...prevValue,
          validation: false,
        };
      });
    }
  }, [email.value, password.value, confirmPassword]);

  const handleRegister = () => {
    if (email.validation && password.validation) {
      auth()
        .createUserWithEmailAndPassword(email.value.trim(), password.value)
        .then(() => console.log('Succesfully created user!'))
        .catch((err) => Alert.alert(err.message));
    } else {
      Alert.alert('Passwords must match!');
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
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.formInput}
              textContentType="emailAddress"
              autoCapitalize="none"
              value={email.value}
              onChangeText={(text) =>
                setEmail((prevValue) => {
                  return {
                    ...prevValue,
                    value: text,
                  };
                })
              }
              placeholder="Enter email"
            />
            {email.validation && (
              <FontAwesomeIcon icon={faCheck} color="green" />
            )}
          </View>

          <Text style={styles.formText}>Password</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.formInput}
              value={password.value}
              textContentType="password"
              autoCapitalize="none"
              onChangeText={(text) =>
                setPassword((prevValue) => {
                  return {
                    ...prevValue,
                    value: text,
                  };
                })
              }
              placeholder="Enter password"
              secureTextEntry={true}
            />
            {password.validation && (
              <FontAwesomeIcon icon={faCheck} color="green" />
            )}
          </View>

          <Text style={styles.formText}>Confirm password</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.formInput}
              value={confirmPassword}
              textContentType="password"
              autoCapitalize="none"
              onChangeText={(text) => setConfirmPassword(text)}
              placeholder="Enter password"
              secureTextEntry={true}
            />
            {password.validation && (
              <FontAwesomeIcon icon={faCheck} color="green" />
            )}
          </View>

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
  inputContainer: {
    flexDirection: 'row',
    width: 300,
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
