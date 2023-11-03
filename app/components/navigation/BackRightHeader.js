import { Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import globalStyles from "../../config/globalStyles";

const BackRightHeader = ({ title, onPress }) => {
  return (
    <TouchableOpacity className="flex-row gap-2 items-center" onPress={onPress}>
      <Text style={{ fontFamily: "snsReg" }} className="text-lg text-secondary">
        {title}
      </Text>
      <MaterialCommunityIcons
        name="arrow-right"
        size={30}
        color={globalStyles.secondary}
      />
    </TouchableOpacity>
  );
};

export default BackRightHeader;
