import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { useCallback } from "react";
import { SafeAreaView, StyleSheet } from "react-native";

import { useFonts } from "expo-font";
import Constants from "expo-constants";
import * as SplashScreen from "expo-splash-screen";

import AuthNavigator from "./app/navigation/AuthNavigator";
import AppNavigator from "./app/navigation/AppNavigator";
import navigationTheme from "./app/navigation/navigationTheme";

import { Provider } from "react-redux";
import store from "./app/store";
import TestRedux from "./app/store/TestRedux";

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
    <Provider store={store}>
      <SafeAreaView style={style.safeView} onLayout={onLayoutRootView}>
        {/* <GestureHandlerRootView style={{ flex: 1 }}>
          <NavigationContainer theme={navigationTheme}>
            <AuthNavigator />
            <AppNavigator />
          </NavigationContainer>
        </GestureHandlerRootView> */}
        <TestRedux />
      </SafeAreaView>
    </Provider>
  );
};

const style = StyleSheet.create({
  safeView: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});
