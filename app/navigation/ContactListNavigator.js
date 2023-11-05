import { createNativeStackNavigator } from "@react-navigation/native-stack";

import routes from "./routes";
import ContactListScreen from "../screens/ContactListScreen";
import StackNavigationHeader from "../components/navigation/StackNavigationHeader";
import TransactionScreen from "../screens/TransactionScreen";

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
      component={TransactionScreen}
      options={({ navigation, route }) => ({
        headerRight: () => (
          <StackNavigationHeader
            title={route.params.personName}
            subTitle={route.params.personType}
            totalSum={route.params.totalSum}
            remained={route.params.remained}
            onPress={() => navigation.navigate(routes.PERSONS)}
          />
        ),
      })}
    />
  </Stack.Navigator>
);

export default ContactListNavigator;
