import React, { useContext } from 'react';
import UserContext from "../context/user/userContext"
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';

const Stack = createNativeStackNavigator();

const RoutesScreen = () => {
    const { user } = useContext(UserContext);

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {user ? (
                    <Stack.Screen name='Home' component={HomeScreen} />
                ): (
                    <Stack.Screen name='Login' component={HomeScreen} />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
}
 
export default RoutesScreen;