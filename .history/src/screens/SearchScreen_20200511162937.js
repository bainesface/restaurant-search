import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
  const [searchInput, setSearchInput] = useState('');
  return (
    <View style={styles.background}>
      <SearchBar />
      <Text>Search Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'white',
  },
});

export default SearchScreen;
