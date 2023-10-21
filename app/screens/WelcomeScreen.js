import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import colors from "../components/config/colors";
import Button from "../components/Button";

function WelcomeScreen(props) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/USUB-Logo.png")}
      ></Image>
      <View style={styles.text}>
        <Text style={styles.textRegular}>خوش آمدید</Text>
        <Text style={styles.textBold}>یوساب</Text>
        <Text style={styles.textRegular}>یک نرم‌افزار حسابداری شخصی</Text>
        <Text style={styles.textRegular}>
          برای هرچه آسان کردن مدیریت مالی است
        </Text>
      </View>
      <Button title="ورود" onPress={() => console.log("Login Clicked")} />
      <Button title="ثبت نام" onPress={() => console.log("Register Clicked")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: "100%",
    backgroundColor: colors.primary,
    alignItems: "center",
  },
  logo: {
    width: 350,
    height: 350,
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
