import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import globalStyles from "../../config/globalStyles";

const BixBox = () => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="chart-line"
        size={58}
        color={globalStyles.backgroundDark}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.label}>مانده</Text>
        <View style={styles.amountDetail}>
          <Text style={styles.amount}>تومان</Text>
          <Text style={styles.amount}>۳۰,۰۰۰,۰۰۰,۰۰۰</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 350,
    height: 128,
    backgroundColor: globalStyles.yellow,
    borderRadius: 20,
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "center",
  },
  detailsContainer: {
    paddingHorizontal: 20,
  },
  amountDetail: {
    flexDirection: "row",
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
