import React from 'react';
import { Text, View} from 'react-native';

/** This page --> About Us
 * Located on --> Menu Bar
 * 
 * This class will include information about history of KCLBC 
 * Will be a reading only page, may include few pictures and icons
 * 
*/

function AboutUs({route}) {

    const { styleSizing, styleTheme } = route.params;

  return (
    <View style={[styleSizing.container, styleTheme.container]}>
      <Text style={[styleSizing.title, styleTheme.title]}>
        About Us
      </Text>
    </View>
  );
}

export default AboutUs;
