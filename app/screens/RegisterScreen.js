import { Text, View } from "react-native";
import { useForm } from "react-hook-form";
import globalStyles from "../config/globalStyles";
import Button from "../components/Button";
import Input from "../components/Input";

const RegisterScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <View className="h-full justify-center px-5 bg-black">
      <Text
        className="text-secondary text-center text-4xl mb-5 leading-[48px]"
        style={{ fontFamily: globalStyles.bold }}
      >
        ایجاد حساب جدید
      </Text>

      <Input
        control={control}
        name="fullname"
        placeholder="نام کامل"
        rules={{ required: "نام کامل الزامی است" }}
      />
      <Input
        control={control}
        name="username"
        placeholder="نام کاربری"
        rules={{ required: "نام کاربری عبور الزامی است" }}
      />
      <Input
        control={control}
        name="phone"
        placeholder="شماره موبایل"
        rules={{ required: "شماره موبایل عبور الزامی است" }}
      />
      <Input
        control={control}
        name="password"
        placeholder="رمز عبور"
        rules={{ required: "رمز عبور الزامی است" }}
      />
      <Input
        control={control}
        name="repeatPassword"
        placeholder="تکرار رمز عبور"
        rules={{ required: "تکرار رمز عبور الزامی است" }}
      />

      <Button
        title="ثبت نام"
        onPress={handleSubmit(onSubmit)}
        bg="primary"
        textColor="secondary"
      />
    </View>
  );
};

export default RegisterScreen;
