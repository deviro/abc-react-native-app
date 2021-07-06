import React from 'react';
import { View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import HomeScreen from "../../screens/Home/HomeScreen";
import Settings from "../../screens/Settings/Settings";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

const Navigation = () => {
  const Tab = createBottomTabNavigator();

  return (
    <View style={{flexGrow: 47, alignItems: 'stretch'}}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={
            {

            }
          }
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
          />
          <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
</View>
);
};

export default Navigation;
