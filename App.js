import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, I18nManager } from "react-native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { useFonts } from "expo-font";
import Constants from "expo-constants";
import * as Updates from "expo-updates";
import * as SplashScreen from "expo-splash-screen";

import AuthNavigator from "./app/navigation/AuthNavigator";
import AppNavigator from "./app/navigation/AppNavigator";
import navigationTheme from "./app/navigation/navigationTheme";

import { Provider } from "react-redux";
import store from "./app/store";
import Authcontext from "./app/auth/context";
import authStorage from "./app/auth/storage";

const queryClient = new QueryClient();

SplashScreen.preventAutoHideAsync();
export default App = () => {
  const [user, setUser] = useState();

  const restoreUserInfo = async () => {
    const userInfo = await authStorage.getUser();
    if (userInfo) setUser(userInfo);
  };

  useEffect(() => {
    restoreUserInfo();
  }, []);

  const shouldBeRTL = true;
  if (shouldBeRTL !== I18nManager.isRTL && Platform.OS !== "web") {
    I18nManager.allowRTL(shouldBeRTL);
    I18nManager.forceRTL(shouldBeRTL);
    Updates.reloadAsync();
  }

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
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Authcontext.Provider value={{ user, setUser }}>
        <Provider store={store}>
          <SafeAreaView style={style.safeView} onLayout={onLayoutRootView}>
            <GestureHandlerRootView style={{ flex: 1 }}>
              <NavigationContainer theme={navigationTheme}>
                {!user ? <AuthNavigator /> : <AppNavigator />}
              </NavigationContainer>
            </GestureHandlerRootView>
          </SafeAreaView>
        </Provider>
      </Authcontext.Provider>
    </QueryClientProvider>
  );
};

const style = StyleSheet.create({
  safeView: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});
