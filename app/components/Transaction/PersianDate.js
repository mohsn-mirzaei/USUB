import PersianCalendarPicker from "react-native-persian-calendar-picker";
import { View } from "react-native";
import globalStyles from "../../config/globalStyles";

const PersianDate = ({ date }) => {
  return (
    <View className="bg-backgroundDark flex-1 justify-center">
      <PersianCalendarPicker
        onDateChange={date}
        isRTL={true}
        weekdays={["ش", "ی", "د", "س", "چ", "پ", "ج"]}
        todayBackgroundColor={globalStyles.primary}
        todayTextStyle={{ color: globalStyles.secondary }}
        selectedDayColor={globalStyles.blackLight}
        selectedDayTextColor={globalStyles.secondary}
        textStyle={{
          color: globalStyles.secondary,
          fontFamily: "snsReg",
          fontSize: 16,
        }}
      />
    </View>
  );
};

export default PersianDate;
