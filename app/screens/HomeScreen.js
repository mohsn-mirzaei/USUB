import { View, StyleSheet, Text, FlatList } from "react-native";

import BigBox from "../components/boxes/BigBox";
import SmallBox from "../components/boxes/SmallBox";
import TransactionItem from "../components/transaction/TransactionItem";
import globalStyles from "../config/globalStyles";

const data = [
  {
    id: 1,
    title: "خرید ۱",
    amount: 2000000,
    date: "۱۴ فروردین ۱۴۰۰",
    type: "income",
  },
  {
    id: 2,
    title: "خرید ۲",
    amount: 2000000,
    date: "۱۵ فروردین ۱۴۰۰",
    type: "expense",
  },
  {
    id: 3,
    title: "خرید ۳",
    amount: 15000,
    date: "۱۶ فروردین ۱۴۰۰",
    type: "income",
  },
  {
    id: 4,
    title: "خرید ۴",
    amount: 30000,
    date: "۱۷ فروردین ۱۴۰۰",
    type: "expense",
  },
  {
    id: 5,
    title: "خرید ۴",
    amount: 30000,
    date: "۱۸ فروردین ۱۴۰۰",
    // type: "expense",
  },
  {
    id: 6,
    title: "خرید ۴",
    amount: 30000,
    date: "۱۷ فروردین ۱۴۰۰",
    type: "expense",
  },
  {
    id: 7,
    title: "خرید ۴",
    amount: 300000,
    date: "۱۷ فروردین ۱۴۰۰",
    // type: "expense",
  },
  {
    id: 8,
    title: "خرید ۴",
    amount: 3000,
    date: "۱۷ فروردین ۱۴۰۰",
    // type: "expense",
  },
  {
    id: 9,
    title: "خرید ۴",
    amount: 30000,
    date: "۱۷ فروردین ۱۴۰۰",
    type: "expense",
  },
  {
    id: 10,
    title: "خرید ۴",
    amount: 300400200,
    date: "۱۷ فروردین ۱۴۰۰",
    type: "expense",
  },
];

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>آمار تراکنش‌ها</Text>
      <View style={styles.boxesContainer}>
        <View style={styles.smallBoxContainer}>
          <SmallBox title="دریافت‌ها" />
          <SmallBox title="پرداخت‌ها" />
        </View>
        <BigBox />
      </View>
      <Text style={styles.text}>تراکنش‌های اخیر</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <TransactionItem item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globalStyles.backgroundDark,
    paddingHorizontal: 8,
  },
  boxesContainer: {
    backgroundColor: globalStyles.backgroundLight,
    borderRadius: 22,
    alignItems: "center",
    paddingVertical: 16,
    gap: 12,
  },
  smallBoxContainer: {
    flexDirection: "row",
    gap: 12,
  },
  text: {
    color: globalStyles.secondary,
    fontFamily: "snsReg",
    marginRight: 10,
    marginTop: 10,
  },
});

export default HomeScreen;
