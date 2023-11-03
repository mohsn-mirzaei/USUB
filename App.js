import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./app/navigation/AuthNavigator";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Constants from "expo-constants";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import HomeScreen from "./app/screens/HomeScreen";

SplashScreen.preventAutoHideAsync();
export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    snsReg: require("./app/assets/fonts/IranSansRegular.ttf"),
    snsBld: require("./app/assets/fonts/IranSansBold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    console.log(fontsLoaded);
    console.log(fontError);
    return null;
  }
  onLayoutRootView();

  return (
    <SafeAreaView style={style.safeView}>
      {/* <NavigationContainer>
        <AuthNavigator />
      </NavigationContainer> */}
      <HomeScreen />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  safeView: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});
