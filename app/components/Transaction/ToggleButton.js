import { ButtonGroup } from "@rneui/themed";
import { StyleSheet } from "react-native";

import globalStyles from "../../config/globalStyles";

const ToggleButton = ({ onPress, selectedIndex, type }) => {
  return (
    <ButtonGroup
      buttons={["پرداختی", "دریافتی"]}
      selectedIndex={selectedIndex}
      onPress={onPress}
      containerStyle={styles.containerStyle}
      selectedButtonStyle={{
        backgroundColor:
          type === "income" ? globalStyles.green : globalStyles.danger,
      }}
      selectedTextStyle={styles.selectedTextStyle}
      textStyle={styles.textStyle}
    />
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    marginBottom: 20,
    backgroundColor: globalStyles.blackLight,
    borderRadius: 16,
    height: 55,
    width: "100%",
    borderWidth: 0,
    right: 11,
  },
  selectedTextStyle: {
    color: globalStyles.backgroundDark,
  },
  textStyle: {
    color: globalStyles.opacity,
    fontFamily: "snsReg",
    fontSize: 16,
  },
});

export default ToggleButton;
