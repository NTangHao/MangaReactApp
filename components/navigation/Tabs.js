import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import Home from "../screens/Home";
import Bookmark from "../screens/Bookmark";
import Profile from "../screens/Profile";

import {COLORS} from "../../constants";
import Genres from "../screens/Genres/Genres";


const Tab = createMaterialBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            initialRouteName={'Home'}
            activeColor="white"
            barStyle={{ backgroundColor: COLORS.black }}

        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home-outline" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Genres"
                component={Genres}
                options={{
                    tabBarLabel: 'Genres',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="book-search" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Bookmark"
                component={Bookmark}
                options={{
                    tabBarLabel: 'Bookmark',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="bookmark" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="face-man" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default Tabs;
const styles = StyleSheet.create({})
