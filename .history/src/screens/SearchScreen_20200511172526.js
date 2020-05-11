import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [restaurants, setRestaurants] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async (term) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term,
          location: 'manchester',
        },
      });
      setRestaurants(response.data.businesses);
    } catch (err) {
      setErrorMessage('Something went wrong, try again');
    }
  };

  useEffect(() => {
    searchApi('sushi');
  }, []);

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
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'white',
  },
});

export default SearchScreen;
