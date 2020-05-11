import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const SearchBar = () => {
  return (
    <View style={styles.background}>
      <Text>Search Bar</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'light grey',
    height: 50,
  },
});

export default SearchBar;
