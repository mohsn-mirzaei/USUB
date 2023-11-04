import {
  Image,
  StyleSheet,
  TouchableHighlight,
  View,
  Text,
} from "react-native";
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
}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <Text style={styles.title} numberOfLines={1}>
              {title}
            </Text>
            {subTitle && (
              <Text style={styles.subTitle} numberOfLines={2}>
                {subTitle}
              </Text>
            )}
          </View>
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

const styles = StyleSheet.create({
  container: {
    flexDirection: "row-reverse",
    padding: 15,
    backgroundColor: globalStyles.backgroundLight,
    alignItems: "center",
  },
  detailsContainer: {
    flex: 1,
    marginRight: 10,
    justifyContent: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  title: {
    color: globalStyles.secondary,
    fontWeight: "500",
  },
  subTitle: {
    color: globalStyles.secondary,
    textAlign: "right",
  },
});

export default ListItem;
