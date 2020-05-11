import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RestaurantsList = ({ title }) => {
  return (
    <View>
      <Text style={styles.titleStyle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 30,
  },
});

export default RestaurantsList;
