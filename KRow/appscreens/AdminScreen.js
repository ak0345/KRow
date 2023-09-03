import React from 'react';
import { Text, View, TouchableOpacity, } from 'react-native';

function AdminScreen({route, navigation}) {

    const { styleSizing, styleTheme } = route.params;

    return (
            <View style={[styleSizing.container, styleTheme.container]}>
              <TouchableOpacity style={[styleSizing.input, styleTheme.signinbtn, {backgroundColor: '#CE2449'}]}
                onPress = {()=>{navigation.navigate("AddNewTraining")}}>
                  <Text style = {[styleSizing.btntext, styleTheme.titles]}>
                    Add New Training Schedule
              </Text></TouchableOpacity>
              <TouchableOpacity style={[styleSizing.input, styleTheme.signinbtn,
              {backgroundColor: '#ffffff'}]}
                onPress = {()=>{navigation.navigate("ModifyTraining")}}>
                  <Text style = {[styleSizing.btntext, styleTheme.titles, {color: 'black'}]}>
                    Modify Current Training Schedule
              </Text></TouchableOpacity>
              <TouchableOpacity style={[styleSizing.input, styleTheme.signinbtn]}
                onPress = {()=>{navigation.navigate("EditProfile")}}>
                  <Text style = {[styleSizing.btntext, styleTheme.titles]}>
                    Edit Profiles
              </Text></TouchableOpacity>
            </View>
    );

};

export default AdminScreen;