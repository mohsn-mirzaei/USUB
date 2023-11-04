import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import routes from "./routes";
import HomeScreen from "../screens/HomeScreen";
import ContactListScreen from "../screens/ContactListScreen";
import AccountScreen from "../screens/AccountScreen";
import CategoryListNavigator from "./CategoryListNavigator";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator
    initialRouteName={routes.HOME}
    screenOptions={{
      tabBarHideOnKeyboard: true,
      headerShown: false,
      tabBarShowLabel: false,
    }}
  >
    <Tab.Screen
      name={routes.SETTING}
      component={AccountScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="account-settings"
            color={color}
            size={size}
          />
        ),
      }}
    />
    <Tab.Screen
      name={routes.PERSONS}
      component={ContactListScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="account-group"
            color={color}
            size={size}
          />
        ),
      }}
    />
    <Tab.Screen
      name={routes.TRANSACTIONS}
      component={CategoryListNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="format-list-bulleted"
            color={color}
            size={size}
          />
        ),
      }}
    />
    <Tab.Screen
      name={routes.HOME}
      component={HomeScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
