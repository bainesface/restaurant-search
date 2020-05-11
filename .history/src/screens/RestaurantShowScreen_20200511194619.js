import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RestaurantShowScreen = ({ navigation }) => {
  navigation.getParam('id');
  return (
    <View>
      <Text>Restaurants Show</Text>
      <Text>{id}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default RestaurantShowScreen;
