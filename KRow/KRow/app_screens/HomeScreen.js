import {useEffect, useState} from 'react';
import { Text, View, TouchableOpacity, Image} from 'react-native';
import {db, auth} from '../firebase';
import {getDocs, collection} from 'firebase/firestore';

function HomeScreen({route, navigation}) {

    const { styleSizing, styleTheme } = route.params;

    const [profile, setProfileInfo] = useState([]);

    const profileCollectionRef = collection(db, 'profile');

    useEffect(() => {
      const getProfileInfo =  async () => {
        try {
          const data = await getDocs(profileCollectionRef);
          setProfileInfo(data.docs.map(doc => ({
            ...doc.data(),
            userid: doc.userid,
          })));
          console.log(profile);
        } catch (err) {
          console.log(err);
        }
      };

      getProfileInfo();
    }, []);

  return (
    <View style={[styleSizing.container, styleTheme.container]}>

      <Image style={styleSizing.logo} source={require('../assets/KRowLogo.png')} />
      
      <TouchableOpacity style={[styleSizing.input, styleTheme.signinbtn, {backgroundColor: '#CE2449'}]}
        onPress = {()=>{}}>
          <Text style = {[styleSizing.btntext, styleTheme.titles]}>
            Crews Document
      </Text></TouchableOpacity>
      <TouchableOpacity style={[styleSizing.input, styleTheme.signinbtn,
      {backgroundColor: '#ffffff'}]}
        onPress = {()=>{}}>
          <Text style = {[styleSizing.btntext, styleTheme.titles, {color: 'black'}]}>
            Indoor Training
      </Text></TouchableOpacity>
      <TouchableOpacity style={[styleSizing.input, styleTheme.signinbtn]}
        onPress = {()=>{navigation.navigate('ProfilePage')}}>
          <Text style = {[styleSizing.btntext, styleTheme.titles]}>
            Availibility (Profile for now)
      </Text></TouchableOpacity>
    </View>
  );
}

export default HomeScreen;

