import React from "react";
import { View } from 'react-native';
import Header from "./src/component/Header/Header";
import HomeScreen from "./src/screens/Home/HomeScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator }  from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Settings from "./src/screens/Settings/Settings";
import Navigation from "./src/component/Navigation/Navigation";

const App = () =>  {

  // const Stack = createStackNavigator();

  return (
    <View style={styles.mainContainer}>
      <Header style={{flex: 1}} />
      <Navigation style={{flex: 2}}/>
    </View>
  );
};

const styles = {
  mainContainer: {
    height: '100%',
    backgroundColor: '#fca805',
    flexDirection: 'column'
  }
}

export default App;
