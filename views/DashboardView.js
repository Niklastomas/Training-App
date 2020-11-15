import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import auth from '@react-native-firebase/auth';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {log} from 'react-native-reanimated';

const DashboardView = (navigation) => {
  const user = useSelector((state) => state.user);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{user?.user?.email}</Text>

      <TouchableOpacity
        onPress={() => {
          auth()
            .signOut()
            .then(() => console.log('Sign Out'))
            .catch((err) => console.log(err));
        }}
        style={styles.buttonSignOut}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DashboardView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontSize: 30,
    color: 'black',
  },
  buttonSignOut: {
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
