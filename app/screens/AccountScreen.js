import { FlatList, StyleSheet, View } from "react-native";

import ListItem from "../components/list/ListItem";
import ListItemSeparator from "../components/list/ListItemSeparator";
import Icon from "../components/Icon";
import globalStyles from "../config/globalStyles";

const image = require("../assets/MohsenMirzaei.jpg");

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
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="محسن میرزایی"
          subTitle="mohsn.mirzaei@gmail.com"
          image={image}
        />
      </View>
      <View style={styles.container}>
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
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  screen: {
    flex: 1,
    backgroundColor: globalStyles.backgroundDark,
  },
});

export default AccountScreen;
