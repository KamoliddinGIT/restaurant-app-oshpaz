import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Loader from "./Loader";
import useHttp from "../hooks/useHttp";

export default function Salads() {
  const [drinks, setDrinks] = useState([]);
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(true);
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
        <View style={styles.cards}>
          {drinks.map((item) => {
            return (
              <View key={item.idDrink} style={styles.card}>
                <View style={styles.image_text}>
                  <Image
                    source={{ uri: `${item.strDrinkThumb}` }}
                    style={{ width: 154, height: 150, borderRadius: 15 }}
                  />
                  <Text style={styles.drink_text}>{item.strDrink}</Text>
                </View>
                <View style={styles.drink_options}>
                  <View style={styles.plus}>
                    <Text
                      style={styles.icon}
                      onPress={() => addDrink(item.idDrink)}
                    >
                      +
                    </Text>
                  </View>
                  <Text style={styles.drink_text}>
                    {item.idDrink.slice(0, 2)},000 so`m
                  </Text>
                </View>
              </View>
            );
          })}
        </View>
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
  },
  image_text: {
    width: "100%",
  },
  card: {
    width: "45%",
    backgroundColor: "white",
    borderRadius: 15,
    marginBottom: 20,
  },
  drink_options: {
    flexDirection: "row",
    justifyContent: "space",
    gap: 15,
    alignItems: "center",
  },
  drink_text: {
    fontSize: 14,
    textAlign: "center",
    marginTop: 5,
    color: "green",
    fontWeight: "600",
  },
  menu: {
    flexDirection: "row",
    justifyContent: "space-around",
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
    padding: 20,
    zIndex: 10,
    height: 100,
  },
  menu_text: {
    fontSize: 20,
    fontWeight: "500",
    color: "white",
  },
  btn: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    height: 100,
  },
  cards: {
    width: "100%",
    height: "100%",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    flexDirection: "row",
    paddingBottom: 100,
  },
  plus: {
    justifyContent: "center",
    width: 65,
    height: 30,
    backgroundColor: "green",
    alignContent: "center",
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 15,
  },
  image_text: {
    padding: 10,
  },
  icon: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
    fontWeight: "500",
  },
});
