import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
  ImageBackground,
  TextInput,
  Alert
} from "react-native";
import Input from "./components/Input";
import ButtonCust from "./components/ButtonCust";
import ShowWeather from "./screens/ShowWeather";
import axios from "axios";

export default function App() {
  const [clicked, setClicked] = useState(false);
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [cityname, setCityName] = useState("");
  const [tempmax, setTempmax] = useState("");
  const [tempmin, setTempmin] = useState("");
  const [temp, setTemp] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    setCity("");
    setCityName("");
    setTemp("");
    setTempmax("");
    setTempmin("");
    setStatus("");
  }, [buttonPressed]);

  const buttonPressed = () => {
    if (city === "") {
      Alert.alert("Insira o nome de uma cidade!!!");
      return;
    }
    getWeather(city, country);
  };

  let getWeather = async (city, country) => {
    let res = await axios.get(
      "http://api.openweathermap.org/data/2.5/weather",
      {
        params: {
          appid: "b40e673f474c40cc06a8992efdb1e988",
          units: "metric",
          lang: "pt",
          q: city + "," + country
        }
      }
    );

    const response = await res.data;

    setCityName(response.name + ", " + response.sys.country);

    setTemp(response.main.temp + "" + "°");
    setTempmax(response.main.temp_max + "" + "°");
    setTempmin(response.main.temp_min + "" + "°");
    setStatus(response.weather[0].description);
  };

  const cityInputHandler = city => {
    setCity(city);
  };

  const countryInputHandler = country => {
    setCountry(country);
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <ImageBackground
        source={require("./images/wallpaperflare.com_wallpaper.jpg")}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={styles.container}>
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
                onChangeText={countryInputHandler}
              />
            </View>
          </View>
          <ButtonCust color="purple" text="Search" onPress={buttonPressed} />
        </View>
        <ShowWeather
          city={cityname}
          temp={temp}
          tempmax={tempmax}
          tempmin={tempmin}
          status={status}
        />
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: "center"
  },
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
