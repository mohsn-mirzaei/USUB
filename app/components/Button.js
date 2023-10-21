import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../components/config/colors";

function Button({
  title,
  onPress,
  color = "secondary",
  textColor = "blackLight",
  style,
}) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }, style]}
      onPress={onPress}
    >
      <Text style={[styles.text, { color: colors[textColor] }]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.secondary,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginVertical: 10,
  },
  text: {
    fontFamily: "iran-sans-bold",
    fontSize: 18,
    color: colors.blackLight,
  },
});

export default Button;
