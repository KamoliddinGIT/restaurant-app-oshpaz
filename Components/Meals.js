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
import useHttp from "../hooks/useHttp";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Meals() {
  const [meals, setMeals] = useState([]);
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(true);
  const { request } = useHttp();

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((data) => {
        setMeals(data.categories);
        setIsLoading(false);
      });
  }, []);

  const addMeal = (idCategory) => {
    const newMeals = meals.filter((item) => item.idCategory === idCategory);
    const newMealList = {
      waiter: "Kamoliddin",
      tableNum: 311,
      meals: [
        {
          mealName: newMeals[0].strCategory,
          mealCount: 3,
          mealStatus: "accept",
        },
      ],
    };
    request(
      "https://restoranapp-production.up.railway.app/meals",
      "POST",
      JSON.stringify(newMealList)
    ).then((res) => console.log("Successfully added"));
  };
  return isLoading ? (
    <Loader />
  ) : (
    <View>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {meals.map((item) => {
          return (
            <View key={item.idCategory} style={styles.card}>
              <Image
                source={{ uri: `${item.strCategoryThumb}` }}
                style={{ width: 300, height: 200, borderRadius: 15 }}
              />
              <View style={styles.drink_options}>
                <Text style={styles.drink_text}>{item.strCategory}</Text>
                <Icon
                  name="plus"
                  size={30}
                  color="grey"
                  onPress={() => addMeal(item.idCategory)}
                />
                <Text style={styles.drink_text}>
                  {item.idCategory.slice(0, 2)},000 so`m
                </Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
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
    padding: 15,
    borderRadius: 15,
    marginBottom: 20,
  },
  drink_options: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
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
