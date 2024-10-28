export type ModalProps = {
  title: string
  desc: string
  isVisible: boolean
  alignSelf: "flex-end" | "center"
  button?: ButtonProps
}

type ButtonProps = {
  buttonText: string
  handlePress: VoidFunction
}