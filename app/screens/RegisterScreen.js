import { Text, View } from "react-native";
import { useForm } from "react-hook-form";

import globalStyles from "../config/globalStyles";
import Button from "../components/Button";
import Input from "../components/Input";
import usersApi from "../api/users";
import authApi from "../api/auth";
import useAuth from "../auth/useAuth";

const RegisterScreen = () => {
  const { control, handleSubmit, watch } = useForm();
  const { logIn } = useAuth();

  const onSubmit = (userInfo) => {
    const { repeatPassword, ...formUserInfo } = userInfo;
    usersApi
      .register(formUserInfo)
      .then((res) => {
        res.data.code === 204 &&
          authApi
            .login(userInfo.email, userInfo.password)
            .then((res) => {
              res.data.code === 200 && logIn(res.data.data);
            })
            .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
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
        name="name"
        placeholder="نام کامل"
        rules={{ required: "نام کامل الزامی است" }}
      />
      <Input
        control={control}
        name="family"
        placeholder="نام کامل"
        rules={{ required: "نام کامل الزامی است" }}
      />
      <Input
        control={control}
        name="phone"
        placeholder="شماره موبایل"
        rules={{ required: "شماره موبایل عبور الزامی است" }}
      />
      <Input
        control={control}
        name="email"
        placeholder="ایمیل"
        rules={{ required: "ایمیل عبور الزامی است" }}
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
        rules={{
          required: "تکرار رمز عبور الزامی است",
          validate: (value) =>
            value === watch("password", "") ||
            "رمز عبور و تکرار آن باید یکسان باشند",
        }}
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
