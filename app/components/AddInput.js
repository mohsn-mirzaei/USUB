import { TextInput, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import globalStyles from "../config/globalStyles";

const AddInput = ({ placeholder, value, onChangeText, onPress }) => {
  return (
    <View className="flex-row items-center justify-end mx-2 my-1 py-1">
      <TouchableOpacity className="bg-primary rounded-lg p-2" onPress={onPress}>
        <MaterialCommunityIcons
          name="plus"
          size={30}
          color={globalStyles.secondary}
        />
      </TouchableOpacity>
      <TextInput
        style={{ fontFamily: "snsReg" }}
        className="bg-backgroundLight text-secondary text-sm flex-1 rounded-lg py-3 px-3 text-right ml-2"
        placeholderTextColor={globalStyles.opacity}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        textAlign="right"
      />
    </View>
  );
};

export default AddInput;
