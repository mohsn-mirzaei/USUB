import { createNativeStackNavigator } from "@react-navigation/native-stack";

import routes from "./routes";
import StackNavigationHeader from "../components/navigation/StackNavigationHeader";
import CategoryListScreen from "../screens/CategoryListScreen";
import CategoryScreen from "../screens/CategoryScreen";

const Stack = createNativeStackNavigator();

const CategoryListNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      title: "",
      headerBackVisible: false,
    }}
  >
    <Stack.Screen
      name={routes.TRANSACTIONS}
      component={CategoryListScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name={routes.CATEGORY}
      component={CategoryScreen}
      options={({ navigation, route }) => ({
        headerRight: () => (
          <StackNavigationHeader
            title={route.params.title}
            totalSum={route.params.totalSum}
            remained={route.params.remained}
            onPress={() => navigation.navigate(routes.TRANSACTIONS)}
          />
        ),
      })}
    />
  </Stack.Navigator>
);

export default CategoryListNavigator;
