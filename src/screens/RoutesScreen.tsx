import React, { useContext } from 'react';
import UserContext from "../context/user/userContext"
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './LoginScreen';
import DashBooardScreen from './DashboardScreen';

const Stack = createNativeStackNavigator();

const RoutesScreen = () => {
    const { user } = useContext(UserContext);

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {user ? (
                    <Stack.Screen name='Dashboard' component={DashBooardScreen} />
                ): (
                    <Stack.Screen name='Login' component={LoginScreen} />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
}
 0.
export default RoutesScreen;