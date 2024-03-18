import { view, Text } from "react-native";
import React from "react";
import styles from "./welcome.style";

const Welcome = () => {
  return (
    <view style={styles.container}>
      <Text style={styles.welcomeTxt}>Find the most</Text>
    </view>
  );
};
