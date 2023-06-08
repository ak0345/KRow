import React from 'react';
import { Text, KeyboardAvoidingView, TextInput, Image, TouchableOpacity, Pressable} from 'react-native';
import {auth} from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

function LoginScreen({route, navigation}) {

  const { styleSizing, styleTheme } = route.params;

  const [email, setUsernameState] = React.useState('');
  const [password, setPasswordState] = React.useState('');

  //username and password will be sent to server for login verification
  const onSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password)
      navigation.navigate('Home');
    }
    catch (error) {
      console.log('Incorrect Username or Password');
      //add alert box
    }
  }
  
  const onSignUp = () => {
    navigation.navigate('Signup');
  }

  return (
    <KeyboardAvoidingView
    style={[styleSizing.container, styleTheme.container]}
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Image style={styleSizing.logo} source={require('../assets/KRowLogo.png')} />

      <TextInput
        style={[styleSizing.input, styleTheme.username, styleTheme.titles]}
        onChangeText={(text) => setUsernameState(text)}
        value = {email}
        clearButtonMode={Platform.OS === 'ios' ? 'while-editing' : 'never'}
        placeholder='Email Address'
        keyboardType="email-address"
      />

      <TextInput
        style={[styleSizing.input, styleTheme.password]}
        secureTextEntry = {true}
        onChangeText={(text) => setPasswordState(text)}
        value = {password}
        clearButtonMode={Platform.OS === 'ios' ? 'while-editing' : 'never'}
        placeholder='Password'
        keyboardType="default"
      />

      <TouchableOpacity style={[styleSizing.input, styleTheme.signinbtn]}
        onPress = {onSignIn}>
          <Text style = {[styleSizing.btntext, styleTheme.titles]}>
            Sign In
      </Text></TouchableOpacity>
         
      <Pressable onPress = {onSignUp}>
        <Text style = {[styleSizing.btntext, styleTheme.titles, {color: '#D9EE01'}]}>
          Don't have an account? Sign Up
        </Text></Pressable>
      </KeyboardAvoidingView>

    
  );
}

export default LoginScreen;

