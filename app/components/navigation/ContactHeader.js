import { Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import globalStyles from "../../config/globalStyles";
import MediumBox from "../boxes/MediumBox";

const ContactHeader = ({
  personName,
  personType,
  totalSum,
  remained,
  onPress,
}) => {
  return (
    <View className="gap-2 w-full">
      <TouchableOpacity className="flex-col items-end" onPress={onPress}>
        <MaterialCommunityIcons
          name="arrow-right"
          size={30}
          color={globalStyles.secondary}
        />
        <Text
          style={{ fontFamily: "snsReg" }}
          className="text-lg text-secondary"
        >
          {personName}
        </Text>
      </TouchableOpacity>

      <Text
        style={{ fontFamily: "snsReg" }}
        className="text-xs text-right text-opacity"
      >
        {personType}
      </Text>

      <View className="w-full px-2">
        <MediumBox
          bg="yellow"
          title="مجموعه کل:"
          iconName="chart-line"
          amount={totalSum}
        />
        <MediumBox
          bg="green"
          title="مانده:"
          iconName="chart-line"
          amount={remained}
        />
      </View>
    </View>
  );
};

export default ContactHeader;
