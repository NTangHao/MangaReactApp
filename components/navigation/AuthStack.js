import React from 'react';

import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import Login from "../screens/Login";
import Register from "../screens/Register";
import Tabs from "./Tabs";
import PasswordReset from "../screens/PasswordReset";

const Stack = createStackNavigator();
const AuthStack = () => {
    return (
        
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Register" component={Register}/>
            <Stack.Screen name="PasswordReset" component={PasswordReset}
                          options={{
                              headerShown: true,
                              headerTitle: 'Quên mật khẩu',
                              headerBackTitleVisible: false,
                              headerTitleAlign: 'center',

                          }}
            />
        </Stack.Navigator>
    );
};

export default AuthStack;
const styles = StyleSheet.create({})
