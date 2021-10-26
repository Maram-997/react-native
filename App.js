import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Hello World!</Text>
      <View>
        <Text style={styles.titleText}>Enter your name :</Text>
        < TextInput
          placeholder='e.g Maram'
          style={styles.input}
          onChangeText={(value) => setName(value)}
          multiline />
      </View>

      <View>
        <Text style={styles.titleText}>Enter your age :</Text>
        < TextInput
          placeholder='e.g 24'
          style={styles.input}
          onChangeText={(value) => setAge(value)}
          keyboardType= 'numeric' />
      </View>
      
      <View>
        <Text style={styles.titleText}> Welcome {name} , your age is : {age} </Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    color: 'red'
  },
  input: {
    borderRadius: 5,
    borderColor: '#777',
    borderWidth: 1,
    color: '#fff',
    padding:5,
    margin:5
  }
});
