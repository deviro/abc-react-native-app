import React from 'react';
import { View, Text } from 'react-native';
import styles from "./Header.style";

const Header = () => {
  return (
    <View style={styles.NavBar}>
      <Text style={styles.AppName}>
        ABC App
      </Text>
    </View>
  );
};

export default Header;
