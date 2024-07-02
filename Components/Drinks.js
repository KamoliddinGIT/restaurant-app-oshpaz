// import { Image } from "expo-image";
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
          <View key={item.idDrink}>
            <Image
              source={{ uri: `${item.strDrinkThumb}` }}
              style={{ width: 400, height: 400 }}
            />
            <Text>{item.strCategory}</Text>
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
    padding: 50,
    // paddingBottom: 50,
    backgroundColor: "#bbb",
  },
});
