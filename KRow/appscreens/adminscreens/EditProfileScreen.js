import React from 'react';
import { Text, View, TouchableOpacity, } from 'react-native';

function EditProfileScreen({route, navigation}) {

    const { styleSizing, styleTheme } = route.params;

    return(
        <View style={[styleSizing.container, styleTheme.container]}>
            <Text>alv</Text>
        </View>
    );
}

export default EditProfileScreen;