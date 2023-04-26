import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = () => {
    return (  
        <View>
            <Text style={{ fontSize: 42 }}>Vamos desde el main seguro</Text>
            <Icon name="home" size={30} color="red" />
        </View>
    );
}
 
export default HomeScreen;