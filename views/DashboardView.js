import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import auth from '@react-native-firebase/auth';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {SafeAreaView} from 'react-native-safe-area-context';
import firestore from '@react-native-firebase/firestore';
import {workoutTypes} from '../utils/data';
import Item from '../components/Item';
import {Picker} from '@react-native-picker/picker';

const DashboardView = ({navigation}) => {
  const user = useSelector((state) => state.user);
  const [workout, setWorkout] = useState('Gym');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setData([]);
      const data = await firestore()
        .collection('Workouts')
        .where('userId', '==', user.user.uid)
        .get();

      data.forEach((doc) => {
        console.log(doc.id);
        setData((prevData) => [...prevData, {id: doc.id, data: doc._data}]);
      });
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      {/* Top Container */}
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

      {/* Middle Container */}
      <View style={styles.middle}>
        <Text style={{color: 'white', fontSize: 20, padding: 25}}>
          Start a new workout
        </Text>
        <Picker
          style={{height: 50, width: 200, color: 'white'}}
          selectedValue={workout}
          onValueChange={(item) => setWorkout(item)}>
          {workoutTypes.map((workoutType) => (
            <Picker.Item
              key={workoutType.id}
              label={workoutType.title}
              value={workoutType.title}
            />
          ))}
        </Picker>
        <TouchableOpacity
          style={styles.startButton}
          onPress={() =>
            navigation.navigate('Workout', {
              workout: workout,
              userId: user.user.uid,
            })
          }>
          <Text style={{color: 'white'}}>Start</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Container */}
      <SafeAreaView
        style={
          !loading
            ? styles.bottom
            : {
                ...styles.bottom,
                justifyContent: 'center',
                alignContent: 'center',
              }
        }>
        {!loading ? (
          <FlatList
            data={data}
            renderItem={({item}) => (
              <Item
                key={item.id}
                onPress={() => Alert.alert('Hej')}
                title={item.data.workout}
                date={item.data.date}
              />
            )}
            extraData={data}
            keyExtractor={(item) => item.id}
          />
        ) : (
          <ActivityIndicator
            style={styles.loader}
            size="large"
            color="#00ff00"
          />
        )}
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
    flex: 0.15,
    backgroundColor: '#1f6f8b',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderBottomColor: 'white',
    borderBottomWidth: 4,
  },
  middle: {
    flex: 0.35,
    backgroundColor: '#99a8b2',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  startButton: {
    backgroundColor: '#1c2b2d',
    height: 50,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'white',
    marginTop: 30,
  },
  bottom: {
    flex: 0.5,
    backgroundColor: '#1c2b2d',
    borderTopWidth: 4,
    borderColor: 'white',
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
    borderWidth: 2,
    borderColor: 'white',
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
  },
});
