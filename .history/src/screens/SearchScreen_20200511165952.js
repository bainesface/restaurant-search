import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [restaurants, setRestaurants] = useState([]);

  const searchApi = async () => {
    const response = await yelp.get('/search', {
      params: {
        limit: 50,
        term: searchTerm,
        location: 'manchester',
      },
    });
    setRestaurants(response.data.businesses);
  };

  return (
    <View style={styles.background}>
      <SearchBar
        term={searchTerm}
        onTermChange={(newTerm) => setSearchTerm(newTerm)}
        onTermSubmit={searchApi}
      />
      <Text>Search Screen</Text>
      <Text>We have found {restaurants.length} results</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'white',
  },
});

export default SearchScreen;
