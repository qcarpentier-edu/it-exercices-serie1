import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

// Tableau de personnages
const characters = [
  { id: '1', name: 'Goku' },
  { id: '2', name: 'Vegeta' },
  { id: '3', name: 'Bulma' },
  { id: '4', name: 'Piccolo' },
  { id: '5', name: 'Gohan' },
];

const DragonBallCharacters = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Personnages de Dragon Ball</Text>
      <FlatList
        data={characters}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  itemContainer: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#f3f4f6',
    borderRadius: 5,
    width: '100%',
  },
  itemText: {
    fontSize: 18,
  },
});

export default DragonBallCharacters;
