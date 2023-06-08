import React from 'react';
import { Text, KeyboardAvoidingView } from 'react-native';
import { auth, db } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const onSignUp = async () => {
    try {
    await createUserWithEmailAndPassword(auth, email, password)
  }
  catch (error) {
    console.log('Incorrect Username or Password');
    //add alert box
  }
}


function SignUpScreen({route, navigation}) {
    const {styleSizing, styleTheme} = route.params;

    return (
    <KeyboardAvoidingView style={[styleSizing.container, styleTheme.container]}>
      <Text style={[styleSizing.title, styleTheme.title]}>
        qwertyiop
      </Text>
    </KeyboardAvoidingView>
    );
}

export default SignUpScreen;