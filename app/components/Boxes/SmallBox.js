import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import globalStyles from "../../config/globalStyles";

const SmallBox = ({ title }) => {
  backgroundColor =
    title === "دریافت‌ها" ? globalStyles.green : globalStyles.danger;

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <MaterialCommunityIcons
        name={title === "دریافت‌ها" ? "call-made" : "call-received"}
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
    width: 170,
    height: 140,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "space-around",
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
