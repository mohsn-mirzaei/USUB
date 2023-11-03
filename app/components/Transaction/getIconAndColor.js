import globalStyles from "../../config/globalStyles";

const getIconAndColor = (type) => {
  if (type === "income") {
    return {
      icon: "call-made",
      color: globalStyles.green,
    };
  } else if (type === "expense") {
    return {
      icon: "call-received",
      color: globalStyles.danger,
    };
  }
  return {
    icon: "call-missed",
    color: globalStyles.secondary,
  };
};

export default getIconAndColor;
