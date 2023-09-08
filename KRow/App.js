import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '@appscreens/LoginScreen';
import HomeScreen from '@appscreens/HomeScreen';
import SignUpScreen from '@appscreens/SignUpScreen';
import MenuDropDown from '@appscreens/MenuDropDown';
import ProfileScreen from '@appscreens/ProfileScreen';
import OutingsScreen from '@appscreens/OutingsScreen';
import IndoorTrainingsScreen from '@appscreens/IndoorTrainingsScreen';
import AdminScreen from '@appscreens/AdminScreen';
import EditProfileScreen from '@appscreens/adminscreens/EditProfileScreen';
import ModifyTrainingScreen from './appscreens/adminscreens/ModifyTrainingScreen';
import NewTrainingScreen from './appscreens/adminscreens/NewTrainingScreen';
import ContactScreen from './appscreens/ContactScreen';

const Stack = createNativeStackNavigator();

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
          gestureEnabled: false,
          headerTintColor: '#ffffff',
          headerStyle: {backgroundColor: '#153170'},
          headerShadowVisible: false,
          headerTitle: '',
          headerLeft:() => (
            <MenuDropDown styleSizing={sizing} styleTheme={theme} />
          ),
        }}
        initialParams={{
          styleSizing: sizing, // Pass sizing styles as an option
          styleTheme: theme, // Pass theme styles as an option
        }}/>

        <Stack.Screen
        name="ProfilePage"
        component={ProfileScreen}
        options = {{headerShown: true}}
        initialParams={{
          styleSizing: sizing, // Pass sizing styles as an option
          styleTheme: theme, // Pass theme styles as an option
        }}/>

          <Stack.Screen
        name="ContactPage"
        component={ContactScreen}
        options = {{headerShown: true}}
        initialParams={{
          styleSizing: sizing, // Pass sizing styles as an option
          styleTheme: theme, // Pass theme styles as an option
        }}/>

        <Stack.Screen
        name="Outings"
        component={OutingsScreen}
        options = {{headerShown: true}}
        initialParams={{
          styleSizing: sizing, // Pass sizing styles as an option
          styleTheme: theme, // Pass theme styles as an option
        }}/>

        <Stack.Screen
        name="Indoor"
        component={IndoorTrainingsScreen}
        options = {{headerShown: true}}
        initialParams={{
          styleSizing: sizing, // Pass sizing styles as an option
          styleTheme: theme, // Pass theme styles as an option
        }}/>

        <Stack.Screen
        name="Admin"
        component={AdminScreen}
        options = {{headerShown: true}}
        initialParams={{
          styleSizing: sizing, // Pass sizing styles as an option
          styleTheme: theme, // Pass theme styles as an option
        }}/>

        <Stack.Screen
        name="EditProfile"
        component={EditProfileScreen}
        options = {{headerShown: true}}
        initialParams={{
          styleSizing: sizing, // Pass sizing styles as an option
          styleTheme: theme, // Pass theme styles as an option
        }}/>

        <Stack.Screen
        name="ModifyTraining"
        component={ModifyTrainingScreen}
        options = {{headerShown: true}}
        initialParams={{
          styleSizing: sizing, // Pass sizing styles as an option
          styleTheme: theme, // Pass theme styles as an option
        }}/>

        <Stack.Screen
        name="AddNewTraining"
        component={NewTrainingScreen}
        options = {{headerShown: true}}
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
      minHeight:1000,
      width:250,
      alignItems: 'center',
    },

    forgotpass: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 22,
      borderRadius: 10,
      margin: 10,
      padding: 10,
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
    textAlign: 'center',
  },

  btns: {
    height: 50,
    width: 200,
    borderRadius: 10,
    margin: 5,
  },

  logo: {
    width: 300,
    height: 300,
    resizeMode: 'contain'
  },

  profilepic: {
    width: 200,
    height: 200,
    resizeMode: 'contain'
  },

  calender: {
    textAlign: 'center',
    padding: 5,
    width: 50,
    fontSize: 14,
  },

  calenderbtn: {
    borderRadius: 30,
    width: 50,
  },

    pickerContainer: {
    alignItems: 'center',
    marginTop: 0,
  },
  formContainer: {
    alignItems: 'center',
    marginTop: 0,
  },

  messageInput: {
    height: 150,
    width: 300,
    borderRadius: 10,
    margin: 10,
    padding: 10,
    textAlign: 'center',
  },
});

const theme = StyleSheet.create({
  container: {
    backgroundColor: '#153170',
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
    backgroundColor: '#0c1c40',
  },

  forgotpass: {
    backgroundColor: '#153170',
  },

  calender: {
    color: 'white',
  },

});
