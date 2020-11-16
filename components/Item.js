import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Item = ({title, date, duration, onPress}) => {
  return (
    <TouchableOpacity onPress={() => onPress()} style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.text}>{date}</Text>
      <Text style={styles.text}>{duration} min</Text>
    </TouchableOpacity>
  );
};

export default Item;

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  text: {
    color: 'black',
    fontSize: 18,
  },
});
