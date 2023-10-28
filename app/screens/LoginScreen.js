import { StyleSheet, Text, TextInput, View } from "react-native";
import { Controller, useForm } from "react-hook-form";
import colors from "../components/config/colors";
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
    <View style={styles.container}>
      <Text style={styles.title}>اطلاعات ورود</Text>

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

      <Text style={styles.text}>رمز عبور خود را فراموش کرده اید؟</Text>
      <Button
        title="ورود"
        onPress={handleSubmit(onSubmit)}
        color="primary"
        textColor="secondary"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: colors.black,
  },
  title: {
    color: colors.secondary,
    textAlign: "center",
    fontFamily: "iran-sans-bold",
    fontSize: 36,
    marginBottom: 20,
  },
  text: {
    fontFamily: "iran-sans-regular",
    color: colors.secondary,
    fontSize: 10,
    top: -10,
  },
});

export default LoginScreen;
