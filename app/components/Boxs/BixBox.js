import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import globalStyles from "../config/globalStyles";

const BixBox = ({ title, name }) => {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <MaterialCommunityIcons
          name={name}
          size={58}
          color={globalStyles.backgroundDark}
        />
      </View>
      <View style={styles.details}>
        <Text style={styles.label}>{title}</Text>
        <View style={styles.amountDetail}>
          <Text style={styles.amount}>۳۰,۰۰۰,۰۰۰,۰۰۰</Text>
          <Text style={styles.amount}>تومان</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 350,
    backgroundColor: globalStyles.yellow,
    height: 128,
    borderRadius: 20,
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  details: {
    paddingHorizontal: 20,
  },
  amountDetail: {
    flexDirection: "row-reverse",
  },
  amount: {
    fontFamily: "snsReg",
    fontSize: 20,
    color: globalStyles.backgroundDark,
    marginRight: 10,
  },
  label: {
    fontFamily: "snsBld",
    fontSize: 28,
    color: globalStyles.backgroundDark,
  },
});

export default BixBox;
