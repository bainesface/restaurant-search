import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const RestaurantsDetail = ({ item }) => {
  return (
    <View>
      <Text>{item.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default RestaurantsDetail;
