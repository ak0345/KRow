import React from 'react';
import { Text, View, TouchableOpacity, Image} from 'react-native';


function HomeScreen({route, navigation}) {

    const { styleSizing, styleTheme } = route.params;

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
        onPress = {()=>{}}>
          <Text style = {[styleSizing.btntext, styleTheme.titles]}>
            Availibility
      </Text></TouchableOpacity>
    </View>
  );
}

export default HomeScreen;

