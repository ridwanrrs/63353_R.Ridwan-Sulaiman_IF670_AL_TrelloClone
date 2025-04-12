import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AppContext } from '../contexts/AppContext';

export default function CardDetailScreen({ route }) {
  const { boardId, cardId } = route.params;
  const { boards } = useContext(AppContext);

  const board = boards.find((b) => b.id === boardId);
  const card = board?.cards.find((c) => c.id === cardId);

  if (!card) {
    return (
      <View style={styles.container}>
        <Text style={styles.notFound}>Card not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{card.title}</Text>
      <Text style={styles.description}>{card.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  description: { fontSize: 16 },
  notFound: { fontSize: 18, color: 'red', textAlign: 'center', marginTop: 20 },
});