import React from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LottieContainer,{
  LottieContainerProps,
 } from '../components/LottieContainer';
import Animated, { FadeIn } from 'react-native-reanimated';

export default function HomeScreen(): JSX.Element {
  return (
    <SafeAreaView style={{backgroundColor: '#F6AD76'}}>
      <Animated.ScrollView entering={FadeIn.duration(500)}>
        <Text style={styles.title}>Bienvenidos a UNAE</Text>
        {animations.map((animation, index) => (
          <LottieContainer
            key={index}
            {...animation} />
        ))}
      </Animated.ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'white',
  },
});

const animations: LottieContainerProps[] = [
  {
    name:'Sucess',
    source: 'https://lottiefiles.com/782-check-mark-success',
    author: 'Travis Gregory',
    path: require('../assets/splash.json'),
  },
];


