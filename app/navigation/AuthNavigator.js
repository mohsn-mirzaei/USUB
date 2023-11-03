import { createNativeStackNavigator } from "@react-navigation/native-stack";

import routes from "./routes";
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import BackRightHeader from "../components/navigation/BackRightHeader";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      title: "",
      headerBackVisible: false,
    }}
  >
    <Stack.Screen
      name={routes.WELCOME}
      component={WelcomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name={routes.LOGIN}
      component={LoginScreen}
      options={({ navigation }) => ({
        headerRight: () => (
          <BackRightHeader
            title="ورود"
            onPress={() => navigation.navigate(routes.WELCOME)}
          />
        ),
      })}
    />
    <Stack.Screen
      name={routes.REGISTER}
      component={RegisterScreen}
      options={({ navigation }) => ({
        headerRight: () => (
          <BackRightHeader
            title="ثبت نام"
            onPress={() => navigation.navigate(routes.WELCOME)}
          />
        ),
      })}
    />
  </Stack.Navigator>
);

export default AuthNavigator;
