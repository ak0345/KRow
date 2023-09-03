import React from 'react';
import { Text, View, TouchableOpacity, Image, BackHandler, Alert} from 'react-native';
import { auth, db } from '../firebase';
import {getDoc, doc} from 'firebase/firestore';



function HomeScreen({route, navigation}) {

    const { styleSizing, styleTheme } = route.params;


    const [adminState, setAdminState] = React.useState(false);

    React.useEffect(() => {

      const adminStatus = async () => {
        try{
        const userDoc = await getDoc(doc(db, 'profile', auth.currentUser.uid));
        const admin = userDoc.data().admin || userDoc.data().committee;
        setAdminState(admin);
        }catch(error){
          setAdminState(false);
        }
      };

      adminStatus();

      const backAction = () => {
        Alert.alert('Warning', 'You are about to exit the app', [
          {
            text: 'Cancel',
            onPress: () => null,
            style: 'cancel',
          },
          {text: 'YES', onPress: () => BackHandler.exitApp()},
        ]);
        return true;
      };
  
      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        backAction,
      );
  
      return () => backHandler.remove();
    }, []);

    return (
    <View style={[styleSizing.container, styleTheme.container]}>

      <Image style={styleSizing.logo} source={require('../assets/KRowLogo.png')} />
      
      <TouchableOpacity style={[styleSizing.input, styleTheme.signinbtn, {backgroundColor: '#CE2449'}]}
        onPress = {()=>{navigation.navigate('Outings')}}>
          <Text style = {[styleSizing.btntext, styleTheme.titles]}>
            Crews Timing
      </Text></TouchableOpacity>
      <TouchableOpacity style={[styleSizing.input, styleTheme.signinbtn,
      {backgroundColor: '#ffffff'}]}
        onPress = {()=>{navigation.navigate('Indoor')}}>
          <Text style = {[styleSizing.btntext, styleTheme.titles, {color: 'black'}]}>
            Indoor Training
      </Text></TouchableOpacity>
      <TouchableOpacity style={[styleSizing.input, styleTheme.signinbtn]}
        onPress = {()=>{
          adminState==true ? navigation.navigate('Admin') : Alert.alert('Not Admin', 'Not Admin', [
            {text: 'OK', onPress: () => {}}]);
        }}>
          <Text style = {[styleSizing.btntext, styleTheme.titles]}>
            Admin
      </Text></TouchableOpacity>
    </View>
  );
}

export default HomeScreen;

