import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = () => {
    return (
        <View>
            <Text style={{ fontSize: 42 }}>Vamos desde el main seguro</Text>
          <Text style={{ fontSize: 42 }}>Sin Miedo al Exito</Text>
            <Icon name="book" size={50} color="black" />
        </View>
    );
}

export default HomeScreen;
