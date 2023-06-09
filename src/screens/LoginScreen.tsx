import React, { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  Pressable,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Animated, { FadeIn,
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  withTiming,
  withDelay,
  runOnJS,
  withSequence,
  withSpring
} from "react-native-reanimated";

import styles from "../components/Login/styles";
import Svg, { Image, Ellipse, ClipPath } from "react-native-svg";
import UserContext from "../context/user/userContext";
import { login } from "../services/moodle";
import { Colors } from "react-native/Libraries/NewAppScreen";


export default function LoginScreen() {
  const { height, width } = Dimensions.get("window");
  const imagePosition = useSharedValue(1);
  const formButtonScale = useSharedValue(1);
  const [isRegistering, setIsRegistering] = useState(false);

  const imageAnimatedStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(
      imagePosition.value,
      [0, 1],
      [-height / 2, 0]
    );
    return {
      transform: [
        { translateY: withTiming(interpolation, { duration: 1000 }) },
      ],
    };
  });

  const buttonsAnimatedStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(imagePosition.value, [0, 1], [250, 0]);
    return {
      opacity: withTiming(imagePosition.value, { duration: 500 }),
      transform: [
        { translateY: withTiming(interpolation, { duration: 1000 }) },
      ],
    };
  });

  const closeButtonContainerStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(imagePosition.value, [0, 1], [180, 360]);
    return {
      opacity: withTiming(imagePosition.value === 1 ? 0 : 1, { duration: 800 }),
      transform: [
        { rotate: withTiming(interpolation + "deg", { duration: 1000 }) },
      ],
    };
  });

  const formAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity:
        imagePosition.value === 0
          ? withDelay(400, withTiming(1, { duration: 800 }))
          : withTiming(0, { duration: 300 }),
    };
  });

  const formButtonAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: formButtonScale.value}]
    }
  })

  const loginHandler = () => {
    imagePosition.value = 0;
    if (isRegistering) {
      runOnJS(setIsRegistering)(false);
    }
  };


  // Login ************************************************

  const { setUser, setSiteInfo } = useContext(UserContext);

  const loginApp = async () => {
    formButtonScale.value = withSequence(withSpring(1.5), withSpring(1));
    try{
      const username = "j.inga";
      const password = "ji*Suda2@2@";
      const response = await login(username, password);
      const responseData = response.data;
      console.log(responseData);
      if (responseData.errorcode) {
        // manejar error de autenticación
      } else {
        setUser({
          tokenUser: responseData.token,
        })
      }

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Animated.View style={styles.container}>
      <Animated.View style={[StyleSheet.absoluteFill, imageAnimatedStyle]}>
        <Svg height={height + 100} width={width}>
          <ClipPath id="clipPathId">
            <Ellipse cx={width / 2} rx={height} ry={height + 100} />
          </ClipPath>
          <Image
            href={require("../assets/login-background.jpg")}
            width={width + 100}
            height={height + 100}
            preserveAspectRatio="xMidYMid slice"
            clipPath="url(#clipPathId)"
          />
        </Svg>
        <Animated.View
          style={[styles.closeButtonContainer, closeButtonContainerStyle]}
        >
          <Text onPress={() => (imagePosition.value = 1)}>X</Text>
        </Animated.View>
      </Animated.View>
      <View style={styles.bottomContainer}>
        <Animated.View style={buttonsAnimatedStyle}>
          <Pressable style={styles.button} onPress={loginHandler}>
            <Text style={styles.buttonText}>INGRESAR</Text>
          </Pressable>
        </Animated.View>

        <Animated.View style={[styles.formInputContainer, formAnimatedStyle]}>
          <TextInput
            placeholder="Email"
            placeholderTextColor="black"
            style={styles.textInput}
          />
          {isRegistering && (
            <TextInput
              placeholder="Full Name"
              placeholderTextColor="black"
              style={styles.textInput}
            />
          )}
          <TextInput
            placeholder="Password"
            placeholderTextColor="black"
            style={styles.textInput}
          />
          <Animated.View style={[styles.formButton, formButtonAnimatedStyle]}>
            <Pressable onPress={ loginApp }>
              <Text style={styles.buttonText}>
                {isRegistering ? "REGISTER" : "LOG IN"}
              </Text>
            </Pressable>
          </Animated.View>
          <View>
            <Text
              style={{
                fontFamily: 'Roboto-Medium',
                fontSize: 15,
                color: Colors.primary,
                alignSelf: 'center',
              }}>
              Olvido su contraseña ?
            </Text>
          </View>

        </Animated.View>
      </View>
    </Animated.View>
  );
}




