import { View, StyleSheet, Text } from "react-native";

import BigBox from "../components/BixBox";
import SmallBox from "../components/SmallBox";
import TransactionList from "../components/TransactionList";
import globalStyles from "../components/config/globalStyles";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>آمار تراکنش‌ها</Text>
      <View style={styles.padding}>
        <View style={styles.topHalfContainer}>
          <View style={styles.topHalf}>
            <SmallBox
              title="دریافت‌ها"
              name="call-made"
              width={170}
              backgroundColor={globalStyles.green}
            />
            <SmallBox
              title="پرداخت‌ها"
              name="call-received"
              width={170}
              backgroundColor={globalStyles.danger}
            />
          </View>
          <BigBox title="مانده" name="chart-line" />
        </View>
      </View>
      <Text style={styles.text}>تراکنش‌های اخیر</Text>
      <View style={styles.bottomHalf}>
        <TransactionList />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globalStyles.backgroundDark,
  },
  topHalfContainer: {
    backgroundColor: globalStyles.backgroundLight,
    borderRadius: 22,
    flex: 1,
    alignItems: "center",
  },
  topHalf: {
    flexDirection: "row",
  },
  padding: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  bottomHalf: {
    flex: 1,
  },
  text: {
    color: globalStyles.secondary,
    fontFamily: "snsReg",
    marginRight: 10,
    marginTop: 10,
  },
});

export default HomeScreen;
