import { Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import globalStyles from "../../config/globalStyles";

const BackRightHeader = ({ title, onPress }) => {
  return (
    <TouchableOpacity className="flex-row gap-2 items-center" onPress={onPress}>
      <MaterialCommunityIcons
        name="arrow-right"
        size={30}
        color={globalStyles.secondary}
      />
      <Text style={{ fontFamily: "snsReg" }} className="text-lg text-secondary">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default BackRightHeader;
