import { View, FlatList, StyleSheet } from "react-native";

import TransactionItem from "./TransactionItem";

const data = [
  {
    id: 1,
    title: "خرید ۱",
    amount: 10000,
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
    amount: 150,
    date: "۱۶ فروردین ۱۴۰۰",
    type: "income",
  },
  {
    id: 4,
    title: "خرید ۴",
    amount: 300,
    date: "۱۷ فروردین ۱۴۰۰",
    type: "expense",
  },
  {
    id: 5,
    title: "خرید ۴",
    amount: 300,
    date: "۱۸ فروردین ۱۴۰۰",
    // type: "expense",
  },
  {
    id: 6,
    title: "خرید ۴",
    amount: 300,
    date: "۱۷ فروردین ۱۴۰۰",
    type: "expense",
  },
  {
    id: 7,
    title: "خرید ۴",
    amount: 300,
    date: "۱۷ فروردین ۱۴۰۰",
    type: "expense",
  },
  {
    id: 8,
    title: "خرید ۴",
    amount: 300,
    date: "۱۷ فروردین ۱۴۰۰",
    type: "expense",
  },
  {
    id: 9,
    title: "خرید ۴",
    amount: 300,
    date: "۱۷ فروردین ۱۴۰۰",
    type: "expense",
  },
  {
    id: 10,
    title: "خرید ۴",
    amount: 300,
    date: "۱۷ فروردین ۱۴۰۰",
    type: "expense",
  },
];

const TransactionList = () => {
  const renderItem = ({ item }) => {
    return <TransactionItem item={item} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A0440",
    paddingHorizontal: 8,
    marginTop: 5,
    // paddingVertical: 5,
  },
});

export default TransactionList;
