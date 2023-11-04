import { useState } from "react";
import { View, FlatList, TextInput, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import routes from "../navigation/routes";
import ListItem from "../components/list/ListItem";
import ListItemSeparator from "../components/list/ListItemSeparator";
import globalStyles from "../config/globalStyles";
import AddInput from "../components/AddInput";

const categoriesList = [
  { id: "1", title: "شخصی" },
  { id: "2", title: "کار" },
  { id: "3", title: "منزل" },
];

const CategoryListScreen = ({ navigation }) => {
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
              navigation.navigate(routes.CATEGORY, { title: item.title })
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
