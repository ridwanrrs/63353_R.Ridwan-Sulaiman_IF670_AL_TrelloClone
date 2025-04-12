import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { AppContext } from '../contexts/AppContext';

export default function AddCardScreen({ route, navigation }) {
  const { boardId } = route.params;
  const { boards, setBoards } = useContext(AppContext);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAddCard = () => {
    if (title.trim() === '') return;

    const newCard = {
      id: Date.now().toString(),
      title,
      description,
    };

    const updatedBoards = boards.map((board) => {
      if (board.id === boardId) {
        return { ...board, cards: [...board.cards, newCard] };
      }
      return board;
    });

    setBoards(updatedBoards);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add New Card</Text>
      <TextInput
        placeholder="Title"
        style={styles.input}
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        placeholder="Description"
        style={[styles.input, { height: 100 }]}
        multiline
        value={description}
        onChangeText={setDescription}
      />
      <Button title="Add Card" onPress={handleAddCard} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 16 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
    backgroundColor: 'white',
  },
});