import { View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import globalStyles from "../../config/globalStyles";

const SmallBox = ({ title }) => {
  backgroundColor =
    title === "دریافت‌ها" ? globalStyles.green : globalStyles.danger;

  return (
    <View
      style={{ backgroundColor }}
      className="w-[156] h-[140] rounded-3xl items-center justify-around mx-2 mb-4"
    >
      <MaterialCommunityIcons
        name={title === "دریافت‌ها" ? "call-made" : "call-received"}
        size={48}
        color={globalStyles.backgroundDark}
      />
      <Text
        style={{ fontFamily: "snsBld" }}
        className="text-3xl text-backgroundDark leading-[46px]"
      >
        {title}
      </Text>
      <Text
        style={{ fontFamily: "snsReg" }}
        className="text-xl text-backgroundDark"
      >
        ۳۰,۰۰۰,۰۰۰,۰۰۰
      </Text>
      <Text
        style={{ fontFamily: "snsReg" }}
        className="text-sm text-backgroundDark"
      >
        تومان
      </Text>
    </View>
  );
};

export default SmallBox;
