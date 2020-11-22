import {
  faCalendar,
  faHeartbeat,
  faStopwatch,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const WorkoutDetailsView = ({navigation, route}) => {
  const workout = route.params.workout;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{workout.data.workout}</Text>
      <View style={styles.row}>
        <FontAwesomeIcon icon={faCalendar} color="white" size={30} />
        <Text style={{color: 'white', fontSize: 18, margin: 10}}>
          {workout.data.date.toDate().toDateString()}
        </Text>
      </View>
      <View style={styles.row}>
        <FontAwesomeIcon icon={faStopwatch} color="white" size={30} />
        <Text style={{color: 'white', fontSize: 18, margin: 10}}>
          {workout.data.duration}
        </Text>
      </View>
      <View style={styles.row}>
        <FontAwesomeIcon icon={faHeartbeat} color="white" size={30} />
        <Text style={{color: 'white', fontSize: 18, margin: 10}}>
          Average: {165}
        </Text>
      </View>
      <View style={styles.row}>
        <FontAwesomeIcon icon={faHeartbeat} color="white" size={30} />
        <Text style={{color: 'white', fontSize: 18, margin: 10}}>
          Max: {180}
        </Text>
      </View>
    </View>
  );
};

export default WorkoutDetailsView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f6f8b',
  },
  title: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
    padding: 15,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',

    width: 200,
    margin: 10,
  },
});
