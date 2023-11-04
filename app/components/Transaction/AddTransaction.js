import { useEffect, useState } from "react";
import { Text, View, TouchableOpacity, Modal } from "react-native";
import { useForm } from "react-hook-form";
import moment from "moment-jalaali";

import globalStyles from "../../config/globalStyles";
import Input from "../Input";
import Button from "../Button";
import PersianDate from "../PersianDate";

const AddTransaction = ({ handleAddTransaction }) => {
  moment.locale("fa");
  moment.loadPersian({ dialect: "persian-modern" });

  const [modalVisible, setModalVisible] = useState(false);
  const [date, setDate] = useState(moment(date).format("dddd jD jMMMM jYYYY"));

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onDateChange = (date) => {
    const persianDate = moment(date).format("dddd jD jMMMM jYYYY");
    setDate(persianDate);
    setValue("date", persianDate);
    setModalVisible(false);
  };

  return (
    <View className="flex-1 justify-center px-5 bg-black">
      <Text
        className="text-secondary text-center text-4xl mb-5 leading-[60px]"
        style={{ fontFamily: globalStyles.bold }}
      >
        اطلاعات تراکنش
      </Text>
      <Input
        control={control}
        name="title"
        placeholder="عنوان"
        rules={{ required: "عنوان تراکنش الزامی است" }}
      />
      <Input
        control={control}
        name="amount"
        placeholder="مبلغ"
        rules={{ required: "مبلغ تراکنش الزامی است" }}
        keyboardType="numeric"
      />
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Input
          control={control}
          name="date"
          editable={false}
          value={date.toString()}
        />
      </TouchableOpacity>
      <Modal visible={modalVisible} animationType="slide">
        <Button
          style="p-0"
          title="بستن"
          onPress={() => setModalVisible(false)}
        />
        <PersianDate date={onDateChange} />
      </Modal>

      <Button
        title="ثبت"
        onPress={handleSubmit(handleAddTransaction)}
        bg="primary"
        textColor="secondary"
      />
    </View>
  );
};

export default AddTransaction;
