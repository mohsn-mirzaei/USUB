import { createNativeStackNavigator } from "@react-navigation/native-stack";

import routes from "./routes";
import ContactListScreen from "../screens/ContactListScreen";
import ContactScreen from "../screens/ContactScreen";
import ContactHeader from "../components/navigation/ContactHeader";

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
          <ContactHeader
            personName={route.params.personName}
            personType={route.params.personType}
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
