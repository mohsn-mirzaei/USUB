import { Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import globalStyles from "../../config/globalStyles";
import MediumBox from "../boxes/MediumBox";

const ContactHeader = ({
  title,
  subTitle,
  totalSum,
  remained,
  onPress,
  length,
}) => {
  return (
    <View className="w-full flex gap-2">
      <TouchableOpacity className="items-start px-2" onPress={onPress}>
        <MaterialCommunityIcons
          name="arrow-right"
          size={30}
          color={globalStyles.secondary}
        />
      </TouchableOpacity>
      <View className="flex gap-1 px-2 items-start">
        <Text
          style={{ fontFamily: "snsReg" }}
          className="text-lg text-secondary"
        >
          {title}
        </Text>

        {subTitle && (
          <Text
            style={{ fontFamily: "snsReg" }}
            className="text-xs text-opacity"
          >
            {subTitle}
          </Text>
        )}
      </View>

      {length && (
        <View className="w-full px-2">
          <MediumBox
            bg="yellow"
            title="مجموعه کل:"
            iconName="chart-line"
            amount={totalSum}
          />
          <MediumBox
            bg={parseInt(remained) >= 0 ? "green" : "danger"}
            title="مانده:"
            iconName="chart-line"
            amount={remained}
          />
        </View>
      )}
    </View>
  );
};

export default ContactHeader;
