import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSignInAlt, faUser} from '@fortawesome/free-solid-svg-icons';
import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';

import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const LoginView = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [canLogin, setCanLogin] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (email.length > 0 && password.length > 0) {
      setCanLogin(true);
    } else {
      setCanLogin(false);
    }
  }, [email, password]);

  const handleLogin = () => {
    setLoading(true);
    auth()
      .signInWithEmailAndPassword(email.trim(), password)
      .then(() => {
        console.log('Signed In');
        setLoading(false);
      })
      .catch((err) => console.log(err));
    console.log(email, password);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Login</Text>
        {loading && <Text style={styles.headerText}>Loading...</Text>}

        <FontAwesomeIcon icon={faSignInAlt} size={40} color="white" />
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
