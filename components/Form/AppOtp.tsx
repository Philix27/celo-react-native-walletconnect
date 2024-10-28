import React from "react";
import { StyleSheet, ViewStyle } from "react-native";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import { View, Text } from "../Themed";
import { AppStyles } from "@/utils";

type IProps = {
  label?: string;
  style?: ViewStyle;
};

export function AppOtp(props: IProps) {
  return (
    <View style={{ ...styles.container, ...props.style }}>
      {props.label && (
        <Text style={{ ...AppStyles.p2, marginBottom: 10 }}>{props.label}</Text>
      )}
      <OTPInputView
        style={{}}
        pinCount={4}
        autoFocusOnLoad
        codeInputFieldStyle={{
          ...AppStyles.inputText,
        }}
        onCodeFilled={(code) => {
          console.log(code);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    height: 60,
    padding: 15,
    marginBottom: 20,
  },
});
