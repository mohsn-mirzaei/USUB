import { createNativeStackNavigator } from "@react-navigation/native-stack";

import routes from "./routes";
import StackNavigationHeader from "../components/navigation/StackNavigationHeader";
import CategoryListScreen from "../screens/CategoryListScreen";
import TransactionScreen from "../screens/TransactionScreen";

const Stack = createNativeStackNavigator();

const CategoryListNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      title: "",
      headerBackVisible: false,
    }}
  >
    <Stack.Screen
      name={routes.CATEGORY_LIST}
      component={CategoryListScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name={routes.CATEGORY}
      component={({ route }) => (
        <TransactionScreen transationsList={route.params.transaction} />
      )}
      options={({ navigation, route }) => ({
        headerRight: () => (
          <StackNavigationHeader
            title={route.params.title}
            totalSum={route.params.totalSum}
            remained={route.params.remained}
            onPress={() => navigation.navigate(routes.CATEGORY_LIST)}
          />
        ),
      })}
    />
  </Stack.Navigator>
);

export default CategoryListNavigator;
