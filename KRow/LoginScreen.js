import React from 'react';
import { Text, View, TextInput, Image, Button} from 'react-native';

function LoginScreen({route, navigation}) {

  const { styleSizing, styleTheme } = route.params;

  const [username, setUsernameState] = React.useState('');
  const [password, setPasswordState] = React.useState('');

  const onSignIn = () => username=='AK'? (console.log(username, password),navigation.navigate('Home')): console.log('incorrect username'); //username and password will be sent to server for login verification

  return (
    <View style={[styleSizing.container, styleTheme.container]}>
      <Image style={styleSizing.logo} source={require('./assets/KRowLogo.png')} />

      <Text style={[styleSizing.titles, styleTheme.titles]}>Username</Text>

      <TextInput
        style={[styleSizing.input, styleTheme.username]}
        onChangeText={(text) => setUsernameState(text)}
        value = {username}
        keyboardType="default"
      />

      <Text style={[styleSizing.titles, styleTheme.titles]}>Password</Text>

      <TextInput
        style={[styleSizing.input, styleTheme.password]}
        onChangeText={(text) => setPasswordState(text)}
        value = {password}
        keyboardType="default"
      />

      <Button color = '#D9EE01' title = 'Sign In' style = {[styleSizing.input, styleTheme.signinbtn]} onPress = {onSignIn} />
    </View>
  );
}

export default LoginScreen;

