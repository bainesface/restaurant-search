import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useRestaurants from '../hooks/useRestaurants';
import RestaurantsList from '../components/RestaurantsList';

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchApi, restaurants, errorMessage] = useRestaurants();

  const filterRestaurantsByPrice = (price) => {
    return restaurants.filter((restaurant) => {
      return restaurant.price === price;
    });
  };

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
        <View>
          <Text style={styles.numberResults}>
            We have found {restaurants.length} results
          </Text>
          <ScrollView>
            <RestaurantsList
              title="Cost Effective"
              restaurants={filterRestaurantsByPrice('£')}
            />
            <RestaurantsList
              title="Bit Pricier"
              restaurants={filterRestaurantsByPrice('££')}
            />
            <RestaurantsList
              title="Big Spender"
              restaurants={filterRestaurantsByPrice('£££')}
            />
          </ScrollView>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'white',
    borderColor: 'red',
    borderWidth: 2,
  },
  numberResults: {
    marginLeft: 10,
    marginVertical: 3,
  },
});

export default SearchScreen;
