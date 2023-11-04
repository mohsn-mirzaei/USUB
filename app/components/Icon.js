import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import globalStyles from "../config/globalStyles";

const Icon = ({
  name,
  size = 40,
  backgroundColor = globalStyles.black,
  iconColor = globalStyles.secondary,
}) => {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons name={name} size={size / 2} color={iconColor} />
    </View>
  );
};

export default Icon;
