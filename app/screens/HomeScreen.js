import { View, Text, FlatList } from "react-native";

import BigBox from "../components/boxes/BigBox";
import SmallBox from "../components/boxes/SmallBox";
import TransactionItem from "../components/transaction/TransactionItem";

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
    <View className="bg-backgroundDark px-4 flex-1">
      <Text
        style={{ fontFamily: "snsBld" }}
        className="text-secondary text-base leading-10 mr-2"
      >
        آمار تراکنش‌ها
      </Text>
      <View className="bg-backgroundLight rounded-3xl items-center py-4 flex ">
        <View className="flex-row">
          <SmallBox title="دریافت‌ها" />
          <SmallBox title="پرداخت‌ها" />
        </View>
        <BigBox />
      </View>
      <Text
        style={{ fontFamily: "snsBld" }}
        className=" text-secondary text-base leading-10 mr-2"
      >
        تراکنش‌های اخیر
      </Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <TransactionItem item={item} />}
      />
    </View>
  );
};

export default HomeScreen;
