import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import getIconAndColor from "./getIconAndColor";
import globalStyles from "../config/globalStyles";

const TransactionItem = ({ item }) => {
  const { icon, color } = getIconAndColor(item.type);

  return (
    <View style={styles.item}>
      <View style={[styles.iconContainer, { backgroundColor: color }]}>
        <MaterialCommunityIcons
          name={icon}
          size={35}
          color={globalStyles.backgroundDark}
        />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
      <Text style={styles.amountNum}>{item.amount.toLocaleString()}</Text>
      <Text style={styles.amount}>تومان</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row-reverse",
    alignItems: "center",
    marginBottom: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 22,
    backgroundColor: globalStyles.backgroundLight,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  detailsContainer: {
    flex: 1,
    marginRight: 12,
  },
  title: {
    fontFamily: "snsBld",
    fontSize: 16,
    color: globalStyles.secondary,
  },
  date: {
    fontFamily: "snsReg",
    fontSize: 12,
    color: globalStyles.secondary,
  },
  amount: {
    fontFamily: "snsReg",
    fontSize: 10,
    color: globalStyles.secondary,
    marginRight: 2,
  },
  amountNum: {
    fontFamily: "snsReg",
    fontSize: 18,
    color: globalStyles.secondary,
  },
});

export default TransactionItem;
