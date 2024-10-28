import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ViewStyle } from "react-native";

export type TextProps = {
  header?: string;
  body: string;
  style?: ViewStyle;
  textAlign?: "center" | "justify" | "left";
};

export function TextComponent(props: TextProps) {
  return (
    <View style={{ ...styles.container, ...props.style }}>
      {props.header && <Text style={styles.header}>{props.header}</Text>}
      <Text
        style={{
          ...styles.body,
          textAlign: props.textAlign ? props.textAlign : "center",
        }}
      >
        {props.body}
      </Text>
    </View>
  );
}

export default TextComponent;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#000",
    lineHeight: 36,
  },
  body: {
    fontWeight: 400,
    fontSize: 16,
    color: "#707070",
  },
});
