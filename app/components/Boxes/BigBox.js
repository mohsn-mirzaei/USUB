import { View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import globalStyles from "../../config/globalStyles";

const BixBox = () => {
  return (
    <View className="w-[336] h-[128] bg-yellow rounded-3xl flex-row-reverse items-center justify-center">
      <MaterialCommunityIcons
        name="chart-line"
        size={58}
        color={globalStyles.backgroundDark}
      />
      <View className="px-5">
        <Text
          style={{ fontFamily: "snsBld" }}
          className="text-3xl text-backgroundDark leading-[46px]"
        >
          مانده
        </Text>
        <View className="flex-row items-center">
          <Text
            style={{ fontFamily: "snsReg" }}
            className="text-sm text-backgroundDark mr-1"
          >
            تومان
          </Text>
          <Text
            style={{ fontFamily: "snsReg" }}
            className="text-xl text-backgroundDark"
          >
            ۳۰,۰۰۰,۰۰۰,۰۰۰
          </Text>
        </View>
      </View>
    </View>
  );
};

export default BixBox;
