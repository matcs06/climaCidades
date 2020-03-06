import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const ButtonCust = props => {
  const content = (
    <View style={[styles.container, { backgroundColor: props.color }]}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );

  return <TouchableOpacity onPress={props.onPress}>{content}</TouchableOpacity>;
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    width: 100,
    borderRadius: 200,
    alignItems: "center"
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    color: "white"
  }
});
export default ButtonCust;
