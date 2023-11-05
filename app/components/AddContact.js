import { Text, View } from "react-native";
import { useForm } from "react-hook-form";

import Input from "./Input";
import Button from "./Button";
import globalStyles from "../config/globalStyles";

const AddContact = ({ handleAddContact }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <View className="flex-1 justify-center px-5 bg-black">
      <Text
        className="text-secondary text-center text-4xl mb-5 leading-[60px]"
        style={{ fontFamily: globalStyles.bold }}
      >
        اطلاعات شخص
      </Text>
      <Input
        control={control}
        name="personName"
        placeholder="نام شخص"
        rules={{ required: "نام شخص الزامی است" }}
        autoFocus
      />
      <Input control={control} name="personType" placeholder="نوع شخص" />
      <Button
        title="ثبت"
        onPress={handleSubmit(handleAddContact)}
        bg="primary"
        textColor="secondary"
      />
    </View>
  );
};

export default AddContact;
