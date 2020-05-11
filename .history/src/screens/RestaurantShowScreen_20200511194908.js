import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import yeslp from '../api/yelp';
import yelp from '../api/yelp';

const RestaurantShowScreen = ({ navigation }) => {
  const id = navigation.getParam('id');

  const getRestaurant = async (id) => {
    await yelp.get(`/${id}`);
  };

  return (
    <View>
      <Text>Restaurants Show</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default RestaurantShowScreen;
