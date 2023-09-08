import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';

function ContactScreen({ route }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [selectedOption, setSelectedOption] = useState('1'); // Default selected option
  const { styleSizing, styleTheme } = route.params;

  const handleSubmit = () => {
    // SUBMISSION CODE
  };

  return (
    <View style={[styleSizing.container, { backgroundColor: '#153170' }]}>
      <View style={[styleSizing.container, { backgroundColor: '#153170' }]}>
      <View style={styleSizing.pickerContainer}>
        <Picker
          selectedValue={selectedOption}
          style={{ width: 300 }}
          onValueChange={(itemValue) => setSelectedOption(itemValue)}
        >
          <Picker.Item label="Welfare Form" value="1"  />
          <Picker.Item label="Cox Feedback" value="2" />
          <Picker.Item label="Contact Developers" value="3" />
          <Picker.Item label="Boat Damage" value="4" />
        </Picker>
      </View>

      <View style={styleSizing.formContainer}>
      <Text style={styleSizing.label}>Name:</Text>
      <TextInput
        style={[styleSizing.input, styleTheme.password]}
        // i know i shouldnt use password here lol sorry it will be changes
        value={name}
        onChangeText={setName}
        placeholder="Enter your name"
      />

      <Text style={styleSizing.label}>Email:</Text>
      <TextInput
        style={[styleSizing.input, styleTheme.username]} 

        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email"
        keyboardType="email-address"
      />

      <Text style={styleSizing.label}>Message:</Text>
      <TextInput
        style={[styleSizing.messageInput, styleTheme.password]}
        value={message}
        onChangeText={setMessage}
        placeholder="Enter your message"
        multiline
      />

      <TouchableOpacity style={[styleSizing.input, styleTheme.signinbtn]}
        onPress = {handleSubmit}>
          <Text style = {[styleSizing.btntext, styleTheme.titles, {color: 'black'}]}>
            Submit
      </Text></TouchableOpacity>
    </View>
    </View>
    </View>
  );
}

export default ContactScreen;
