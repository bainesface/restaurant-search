import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yeslp from '../api/yelp';
import yelp from '../api/yelp';

const RestaurantShowScreen = ({ navigation }) => {
  const [restaurant, setRestaurant] = useState(null);
  const id = navigation.getParam('id');

  console.log(restaurant);

  const getRestaurant = async (id) => {
    const response = await yelp.get(`/${id}`);
    setRestaurant(response.data);
  };

  useEffect(() => {
    getRestaurant(id);
  }, []);

  if (!restaurant) {
    return null;
  }

  return (
    <View>
      <Text>{restaurant.name}</Text>
      <FlatList
        data={restaurant.photos}
        ketExtractor={(photo) => photo}
        renderItem={(item) => {
          return <Image source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default RestaurantShowScreen;
