import { useState } from "react";
import { FlatList, Modal, View } from "react-native";

import ListItem from "../components/list/ListItem";
import ListItemSeparator from "../components/list/ListItemSeparator";
import globalStyles from "../config/globalStyles";
import Icon from "../components/Icon";
import AddButton from "../components/AddButton";
import AddContact from "../components/contacts/AddContact";
import Button from "../components/Button";
import routes from "../navigation/routes";

const contactsList = [
  {
    id: 1,
    personName: "محسن ",
    amountBalanse: "0",
    personType: "هر چیزی میتونه باشه",
    totalSum: "122,000,000",
    remained: "12,222,222",
  },
  {
    id: 2,
    personName: " میرزایی",
    amountBalanse: "4234324",
    personType: "هر چیزی میتونه باشه",
    totalSum: "222,000,000",
    remained: "333,222,222",
  },
  {
    id: 4,
    personName: "محسن 55",
    amountBalanse: "354534",
    personType: "هر چیزی میتونه باشه",
    totalSum: "122,000,000",
    remained: "12,222,222,000",
  },
  {
    id: 44,
    personName: "555 میرزایی",
    amountBalanse: "2345325",
    personType: "هر چیزی میتونه باشه",
    totalSum: "122,123,000",
    remained: "12,222,444",
  },
  {
    id: 22,
    personName: "محسن 474",
    amountBalanse: "0",
    personType: "هر چیزی میتونه باشه",
    totalSum: "444,000,000",
    remained: "777,222,222",
  },
];

const ContactListScreen = ({ navigation }) => {
  const [contacts, setContacts] = useState(contactsList);
  const [modalVisible, setModalVisible] = useState(false);

  const handleAddContact = (data) => {
    const newContact = {
      id: Date.now().toString(),
      personName: data.personName,
      amountBalanse: "0",
      personType: data.personType === undefined ? "" : data.personType,
    };
    setContacts([...contacts, newContact]);
    setModalVisible(false);
  };

  return (
    <View className="flex-1 bg-backgroundDark">
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={ListItemSeparator}
        renderItem={({ item }) => (
          <ListItem
            onPress={() =>
              navigation.navigate(routes.PESRON, {
                personName: item.personName,
                personType: item.personType,
                totalSum: item.totalSum,
                remained: item.remained,
              })
            }
            IconComponent={
              <Icon
                name="account"
                backgroundColor={globalStyles.primary}
                iconColor={globalStyles.secondary}
                size={50}
              />
            }
            title={item.personName}
            subTitle={item.personType}
            amount={item.amountBalanse}
          />
        )}
      />
      <AddButton onPress={() => setModalVisible(true)} isAbsolute={true} />
      <Modal visible={modalVisible} animationType="slide">
        <Button
          style="p-0"
          title="بستن"
          onPress={() => setModalVisible(false)}
        />
        <AddContact handleAddContact={handleAddContact} />
      </Modal>
    </View>
  );
};

export default ContactListScreen;
