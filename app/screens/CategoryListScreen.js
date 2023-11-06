import { useState } from "react";
import { View, FlatList } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import routes from "../navigation/routes";
import ListItem from "../components/list/ListItem";
import ListItemSeparator from "../components/list/ListItemSeparator";
import globalStyles from "../config/globalStyles";
import AddInput from "../components/AddInput";

import { useSelector, useDispatch } from "react-redux";

const CategoryListScreen = ({ navigation }) => {
  const categoriesList = useSelector((state) => state.entities.categoryList);

  const [categories, setCategories] = useState(categoriesList);
  const [newCategory, setNewCategory] = useState("");

  const addNewCategory = () => {
    if (newCategory.trim() !== "") {
      const newCategoryItem = { id: Date.now().toString(), title: newCategory };
      setCategories([...categories, newCategoryItem]);
      setNewCategory("");
    }
  };

  return (
    <View className="flex-1 bg-backgroundDark">
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={ListItemSeparator}
        renderItem={({ item }) => (
          <ListItem
            onPress={() =>
              navigation.navigate(routes.CATEGORY, {
                title: item.title,
                totalSum: item.totalSum,
                remained: item.remained,
                transaction: item.transaction,
              })
            }
            title={item.title}
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
