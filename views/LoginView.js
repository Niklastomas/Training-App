import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faCheck,
  faEyeSlash,
  faSignInAlt,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';

import {
  ActivityIndicator,
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const LoginView = ({navigation}) => {
  const [email, setEmail] = useState({
    value: '',
    validation: false,
  });
  const [password, setPassword] = useState({
    value: '',
    visible: false,
  });
  const [canLogin, setCanLogin] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log('useEffect');
    // Check for valid email
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

    if (email.validation && password.value) {
      setCanLogin(true);
    }
  }, [email.value, password.value]);

  const handleLogin = () => {
    setLoading(true);
    auth()
      .signInWithEmailAndPassword(email.value.trim(), password.value)
      .then(() => {
        console.log('Signed In');
        setLoading(false);
      })
      .catch((err) => {
        Alert.alert(err.message);
        setLoading(false);
      });
    console.log(email, password);
  };

  return (
    <>
      {loading ? (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      ) : (
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Login</Text>
            <FontAwesomeIcon icon={faSignInAlt} size={40} color="white" />
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
                  secureTextEntry={password.visible ? false : true}
                />
                <TouchableOpacity
                  onPress={() =>
                    setPassword((prevValue) => {
                      return {
                        ...prevValue,
                        disabled: !password.visible,
                      };
                    })
                  }>
                  <FontAwesomeIcon
                    icon={faEyeSlash}
                    color={password.disabled ? 'lightgrey' : 'black'}
                  />
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                disabled={canLogin ? false : true}
                onPress={handleLogin}
                style={styles.buttonLogin}>
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Register')}
                style={styles.buttonRegister}>
                <Text style={styles.buttonText}>Register</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </>
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
  inputContainer: {
    flexDirection: 'row',
    width: 300,
  },
  loading: {
    flex: 1,
    backgroundColor: '#1f6f8b',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
