import React from 'react';
import { Text, View } from 'react-native';
import { auth, db } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';


function ProfileScreen({route, navigation}) {
    const {styleSizing, styleTheme} = route.params;

    return (
    <View style={[styleSizing.container, styleTheme.container]}>
      <Text style={[styleSizing.title, styleTheme.title]}>
        qwertyiopsdjkfhkk
      </Text>
    </View>
    );
}

export default ProfileScreen;