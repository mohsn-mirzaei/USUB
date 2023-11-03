import { DefaultTheme } from "@react-navigation/native";
import globalStyles from "../config/globalStyles";

export default navigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: globalStyles.primary,
    card: globalStyles.blackLight,
  },
};
