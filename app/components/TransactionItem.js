import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const TransactionItem = ({ item }) => {
  const getIconAndColor = (type) => {
    if (type === "income") {
      return {
        icon: "call-made",
        color: "#67E1CC",
      };
    } else if (type === "expense") {
      return {
        icon: "call-received",
        color: "#E05176",
      };
    }

    return {
      icon: "call-missed",
      color: "#FFFFFF",
    };
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("fa-IR").format(value);
  };

  const { icon, color } = getIconAndColor(item.type);

  return (
    <View style={styles.item}>
      <View style={[styles.iconContainer, { backgroundColor: color }]}>
        <MaterialCommunityIcons name={icon} size={32} color="#0A0440" />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
      <Text style={styles.amount}>
        {`${formatCurrency(item.amount)} تومان`}
      </Text>
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
    backgroundColor: "#12124D",
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flex: 1,
    marginRight: 12,
  },
  title: {
    fontFamily: "snsBld",
    fontSize: 16,
    // fontWeight: "bold",
    color: "#EED4C9",
  },
  date: {
    fontFamily: "snsBld",
    fontSize: 12,
    color: "#EED4C9",
    marginTop: 4,
  },
  amount: {
    fontFamily: "snsBld",
    fontSize: 18,
    color: "#EED4C9",
    // fontWeight: "bold",
  },
});

export default TransactionItem;
