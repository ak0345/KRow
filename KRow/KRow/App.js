import React from 'react';
import { StyleSheet, Image, TouchableOpacity, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './app_screens/LoginScreen';
import HomeScreen from './app_screens/HomeScreen';
import SignUpScreen from './app_screens/SignUpScreen';
import MenuDropDown from './app_screens/MenuDropDown';
import ProfileScreen from './app_screens/ProfileScreen';

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
        name="Signup"
        component={SignUpScreen}
        initialParams={{
          styleSizing: sizing, // Pass sizing styles as an option
          styleTheme: theme, // Pass theme styles as an option
        }}/>

        <Stack.Screen
        name="Home"
        component={HomeScreen}
        options = {{
          headerTintColor: '#ffffff',
          headerStyle: {backgroundColor: '#153170'},
          headerShadowVisible: false,
          headerTitle: '',
          headerLeft:() => (
            <MenuDropDown styleSizing={sizing} styleTheme={theme} />
          ),
          headerRight:() => (
            <TouchableOpacity onPress={() => {}}>
              <Image style={[sizing.menubtn, {width: 30, height: 30,}]}
                  source={require('./assets/profile.png')}/>
            </TouchableOpacity>
            ),
        }}
        initialParams={{
          styleSizing: sizing, // Pass sizing styles as an option
          styleTheme: theme, // Pass theme styles as an option
        }}/>

        <Stack.Screen
        name="ProfilePage"
        component={ProfileScreen}
        options = {{headerShown: false}}
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

  menubtn: {
      width: 25,
      height: 25,
      margin: 10,
      resizeMode: 'contain'
    },

    menu: {
      backgroundColor: '#0c1c40',
      minHeight:1000,
      width:250,
      alignItems: 'center',
    },
  
  btntext: {
    padding: 10,
    textAlign: 'center',
  },

  input: {
    height: 55,
    width: 300,
    borderRadius: 10,
    margin: 10,
    padding: 10,
  },

  btns: {
    height: 50,
    width: 200,
    borderRadius: 10,
    margin: 5,
    //marginLeft: 20,
    //padding: 5,
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
    color: 'white',
  },

  username: {
    backgroundColor: '#CE2449',
    color: 'black',
  },

  password: {
    backgroundColor: '#FFFFFF',
    color: 'black',
  },

  signinbtn: {
    backgroundColor: '#D9EE01',
  },

  menu: {
    //backgroundColor: '#153170',
    backgroundColor: '#0c1c40',
    
  },

});