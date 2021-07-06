import React from 'react';
import { View } from "react-native";
import CardList from "../../component/CardList/CardList";
import styles from "./HomeScreen.style";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <CardList/>
    </View>
  );
};

export default HomeScreen;
