import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import Splash from './src/screens/Splash';

const Stack = createNativeStackNavigator();

export default function App(): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);

  return isLoading ? <Splash setIsLoading={setIsLoading} /> : <HomeScreen />;
}
