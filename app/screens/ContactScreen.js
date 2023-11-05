import { useState } from "react";
import { FlatList, Modal, Text, View } from "react-native";

import TransactionItem from "../components/transaction/TransactionItem";
import AddButton from "../components/AddButton";
import Button from "../components/Button";
import AddTransaction from "../components/transaction/AddTransaction";

const transationsList = [
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

const ContactScreen = () => {
  const [transaction, setTransactions] = useState(transationsList);
  const [modalVisible, setModalVisible] = useState(false);

  const handleAddTransaction = (data) => {
    const newTransaction = {
      id: Date.now().toString(),
      title: data.title,
      amount: data.amount,
      date: data.date,
      type: data.type,
    };
    setTransactions([...transaction, newTransaction]);
    setModalVisible(false);
    console.log(data);
  };

  return (
    <View className="flex-1 bg-backgroundDark px-4">
      <Text
        style={{ fontFamily: "snsBld" }}
        className=" text-secondary text-base leading-10 mr-2"
      >
        تراکنش‌ها
      </Text>
      <FlatList
        data={transaction}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <TransactionItem item={item} />}
      />
      <AddButton onPress={() => setModalVisible(true)} isAbsolute={true} />
      <Modal visible={modalVisible} animationType="slide">
        <Button
          style="p-0"
          title="بستن"
          onPress={() => setModalVisible(false)}
        />
        <AddTransaction handleAddTransaction={handleAddTransaction} />
      </Modal>
    </View>
  );
};

export default ContactScreen;
