import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./app/navigation/AuthNavigator";
import AppNavigator from "./app/navigation/AppNavigator";

import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Constants from "expo-constants";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import navigationTheme from "./app/navigation/navigationTheme";

SplashScreen.preventAutoHideAsync();
export default App = () => {
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

  return (
    <SafeAreaView style={style.safeView} onLayout={onLayoutRootView}>
      <NavigationContainer theme={navigationTheme}>
        {/* <AuthNavigator /> */}
        <AppNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  safeView: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});
