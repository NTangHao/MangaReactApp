import React, {useEffect, useState} from 'react';

import {StyleSheet, Text, View} from 'react-native';
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "../firebase/firebase";
import {NavigationContainer} from "@react-navigation/native";
import Tabs from "./Tabs";
import AuthStack from "./AuthStack";
import MainStack from "./MainStack";
import {statusLogin} from "../screens/Register";
const Routes = () => {

  const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user!=null) {
                console.log('login thanh cong');
                setIsAuth(true);
            } else {
                console.log('is logging out');
                setIsAuth(false);

            }
        });
    }, [isAuth])


    return (
        <NavigationContainer>
            {isAuth ? <MainStack /> : <AuthStack/> }
        </NavigationContainer>
    );
};

export default Routes;
const styles = StyleSheet.create({})
