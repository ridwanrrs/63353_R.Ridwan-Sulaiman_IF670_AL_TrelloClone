import React, { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { AppContext } from '../contexts/AppContext';

export default function DashboardScreen({ navigation }) {
  const { boards } = useContext(AppContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Boards</Text>

      <FlatList
        data={boards}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Board', { boardId: item.id })}>
            <Text style={styles.cardTitle}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, marginBottom: 10 },
  card: {
    backgroundColor: '#f2f2f2',
    padding: 20,
    marginBottom: 10,
    borderRadius: 8,
  },
  cardTitle: { fontSize: 18 },
});