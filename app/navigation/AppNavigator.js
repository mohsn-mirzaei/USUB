import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator
    initialRouteName="خانه"
    screenOptions={{
      tabBarHideOnKeyboard: true,
      headerShown: false,
      tabBarShowLabel: false,
    }}
  >
    <Tab.Screen
      name="تنظیمات"
      component={HomeScreen}
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
      name="اشخاص"
      component={HomeScreen}
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
      name="تراکنش‌ها"
      component={HomeScreen}
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
      name="خانه"
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
