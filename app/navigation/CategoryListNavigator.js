import { createNativeStackNavigator } from "@react-navigation/native-stack";

import routes from "./routes";
import CategoryListScreen from "../screens/CategoryListScreen";
import CategoryScreen from "../screens/CategoryScreen";
import BackRightHeader from "../components/navigation/BackRightHeader";

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
          <BackRightHeader
            title={route.params.title}
            onPress={() => navigation.navigate(routes.TRANSACTIONS)}
          />
        ),
      })}
    />
  </Stack.Navigator>
);

export default CategoryListNavigator;
