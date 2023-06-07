import React from 'react';
import { Text, View} from 'react-native';

/** This page --> Reach Developers
 * Located on --> Menu Bar
 * 
 * We will include a text tab just like on forms document..
 * .. That way users can inform us about problems they are experiencing
 * 
 * We will also write a general explanation about who are we and what are we doing here
 *
*/

function ReachDevelopers({route}) {

    const { styleSizing, styleTheme } = route.params;

  return (
    <View style={[styleSizing.container, styleTheme.container]}>
      <Text style={[styleSizing.title, styleTheme.title]}>
        Reach Developers
      </Text>
    </View>
  );
}

export default ReachDevelopers;
