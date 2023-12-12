import { TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import globalStyles from "../config/globalStyles";

const AddButton = ({ onPress }) => {
  return (
    <TouchableOpacity
      className="w-14 h-14 bg-primary opacity-75 rounded-full justify-center items-center absolute bottom-3 right-3"
      onPress={onPress}
    >
      <MaterialCommunityIcons
        name="plus"
        color={globalStyles.secondary}
        size={35}
      />
    </TouchableOpacity>
  );
};

export default AddButton;
