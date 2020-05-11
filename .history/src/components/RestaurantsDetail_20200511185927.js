import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

const RestaurantsDetail = ({ result }) => {
  return (
    <TouchableOpacity>
      <View style={styles.containerStyle}>
        <Image source={{ uri: result.image_url }} style={styles.imageStyle} />
        <Text style={styles.nameStyle}>{result.name}</Text>
        <Text style={styles.detailsStyle}>
          {result.rating} Stars, {result.review_count} Reviews
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    marginLeft: 10,
    paddingBottom: 5,
    borderBottomWidth: 0.5,
  },
  imageStyle: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5,
  },
  nameStyle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginVertical: 5,
  },
  detailsStyle: {
    color: 'grey',
    marginBottom: 3,
  },
});

export default RestaurantsDetail;
