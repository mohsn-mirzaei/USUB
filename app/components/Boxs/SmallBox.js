import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import globalStyles from "../config/globalStyles";

const SmallBox = ({ backgroundColor, width, title, name }) => {
  return (
    <View style={[styles.container, { backgroundColor }, { width }]}>
      <MaterialCommunityIcons
        name={name}
        size={48}
        color={globalStyles.backgroundDark}
      />
      <Text style={styles.label}>{title}</Text>
      <Text style={styles.amount}>۳۰,۰۰۰,۰۰۰,۰۰۰</Text>
      <Text style={styles.amount}>تومان</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 140,
    borderRadius: 20,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    marginRight: 5,
    marginLeft: 5,
    marginTop: 10,
  },
  amount: {
    fontFamily: "snsReg",
    fontSize: 20,
    color: globalStyles.backgroundDark,
  },
  label: {
    fontFamily: "snsBld",
    fontSize: 28,
    color: globalStyles.backgroundDark,
  },
});

export default SmallBox;
