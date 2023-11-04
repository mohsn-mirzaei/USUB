import { Image, TouchableHighlight, View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Swipeable from "react-native-gesture-handler/Swipeable";

import globalStyles from "../../config/globalStyles";

const ListItem = ({
  title,
  subTitle,
  image,
  IconComponent,
  onPress,
  renderRightActions,
  amount,
}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight onPress={onPress}>
        <View className="flex-row-reverse p-4 bg-backgroundLight items-center">
          {IconComponent}
          {image && <Image className="w-16 h-16 rounded-full" source={image} />}
          <View className="flex-1 mr-2 justify-center items-end gap-2">
            <Text
              style={{ fontFamily: "snsBld" }}
              className="text-secondary"
              numberOfLines={1}
            >
              {title}
            </Text>
            {subTitle && (
              <Text
                style={{ fontFamily: "snsReg" }}
                className="text-opacity text-xs"
                numberOfLines={2}
              >
                {subTitle}
              </Text>
            )}
          </View>
          {amount && (
            <Text
              style={{ fontFamily: "snsReg" }}
              className="text-secondary"
              numberOfLines={1}
            >
              {amount === "0" ? "صفر" : amount}
            </Text>
          )}
          <MaterialCommunityIcons
            name="chevron-left"
            size={25}
            color={globalStyles.secondary}
          />
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

export default ListItem;
