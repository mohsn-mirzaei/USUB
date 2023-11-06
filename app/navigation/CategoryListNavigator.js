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
      options={({ navigation, route }) => ({
        headerRight: () => (
          <StackNavigationHeader
            title={route.params.title}
            totalSum={route.params.totalSum}
            remained={route.params.remained}
            length={route.params.transaction.length > 0}
            onPress={() => navigation.navigate(routes.CATEGORY_LIST)}
          />
        ),
      })}
    >
      {({ route }) => (
        <TransactionScreen
          transaction={route.params.transaction}
          id={route.params.categoryId}
        />
      )}
    </Stack.Screen>
  </Stack.Navigator>
);

export default CategoryListNavigator;
