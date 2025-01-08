import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { MMKV } from 'react-native-mmkv';

const storage = new MMKV();

const MMKVStorage = () => {
  const [state, setState] = useState('');
  const [retrievedValue, setRetrievedValue] = useState('');

  const saveToStorage = () => {
    storage.set('storedValue', state);
    console.log('Value saved successfully!');
    //alert('Value saved successfully!');
  };

  const retrieveFromStorage = () => {
    const value = storage.getString('storedValue') || 'No value found';
    setRetrievedValue(value);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter a value to store"
        value={state}
        onChangeText={(text) => setState(text)}
      />
      <Button title="Save to Storage" onPress={saveToStorage} />
      <Button title="Retrieve from Storage" onPress={retrieveFromStorage} />
      <Text style={styles.result}>Retrieved Value: {retrievedValue}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    marginBottom: 10,
    paddingHorizontal: 8,
  },
  result: {
    marginTop: 20,
    fontSize: 16,
  },
});

export default MMKVStorage;
