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
    <>
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
    </>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'white',
    flex: 1,
  },
  numberResults: {
    marginLeft: 10,
    marginTop: 3,
    marginBottom: 6,
  },
});

export default SearchScreen;
