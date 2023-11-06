import { useState } from "react";
import { FlatList, Modal, Text, View } from "react-native";

import TransactionItem from "../components/transaction/TransactionItem";
import AddButton from "../components/AddButton";
import Button from "../components/Button";
import AddTransaction from "../components/transaction/AddTransaction";

import { useDispatch } from "react-redux";

const TransactionScreen = ({ transaction, id }) => {
  const dispatch = useDispatch();

  const [modalVisible, setModalVisible] = useState(false);

  const handleAddTransaction = (data) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: {
        id: id,
        title: data.title,
        amount: data.amount,
        date: data.date,
        type: data.type,
      },
    });
    setModalVisible(false);
  };

  return (
    <View className="flex-1 bg-backgroundDark px-4">
      {transaction.length > 0 && (
        <>
          <Text
            style={{ fontFamily: "snsBld" }}
            className=" text-secondary text-base leading-10 mr-2"
          >
            تراکنش‌ها
          </Text>

          <FlatList
            data={transaction}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <TransactionItem item={item} />}
          />
        </>
      )}
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

export default TransactionScreen;
