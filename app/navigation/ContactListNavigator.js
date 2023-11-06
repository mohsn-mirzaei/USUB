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
      name={routes.CONTACT_LIST}
      component={ContactListScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name={routes.CONTACT}
      component={({ route }) => (
        <TransactionScreen transationsList={route.params.transaction} />
      )}
      options={({ navigation, route }) => ({
        headerRight: () => (
          <StackNavigationHeader
            title={route.params.personName}
            subTitle={route.params.personType}
            totalSum={route.params.totalSum}
            remained={route.params.remained}
            onPress={() => navigation.navigate(routes.CONTACT_LIST)}
          />
        ),
      })}
    />
  </Stack.Navigator>
);

export default ContactListNavigator;
