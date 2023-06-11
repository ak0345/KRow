import React from 'react';
import { Text, KeyboardAvoidingView, TextInput, TouchableOpacity, Image, Alert, Keyboard  } from 'react-native';
import { auth, db } from '../firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, setDoc } from 'firebase/auth';



/*const onSignUp = async () => {
    try {
    await createUserWithEmailAndPassword(auth, emailsignup, passwordsignup);
    await signInWithEmailAndPassword(auth, emailsignup, passwordsignup);
    const profileDocRef = doc(db, 'profile', auth.currentUser.uid);
    await setDoc(profileDocRef,
      {
        "first-name": fnameSignUp,
          "last-name": lnameSignUp,
          "contactSignUp-number": contactSignUp,
          "courseSignUp": courseSignUp,
          "knumberSignUp": knumberSignUp,
          "boat-side": '',
          "gkt-eligible": false,
          "member-type": '',
          "otw-ban": false,
          "crew": {
            'crew-name': '',
            'seat': 0,
            'side': ''
          },
          "term1-fee-paid": false,
          "term2-fee-paid": false,
          "term3-fee-paid": false,
      })
    
    
  }
  catch (error) {
    console.log('Incorrect Email');
    //add alert box
  }
}*/


function SignUpScreen({route, navigation}) {
    const {styleSizing, styleTheme} = route.params;

    const [emailsignup, setUsernameSignUpState] = React.useState('');
    const [passwordsignup, setPasswordSignUpState] = React.useState('');
    const [fnameSignUp, setFnameSignUpState] = React.useState('');
    const [lnameSignUp, setLnameSignUpState] = React.useState('');
    const [knumberSignUp, setKnumberSignUpState] = React.useState('');
    const [contactSignUp, setContactSignUpState] = React.useState('');
    const [courseSignUp, setCourseSignUpState] = React.useState('');

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
      />

      <TextInput
        style={[styleSizing.input, styleTheme.username, styleTheme.titles]}
        onChangeText={(text) => {setLnameSignUpState(text);}}
        value = {lnameSignUp}
        clearButtonMode={Platform.OS === 'ios' ? 'while-editing' : 'never'}
        keyboardType="default"
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
      />

      <TextInput
        style={[styleSizing.input, styleTheme.username, styleTheme.titles]}
        onChangeText={(text) => {setContactSignUpState(text);}}
        value = {contactSignUp}
        clearButtonMode={Platform.OS === 'ios' ? 'while-editing' : 'never'}
        keyboardType="phone-pad"
      />

      <TextInput
        style={[styleSizing.input, styleTheme.username, styleTheme.titles]}
        onChangeText={(text) => {setCourseSignUpState(text);}}
        value = {courseSignUp}
        clearButtonMode={Platform.OS === 'ios' ? 'while-editing' : 'never'}
        keyboardType="default"
      />

      <TouchableOpacity style={[styleSizing.input, styleTheme.signinbtn]}
        onPress = {()=>{}}>
          <Text style = {[styleSizing.btntext, styleTheme.titles]}>
            Sign Up
      </Text></TouchableOpacity>

    </KeyboardAvoidingView>
    );
}

export default SignUpScreen;