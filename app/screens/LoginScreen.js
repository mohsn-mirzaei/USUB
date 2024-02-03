import { Text, View } from "react-native";
import { useForm } from "react-hook-form";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Input from "../components/Input";
import Button from "../components/Button";
import globalStyles from "../config/globalStyles";

import authApi from "../api/auth";
import useAuth from "../auth/useAuth";
import { useState } from "react";

const LoginScreen = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { control, handleSubmit } = useForm();

  const { logIn } = useAuth();

  const onSubmit = async ({ email, password }) => {
    authApi
      .login(email, password)
      .then((res) => {
        logIn(res.data.token);
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
      <View>
        <Input
          control={control}
          name="password"
          placeholder="رمز عبور"
          rules={{ required: "رمز عبور الزامی است" }}
          secureTextEntry={!showPassword}
        />
        <MaterialCommunityIcons
          name={showPassword ? "eye-off" : "eye"}
          size={24}
          style={{ position: "absolute", right: 10, top: 20 }}
          color={globalStyles.opacity}
          onPress={() => setShowPassword(!showPassword)}
        />
      </View>

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
