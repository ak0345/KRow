import React from 'react';
import {auth} from '../firebase';
import { Image, TouchableOpacity, Modal, Text, SafeAreaView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
        
export default function MenuDropDown({styleSizing, styleTheme}) {

  const [menuVisibility, setMenuVisibility] = React.useState(false);

  const logOut = async () => {await auth.signOut();};

  const navigation = useNavigation();

        return (

        <View>
            <Modal
          animationType="slideIn"
          transparent={true}
          visible={menuVisibility}
          onRequestClose={() => {setModalVisible(!setMenuVisibility);}}
          backdropTransitionOutTiming={0}
          hideModalContentWhileAnimating
          >
            <TouchableOpacity 
            activeOpacity={1} 
            onPressOut={() => {setMenuVisibility(false)}}
          >
            <SafeAreaView style={[styleSizing.menu, styleTheme.menu]}>

            <TouchableOpacity style={[styleSizing.btns, styleTheme.menu]}
                onPress = {() => {setMenuVisibility(false); navigation.navigate('ProfilePage')}}>
                  <Text style = {[styleSizing.btntext, styleTheme.titles, {fontSize: 20}]}>
                    Profile
              </Text></TouchableOpacity>

              <TouchableOpacity style={[styleSizing.btns, styleTheme.menu]}
                onPress = {() => {setMenuVisibility(false); navigation.navigate('ProfilePage')}}>
                  <Text style = {[styleSizing.btntext, styleTheme.titles, {fontSize: 20}]}>
                    Current Committee
              </Text></TouchableOpacity>

              <TouchableOpacity style={[styleSizing.btns, styleTheme.menu]}
                onPress = {() => {setMenuVisibility(false); navigation.navigate('ProfilePage')}}>
                  <Text style = {[styleSizing.btntext, styleTheme.titles, {fontSize: 20}]}>
                    Forms
              </Text></TouchableOpacity>

              <TouchableOpacity style={[styleSizing.btns, styleTheme.menu]}
                onPress = {() => {setMenuVisibility(false); navigation.navigate('ProfilePage')}}>
                  <Text style = {[styleSizing.btntext, styleTheme.titles, {fontSize: 20}]}>
                    Crews & Data
              </Text></TouchableOpacity>

              <TouchableOpacity style={[styleSizing.btns, styleTheme.menu]}
                onPress = {() => {setMenuVisibility(false); navigation.navigate('ProfilePage')}}>
                  <Text style = {[styleSizing.btntext, styleTheme.titles, {fontSize: 20}]}>
                    Socials And More
              </Text></TouchableOpacity>

              <TouchableOpacity style={[styleSizing.btns, styleTheme.menu]}
                onPress = {() => {setMenuVisibility(false); navigation.navigate('ProfilePage')}}>
                  <Text style = {[styleSizing.btntext, styleTheme.titles, {fontSize: 20}]}>
                    Reach Developers
              </Text></TouchableOpacity>

              <TouchableOpacity style={[styleSizing.btns, styleTheme.menu]}
                onPress = {() => {setMenuVisibility(false); navigation.navigate('ProfilePage')}}>
                  <Text style = {[styleSizing.btntext, styleTheme.titles, {fontSize: 20}]}>
                    About Us
              </Text></TouchableOpacity>

              <TouchableOpacity style={[styleSizing.btns, styleTheme.menu]}
                onPress = {() => {setMenuVisibility(false); logOut(); navigation.navigate('Login');}}>
                  <Text style = {[styleSizing.btntext, styleTheme.titles, {fontSize: 20}]}>
                    Log Out
              </Text></TouchableOpacity>

              </SafeAreaView>
              </TouchableOpacity>
            </Modal>

            <TouchableOpacity onPress={() => {setMenuVisibility(true);}}>
              <Image style={styleSizing.menubtn} source={require('../assets/menu.png')} />
            </TouchableOpacity>
        </View>
        
        )}