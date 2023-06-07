import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';

const Stack = createStackNavigator();

export default function App() {

  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name="Login"
        component={LoginScreen}
        options = {{headerShown: false}}
        initialParams={{
          styleSizing: sizing, // Pass sizing styles as an option
          styleTheme: theme, // Pass theme styles as an option
        }}/>
        <Stack.Screen
        name="Home"
        component={HomeScreen}
        initialParams={{
          styleSizing: sizing, // Pass sizing styles as an option
          styleTheme: theme, // Pass theme styles as an option
        }}/>
      </Stack.Navigator>
    </NavigationContainer>

    
  );
}

const sizing = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  titles: {
    justifyContent: 'flex-start',
  },

  input: {
    height: 55,
    width: 300,
    borderRadius: 10,
    margin: 10,
    padding: 10,
  },

  logo: {
    width: 300,
    height: 300,
    resizeMode: 'contain'
  },
});

const theme = StyleSheet.create({
  container: {
    backgroundColor: '#153170',
    //someone pls try adding one of the custom fonts here i cant make it work (custom fonts are saved in assets folder)
  },

  titles: {
    color: 'white'
  },

  username: {
    backgroundColor: '#CE2449',
    color: 'black',
  },

  password: {
    backgroundColor: '#FFFFFF',
    color: 'black',
  },
});