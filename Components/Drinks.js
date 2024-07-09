import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  Button,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Loader from "./Loader";
import Icon from "react-native-vector-icons/FontAwesome";
import useHttp from "../hooks/useHttp";

export default function Drinks() {
  const [drinks, setDrinks] = useState([]);
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(true);
  const [orders, setOrders] = useState([]);
  const { request } = useHttp();

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a")
      .then((res) => res.json())
      .then((data) => {
        setDrinks(data.drinks);
        setIsLoading(false);
      });
  }, []);

  const addDrink = (idDrink) => {
    const newDrinks = drinks.filter((item) => item.idDrink === idDrink);
    const newDrinkList = {
      waiter: "asilbek",
      tableNum: 13,
      meals: [
        {
          mealName: newDrinks[0].strDrink,
          mealCount: 3,
          mealStatus: "qabul qilindi",
        },
      ],
    };
    request(
      "https://restoranapp-production.up.railway.app/meals",
      "POST",
      JSON.stringify(newDrinkList)
    ).then((res) => console.log("Successfully added"));
  };

  return isLoading ? (
    <Loader />
  ) : (
    <View>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {drinks.map((item) => {
          return (
            <View key={item.idDrink} style={styles.card}>
              <Image
                source={{ uri: `${item.strDrinkThumb}` }}
                style={{ width: 260, height: 250, borderRadius: 15 }}
              />
              <View style={styles.drink_options}>
                <Text style={styles.drink_text}>{item.strDrink}</Text>
                <Icon
                  name="plus"
                  size={30}
                  color="grey"
                  onPress={() => addDrink(item.idDrink)}
                />
                <Text style={styles.drink_text}>
                  {item.idDrink.slice(0, 2)},000 so`m
                </Text>
              </View>
            </View>
          );
        })}
      </ScrollView>

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
}

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    overflow: "scroll",
    backgroundColor: "#bbb",
    padding: 30,
  },
  card: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 15,
    marginBottom: 20,
  },
  drink_options: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  drink_text: {
    fontSize: 16,
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
