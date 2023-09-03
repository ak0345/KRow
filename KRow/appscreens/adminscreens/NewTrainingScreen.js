import React from 'react';
import { Text, View, TouchableOpacity, } from 'react-native';

function NewTrainingScreen({route, navigation}) {

    const { styleSizing, styleTheme } = route.params;

    return(
        <View style={[styleSizing.container, styleTheme.container]}>
            <Text>alvip</Text>
        </View>
    );
}

export default NewTrainingScreen;