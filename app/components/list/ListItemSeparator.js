import { StyleSheet, View } from "react-native";

import globalStyles from "../../config/globalStyles";

const ListItemSeparator = () => {
  return <View style={styles.separator} />;
};

const styles = StyleSheet.create({
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: globalStyles.blackLight,
  },
});

export default ListItemSeparator;
