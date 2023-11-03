import { Text, View } from "react-native";
import { useForm } from "react-hook-form";

import globalStyles from "../config/globalStyles";
import Button from "../components/Button";
import Input from "../components/Input";

const LoginScreen = () => {
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
        اطلاعات ورود
      </Text>

      <Input
        control={control}
        name="username"
        placeholder="نام کاربری، شماره موبایل یا ایمیل"
        rules={{ required: "نام کاربری الزامی است" }}
      />
      <Input
        control={control}
        name="password"
        placeholder="رمز عبور"
        rules={{ required: "رمز عبور الزامی است" }}
      />

      <Text
        className="text-secondary text-sm top-[-10px]"
        style={{ fontFamily: globalStyles.regular }}
      >
        رمز عبور خود را فراموش کرده اید؟
      </Text>
      <Button
        title="ورود"
        onPress={handleSubmit(onSubmit)}
        bg="primary"
        textColor="secondary"
      />
    </View>
  );
};

export default LoginScreen;
