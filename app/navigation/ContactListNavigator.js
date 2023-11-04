import { createNativeStackNavigator } from "@react-navigation/native-stack";

import routes from "./routes";
import BackRightHeader from "../components/navigation/BackRightHeader";
import ContactListScreen from "../screens/ContactListScreen";
import ContactScreen from "../screens/ContactScreen";

const Stack = createNativeStackNavigator();

const ContactListNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      title: "",
      headerBackVisible: false,
    }}
  >
    <Stack.Screen
      name={routes.PERSONS}
      component={ContactListScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name={routes.PESRON}
      component={ContactScreen}
      options={({ navigation, route }) => ({
        headerRight: () => (
          <BackRightHeader
            title={route.params.title}
            onPress={() => navigation.navigate(routes.PERSONS)}
          />
        ),
      })}
    />
  </Stack.Navigator>
);

export default ContactListNavigator;
