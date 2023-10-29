import React from "react";
import { Text, TouchableOpacity } from "react-native";

function Button({ title, onPress, bg, textColor = "blackLight" }) {
  return (
    <TouchableOpacity
      className={`w-full items-center p-4 my-2 rounded-2xl bg-${bg}`}
      onPress={onPress}
    >
      <Text
        style={{ fontFamily: "snsBld" }}
        className={`text-${textColor} text-lg`}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export default Button;
