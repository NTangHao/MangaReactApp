import React from 'react';

import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import Tabs from "./Tabs";
import MangasDetail from "../screens/MangasDetail";
import ReadChapter from "../MangaComponent/ReadChapter";
import Mangas_Detail from "../screens/Mangas_Detail";
import EditProfile from "../screens/EditProfile";
import ChangePassword from "../screens/ChangePassword";
const Stack = createStackNavigator();
const MainStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name="Tabnavigator" component={Tabs} />
            <Stack.Screen name="MangasDetail" component={Mangas_Detail}  />
            <Stack.Screen name="reading_chapter" component={ReadChapter} options={({route})=> ({ title:route.params.list[route.params.current].chapter_name  })} />
            <Stack.Screen name="EditProfile" component={EditProfile}
                          options={{
                              headerShown: true,
                              headerTitle: 'Edit Profile',
                              headerBackTitleVisible: false,
                              headerTitleAlign: 'center',
                              headerStyle: {
                                  backgroundColor: '#fff',
                                  shadowColor: '#fff',
                                  elevation: 0,
                              },
                          }}
            />
            <Stack.Screen name="ChangePassword" component={ChangePassword}
                          options={{
                              headerShown: true,
                              headerTitle: 'Đổi mật khẩu',
                              headerBackTitleVisible: false,
                              headerTitleAlign: 'center',

                          }}
            />
        </Stack.Navigator>
    );
};

export default MainStack;
const styles = StyleSheet.create({})
