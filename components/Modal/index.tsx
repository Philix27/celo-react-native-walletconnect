import { StyleSheet, View, Modal, Button } from "react-native";
import TextComponent from "@/components/TextComponent";
import { ModalProps } from "./ModalProps";
import ButtonComponent from "../Button";

const ModalComponent = (props: ModalProps) => {
  return (
    <Modal visible={props.isVisible} animationType="slide" transparent={true}>
      <View
        style={[styles.modalContainer, { justifyContent: props.alignSelf }]}
      >
        <View style={styles.modal}>
          <TextComponent header={props.title} body={props.desc} />
          {props.button && (
            <ButtonComponent
              title={props.button.buttonText}
              handlePress={props.button.handlePress}
            />
          )}
        </View>
      </View>
    </Modal>
  );
};

export default ModalComponent;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
  },
  modal: {
    gap: 20,
    backgroundColor: "#fff",
    borderRadius: 20,
    margin: 20,
    padding: 20,
  },
});
