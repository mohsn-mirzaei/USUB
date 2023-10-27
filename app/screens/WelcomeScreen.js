import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../components/config/colors";
import Button from "../components/Button";

function WelcomeScreen(props) {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[colors.primary, "transparent"]}
        style={styles.background}
        locations={[0.7, 1]}
      >
        <Image style={styles.logo} source={require("../assets/icon.png")} />
        <View style={styles.text}>
          <Text style={styles.textRegular}>خوش آمدید!</Text>
          <Text style={styles.textBold}>یوساب</Text>
          <Text style={styles.textRegular}>یک نرم‌افزار حسابداری شخصی</Text>
          <Text style={styles.textRegular}>
            برای هرچه آسان کردن مدیریت مالی است
          </Text>
        </View>
        <Button
          title="ورود"
          color="primary"
          textColor="secondary"
          onPress={() => console.log("Login Clicked")}
        />
        <Button
          title="ثبت نام"
          onPress={() => console.log("Register Clicked")}
        />
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.black,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 500,
    alignItems: "center",
    padding: 20,
  },
  logo: {
    width: 350,
    height: 350,
    top: -20,
  },
  text: {
    top: -40,
  },
  textRegular: {
    fontFamily: "iran-sans-regular",
    fontSize: 18,
    color: colors.secondary,
  },
  textBold: {
    fontFamily: "iran-sans-bold",
    fontSize: 28,
    color: colors.secondary,
  },
});

export default WelcomeScreen;
