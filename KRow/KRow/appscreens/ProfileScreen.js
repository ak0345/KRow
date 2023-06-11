import React from 'react';
import { Text, KeyboardAvoidingView, TextInput, TouchableOpacity, Image, Alert, Keyboard } from 'react-native';
import { auth, db } from '../firebase';
import { getDoc, updateDoc, doc } from 'firebase/firestore';


function ProfileScreen({route, navigation}) {

    const {styleSizing, styleTheme} = route.params;

    const profileDocRef = doc(db, 'profile', auth.currentUser.uid);

    const [fname, setFnameState] = React.useState('');
    const [lname, setLnameState] = React.useState('');
    const [knumber, setKnumberState] = React.useState('');
    const [contact, setContactState] = React.useState('');
    const [course, setCourseState] = React.useState('');

    React.useEffect( () => {
      const getProfileDoc = async () => {
        try {
        const doc = await getDoc(profileDocRef);
        setFnameState(doc.get('first-name'));
        setLnameState(doc.get('last-name'));
        setKnumberState(doc.get('knumber'));
        setContactState(doc.get('contact-number'));
        setCourseState(doc.get('course'));
      }
      catch (error) {console.log(error);}
    }

    getProfileDoc();
    }, []);

    const saveChanges = async () => {
      await updateDoc(profileDocRef, 
        {
          "first-name": fname,
          "last-name": lname,
          "contact-number": contact,
          "course": course
        })

      console.log('changed');
    }

    return (
    <KeyboardAvoidingView style={[styleSizing.container, styleTheme.container]} 
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableOpacity onPress={()=>{}}>
      <Image style={styleSizing.profilepic} source={require('../assets/profile.png')} />
      </TouchableOpacity>

      <Text style={[styleSizing.title, styleTheme.titles]}>Profile</Text>

      <TextInput
        style={[styleSizing.input, styleTheme.username, styleTheme.titles]}
        onChangeText={(text) => {setFnameState(text);}}
        value = {fname}
        clearButtonMode={Platform.OS === 'ios' ? 'while-editing' : 'never'}
        keyboardType="default"
      />

      <TextInput
        style={[styleSizing.input, styleTheme.username, styleTheme.titles]}
        onChangeText={(text) => {setLnameState(text);}}
        value = {lname}
        clearButtonMode={Platform.OS === 'ios' ? 'while-editing' : 'never'}
        keyboardType="default"
      />

      <TextInput
        style={[styleSizing.input, styleTheme.username, styleTheme.titles]}
        onPressIn={() => {
          Alert.alert('Warning', 'This field cannot be edited', [
          {text: 'OK', onPress: () => Keyboard.dismiss()}
        ]
          );
        }}
        value= {knumber}
        clearButtonMode={Platform.OS === 'ios' ? 'while-editing' : 'never'}
        keyboardType="default"
      />

      <TextInput
        style={[styleSizing.input, styleTheme.username, styleTheme.titles]}
        onChangeText={(text) => {setContactState(text);}}
        value = {contact}
        clearButtonMode={Platform.OS === 'ios' ? 'while-editing' : 'never'}
        keyboardType="phone-pad"
      />

      <TextInput
        style={[styleSizing.input, styleTheme.username, styleTheme.titles]}
        onChangeText={(text) => {setCourseState(text);}}
        value = {course}
        clearButtonMode={Platform.OS === 'ios' ? 'while-editing' : 'never'}
        keyboardType="default"
      />

      <TouchableOpacity style={[styleSizing.input, styleTheme.signinbtn]}
        onPress = {saveChanges}>
          <Text style = {[styleSizing.btntext, styleTheme.titles]}>
            Save
      </Text></TouchableOpacity>


    </KeyboardAvoidingView>
    );
}

export default ProfileScreen;