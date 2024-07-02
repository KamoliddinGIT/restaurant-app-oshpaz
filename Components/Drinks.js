import React, { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Drinks() {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a")
      .then((res) => res.json())
      .then((data) => setDrinks(data.drinks));
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      {drinks.map((item) => {
        return (
          <View key={item.idDrink} style={styles.card}>
            <Image
              source={{ uri: `${item.strDrinkThumb}` }}
              style={{ width: 260, height: 250, borderRadius: 15 }}
            />
            <View style={styles.drink_options}>
              <Text style={styles.drink_text}>{item.strCategory}</Text>
              <Text style={styles.drink_text}>
                {item.idDrink.slice(0, 2)},000 so`m
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
    padding: 10,
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
