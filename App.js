import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Drinks from "./Components/Drinks";
import Meals from "./Components/Meals";
import HomeScreen from "./Components/Home";
import Salads from "./Components/Salads";
import Orders from "./Components/Orders";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Drinks" component={Drinks} />
        <Stack.Screen name="Meals" component={Meals} />
        <Stack.Screen name="Salads" component={Salads} />
        <Stack.Screen name="Orders" component={Orders} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
