import { Text, View } from "react-native";
import { useForm } from "react-hook-form";

import Input from "../components/Input";
import Button from "../components/Button";
import globalStyles from "../config/globalStyles";

import authApi from "../api/auth";
import useAuth from "../auth/useAuth";

const LoginScreen = () => {
  const { control, handleSubmit } = useForm();

  const { logIn } = useAuth();

  const onSubmit = async ({ email, password }) => {
    authApi
      .login(email, password)
      .then((res) => {
        logIn(res.data.data);
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
