import { useCallback } from "react";
import { useFonts } from "expo-font";
import { SafeAreaView, StyleSheet, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import Constants from "expo-constants";

import WelcomeScreen from "./app/screens/WelcomeScreen";

SplashScreen.preventAutoHideAsync();
export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    "iran-sans-regular": require("./app/assets/fonts/IranSansRegular.ttf"),
    "iran-sans-bold": require("./app/assets/fonts/IranSansBold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaView style={style.safeView}>
      <View onLayout={onLayoutRootView}>
        <WelcomeScreen />
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  safeView: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});
