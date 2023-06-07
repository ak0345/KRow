import React from 'react';
import { Text, View} from 'react-native';

/** This page --> Profile Main
 * Located on --> Top right on every page
 * 
 * This page is first page when profile picture or icon pressed
 * Will be giving information about you
 * 
 * IDEA WE CAN TRY
 * We can make it private (can be seen by committee or captains only) 
*/

function ProfileMain ({route}) {

    const { styleSizing, styleTheme } = route.params;

  return (
    <View style={[styleSizing.container, styleTheme.container]}>
      <Text style={[styleSizing.title, styleTheme.title]}>
        Reach Developers
      </Text>
    </View>
  );
}

export default ProfileMain;