import {faUser} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const UserProfileView = ({navigation, route}) => {
  const userId = route.params.userId;
  const email = route.params.email;

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <FontAwesomeIcon icon={faUser} size={30} color="white" />
        <Text style={styles.text}>{email}</Text>
      </View>
    </View>
  );
};

export default UserProfileView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f6f8b',
  },
  row: {
    flexDirection: 'row',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
    margin: 10,
  },
});
