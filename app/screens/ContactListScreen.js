import { useState } from "react";
import { Button, FlatList, Modal, View } from "react-native";

import ListItem from "../components/list/ListItem";
import ListItemSeparator from "../components/list/ListItemSeparator";
import globalStyles from "../config/globalStyles";
import Icon from "../components/Icon";
import AddButton from "../components/AddButton";
import AddContact from "../components/AddContact";

const contactsList = [
  {
    id: 1,
    personName: "محسن میرزایی",
    amountBalanse: "0",
    personType: "هر چیزی میتونه باشه",
  },
  {
    id: 2,
    personName: "محسن میرزایی",
    amountBalanse: "4234324",
    personType: "هر چیزی میتونه باشه",
  },
  {
    id: 4,
    personName: "محسن میرزایی",
    amountBalanse: "354534",
    personType: "هر چیزی میتونه باشه",
  },
  {
    id: 44,
    personName: "محسن میرزایی",
    amountBalanse: "2345325",
    personType: "هر چیزی میتونه باشه",
  },
  {
    id: 22,
    personName: "محسن میرزایی",
    amountBalanse: "0",
    personType: "هر چیزی میتونه باشه",
  },
];

const ContactListScreen = () => {
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
            onPress={() => console.log(item)}
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
      <AddButton onPress={() => setModalVisible(true)} />
      <Modal visible={modalVisible} animationType="slide">
        <Button title="بستن" onPress={() => setModalVisible(false)} />
        <AddContact handleAddContact={handleAddContact} />
      </Modal>
    </View>
  );
};

export default ContactListScreen;
