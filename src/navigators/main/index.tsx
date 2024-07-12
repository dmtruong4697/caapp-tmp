import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { createContext, useState } from 'react'
import LoginScreen from "../../screens/auth/login";
import SignUpScreen from "../../screens/auth/sign-up";
import ValidateEmailScreen from "../../screens/auth/validate-email";
import HomeNavigator from "../home";

export type RootStackParamList = {
    Splash: {};

    Login: {};

    SignUp: {};

    ValidateEmail: {};

    Home: {};

    Chat: {};

    ChatList: {};

    FriendList: {};

    FriendRequest: {};

    Setting: {};

};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RangeContext = createContext<any>(null);

const MainNavigator = () => {

  return (
    <Stack.Navigator initialRouteName="Home">
        {/* <Stack.Screen 
            name="Splash" 
            component={SplashScreen}
            options={{
                headerShown: false,
            }} 
        /> */}

        <Stack.Screen 
            name="Login" 
            component={LoginScreen}
            options={{
                headerShown: false,
            }} 
        />

        <Stack.Screen 
            name="SignUp" 
            component={SignUpScreen}
            options={{
                headerShown: false,
            }} 
        />

        <Stack.Screen 
            name="ValidateEmail" 
            component={ValidateEmailScreen}
            options={{
                headerShown: false,
            }} 
        />

        <Stack.Screen
            name="Home"
            component={HomeNavigator}
            options={{
                headerShown: false,
            }}
        />

    </Stack.Navigator>
  )
}

export default MainNavigator