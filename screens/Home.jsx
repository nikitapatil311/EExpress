import { Stylesheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaView>
      <view style={styles.appBarWrapper}></view>
    </SafeAreaView>
  );
};

export default Home;

const styles = Stylesheet.create({});
