import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const RestaurantsDetail = ({ result }) => {
  return (
    <View>
      <Image source={{ uri: result.image_url }} style={styles.imageStyle} />
      <Text style={styles.nameStyle}>{result.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginHorizontal: 10,
  },
  nameStyle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginHorizontal: 10,
  },
});

export default RestaurantsDetail;
