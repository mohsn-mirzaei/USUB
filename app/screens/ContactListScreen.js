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

import { useSelector, useDispatch } from "react-redux";

const ContactListScreen = ({ navigation }) => {
  const contactsList = useSelector((state) => state.entities.contactList);

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
              navigation.navigate(routes.CONTACT, {
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
