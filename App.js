import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [contacts, setContacts] = useState([
    { name: 'Reema', id: 1 },
    { name: 'Rahaf', id: 2 },
    { name: 'Islam', id: 3 },
    { name: 'Ali', id: 4 },
    { name: 'Faris', id: 5 },
    { name: 'Malak', id: 6 },
    { name: 'Hanan', id: 7 },
    { name: 'Naeem', id: 8 },
    { name: 'Jad', id: 9 },
    { name: 'Baraa', id: 10 }
]);
  const pressHandler = (id) => {
    setContacts((previousState)=>{
     return previousState.filter(item =>item.id != id)

    })
  } 
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
          keyboardType='numeric' />
      </View>

      <View>
        <Text style={styles.titleText}> Welcome {name} , your age is : {age} </Text>
      </View>

      {/* flat list benfit in normal and low load which enhance the performance */}
      <View style={styles.ContactsContainer}>
        <FlatList
          numColumns={2}
          keyExtractor={(item) => item.id}
          data={contacts}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={()=> pressHandler(item.id)}>
              <Text style={styles.item}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>


      {/* <ScrollView>
         {contacts.map(person=>(
         <View key={person.key}> 
         <Text style={styles.item}>{person.name}</Text>
         </View>)
         )}
       </ScrollView> */}
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
    padding: 5,
    margin: 5
  },
  ContactsContainer: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    // backgroundColor: '#fff',
  },
  item: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 24,
    padding: 30,
    backgroundColor: 'red',
    fontSize: 24,
    color: '#fff'
  },
});
