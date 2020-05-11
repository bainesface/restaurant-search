import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <View style={styles.background}>
      <SearchBar
        searchTerm={searchTerm}
        onTermChange={(newTerm) => setSearchTerm(newTerm)}
      />
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
