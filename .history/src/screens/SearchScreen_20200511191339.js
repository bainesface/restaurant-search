import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useRestaurants from '../hooks/useRestaurants';
import RestaurantsList from '../components/RestaurantsList';

const SearchScreen = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchApi, restaurants, errorMessage] = useRestaurants();

  const filterRestaurantsByPrice = (price) => {
    return restaurants.filter((restaurant) => {
      return restaurant.price === price;
    });
  };

  return (
    <>
      <SearchBar
        term={searchTerm}
        onTermChange={setSearchTerm}
        onTermSubmit={() => searchApi(searchTerm)}
      />
      {errorMessage.length !== 0 ? (
        <Text>{errorMessage}</Text>
      ) : (
        <ScrollView>
          <RestaurantsList
            title="Cost Effective"
            restaurants={filterRestaurantsByPrice('£')}
            navigation={navigation}
          />
          <RestaurantsList
            title="Bit Pricier"
            restaurants={filterRestaurantsByPrice('££')}
            navigation={navigation}
          />
          <RestaurantsList
            title="Big Spender"
            restaurants={filterRestaurantsByPrice('£££')}
            navigation={navigation}
          />
        </ScrollView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  numberResults: {
    marginLeft: 10,
    marginTop: 3,
    marginBottom: 6,
  },
});

export default SearchScreen;
