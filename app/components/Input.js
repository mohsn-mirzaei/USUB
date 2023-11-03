import { Controller } from "react-hook-form";
import { Text, TextInput } from "react-native";

import globalStyles from "../config/globalStyles";

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
            className={`text-sm bg-blackLight text-secondary p-4 rounded-2xl text-right
             ${error && "border-2 border-danger"}
             ${!error && "mb-5"}
             `}
            style={{ fontFamily: globalStyles.regular }}
            placeholderTextColor={globalStyles.opacity}
            placeholder={placeholder}
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            secureTextEntry={secureTextEntry}
          />
          {error && (
            <Text
              className="text-right mb-2 mt-1 text-danger"
              style={{ fontFamily: globalStyles.regular }}
            >
              {error?.message}
            </Text>
          )}
        </>
      )}
    />
  );
};

export default Input;
