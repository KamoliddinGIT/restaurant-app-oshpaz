import React from "react";
import AnimatedLoader from "react-native-animated-loader";
import { StyleSheet } from "react-native";

export default function Loader() {
  return (
    <AnimatedLoader
      visible={true}
      overlayColor="#bbb"
      source={require("../assets/loader.json")}
      animationStyle={styles.lottie}
      speed={1}
    ></AnimatedLoader>
  );
}

const styles = StyleSheet.create({
  lottie: {
    width: 250,
    height: 250,
  },
});
