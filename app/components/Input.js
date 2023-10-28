import { Controller } from "react-hook-form";
import { StyleSheet, Text, TextInput } from "react-native";
import colors from "./config/colors";

const Input = ({ control, name, rules = {}, placeholder, secureTextEntry }) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <>
          <TextInput
            style={[
              styles.input,
              {
                borderColor: error && colors.danger,
                borderWidth: error && 1,
                marginBottom: !error && 20,
              },
            ]}
            placeholderTextColor={colors.secondary}
            placeholder={placeholder}
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            secureTextEntry={secureTextEntry}
          />
          {error && <Text style={styles.textErr}>{error?.message}</Text>}
        </>
      )}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    fontFamily: "iran-sans-regular",
    fontSize: 12,
    backgroundColor: colors.blackLight,
    color: colors.secondary,
    padding: 15,
    borderRadius: 15,
    textAlign: "right",
  },
  textErr: {
    fontFamily: "iran-sans-regular",
    textAlign: "right",
    marginTop: 5,
    marginBottom: 20,
    color: colors.danger,
  },
});

export default Input;
