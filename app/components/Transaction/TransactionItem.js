import { View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import getIconAndColor from "./getIconAndColor";
import globalStyles from "../../config/globalStyles";

const TransactionItem = ({ item }) => {
  const { icon, color } = getIconAndColor(item.type);

  return (
    <View className="flex-row-reverse items-center mb-3 px-4 py-3 rounded-3xl bg-backgroundLight">
      <View
        style={{ backgroundColor: color }}
        className="w-12 h-12 rounded-2xl justify-center items-center"
      >
        <MaterialCommunityIcons
          name={icon}
          size={35}
          color={globalStyles.backgroundDark}
        />
      </View>
      <View className="flex-1 mr-3 items-end">
        <Text
          style={{ fontFamily: "snsBld" }}
          className="text-lg text-secondary"
        >
          {item.title}
        </Text>
        <Text
          style={{ fontFamily: "snsReg" }}
          className="text-secondary text-xs"
        >
          {item.date}
        </Text>
      </View>
      <Text style={{ fontFamily: "snsReg" }} className="text-secondary text-lg">
        {item.amount.toLocaleString()}
      </Text>
      <Text
        style={{ fontFamily: "snsReg" }}
        className="text-xs text-secondary mr-1"
      >
        تومان
      </Text>
    </View>
  );
};

export default TransactionItem;
