import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ShowWeather = props => {
  const { city, temp, tempmax, tempmin, status } = props;

  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={[styles.text, styles.cityText]}>{city} </Text>
      </View>
      <View style={styles.temp}>
        <Text style={styles.textCurrTemp}>{temp}</Text>
      </View>
      <View style={styles.max_min}>
        <Text style={styles.tempMin_Max}>{tempmin}</Text>
        <Text style={styles.tempMin_Max}>{tempmax}</Text>
      </View>
      <View style={styles.status}>
        <Text style={styles.text}>{status}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    marginBottom: 200,
    padding: 10,
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 10,
    elevation: 3
  },

  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold"
  },
  city: {
    marginBottom: 60
  },
  temp: {
    marginBottom: 10
  },
  max_min: {
    marginBottom: 10,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly"
  },

  status: {},

  cityText: {
    fontStyle: "italic",
    fontFamily: "serif",
    fontSize: 35
  },
  textCurrTemp: {
    fontSize: 40,
    color: "white",
    fontFamily: "sans-serif",
    fontWeight: "bold"
  },

  tempMin_Max: {
    fontFamily: "sans-serif",
    fontWeight: "bold",
    color: "white",
    fontSize: 25
  }
});
export default ShowWeather;
