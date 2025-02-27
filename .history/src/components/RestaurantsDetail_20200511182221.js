import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const RestaurantsDetail = ({ result }) => {
  return (
    <View>
      <Image source={{ uri: result.image_url }} />
      <Text>{result.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default RestaurantsDetail;
