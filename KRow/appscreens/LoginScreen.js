import React from 'react';
import { ActivityIndicator, Text, KeyboardAvoidingView, TextInput, Image, TouchableOpacity, Pressable, Alert, Modal, View } from 'react-native';
import {auth} from '../firebase';
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';

function LoginScreen({route, navigation}) {

  const { styleSizing, styleTheme } = route.params;

  const [email, setUsernameState] = React.useState('');
  const [password, setPasswordState] = React.useState('');
  const [forgotEmail, setForgotEmailState] = React.useState('');
  const [isLoading, setLoadingState] = React.useState(false);

  const [modalVisible, setModalVisible] = React.useState(false);

  //username and password will be sent to server for login verification
  const onSignIn = async () => {
    try {
      setLoadingState(true);
      await signInWithEmailAndPassword(auth, email, password)
      if (auth.currentUser.emailVerified) {
        setLoadingState(false);
        setUsernameState('');
        setPasswordState('');
        navigation.navigate('Home');
      }
      else {
        setLoadingState(false);
        Alert.alert('Sign in Failed', 'Please verify your email', [
          {text: 'OK', onPress: () => {setUsernameState(''); setPasswordState('');}}])
      }
    }
    catch (error) {
      setLoadingState(false);
      Alert.alert('Warning', 'Email or password incorrect', [
        {text: 'OK', onPress: () => {setUsernameState(''); setPasswordState('');}}
    ])}
  }

  const passReset = async () => {
  try {
      setLoadingState(true);
      await sendPasswordResetEmail(auth, forgotEmail)
      setLoadingState(false);
      Alert.alert('Success', 'Password reset email has been sent', [
        {text: 'OK', onPress: () => {setUsernameState(''); setPasswordState(''); setForgotEmailState('');}}
    ])}
    catch (error) {
      setLoadingState(false);
      console.log(error);
      Alert.alert('Warning', 'Email does not exist', [
        {text: 'OK', onPress: () => {setUsernameState(''); setPasswordState(''); setForgotEmailState('');}}
    ])
      }
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
        autoComplete='email'
      />

      <TextInput
        style={[styleSizing.input, styleTheme.password]}
        secureTextEntry = {true}
        onChangeText={(text) => setPasswordState(text)}
        value = {password}
        clearButtonMode={Platform.OS === 'ios' ? 'while-editing' : 'never'}
        placeholder='Password'
        keyboardType="default"
        autoComplete='current-password'
      />

      <TouchableOpacity style={[styleSizing.input, styleTheme.signinbtn]}
        onPress = {onSignIn}>
          <Text style = {[styleSizing.btntext, styleTheme.titles]}>
            Sign In
      </Text></TouchableOpacity>

      <Pressable onPress = {()=>{setModalVisible(true)}}>
        <Text style = {[styleSizing.btntext, styleTheme.titles, {color: '#D9EE01'}]}>
          Forgot your Password?
        </Text></Pressable>
         
      <Pressable onPress = {() => {navigation.navigate('Signup'); setUsernameState(''); setPasswordState('');}}>
        <Text style = {[styleSizing.btntext, styleTheme.titles, {color: '#D9EE01'}]}>
          Don't have an account? Sign Up
        </Text></Pressable>

        <Modal
        animationType="fade"
        transparent={true}
        visible={isLoading}
        onRequestClose={() => {}}
        >
          <View style={[styleTheme.container, styleSizing.container]}>
          <ActivityIndicator size="large" animating={isLoading}/>
          </View>
        </Modal>

        <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {}}
        >
          <View style={[styleSizing.forgotpass, styleTheme.forgotpass]}>

      <TextInput
        style={[styleSizing.input, styleTheme.username, styleTheme.titles]}
        onChangeText={(text) => setForgotEmailState(text)}
        value = {forgotEmail}
        clearButtonMode={Platform.OS === 'ios' ? 'while-editing' : 'never'}
        placeholder='Email'
        keyboardType="email-address"
      />

      <TouchableOpacity style={[styleSizing.input, styleTheme.signinbtn, {backgroundColor: 'white'}]}
        onPress = {passReset}>
          <Text style = {[styleSizing.btntext, styleTheme.titles, {color: 'black'}]}>
            Submit
      </Text></TouchableOpacity>

      <TouchableOpacity style={[styleSizing.input, styleTheme.signinbtn]}
        onPress = {() => {setModalVisible(false); setUsernameState(''); setPasswordState(''); setForgotEmailState('');}}>
          <Text style = {[styleSizing.btntext, styleTheme.titles]}>
            Close
      </Text></TouchableOpacity>

      </View></Modal>

      </KeyboardAvoidingView>

    
  );
}

export default LoginScreen;

