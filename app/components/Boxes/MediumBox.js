import { Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import globalStyles from "../../config/globalStyles";

const MediumBox = ({ bg, title, iconName, amount }) => {
  return (
    <View
      className={`bg-${bg} flex-row-reverse w-full justify-between p-4 items-center rounded-2xl right-[-3] m-1`}
    >
      <View className="flex-row-reverse items-center gap-1">
        <MaterialCommunityIcons
          name={iconName}
          color={globalStyles.backgroundDark}
          size={25}
        />
        <Text
          style={{ fontFamily: "snsBld" }}
          className="text-backgroundDark text-base"
        >
          {title}
        </Text>
      </View>
      <View className="flex-row-reverse items-center gap-1">
        <Text
          style={{ fontFamily: "snsReg" }}
          className="text-backgroundDark text-base"
        >
          {amount}
        </Text>
        <Text
          style={{ fontFamily: "snsReg" }}
          className="text-backgroundDark text-xs"
        >
          تومان
        </Text>
      </View>
    </View>
  );
};

export default MediumBox;
