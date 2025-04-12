import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { AppContext } from '../contexts/AppContext';

export default function ProfileScreen({ navigation }) {
  const { user, setUser } = useContext(AppContext);

  const handleLogout = () => {
    setUser(null);
    navigation.replace('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Text style={styles.label}>Email:</Text>
      <Text style={styles.email}>{user?.email}</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  label: { fontSize: 18, fontWeight: '500' },
  email: { fontSize: 16, marginBottom: 20 },
});

