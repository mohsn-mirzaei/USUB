import { useContext, useState } from "react";
import { Text, View } from "react-native";
import { useForm } from "react-hook-form";
import "core-js/stable/atob";
import { jwtDecode } from "jwt-decode";

import Input from "../components/Input";
import Button from "../components/Button";
import globalStyles from "../config/globalStyles";

import authApi from "../api/auth";
import Authcontext from "../auth/context";

const LoginScreen = () => {
  const { control, handleSubmit } = useForm();
  const { user, setUser } = useContext(Authcontext);

  const onSubmit = async ({ email, password }) => {
    authApi
      .login(email, password)
      .then((res) => {
        const user = jwtDecode(res.data.token);
        setUser(user);
      })
      .catch((err) => console.log(err));
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
        name="email"
        placeholder="ایمیل"
        rules={{ required: "ایمیل الزامی است" }}
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
