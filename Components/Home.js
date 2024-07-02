import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>MENU</Text>
      <View style={styles.menu}>
        <Button
          title="Drinks"
          style={styles.menu_text}
          onPress={() => navigation.navigate("Drinks")}
        />
        <Button
          title="Meals"
          style={styles.menu_text}
          onPress={() => navigation.navigate("Meals")}
        />
        <Button
          title="Salads"
          style={styles.menu_text}
          onPress={() => navigation.navigate("Salads")}
        />
        <Button
          title="Orders"
          style={styles.menu_text}
          onPress={() => navigation.navigate("Orders")}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
  },
  menu: {
    width: "80%",
    marginTop: 100,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-around",
  },
  menu_text: {
    fontSize: 20,
    fontWeight: "bold",
    borderRadius: 20,
  },
});
