import React from 'react';
import { Text, View} from 'react-native';

function HomeScreen({route}) {

    const { styleSizing, styleTheme } = route.params;

  return (
    <View style={[styleSizing.container, styleTheme.container]}>
      <Text style={[styleSizing.title, styleTheme.title]}>
        Home Screen
      </Text>
    </View>
  );
}

export default HomeScreen;

