import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import RestaurantsDetail from '../components/RestaurantsDetail';

const RestaurantsList = ({ title, restaurants }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={restaurants}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return <RestaurantsDetail result={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 10,
  },
});

export default RestaurantsList;
