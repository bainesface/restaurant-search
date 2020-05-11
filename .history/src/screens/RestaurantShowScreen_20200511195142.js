import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import yeslp from '../api/yelp';
import yelp from '../api/yelp';

const RestaurantShowScreen = ({ navigation }) => {
  const [restaurant, setRestaurant] = useState(null);
  const id = navigation.getParam('id');

  const getRestaurant = async (id) => {
    await yelp.get(`/${id}`);
    setRestaurant(response.data);
  };

  return (
    <View>
      <Text>Restaurants Show</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default RestaurantShowScreen;
