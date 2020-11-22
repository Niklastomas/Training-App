import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {log} from 'react-native-reanimated';
import Timer from '../components/Timer';

const WorkoutView = ({navigation, route}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const userId = route.params.userId;
  const workout = route.params.workout;
  const [timer, setTimer] = useState('');

  const stopWorkout = (timer) => {
    setModalVisible(true);
    setTimer(timer);
  };

  const saveWorkout = () => {
    firestore()
      .collection('Workouts')
      .add({
        userId: userId,
        workout: workout,
        duration: timer,
        date: new Date(),
      })
      .then(() => console.log('Workout added!'))
      .catch((err) => console.log(err));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{workout}</Text>
      <Timer stopWorkout={stopWorkout} />
      {modalVisible && (
        <Modal animationType="slide" visible={modalVisible}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>
                Do you want to save the workout?
              </Text>
              <View style={styles.modalButtons}>
                <TouchableHighlight
                  style={{...styles.openButton, backgroundColor: '#2196F3'}}
                  onPress={() => {
                    saveWorkout();
                    navigation.navigate('Dashboard');
                    setModalVisible(false);
                  }}>
                  <Text style={styles.textStyle}>Yes</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={{...styles.openButton, backgroundColor: '#f05454'}}
                  onPress={() => {
                    navigation.navigate('Dashboard');
                  }}>
                  <Text style={styles.textStyle}>No</Text>
                </TouchableHighlight>
              </View>
            </View>
            <TouchableHighlight
              style={{...styles.openButton, backgroundColor: '#2196F3'}}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Text style={styles.textStyle}>Go Back</Text>
            </TouchableHighlight>
          </View>
        </Modal>
      )}
    </View>
  );
};

export default WorkoutView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c2b2d',
  },
  text: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
    padding: 20,
  },
  picker: {
    height: 50,
    width: 300,
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: 'white',
    borderRadius: 10,
    color: 'red',
  },
  centeredView: {
    flex: 1,
    backgroundColor: '#99a8b2',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalButtons: {
    flexDirection: 'row',
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
