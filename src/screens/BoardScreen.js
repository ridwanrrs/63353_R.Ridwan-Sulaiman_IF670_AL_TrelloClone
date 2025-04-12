import React, { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Button, Alert } from 'react-native';
import { AppContext } from '../contexts/AppContext';

export default function BoardScreen({ route, navigation }) {
  const { boardId } = route.params;
  const { boards, deleteCard } = useContext(AppContext);

  const board = boards.find((b) => b.id === boardId);

  const handleDelete = (cardId) => {
    Alert.alert(
      'Delete Card',
      'Are you sure you want to delete this card?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Delete', style: 'destructive', onPress: () => deleteCard(boardId, cardId) },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{board?.title}</Text>
      <Button title="Add Card" onPress={() => navigation.navigate('AddCard', { boardId })} />
      <FlatList
        data={board?.cards}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('CardDetail', { boardId, cardId: item.id })}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <TouchableOpacity onPress={() => handleDelete(item.id)}>
                <Text style={styles.deleteText}>🗑️</Text>
              </TouchableOpacity>
            </View>
            <Text>{item.description}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={{ paddingVertical: 16 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  card: {
    backgroundColor: '#e6f0ff',
    padding: 16,
    marginBottom: 12,
    borderRadius: 10,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitle: { fontSize: 18, fontWeight: '600' },
  deleteText: { fontSize: 16, color: 'red' },
});