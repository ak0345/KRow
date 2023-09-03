import React from 'react';
import { Text, KeyboardAvoidingView, TextInput, TouchableOpacity, Alert, ScrollView  } from 'react-native';
import { auth, db } from '../firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import {setDoc, doc} from 'firebase/firestore';

function SignUpScreen({route, navigation}) {
    const {styleSizing, styleTheme} = route.params;
    
    const passp = 'monkeysex';
    const [passphrase, setPassphraseState] = React.useState('');
    const [emailsignup, setUsernameSignUpState] = React.useState('');
    const [passwordsignup, setPasswordSignUpState] = React.useState('');
    const [fnameSignUp, setFnameSignUpState] = React.useState('');
    const [lnameSignUp, setLnameSignUpState] = React.useState('');
    const [knumberSignUp, setKnumberSignUpState] = React.useState('');
    const [contactSignUp, setContactSignUpState] = React.useState('');
    const [courseSignUp, setCourseSignUpState] = React.useState('');

    const clearTextboxes = () => {
      setUsernameSignUpState('');
      setPasswordSignUpState('');
      setFnameSignUpState('');
      setLnameSignUpState('');
      setKnumberSignUpState('');
      setContactSignUpState('');
      setCourseSignUpState('');
      setPassphraseState('');
    }

    
    const onSignUp = async () => {
      if (passphrase == passp) {
        try {
        await createUserWithEmailAndPassword(auth, emailsignup, passwordsignup)
        await signInWithEmailAndPassword(auth, emailsignup, passwordsignup)
        .then(async () => { 
          await sendEmailVerification(auth.currentUser)
          const profileDocRef = doc(db, 'profile', `${auth.currentUser.uid}`);
          await setDoc(profileDocRef,
            {
                  "first-name": fnameSignUp,
                  "last-name": lnameSignUp,
                  "contact-number": contactSignUp,
                  "course": courseSignUp,
                  "knumber": knumberSignUp,
                  "boat-side": '',
                  "gkt-eligible": false,
                  "admin": false,
                  "committee": false,
                  "otw-ban": false,
                  "crew": {
                    'crew-name': '',
                    'seat': 0,
                    'side': ''
                  },
                  "outings": {
                    'count': 0
                  },
                  "term1-fee-paid": false,
                  "term2-fee-paid": false,
                  "term3-fee-paid": false,
            }
          )
        })
        .then(auth.signOut())
        .then(() => {
          Alert.alert("Signed Up Successfully",'Verify your email now so you can sign in!', [
            {text: 'OK', onPress: () => {
              clearTextboxes();
            }}]
          )
        })
        
        
      }
      catch (error) {
        console.log(error);
        clearTextboxes();
      }
    }
    else {
      Alert.alert("Incorrect passphrase",'please try again', [
        {text: 'OK', onPress: () => {
          clearTextboxes();
        }}]
      )
    }
  }


    return (
    
    <KeyboardAvoidingView style={[styleSizing.container, styleTheme.container]}
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TextInput
        style={[styleSizing.input, styleTheme.username, styleTheme.titles]}
        onChangeText={(text) => {setFnameSignUpState(text);}}
        value = {fnameSignUp}
        clearButtonMode={Platform.OS === 'ios' ? 'while-editing' : 'never'}
        keyboardType="default"
        placeholder='First Name'
      />

      <TextInput
        style={[styleSizing.input, styleTheme.username, styleTheme.titles]}
        onChangeText={(text) => {setLnameSignUpState(text);}}
        value = {lnameSignUp}
        clearButtonMode={Platform.OS === 'ios' ? 'while-editing' : 'never'}
        keyboardType="default"
        placeholder='Last Name'
      />

      <TextInput
        style={[styleSizing.input, styleTheme.username, styleTheme.titles]}
        onChangeText={(text) => setUsernameSignUpState(text)}
        value = {emailsignup}
        clearButtonMode={Platform.OS === 'ios' ? 'while-editing' : 'never'}
        placeholder='Email Address'
        keyboardType="email-address"
        autoComplete='email'
      />

      <TextInput
        style={[styleSizing.input, styleTheme.password]}
        secureTextEntry = {true}
        onChangeText={(text) => setPasswordSignUpState(text)}
        value = {passwordsignup}
        clearButtonMode={Platform.OS === 'ios' ? 'while-editing' : 'never'}
        placeholder='Password'
        keyboardType="default"
        autoComplete='current-password'
      />

      <TextInput
        style={[styleSizing.input, styleTheme.username, styleTheme.titles]}
        onChangeText={(text) => {setKnumberSignUpState(text);}}
        value= {knumberSignUp}
        clearButtonMode={Platform.OS === 'ios' ? 'while-editing' : 'never'}
        keyboardType="default"
        placeholder='K-Number'
      />

      <TextInput
        style={[styleSizing.input, styleTheme.username, styleTheme.titles]}
        onChangeText={(text) => {setContactSignUpState(text);}}
        value = {contactSignUp}
        clearButtonMode={Platform.OS === 'ios' ? 'while-editing' : 'never'}
        keyboardType="phone-pad"
        placeholder='Contact Number'
      />

      <TextInput
        style={[styleSizing.input, styleTheme.username, styleTheme.titles]}
        onChangeText={(text) => {setCourseSignUpState(text);}}
        value = {courseSignUp}
        clearButtonMode={Platform.OS === 'ios' ? 'while-editing' : 'never'}
        keyboardType="default"
        placeholder='Course Name'
      />

      <TextInput
        style={[styleSizing.input, styleTheme.username, styleTheme.titles]}
        onChangeText={(text) => {setPassphraseState(text);}}
        value = {passphrase}
        clearButtonMode={Platform.OS === 'ios' ? 'while-editing' : 'never'}
        keyboardType="default"
        placeholder='Passphrase'
      />

      <TouchableOpacity style={[styleSizing.input, styleTheme.signinbtn]}
        onPress = {onSignUp}>
          <Text style = {[styleSizing.btntext, styleTheme.titles]}>
            Sign Up
      </Text></TouchableOpacity>

    </KeyboardAvoidingView>

    );
}

export default SignUpScreen;