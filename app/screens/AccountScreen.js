import { FlatList, View } from "react-native";

import ListItem from "../components/list/ListItem";
import ListItemSeparator from "../components/list/ListItemSeparator";
import Icon from "../components/Icon";
import globalStyles from "../config/globalStyles";
import { useContext } from "react";
import Authcontext from "../auth/context";
import authStorage from "../auth/storage";

const menuItems = [
  {
    title: "پشتیبانی",
    icon: {
      name: "headphones",
      backgroundColor: globalStyles.primary,
    },
  },
  {
    title: "راهنما",
    icon: {
      name: "help",
      backgroundColor: globalStyles.primary,
    },
  },
];

const AccountScreen = () => {
  const { user, setUser } = useContext(Authcontext);

  return (
    <View className="flex-1 bg-backgroundDark">
      <View className="mb-5">
        <ListItem
          title={user.name}
          subTitle={user.email}
          image={user.picture}
        />
      </View>
      <View className="mb-5">
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => console.log(item.title)}
            />
          )}
        />
      </View>
      <ListItem
        title="خروج"
        IconComponent={
          <Icon name="logout" backgroundColor={globalStyles.primary} />
        }
        onPress={() => {
          setUser(null), authStorage.removeInfo();
        }}
      />
    </View>
  );
};

export default AccountScreen;
