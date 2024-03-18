import { view, Text } from "react-native";
import React from "react";
import styles from "./welcome.style";

const Welcome = () => {
  return (
    <view style={styles.container}>
      <Text style={styles.welcomeTxt(COLORS.black)}>Find the most</Text>
      <Text style={styles.welcomeTxt}> Luxurious Furniture </Text>
    </view>
  );
};
