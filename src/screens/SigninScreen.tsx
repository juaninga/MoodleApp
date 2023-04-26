import React from 'react'
import { View, Text } from 'react-native'
import { Icon } from 'react-native-elements'


const Signincreen = () => {
    return (  
        <View>
            <Text style={{ fontSize: 42 }}>Vamos desde el main</Text>
            
            <Icon
                name='g-translate'
                color='#00aced' />
        </View>
    );
}
 
export default Signincreen;