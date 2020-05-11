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
  },
  nameStyle: {
    fontWeight: 'bold',
  },
});

export default RestaurantsDetail;
