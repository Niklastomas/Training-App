import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Item = ({title, date, duration, onPress}) => {
  return (
    <TouchableOpacity onPress={() => onPress()} style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.text}>{date?.toDate().toDateString()}</Text>
    </TouchableOpacity>
  );
};

export default Item;

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: 'white',
    marginTop: 10,
    marginHorizontal: 10,
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
