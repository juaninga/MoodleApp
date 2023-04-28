import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './src/screens/Splash';
import UserState from './src/context/user/userState';
import RoutesScreen from './src/screens/RoutesScreen';

const Stack = createNativeStackNavigator();

export default function App(): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);

  return isLoading ? 
    <Splash setIsLoading={setIsLoading} /> : 
    
    <UserState>
      <RoutesScreen />
    </UserState>
  ;
}
