import { StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";
import { InputFieldProps } from "./InputFieldProps";
import { AppUtils } from "@/utils";

const InputFieldComponent = (props: InputFieldProps) => {
  const [isFocus, setIsFocus] = useState(false);
  return (
    <View
      style={[
        styles.inputContainer,
        isFocus && { borderColor: AppUtils.color.primary },
      ]}
    >
      <TextInput
        style={styles.textInput}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        keyboardType={props.numeric ? "numeric" : "default"}
        cursorColor={"#000066"}
        placeholder={props.placeholder}
        placeholderTextColor={"#707070"}
        secureTextEntry={props.password}
      />
    </View>
  );
};

export default InputFieldComponent;

const styles = StyleSheet.create({
  inputContainer: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#EBEBFF",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    height: 60,
    marginTop: 10,
    padding: 15,
  },
  textInput: {
    color: "#707070",
    padding: 5,
    fontSize: 16,
    fontWeight: 600,
    width: "100%",
  },
});
