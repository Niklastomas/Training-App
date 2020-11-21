import {faHeartbeat, faStopwatch} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useEffect, useRef, useState} from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Timer = ({stopWorkout, resetTimer}) => {
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const countRef = useRef(null);

  const handleStart = () => {
    setIsActive(true);
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };

  const handlePause = () => {
    clearInterval(countRef.current);
    setIsActive(false);
  };

  const handleStop = () => {
    stopWorkout(formatTime());
  };

  const formatTime = () => {
    const getSeconds = `0${timer % 60}`.slice(-2);
    const minutes = `${Math.floor(timer / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2);

    return `${getHours} : ${getMinutes} : ${getSeconds}`;
  };

  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <FontAwesomeIcon icon={faStopwatch} color="white" size={48} />
        <Text style={styles.text}>{formatTime()}</Text>
      </View>
      <View style={styles.itemContainer}>
        <FontAwesomeIcon icon={faHeartbeat} color="red" size={48} />
        <Text style={styles.text}>188</Text>
      </View>
      {!isActive && timer > 0 ? (
        <TouchableOpacity style={styles.btnStop} onPress={handleStop}>
          <Text style={{color: 'white', fontSize: 18}}>Stop</Text>
        </TouchableOpacity>
      ) : null}

      <Button
        title={isActive ? 'Pause' : 'Start'}
        onPress={isActive ? handlePause : handleStart}
      />
    </View>
  );
};

export default Timer;

const styles = StyleSheet.create({
  container: {
    width: 350,
    height: 550,
    marginTop: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
    justifyContent: 'space-between',
  },
  itemContainer: {
    // flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    color: 'white',
    padding: 10,
  },
  btnStop: {
    position: 'absolute',
    bottom: 100,
    right: 10,
    backgroundColor: 'red',
    height: 40,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'white',
  },
});
