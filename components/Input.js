import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import WatherScreen from "../screens/WeatherScreen";

const Input = props => {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const { buttonPressed } = props;

  useEffect(() => {});

  const cityInputHandler = city => {
    if (buttonPressed) {
      setCity(city);
      console.log(city);
    }
  };

  const countryInputHandler = country => {
    setCountry(country);
  };

  return (
    <View style={styles.gencontainer}>
      <View style={styles.inputConteiner}>
        <TextInput
          style={styles.input}
          placeholder="City"
          onChangeText={cityInputHandler}
        />
      </View>
      <View style={styles.inputConteiner}>
        <TextInput
          style={styles.input}
          placeholder="Country Code"
          onChangeText={() => {}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gencontainer: {
    flexDirection: "row",
    paddingHorizontal: 15,
    width: "100%",
    justifyContent: "space-between",
    marginTop: 15
  },
  inputConteiner: {
    width: "50%",
    height: 60,
    borderColor: "black",
    //borderWidth: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    fontSize: 20,
    color: "white"
  }
});
export default Input;
