import React from 'react';
import { Image, TouchableOpacity, View, Modal, Text, SafeAreaView } from 'react-native';
        
        
export default function MenuDropDown({styleSizing, styleTheme}) {

  const [menuVisibility, setMenuVisibility] = React.useState(false);

        return (
        <SafeAreaView>
            <Modal
          animationType="slideInLeft"
          transparent={true}
          visible={menuVisibility}
          onRequestClose={() => {setModalVisible(!setMenuVisibility);}}
          >
              <SafeAreaView style={[styleSizing.menu, styleTheme.menu]}>
              <TouchableOpacity onPress={() => {setMenuVisibility(false);}} >
              <Image style={styleSizing.menubtn} source={require('../assets/cross.png')} />
            </TouchableOpacity>

              <TouchableOpacity style={[styleSizing.btns, styleTheme.menu]}
                onPress = {() => {}}>
                  <Text style = {[styleSizing.btntext, styleTheme.titles, {fontSize: 20}]}>
                    Forms
              </Text></TouchableOpacity>

              <TouchableOpacity style={[styleSizing.btns, styleTheme.menu]}
                onPress = {() => {navigation.navigate('Profile');}}>
                  <Text style = {[styleSizing.btntext, styleTheme.titles, {fontSize: 20}]}>
                    Crews & Data (Profile for now)
              </Text></TouchableOpacity>

              <TouchableOpacity style={[styleSizing.btns, styleTheme.menu]}
                onPress = {() => {}}>
                  <Text style = {[styleSizing.btntext, styleTheme.titles, {fontSize: 20}]}>
                    Socials And More
              </Text></TouchableOpacity>

              <TouchableOpacity style={[styleSizing.btns, styleTheme.menu]}
                onPress = {() => {}}>
                  <Text style = {[styleSizing.btntext, styleTheme.titles, {fontSize: 20}]}>
                    Reach Developers
              </Text></TouchableOpacity>

              <TouchableOpacity style={[styleSizing.btns, styleTheme.menu]}
                onPress = {() => {}}>
                  <Text style = {[styleSizing.btntext, styleTheme.titles, {fontSize: 20}]}>
                    About Us
              </Text></TouchableOpacity>

              </SafeAreaView>
            </Modal>

            <TouchableOpacity onPress={() => {setMenuVisibility(true);}}>
              <Image style={styleSizing.menubtn} source={require('../assets/menu.png')} />
            </TouchableOpacity>
        </SafeAreaView>)
        }