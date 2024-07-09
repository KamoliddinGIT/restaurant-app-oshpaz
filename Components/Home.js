import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.tables}>
        <View style={styles.table}>
          <Text style={styles.table_text}>Table 1</Text>
        </View>
        <View style={styles.table}>
          <Text style={styles.table_text}>Table 2</Text>
        </View>
        <View style={styles.table}>
          <Text style={styles.table_text}>Table 3</Text>
        </View>
        <View style={styles.table}>
          <Text style={styles.table_text}>Table 4</Text>
        </View>
        <View style={styles.table}>
          <Text style={styles.table_text}>Table 5</Text>
        </View>
        <View style={styles.table}>
          <Text style={styles.table_text}>Table 6</Text>
        </View>
      </View>

      <View style={styles.menu}>
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
  tables: {
    gap: 20,
    width: "100%",
    display: "flex",
    alignItems: "center",
    marginTop: 30,
    flexWrap: "wrap",
    marginLeft: 30,
  },
  table: {
    width: 170,
    height: 170,
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  table_text: {
    fontSize: 18,
  },
});
