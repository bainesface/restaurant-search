import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useRestaurants from '../hooks/useRestaurants';
import RestaurantsList from '../components/RestaurantsList';

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchApi, restaurants, errorMessage] = useRestaurants();

  return (
    <View style={styles.background}>
      <SearchBar
        term={searchTerm}
        onTermChange={setSearchTerm}
        onTermSubmit={() => searchApi(searchTerm)}
      />
      {errorMessage.length !== 0 ? (
        <Text>{errorMessage}</Text>
      ) : (
        <Text>We have found {restaurants.length} results</Text>
      )}
      <RestaurantsList />
      <RestaurantsList />
      <RestaurantsList />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'white',
  },
});

export default SearchScreen;
