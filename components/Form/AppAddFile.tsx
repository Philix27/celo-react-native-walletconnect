import { StyleSheet, TouchableOpacity, ViewStyle } from "react-native";
import { View, Text } from "../Themed";
import { AppStyles } from "@/utils";
import { Ionicons } from "@expo/vector-icons";

type IProps = {
  fileName?: string;
  style?: ViewStyle;
};
export function AppAddFile(props: IProps) {
  return (
    <View style={props.style}>
      <TouchableOpacity style={styles.selectFile}>
        <Ionicons name="cloud" size={23} color={"#6C757D"} />
        <Text style={{ ...AppStyles.p1 }}>Add a file</Text>
      </TouchableOpacity>
      <View style={styles.bottomInfo}>
        <Text style={{ ...AppStyles.p3 }}>NIN.png</Text>
        <Ionicons name="trash-outline" size={18} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  selectFile: {
    borderWidth: 0.5,
    borderRadius: 5,
    borderStyle: "dotted",
    height: 60,
    marginTop: 5,
    backgroundColor: "#EBEBFF",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 15,
    marginBottom: 5,
  },
  bottomInfo: {
    color: "#6C757D",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
