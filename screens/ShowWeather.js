import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ShowWeather = props => {
  const { city, temp, tempmax, tempmin, status } = props;

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>{city} </Text>
      </View>
      <View>
        <Text style={styles.text}>{temp}</Text>
      </View>
      <View style={styles.max_min}>
        <Text style={styles.text}>{tempmax}</Text>
        <Text style={styles.text}>{tempmin}</Text>
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
    borderWidth: 3,
    borderRadius: 10
  },

  max_min: {
    marginVertical: 20,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly"
  },

  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold"
  },
  status: {
    justifyContent: "flex-start"
  }
});
export default ShowWeather;
