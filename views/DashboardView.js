import React from 'react';
import {Alert, FlatList, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import auth from '@react-native-firebase/auth';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {SafeAreaView} from 'react-native-safe-area-context';

import {data} from '../utils/data';
import Item from '../components/Item';

const DashboardView = (navigation) => {
  const user = useSelector((state) => state.user);
  console.log(data);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <FontAwesomeIcon icon={faUser} size={30} color="white" />
        <Text style={styles.headerText}>{user?.user?.email}</Text>
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
      <View style={styles.middle}></View>
      <SafeAreaView style={styles.bottom}>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <Item
              onPress={() => Alert.alert('Hej')}
              title={item.title}
              date={item.date}
              duration={item.duration}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </View>
  );
};

export default DashboardView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
  },
  header: {
    flex: 0.2,
    backgroundColor: '#1f6f8b',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  middle: {
    flex: 0.3,
    backgroundColor: '#99a8b2',
  },
  bottom: {
    flex: 0.5,
    backgroundColor: '#e6d5b8',
  },
  headerText: {
    fontSize: 14,
    color: 'white',
    padding: 15,
  },
  buttonSignOut: {
    backgroundColor: '#99a8b2',
    justifyContent: 'center',
    height: 30,
    padding: 10,
    borderRadius: 20,
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
  },
});
