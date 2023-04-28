import React, { useEffect, useReducer, useRef } from 'react'
import {
  Pressable,
  StatusBar,
  StyleSheet,
  View,
  Text,
  LayoutChangeEvent,
} from 'react-native'
// Navigation
import { NavigationContainer } from '@react-navigation/native'
import { BottomTabBarProps, BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
// Svg
import Svg, { Path } from 'react-native-svg'
// Reanimated
import Animated, { useAnimatedStyle, withTiming, useDerivedValue } from 'react-native-reanimated'
// Lottie
import Lottie from 'lottie-react-native'

// ------------------------------------------------------------------

const Tab = createBottomTabNavigator()

const AnimatedSvg = Animated.createAnimatedComponent(Svg)

// ------------------------------------------------------------------

const DashBooardScreen = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />

    </>
  )
}


export default DashBooardScreen;
