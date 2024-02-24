import { useState } from "react";
import { View, FlatList, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import routes from "../navigation/routes";
import ListItem from "../components/list/ListItem";
import ListItemSeparator from "../components/list/ListItemSeparator";
import globalStyles from "../config/globalStyles";
import AddInput from "../components/AddInput";

import { useQuery } from "@tanstack/react-query";
import getCategory from "../api/categoryList";

const CategoryListScreen = ({ navigation }) => {
  const [newCategory, setNewCategory] = useState("");

  const addNewCategory = () => {
    if (newCategory.trim() !== "") {
      dispatch({ type: "ADD_CATEGORY", payload: newCategory });
      setNewCategory("");
    }
  };

  const {
    isLoading,
    isError,
    data: categoriesList,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const response = await getCategory();
      return response.data.data.response;
    },
  });

  if (isLoading) return <Text>Loading...</Text>;

  if (isError) return <Text>Error fetching data</Text>;

  return (
    <View className="flex-1 bg-backgroundDark">
      <FlatList
        data={categoriesList}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={ListItemSeparator}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            onPress={() =>
              navigation.navigate(routes.CATEGORY, {
                categoryId: item.id,
                title: item.title,
                // totalSum: item.totalSum,
                // remained: item.remained,
                // transaction: item.transaction,
              })
            }
            IconComponent={
              <MaterialCommunityIcons
                name="format-list-numbered"
                size={28}
                color={globalStyles.secondary}
              />
            }
          />
        )}
      />
      <AddInput
        placeholder="افزودن لیست جدید"
        value={newCategory}
        onChangeText={setNewCategory}
        onPress={addNewCategory}
      />
    </View>
  );
};

export default CategoryListScreen;
