import React from 'react';
import { Text, View, TouchableOpacity, } from 'react-native';

function ModifyTrainingScreen({route, navigation}) {

    const { styleSizing, styleTheme } = route.params;

    return(
        <View style={[styleSizing.container, styleTheme.container]}>
            <Text>alvo</Text>
        </View>
    );
}

export default ModifyTrainingScreen;