import { Image, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import globalStyles from "../components/config/globalStyles";
import Button from "../components/Button";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View className="h-full items-center justify-center bg-black">
      <LinearGradient
        className="absolute left-0 right-0 top-0 h-4/6 items-center p-4"
        colors={[globalStyles.primary, "transparent"]}
        locations={[0.7, 1]}
      >
        <Image
          className="w-[350px] h-[350px] top-[-16]"
          source={require("../assets/icon.png")}
        />
        <View className="top-[-40px] flex gap-4">
          <Text
            className="text-lg text-secondary"
            style={{ fontFamily: globalStyles.regular }}
          >
            خوش آمدید!
          </Text>
          <Text
            className="text-4xl leading-[48px] text-secondary"
            style={{ fontFamily: globalStyles.bold }}
          >
            یوساب
          </Text>
          <Text
            className="text-lg text-secondary"
            style={{ fontFamily: globalStyles.regular }}
          >
            یک نرم‌افزار حسابداری شخصی
          </Text>
          <Text
            className="text-lg text-secondary"
            style={{ fontFamily: globalStyles.regular }}
          >
            برای هرچه آسان کردن مدیریت مالی است
          </Text>
        </View>
        <Button
          title="ورود"
          bg="primary"
          textColor="secondary"
          onPress={() => navigation.navigate("Login")}
        />
        <Button
          title="ثبت نام"
          bg="secondary"
          onPress={() => console.log("Register Clicked")}
        />
      </LinearGradient>
    </View>
  );
};

export default WelcomeScreen;
