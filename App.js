import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Drinks from "./Components/Drinks";
import Home from "./Components/Home";
import Meals from "./Components/Meals";
import { StyleSheet } from "react-native";
import HomeScreen from "./Components/Home";
import Salads from "./Components/Salads";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Drinks" component={Drinks} />
        <Stack.Screen name="Meals" component={Meals} />
        <Stack.Screen name="Salads" component={Salads} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

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
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-around",
  },
  menu_text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
