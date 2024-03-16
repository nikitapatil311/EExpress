import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import {Ionicons} from "@expo/vector-icons";
import {COLORS} from "../constants/index"

const Tab = createBottomTabNavigator();

const screenOptions ={
    tabBarShowLabel: false
    tabBarHideOnKeyboard : true,
    headerShown: false,
    tabBarStyle:{
        position:"absolute",
        bottom: 0,
        right: 0,
        left:0,
        elevation: 0,
        height: 70
    }
}
const BottomTabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name="Home" component={Home} options={{tabBarIcon: ({focused})=>{
            return<Ionicons name={focused ? "home " : "home-outline"} size={24} color={focused ? COLORS}/>
        }}}
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Home} />
      <Tab.Screen name="Profile" component={Home} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
