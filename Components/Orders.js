import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Button,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Orders() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.menu} id="menu">
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("Drinks")}
        >
          <Text style={styles.menu_text}>Drinks</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("Meals")}
        >
          <Text style={styles.menu_text}>Meals</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("Salads")}
        >
          <Text style={styles.menu_text}>Salads</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("Orders")}
        >
          <Text style={styles.menu_text}>Orders</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  menu: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    ...Platform.select({
      ios: {
        backgroundColor: "#333",
      },
      android: {
        backgroundColor: "#333",
      },
    }),
    paddingVertical: 30,
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: 50,
    zIndex: 10,
  },
  menu_text: {
    fontSize: 20,
    fontWeight: "500",
    color: "white",
    marginBottom: 10,
  },
});
