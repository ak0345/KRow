import React from 'react';
import { Text, View} from 'react-native';

/** This page --> Availability
 * Located on --> Main Menu
 * 
 * Crews availability will be seen here
 * Captains will share time slots they are planning to have an outing
 * Rowers can only fill them, can NOT edit more
 * 
 * IDEA WE CAN TRY
 * We can make it private (can be seen by committee or captains only) 
*/

function Availability ({route}) {

    const { styleSizing, styleTheme } = route.params;

  return (
    <View style={[styleSizing.container, styleTheme.container]}>
      <Text style={[styleSizing.title, styleTheme.title]}>
        Reach Developers
      </Text>
    </View>
  );
}

export default Availability;