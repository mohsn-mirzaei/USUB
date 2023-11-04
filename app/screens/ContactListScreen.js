import { useState } from "react";
import { FlatList, View } from "react-native";

import ListItem from "../components/list/ListItem";
import ListItemSeparator from "../components/list/ListItemSeparator";
import globalStyles from "../config/globalStyles";
import Icon from "../components/Icon";

const contactsList = [
  {
    id: "1",
    name: "محسن میرزایی",
    remainingAmount: "۵۰۰ تومان",
    accountSide: "فروشنده",
  },
  {
    id: "2",
    name: "سعید توازانی",
    remainingAmount: "۲۰۰ تومان",
    accountSide: "فروشنده",
  },
  {
    id: "5",
    name: "مهندس میرزایی",
    remainingAmount: "۱۵۰ تومان",
    accountSide: "خریدار-فروشنده",
  },
  {
    id: "6",
    name: "علی رفیعی",
    remainingAmount: "۱۰۰ تومان",
    accountSide: "خریدار",
  },
  {
    id: "7",
    name: "مهندس سادات",
    remainingAmount: "۳۰۰ تومان",
    accountSide: "خریدار",
  },
  {
    id: "8",
    name: "مهندس سپهرزاد",
    remainingAmount: "۱۵۰ تومان",
    accountSide: "خریدار-فروشنده",
  },
  {
    id: "9",
    name: "محسن میرزایی",
    remainingAmount: "۵۰۰ تومان",
    accountSide: "فروشنده",
  },
  {
    id: "10",
    name: "سعید توازانی",
    remainingAmount: "۲۰۰ تومان",
    accountSide: "فروشنده",
  },
  {
    id: "11",
    name: "مهندس میرزایی",
    remainingAmount: "۱۵۰ تومان",
    accountSide: "خریدار-فروشنده",
  },
  {
    id: "12",
    name: "علی رفیعی",
    remainingAmount: "۱۰۰ تومان",
    accountSide: "خریدار",
  },
  {
    id: "13",
    name: "مهندس سادات",
    remainingAmount: "۳۰۰ تومان",
    accountSide: "خریدار",
  },
  {
    id: "14",
    name: "مهندس سپهرزاد",
    remainingAmount: "۱۵۰ تومان",
    accountSide: "خریدار-فروشنده",
  },
];

const ContactListScreen = () => {
  const [contacts, setContacts] = useState(contactsList);

  return (
    <View className="flex-1 bg-backgroundDark">
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={ListItemSeparator}
        renderItem={({ item }) => (
          <ListItem
            onPress={() => console.log(item)}
            IconComponent={
              <Icon
                name="account"
                backgroundColor={globalStyles.primary}
                iconColor={globalStyles.secondary}
                size={50}
              />
            }
            title={item.name}
            subTitle={item.accountSide}
            amount={item.remainingAmount}
          />
        )}
      />
    </View>
  );
};

export default ContactListScreen;
