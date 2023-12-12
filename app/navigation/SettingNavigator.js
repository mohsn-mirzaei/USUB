import { createNativeStackNavigator } from "@react-navigation/native-stack";
import routes from "./routes";
import AccountScreen from "../screens/AccountScreen";
import SettingScreen from "../screens/SettingScreen";

const Stack = createNativeStackNavigator();

const SettingNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={routes.SETTING}
      component={SettingScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name={routes.ACCOUNT} component={AccountScreen} />
  </Stack.Navigator>
);

export default SettingNavigator;
