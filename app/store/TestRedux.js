import { View, Text, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";

const TestRedux = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
      }}
    >
      <Text>Counter: {count}</Text>
      <Button
        title="Increment"
        onPress={() => dispatch({ type: "INCREMENT" })}
      />
      <Button
        title="Decrement"
        onPress={() => dispatch({ type: "DECREMENT" })}
      />
    </View>
  );
};

export default TestRedux;
