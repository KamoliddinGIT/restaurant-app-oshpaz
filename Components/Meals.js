import React, { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Meals() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((data) => setMeals(data.categories));
  }, []);

  return (
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
              <Text style={styles.drink_text}>
                {item.idCategory.slice(0, 2)},000 so`m
              </Text>
            </View>
          </View>
        );
      })}
    </ScrollView>
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
});
