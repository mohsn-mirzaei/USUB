import { TextInput, View } from "react-native";

import globalStyles from "../config/globalStyles";
import AddButton from "./AddButton";

const AddInput = ({ placeholder, value, onChangeText, onPress }) => {
  return (
    <View className="absolute bottom-0 w-full">
      <View className="flex-row items-center justify-end mx-2 my-1 py-1 absolute bottom-0">
        <TextInput
          style={{ fontFamily: "snsReg" }}
          className="bg-blackLight text-secondary opacity-75 text-sm flex-1 rounded-full py-[18] px-3 text-right"
          placeholderTextColor={globalStyles.opacity}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          textAlign="right"
        />
      </View>
      <AddButton onPress={onPress} />
    </View>
  );
};

export default AddInput;
